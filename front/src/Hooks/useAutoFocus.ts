import { useEffect, useRef } from 'react';

const useAutoFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(inputRef);
    }
  }, []);

  return inputRef;
};

export default useAutoFocus;

