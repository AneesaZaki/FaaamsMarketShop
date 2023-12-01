import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function usePreviousPath() {
    const location = useLocation();
    const prevPathRef = useRef('/'); // Default to home if no previous path

    useEffect(() => {
        const currentPath = location.pathname;

        return () => {
            // Update the ref to the current path when component unmounts
            prevPathRef.current = currentPath;
        };
    }, [location]);

    return prevPathRef.current;
}

export default usePreviousPath;