'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const queryclient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
    </div>
  );
};

export default AppProvider;
