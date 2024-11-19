import React, { useEffect, useRef, useState } from 'react'
// Custom hooks in React are a powerful feature that allows you to encapsulate and reuse stateful logic across different components. 
// They are essentially JavaScript functions that can use React hooks internally. By creating custom hooks, you can abstract away 
// complex logic, making your components cleaner and more manageable.

// ### Why Use Custom Hooks?

// 1. **Reusability**: If you find yourself using the same logic in multiple components, a custom hook can help you avoid code duplication.
// 2. **Separation of Concerns**: They allow you to separate business logic from UI logic, making your components more focused and 
//      easier to understand.

//custom hook for incrementing count
function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount () {
    setCount(count + 1);
  }

  function decrementCount () {
    setCount(count - 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
    decrementCount: decrementCount,
  }
}

//custom hook for fetching data
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

//custom hook to refetch data after interval
export const useRefectch = (url, interval) => {
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  //Remember never to use async for 1st parameter of useEffect 
  useEffect(() => {
    fetchData();

    if (interval!=null) {
      const fetchInterval = setInterval(() => {
        fetchData();
      },interval);
      return () => clearInterval(fetchInterval);
    }
  },[url, interval]);

  return { data, loading, error };
}

//custom hook for returning previous value
function usePrev(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  },[value]);

  return ref.current;
}

//custom hook for to check if online or offline
export const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isOnline;
};

//custom hook for debounce
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
      const handler = setTimeout(() => {
          setDebouncedValue(value);
      }, delay);

      return () => {
          clearTimeout(handler);
      };
  }, [value, delay]);

  return debouncedValue;
};

function App() {
  // const [count, setCount] = useState(0);
  const { count, increaseCount, decrementCount } = useCounter();
  const prevCount = usePrev(count);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter with usePrev Hook</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => increaseCount(count + 1)}>Increment</button>
      <button onClick={() => decrementCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );

}

export default App
