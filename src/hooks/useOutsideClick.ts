import { useEffect, useRef } from "react";

export function useOutsideClick(elementRef, callback) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    const handleClickOutside = (event) => {
      event.preventDefault();
      if (
        elementRef &&
        elementRef.current &&
        !elementRef.current.contains(event.target)
      ) {
        // Call Callback only if event happens outside element or descendent elements
        callbackRef.current();
      }
      return;
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [elementRef, callback]);
}
