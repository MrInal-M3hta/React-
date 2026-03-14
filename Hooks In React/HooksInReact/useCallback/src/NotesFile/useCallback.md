## 🧠 1️⃣ What is useCallback?

useCallback is a React hook that memoizes a function so it is not recreated on every render unless its dependencies change.

Syntax:
```js
const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies]);
```
## 🔥 2️⃣ Why Does useCallback Exist?

In React:

👉 Every time a component re-renders
👉 All functions inside it are recreated

Example:
```js
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return <button onClick={handleClick}>Click</button>;
}
```
__When count changes:__

	•	Component re-renders
	•	handleClick is recreated
	•	New function reference is created

Usually this is fine.

__But it becomes a problem when:__

	•	Passing functions to child components
	•	Using React.memo
	•	Using functions inside useEffect
	•	Performance-sensitive components

## 🧠 3️⃣ How useCallback Works Internally

React:
	1.	Stores the function reference
	2.	Stores dependency array
	3.	On next render:
	•	If dependencies are same → return old function
	•	If changed → create new function

So it stabilizes the function reference.

## 🧩 4️⃣ Real Example Without useCallback
```jsx
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </>
  );
}
```
__Problem:__

	•	Clicking Increase re-renders App
	•	handleClick recreated
	•	Child sees new prop reference
	•	Child re-renders ❌

## ✅ 5️⃣ Fix With useCallback
```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```
Now:

	•	Same function reference
	•	Child does NOT re-render unnecessarily

## 🧩 6️⃣ Using useCallback With useEffect

### Bad example:
```js
function App() {
  const fetchData = () => {
    console.log("Fetching...");
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]); // infinite loop risk
}
```
__Why?__

	•	fetchData recreated every render
	•	dependency changes every render
	•	effect runs again
	•	loop ❌

### Fix:
```jsx
const fetchData = useCallback(() => {
  console.log("Fetching...");
}, []);

useEffect(() => {
  fetchData();
}, [fetchData]);
```
Now stable.


## 🧠 7️⃣ When Should You Use useCallback?

Use it when:

✔ Passing function to React.memo child

✔ Function used inside useEffect dependency

✔ Expensive function recreation
✔ Performance optimization required

## 🚫 8️⃣ When NOT To Use It
Do NOT use when:

❌ Small components<br/>
❌ Not passing to child<br/>
❌ No performance issue<br/>
❌ Premature optimization

Example where it’s unnecessary:
```jsx
const handleClick = () => {
  setCount(count + 1);
};
```
## 🔥 9️⃣ useCallback vs useMemo

| Hooks | Memoizes |  |
|:-----|:-----:|---------:|
| useMemo | Value    |         |
| useCallback | Function    |         | 
<br/>

Equivalent:
```js
useCallback(fn, deps)
```

Is internally same as:
```js
useMemo(() => fn, deps)
```

<br/>

## 🧠 10️⃣ Common Mistakes
### ❌ Missing dependency
```js
useCallback(() => {
  console.log(count);
}, []);
```
Now count is stable.

#### Correct:
```js 
}, [count]);
```
### ❌ Using everywhere

Wrapping every function in useCallback makes code messy.

### ❌ Thinking it prevents re-render

It does NOT prevent parent re-render.

It only stabilizes function reference.

## 🧠 11️⃣ useCallback + React.memo Pattern

#### This is the real power combo:
```js
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child</button>;
});

const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```
Now: <br/>
	•	Child re-renders only if props actually change <br/>
	•	Function reference stays same

## 🧠 12️⃣ Performance Rule
useCallback itself has cost.

If function is simple and not causing re-renders:
→ Don’t use it.

<br/> <br/>

# 🧠 Mental Model
Without useCallback:
```
Render → New function created
```

With useCallback:
```
Render → Check dependencies
       → Same? Reuse function
       → Changed? Create new
```