```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct use of useEffect with an empty dependency array 
    // This effect will only run once after the initial render
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```