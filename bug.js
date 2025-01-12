```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to unsubscribe from interval
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId); //This will not work if the component unmounts immediately
    };
  }, []);

  return <div>Count: {count}</div>;
}
```