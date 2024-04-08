import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import axios from "axios";
import {AuthProvider} from "./context/AuthContext";

axios.defaults.baseURL = process.env.REACT_APP_BE_HOST;

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>
);
