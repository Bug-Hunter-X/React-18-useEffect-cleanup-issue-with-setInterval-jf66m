```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const intervalIdRef = useRef(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    intervalIdRef.current = setInterval(() => {
      if (isMountedRef.current) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);

    return () => {
      isMountedRef.current = false; 
      clearInterval(intervalIdRef.current);
    };
  }, []);

  return <div>Count: {count}</div>;
}
```