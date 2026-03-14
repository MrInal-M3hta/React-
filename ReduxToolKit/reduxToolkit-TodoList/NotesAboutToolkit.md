# State and Action in Redux Toolkit 

## 🧠 1️⃣ What is State in Redux?

State = The single source of truth of your application.

In Redux, all app data lives in one global store.

Example (Todo App):
```js
{
  todos: {
    items: [
      { id: 1, text: "Learn Redux", completed: false }
    ]
  }
}
```
This entire object is called:

🔥 Global State

### 🔹 State Structure in Redux Toolkit
When you create a slice:
```js
const initialState = {
  items: [],
};
```
And register it in store:
```js
configureStore({
  reducer: {
    todos: todoReducer
  }
})
```
Your full state becomes:
```js
{
  todos: {
    items: []
  }
}
```
So:
```js
state.todos.items
```
### 🔹 Properties of State

State can contain:<br>
	•	Arrays
	•	Objects
	•	Strings
	•	Numbers
	•	Booleans

Example:
```js
const initialState = {
  items: [],
  loading: false,
  error: null,
  totalCount: 0
};
```