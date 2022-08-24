import React, { createContext, useContext, useState } from 'react';

interface LoadingContextInterface {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextInterface | null>(null);

type LoadingProviderProps = {
  children: React.ReactNode;
};

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(false);
  const value = { loading, setLoading };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
}
