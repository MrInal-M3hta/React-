# 🚀 What Is Prefetching?
Prefetching = Loading data before the user actually needs it.

Instead of:
```code
User clicks
   ↓
API call starts
   ↓
Wait...
```
We do:
```code
User hovers / scrolls / focuses
   ↓
API loads in background
   ↓
When user clicks → Data already ready ⚡
```
Result → Faster UI

## 🧠 Why Prefetching Is Important?

**Used in:**<br>
	•	Amazon product preview<br>
	•	Flipkart quick view<br>
	•	Tooltips<br>
	•	Dropdown menus<br>
	•	Page navigation<br>
	•	Next.js links

## ✅ 1️⃣ Simple Prefetch Example (Hover Based)
```jsx
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [prefetched, setPrefetched] = useState(false);

  const fetchData = async () => {
    if (prefetched) return;  // prevent multiple calls

    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const result = await res.json();

    setData(result);
    setPrefetched(true);
  };

  return (
    <div style={{ padding: 40 }}>
      <button
        onMouseEnter={fetchData}   // Prefetch
        onClick={() => console.log("Clicked")}
      >
        Hover then Click
      </button>

      {data && <p>{data.title}</p>}
    </div>
  );
}
```
**Now:**

Hover → API loads<br>
Click → No waiting

## ✅ 2️⃣ Prefetch On Page Load (Background Fetch)
```jsx
useEffect(() => {
  fetchData();
}, []);
```
Loads data in background when component mounts.

## ✅ 3️⃣ Prefetch Before Navigation
```jsx
const handleClick = async () => {
  await fetchData();
  navigate("/next-page");
};
```
Data loads first → then navigate.

## 🔥 4️⃣ Professional Way – Using React Query (Best Practice)
In real apps we use TanStack Query (React Query).

Example:
```jsx
import { useQuery, useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

const prefetch = () => {
  queryClient.prefetchQuery({
    queryKey: ["post"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json())
  });
};
```
Then:
```jsx
<button onMouseEnter={prefetch}>
```
Now React Query caches it automatically.

When user clicks → instant data.

## ⚡ When To Use Prefetching

Use it when:

✔ Data is likely needed soon<br>
✔ Improves UX<br>
✔ API is fast and small<br>
✔ Navigation happens after

Avoid when:

❌ Large data<br>
❌ Expensive API<br>
❌ User unlikely to click

## 🎯 Event Timing (Important)

Hover flow:
```
onMouseEnter → Prefetch
onClick → Use data
```
Click flow:
```
onMouseDown → Fetch
onClick → Navigate
```