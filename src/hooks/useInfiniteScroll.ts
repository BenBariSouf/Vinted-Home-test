import { useEffect, useRef } from "react";

interface IntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

const useInfiniteScroll = (
    callback?: () => void,
    options?: IntersectionObserverOptions
) => {
    const observerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (observerRef.current) {
            const observer = new IntersectionObserver(entries => {
                const [entry] = entries;
                if (entry.isIntersecting && callback) {
                    callback();
                }
            }, options)

            observer.observe(observerRef.current);

            return () => observer.disconnect();

        }
    }, [observerRef])

    return observerRef;
};

export default useInfiniteScroll;