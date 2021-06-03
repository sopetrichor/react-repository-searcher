import { useState, useRef, createRef, useEffect, ReactElement, ReactNode } from 'react';

const useHover = ():[React.MutableRefObject<HTMLElement>, boolean] => {
    const [value, setValue] = useState<boolean>(false);

    const ref = useRef<HTMLElement>(null);
    // const ref = createRef<HTMLElement>();

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);

            return (() => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            });
        }
    }, [ref.current]);

    return [ref, value];
}

export default useHover;