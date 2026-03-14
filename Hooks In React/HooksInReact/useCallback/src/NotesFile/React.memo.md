## 🧠 1️⃣ What is React.memo?

React.memo is a Higher-Order Component (HOC) that prevents a functional component from re-rendering if its props have not changed.

It is provided by React.

## 🔥 2️⃣ Why Does React.memo Exist?

#### In React:

👉 When a parent component re-renders <br/>
👉 All its child components also re-render <br/>
👉 Even if their props did NOT change

This can cause unnecessary rendering.

React.memo fixes that.

## 🧩 3️⃣ Basic Example (Without React.memo)
```jsx
function Child({ name }) {
  console.log("Child rendered");
  return <h2>{name}</h2>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child name="Mrinal" />
    </>
  );
}
```
When you click +: <br/>
	•	App re-renders <br/>
	•	Child re-renders <br/>
	•	Even though name didn’t change ❌

## ✅ 4️⃣ With React.memo
```jsx
const Child = React.memo(function Child({ name }) {
  console.log("Child rendered");
  return <h2>{name}</h2>;
});
```
Now: <br/>
	•	Click + <br/>
	•	App re-renders <br/>
	•	Child does NOT re-render <br/>
	•	Because props didn’t change ✅

## 🧠 5️⃣ How React.memo Works

Internally: <br/>
	1.	React stores previous props <br/>
	2.	On next render:<br/>
	•	Compares new props with old props (shallow comparison) <br/>
	3.	If same → skip re-render  <br/>
	4.	If different → re-render
## ⚠️ Important: Shallow Comparison

React.memo does:
```js
prevProps === nextProps
```
For objects & arrays: <br/>
	•	Reference must be same

## 🔥 Example Where It Fails
```jsx
<Child data={{ name: "Mrinal" }} />
```
Even if name is same: <br/>
	•	New object created every render <br/>
	•	Reference changes <br/>
	•	Child re-renders ❌

## ✅ Fix With useMemo

```js
const memoizedData = useMemo(() => ({ name: "Mrinal" }), []);
<Child data={memoizedData} />
```
Now reference stays same.

## 🧩 6️⃣ React.memo + useCallback (Important Combo)

Without useCallback:
```js
const handleClick = () => {};
<Child onClick={handleClick} />
```
Every render: <br/>
	•	New function created <br/>
	•	Child re-renders ❌

Fix:
```js
const handleClick = useCallback(() => {}, []);
<Child onClick={handleClick} />
```
Now: <br/>
	•	Function reference stable <br/>
	•	Child doesn’t re-render

## 🧠 7️⃣ When Should You Use React.memo?

__Use it when:__ 

✔ Component is heavy <br/>
✔ Component renders large UI<br/>
✔ Receives same props frequently<br/>
✔ Parent re-renders often<br/>
✔ Performance optimization needed

## 🚫 8️⃣ When NOT To Use It

Do NOT use when:

❌ Component is small/simple<br/>
❌ Props always change<br/>
❌ No performance issue<br/>
❌ Premature optimization

Using it unnecessarily: <br/>
	•	Adds extra comparison cost<br/>
	•	Makes code harder to read

## 🧠 9️⃣ Real Performance Example
```jsx
<List items={1000Items} />
```
Parent state changes frequently.

Without React.memo: <br/>
	•	List re-renders every time

With React.memo: <br/>
	•	List only re-renders when items change

Big performance improvement.

## 🔥 10️⃣ Custom Comparison Function
You can provide custom comparison:
```jsx
const Child = React.memo(
  function Child({ value }) {
    return <h2>{value}</h2>;
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
  }
);
```
This lets you control re-render logic.

## 🧠 11️⃣ React.memo vs useMemo vs useCallback

|Feature| React.memo| useMemo |useCallback|
|:---|:---:|---:|---:|
|Memoizes| Component| Value |Function|
|Prevents re-render| Yes | No | No|
| Used For | Child Components |Expensive calculation|Stable functions
|


# 🧠 Mental Model

**Without React.memo:**
```
Parent re-render → Child re-render
```
**With React.memo**
```
Parent re-render → Check props
     ↳ Same → Skip child render
     ↳ Changed → Re-render child
```
## 🏆 Final Rule

Use React.memo when: <br/>
	•	Performance matters <br/>
	•	Child component is heavy <br/>
	•	Props rarely change

Avoid when: <br/>
	•	Component is tiny <br/>
	•	Props always change <br/>
	•	No measurable performance issue