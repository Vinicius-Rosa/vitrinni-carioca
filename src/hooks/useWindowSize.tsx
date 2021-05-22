import { useState, useEffect } from 'react';

function useWindowSize() {
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

    return value;
}

export default useWindowSize;