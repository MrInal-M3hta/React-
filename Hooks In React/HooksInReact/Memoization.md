## Memoization in React is a performance optimization technique that helps prevent unnecessary re-renders of components and avoids redundant, expensive calculations by caching previous results and reusing them when the same inputs are provided. 

React provides several built-in mechanisms for implementing memoization: 

# 1. React.memo: A higher-order component (HOC) used to memoize functional components. It prevents a component from re-rendering if its props have not changed through a shallow comparison.

```JSX
import React from 'react';

const MyComponent = ({ name }) => {
  // ... rendering logic
  return <div>Hello, {name}!</div>;
};

export default React.memo(MyComponent);
```

For components that receive complex objects, arrays, or functions as props, memoization might break if a new reference is created on every parent render. In such cases, you might use useMemo or useCallback to ensure stable references, or provide a custom comparison function as the second argument to React.memo.

# 2. useMemo: A hook used to memoize the result of an expensive calculation within a functional component. The calculation is only re-run when one of the values in its dependency array changes.

```JSX
import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ... use visibleTodos for rendering
}
```

# 3. useCallback: A hook used to memoize a function definition itself, ensuring the same function instance (reference) is returned across re-renders unless its dependencies change. This is crucial when passing functions as props to memoized child components to prevent the child from re-rendering unnecessarily.

```JSX
import { useCallback, useState } from 'react';

function Form({ onSubmit }) {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    onSubmit(/* ... */);
  }, [onSubmit]); // Dependency on the parent's onSubmit prop

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

-------------------------------------------------------------------------------------------------------------------------------

## When to use memoization

Memoization is a performance optimization and should be used judiciously, not by default for every component. Profile your application with the React Developer Tools to identify actual performance bottlenecks first. 

1.Expensive computations: For operations like sorting large lists, data processing, or complex calculations.
2.Frequent re-renders: For components that re-render often with the same props.
3.Large lists of components: Where optimizing individual items can significantly reduce overall render time. 

Avoid overusing memoization, as the overhead of cache management and comparison checks can sometimes outweigh the performance benefits for simple components or those with frequently changing props.


# What is Memoization ? 

🧠 What Does “Memoizes” Mean?

Memoize means to store (cache) a result so it doesn’t have to be calculated again.
It comes from the word memory.

🔥 Simple Definition

Memoizing = remembering the result of a function so we don’t recompute it again if inputs are the same. 

<br/>

__🧩 Simple JavaScript Example (Without React)__

**Without memoization :**
```javascript
function square(n) {
  console.log("Calculating...");
  return n * n;
}

square(5); // Calculates
square(5); // Calculates again ❌
```
Even though input is same, it recalculates.

**With Memoization**
```javascript
function memoizedSquare() {
  let cache = {};

  return function(n) {
    if (cache[n]) {
      console.log("From cache");
      return cache[n];
    }

    console.log("Calculating...");
    cache[n] = n * n;
    return cache[n];
  };
}

const square = memoizedSquare();

square(5); // Calculates
square(5); // From cache ✅
```
Now:

	•	First time → calculates

	•	Second time → returns stored result

***That is memoization.***

<br/><br/>

__🧠 In React__

When we say:
```JSX
useMemo(() => computeValue(), [deps])
```
React:

	1.	Runs computeValue() once

	2.	Stores result in memory

	3.	On next render:
	•	If deps same → return stored result
	•	If changed → recompute

That is memoizing.

## 🔥 Real-Life Analogy##

Imagine:

You solve a math problem.

Instead of solving it every time,
you write the answer on paper and reuse it.

That’s memoization.

## 🧠 Why It’s Useful in React##

React components re-render often.

Without memoization:
	•	Expensive calculations run every time.

With memoization:
	•	They run only when needed.
