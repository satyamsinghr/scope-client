// src/authConfig.js
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfigProd = {
    auth: {
        clientId: "a4853eaf-9291-460f-a840-3048f4ec7165", // Azure AD App Registration Client ID
        authority: "https://login.microsoftonline.com/a146b1d8-edc0-4767-8742-ecc39f3dc844", // Replace 'your-tenant-id' with your Azure AD Tenant ID
        redirectUri: 'https://whitsons-client.azurewebsites.net/importadpdata'
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
