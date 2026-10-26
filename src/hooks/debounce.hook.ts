import { useEffect, useState } from 'react';

/**
 * Custom hook with debouncing logic.
 */
export const useDebounce = (value: string, delay: number): string => {
    //Hooks
    const [debouncedValue, setDebouncedValue] = useState(value);

    //Useeffects
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
};
