import React from 'react';
import './LoadingOverlayStyles.css';

interface LoadingOverlayProps {
  loading: boolean;
}

export const LoadingOverlay = ({ loading }: LoadingOverlayProps) => {
  return loading ? <div className="LoadingOverlay">Loading...</div> : <></>;
};
