// src/Providers.tsx

import React from 'react';
import { MsalProvider } from "@azure/msal-react";
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { msalInstance } from '../utils/authConfig';
import store from '../store'; // Assuming you have a store.ts file
import ModalProvider from './ModalProvider'; // If using a modal provider

// Create a QueryClient instance
const queryClient = new QueryClient();

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <MsalProvider instance={msalInstance}>
            <ReduxProvider store={store}>
                <QueryClientProvider client={queryClient}>
                    {/* Add other providers here */}
                    <ModalProvider />
                    {children}
                </QueryClientProvider>
            </ReduxProvider>
        </MsalProvider>
    );
};

export default Providers;
