import { useState, useEffect } from 'react';

export interface useWindowSizeProps {
    width: number;
    height: number;
}

const useWindowSize = (): useWindowSizeProps => {
    const [value, setValue] = useState(() => ({
        width: null,
        height: null,
    }))

    useEffect(() => {
        const sizeHandler = () => {
            setValue({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', sizeHandler)

        return () => {
            window.removeEventListener('resize', sizeHandler);
        }
    }, [])

    return typeof window !== 'undefined' ? value : ({
        width: null,
        height: null,
    });
}

export default useWindowSize;