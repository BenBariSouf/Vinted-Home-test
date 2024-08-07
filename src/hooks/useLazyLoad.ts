import { useRef, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useLazyLoad = <T extends HTMLImageElement>(
  ref: RefObject<T>,
  src: string,
  options?: IntersectionObserverOptions
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        ref.current!.src = src; // Asserting ref.current is not null
        observer.disconnect();
      }
    }, options);

    observerRef.current = observer;
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, src, options]);
};

export default useLazyLoad;