import { useMsal } from "@azure/msal-react";
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosConfig';
import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
export const useAuth = () => {
    const { instance } = useMsal();
    const navigate = useNavigate();
    useEffect(() => {
        instance.handleRedirectPromise()
            .then(response => {
                if (response) {
                    console.log("Authentication response:", response);
                } else {
                    console.log("No response, check if the login flow was interrupted.");
                }
            })
            .catch(error => {
                console.error("Error handling redirect promise:", error);
            });
    }, [instance]);

    const handleLogin = () => {
        const request = {
            scopes: ["openid", "profile", "email", "api://a4853eaf-9291-460f-a840-3048f4ec7165/Read.All"]
        };
        instance.loginPopup(request)
            .then(async response => {
                // Capture and use the access token from the response
                const accessToken = response.accessToken;
                console.log("Access Token:", accessToken);
                localStorage.setItem('token', accessToken)
                const userData = await authorizeToken(accessToken);
                if (userData) {
                    localStorage.setItem('userData', userData)
                    toast.success('Login successfully');
                    navigate('/dashboard');
                }
            })
            .catch(error => {
                console.error(error);
            });
    }


    const authorizeToken = async (token: string) => {
        try {
            const response = await axiosInstance.post(`/Auth/validate-token`, { token });

            if (response.status === 200 && response.data.success) {
                // Extract data from the response
                const validatedUser = response.data.data;
                const { email, firstName } = validatedUser;

                // Handle the validated user, e.g., save the user info to state or local storage
                console.log("Token is valid");
                console.log("Email:", email);
                console.log("First Name:", firstName);

                // Return or perform any other actions with validated user data
                return validatedUser;
            } else {
                console.error("Token validation failed:", response.data.message);
                // Handle unsuccessful validation
                return null;
            }
        } catch (error) {
            console.error("An error occurred while validating the token:", error);
            // Handle any error that occurred during the API request
            toast.error('An error occurred during token validation');
            console.error(error);
            return null;
        }
    };

    return { handleLogin };
};
