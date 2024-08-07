import { useState, useEffect } from 'react';

interface LocalStorageOptions {
  key: string;
  defaultValue: any;
}

const useLocalStorage = (options: LocalStorageOptions) => {
  const { key, defaultValue } = options;
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
      return defaultValue;
    }
  });

  const setValue = (newValue: string) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (error) {
      console.error('Error storing data in local storage:', error);
    }
  };

  useEffect(() => {
    setValue(storedValue);
  }, [key, storedValue]);

  return [storedValue, setValue];
};

export default useLocalStorage;