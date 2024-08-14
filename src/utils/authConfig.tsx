// src/authConfig.js
import { PublicClientApplication } from "@azure/msal-browser";


const msalConfigProd = {
    auth: {
        clientId: "4fd0ae93-d59e-4ecd-bda9-8864fcc66cb0", // Azure AD App Registration Client ID
        authority: "https://login.microsoftonline.com/44c02e43-77b9-43d6-8f72-a56de5941b8f", // Replace 'your-tenant-id' with your Azure AD Tenant ID
       // redirectUri: //window.location.origin 
        redirectUri: 'https://whitsons-client.azurewebsites.net/importadpdata'
        // redirectUri: 'http://localhost:3000/importadpdata'
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true,
    }
};
// for Local
const msalConfigDev = {
    auth: {
        clientId: "a4853eaf-9291-460f-a840-3048f4ec7165", // Azure AD App Registration Client ID
        authority: "https://login.microsoftonline.com/a146b1d8-edc0-4767-8742-ecc39f3dc844", // Replace 'your-tenant-id' with your Azure AD Tenant ID
        redirectUri: 'http://localhost:3000/dashboard'
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true,
    }
};

export const msalInstance = new PublicClientApplication(msalConfigDev);
