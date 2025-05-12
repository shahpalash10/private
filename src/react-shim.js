// This is a shim file to help with JSX runtime imports
import * as React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import * as jsxDevRuntime from 'react/jsx-dev-runtime';

// Export everything from React
export * from 'react';
export default React;

// Re-export jsx runtime modules
export const jsx = jsxRuntime.jsx;
export const jsxs = jsxRuntime.jsxs;
export const Fragment = jsxRuntime.Fragment;