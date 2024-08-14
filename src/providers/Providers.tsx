// src/Providers.tsx

import React from 'react';
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from '../utils/authConfig';

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <MsalProvider instance={msalInstance}>
            {children}
        </MsalProvider>
    );
};

export default Providers;
