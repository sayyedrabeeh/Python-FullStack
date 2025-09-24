### REACT - 3


---

#  **What is Redux?**

* **Redux** is a **predictable state container** for JavaScript apps.
* It helps you **manage the global state** of your application in a **single source of truth**.
* Works with React, Angular, Vue, or even plain JS.

---

#  **Why Use Redux?**

1. **Centralized State:**

   * Instead of passing props through multiple components (prop drilling), you store state in **one central place**.

2. **Predictable State Updates:**

   * State can only change via **actions** and **reducers**, making debugging easier.

3. **Easy Debugging:**

   * With tools like **Redux DevTools**, you can see **every action and state change**.

4. **Consistency:**

   * The app’s state is consistent across different components.

---

#  **Core Concepts of Redux**

### 1. **Store**

* A **single object** that holds your entire app’s state.
* Example:

```js
import { createStore } from "redux";

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState()); // { count: 0 }
```

---

### 2. **Action**

* A **plain JavaScript object** that describes **what happened**.
* Must have a `type` property.

```js
const incrementAction = { type: "INCREMENT" };
```

* Can also carry **payload**:

```js
const addTodoAction = { type: "ADD_TODO", payload: { id: 1, text: "Learn Redux" } };
```

---

### 3. **Reducer**

* A **pure function** that takes **current state + action** → returns **new state**.
* Example:

```js
function counterReducer(state = { count: 0 }, action) {
  switch(action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

---

### 4. **Dispatch**

* Method to **send actions** to the store.
* Example:

```js
store.dispatch({ type: "INCREMENT" });
console.log(store.getState()); // { count: 1 }
```

---

### 5. **Selector**

* Function to **read state** from the store.
* Example:

```js
const count = store.getState().count;
```

---

#  **Redux Flow**

1. Component calls **dispatch(action)**.
2. Action goes to **reducer**.
3. Reducer returns **new state**.
4. **Store updates**.
5. Components subscribed to the store **re-render with new state**.

```
Component → dispatch(action) → Reducer → Store → Component
```

---

#  **Using Redux in React**

1. Install packages:

```bash
npm install redux react-redux
```

2. Create **store**, **reducer**, and **actions**.

3. Wrap app with **Provider**:

```jsx
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
```

4. Access state using **`useSelector`** and dispatch actions using **`useDispatch`**:

```jsx
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
}
```

---

#  **Analogy**

* **Store** = warehouse (central state storage)
* **Action** = order (what you want to do)
* **Reducer** = factory (processes order to produce new state)
* **Component** = shop (reads from warehouse and places orders)

---

#  **Key Points**

* Redux ensures **predictable state management**.
* Only **reducers update state** → easier debugging.
* Works best with **complex apps** where multiple components share state.
* Can be optimized with **Redux Toolkit**, which reduces boilerplate.

---

---

#  **What is Middleware in Redux?**

* **Middleware** is a **function that sits between the action dispatch and the reducer**.
* It can **intercept, modify, delay, or log actions** before they reach the reducer.
* Purpose: **handle side effects**, async actions, logging, analytics, or even routing.

---

#  **How Middleware Works**

Redux flow without middleware:

```
Component → dispatch(action) → Reducer → Store → Component
```

Redux flow with middleware:

```
Component → dispatch(action) → Middleware → Reducer → Store → Component
```

* Middleware can:

  * Log actions
  * Delay actions
  * Make API calls
  * Stop or modify actions

---

#  **Basic Example: Logger Middleware**

```js
const logger = store => next => action => {
  console.log("Dispatching:", action);
  let result = next(action); // pass action to reducer
  console.log("Next State:", store.getState());
  return result;
};
```

* `store` → gives access to `getState()` and `dispatch()`
* `next` → passes the action to the next middleware or reducer
* `action` → the action being dispatched

---

#  **Adding Middleware to Store**

```js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(logger));
```

* Now, every action will be **logged before reaching the reducer**.

---

#  **Common Middleware in Redux**

1. **redux-thunk** → handles async actions (e.g., API calls)
2. **redux-saga** → more advanced async control using generator functions
3. **logger** → logs actions and state changes for debugging

---

#  **Example: Async Action with redux-thunk**

```js
// Action creator
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error });
    }
  };
};
```

* `redux-thunk` allows **dispatching a function** instead of a plain action.
* Middleware intercepts the function and executes it asynchronously.

---

#  **Analogy**

* **Dispatching an action** = sending a package
* **Reducer** = final delivery
* **Middleware** = security checkpoints / sorting centers

  * You can inspect, modify, delay, or reroute the package before it reaches the destination

---

#  **Key Points**

1. Middleware is **optional** but powerful for side effects.
2. Must follow the signature:

   ```js
   store => next => action => {}
   ```
3. Can **chain multiple middleware** with `applyMiddleware`.
4. Enables **async actions, logging, analytics, routing, and more**.

---
 

---

#  **What is Redux Thunk?**

* **Redux Thunk** is a **middleware** for Redux.
* It allows you to **write action creators that return a function instead of a plain action**.
* Useful for **async logic**, like API calls, setTimeout, or complex conditional dispatches.

---

#  **Why We Need Thunk**

* Normal Redux actions are **plain objects**:

```js
{ type: "INCREMENT" }
```

* But **API calls are asynchronous**, and you can’t dispatch async directly.
* **Thunk lets you dispatch async code** and then dispatch regular actions when done.

---

#  **How Thunk Works**

* Thunk middleware **intercepts any function returned from an action creator**.
* If the action is a **plain object**, it passes it to the reducer.
* If it’s a **function**, it executes the function and gives it **`dispatch` and `getState`** as arguments.

---

#  **Setup**

1. Install Redux Thunk:

```bash
npm install redux-thunk
```

2. Apply middleware to store:

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

---

#  **Example: Async API Call**

```js
// Action Creator with Thunk
export const fetchTodo = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_START" }); // optional: show loading
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error });
    }
  };
};
```

---

#  **Reducer Example**

```js
const initialState = {
  loading: false,
  todo: {},
  error: null
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, todo: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
```

---

#  **Using in React Component**

```jsx
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./actions";

function Todo() {
  const dispatch = useDispatch();
  const { todo, loading, error } = useSelector(state => state.todo);

  return (
    <div>
      <button onClick={() => dispatch(fetchTodo())}>Fetch Todo</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {todo.id && <p>{todo.title}</p>}
    </div>
  );
}
```

* Clicking the button dispatches the **thunk function**.
* Middleware executes async code and updates the store via actions.

---

#  **Key Points**

1. **Thunk = Middleware** for async actions in Redux.
2. Lets **action creators return a function** instead of an object.
3. The function receives **`dispatch`** and **`getState`**.
4. Ideal for **API calls, async workflows, conditional dispatches**.
5. Works seamlessly with Redux DevTools.

---

#  **Analogy**

* Normal Redux:

  * “I want to increment → Reducer handles it”
* Redux Thunk:

  * “I want to fetch data from API → Middleware handles async → Reducer updates state when done”

---


---

#  **What is Redux Saga?**

* **Redux Saga** is a **middleware** for Redux to manage **side effects**, like API calls, delays, or complex asynchronous workflows.
* Uses **ES6 generator functions** to handle async code in a **synchronous-looking style**.
* Ideal for **complex apps** with multiple async actions and sequences.

---

#  **Why Redux Saga?**

* Unlike **Thunk**, which is simple for single async actions, Saga is better for:

  1. Complex **control flows** (e.g., race conditions, retries).
  2. Coordinating **multiple actions**.
  3. Handling **cancellations** and **background tasks**.

* Makes async code **easier to test** and **predictable**.

---

#  **Core Concepts**

| Concept     | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| **Saga**    | A generator function that listens to actions and performs side effects. |
| **Effect**  | Instructions like `call`, `put`, `takeEvery`, `delay`.                  |
| **Watcher** | Watches for specific actions and triggers the saga.                     |
| **Worker**  | Performs the actual async task.                                         |

---

#  **Setup**

1. Install Redux Saga:

```bash
npm install redux-saga
```

2. Setup middleware with store:

```js
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
```

---

#  **Example: Fetch API with Saga**

### **Action Types**

```js
export const FETCH_TODO = "FETCH_TODO";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
```

### **Actions**

```js
export const fetchTodo = () => ({ type: FETCH_TODO });
export const fetchSuccess = (data) => ({ type: FETCH_SUCCESS, payload: data });
export const fetchError = (error) => ({ type: FETCH_ERROR, payload: error });
```

### **Worker Saga**

```js
import { call, put } from 'redux-saga/effects';

function* fetchTodoSaga() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos/1');
    const data = yield response.json();
    yield put({ type: 'FETCH_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', payload: error });
  }
}
```

* `call(fn, ...args)` → call a function (can be async)
* `put(action)` → dispatch an action to the store

---

### **Watcher Saga**

```js
import { takeEvery } from 'redux-saga/effects';

function* watchFetchTodo() {
  yield takeEvery('FETCH_TODO', fetchTodoSaga);
}

export default function* rootSaga() {
  yield watchFetchTodo();
}
```

* `takeEvery` → listen to every `FETCH_TODO` action and run the worker.
* Other options: `takeLatest`, `takeLeading` for different concurrency strategies.

---

#  **Using in React Component**

```jsx
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./actions";

function Todo() {
  const dispatch = useDispatch();
  const { todo, loading, error } = useSelector(state => state.todo);

  return (
    <div>
      <button onClick={() => dispatch(fetchTodo())}>Fetch Todo</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {todo.id && <p>{todo.title}</p>}
    </div>
  );
}
```

* Dispatching `FETCH_TODO` triggers the saga workflow.

---

#  **Key Points**

1. Uses **generator functions** → pause (`yield`) and resume.
2. Better for **complex async flows**, retries, or multiple dependent API calls.
3. Middleware listens to **actions** and triggers **side effects**.
4. Effects like `call`, `put`, `takeEvery`, `takeLatest` make code **readable and testable**.
5. Works well with Redux DevTools for debugging.

---
 
| Feature       | `useReducer`        | `useContext` + `useReducer` | Redux                                |
| ------------- | ------------------- | --------------------------- | ------------------------------------ |
| Scope         | Local component     | Global via context          | Global app-wide                      |
| Complexity    | Low                 | Medium                      | High                                 |
| Async Support | Manual              | Manual                      | Middleware (Thunk/Saga)              |
| Boilerplate   | Minimal             | Minimal                     | Medium/High                          |
| Best For      | Complex local state | Small/medium global state   | Large apps with global state & async |



---

#  **What is Redux Persistence?**

* By default, **Redux state lives in memory**.
* On page refresh, the state **resets to initial state**.
* **Redux Persistence** allows you to **save the state to storage** (like `localStorage` or `sessionStorage`) and **rehydrate it on app load**.

---

#  **Why Redux Persistence?**

* Maintain **user login info** across refreshes.
* Keep **shopping cart** or **theme preference**.
* Avoid asking users to **re-enter data**.

---

#  **Popular Library: `redux-persist`**

* `redux-persist` is the standard library for **persisting Redux state**.
* Supports **localStorage, sessionStorage, IndexedDB**.

---

#  **Setup Example**

### 1. Install

```bash
npm install redux-persist
```

---

### 2. Configure Redux Store

```js
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import rootReducer from "./reducers";

//  Persist Config
const persistConfig = {
  key: "root",        // key for storage
  storage,            // storage type
  whitelist: ["auth"] // only persist auth slice (optional)
};

//  Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//  Create store
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
```

---

### 3. Wrap App with PersistGate

```jsx
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import App from "./App";

function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
```

* `PersistGate` delays rendering **until the persisted state is rehydrated**.
* `loading={null}` can be replaced with a **splash/loading screen**.

---

### 4. Optional: Slice Example

```js
const initialState = { isLoggedIn: false, token: null };

function authReducer(state = initialState, action) {
  switch(action.type){
    case "LOGIN":
      return { ...state, isLoggedIn: true, token: action.payload };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, token: null };
    default:
      return state;
  }
}
```

* If you added `auth` to `whitelist`, this slice will **persist in localStorage**.

---

#  **Key Options in redux-persist**

| Option      | Description                                     |
| ----------- | ----------------------------------------------- |
| `key`       | Key in storage (`localStorage`)                 |
| `storage`   | Storage type (`localStorage`, `sessionStorage`) |
| `whitelist` | Only persist these slices                       |
| `blacklist` | Do not persist these slices                     |
| `version`   | Version for migrations                          |
| `migrate`   | Function to handle state migrations             |

---
---

#  **What is Redux Toolkit?**

* **Redux Toolkit (RTK)** is the **official, opinionated Redux package**.
* Purpose: **simplify Redux setup**, reduce boilerplate, and enforce best practices.
* Built-in features:

  * `configureStore()` → easy store setup
  * `createSlice()` → reducers + actions in one place
  * `createAsyncThunk()` → handles async actions
  * Immer integration → allows **mutating state safely**

---

#  **Why Use Redux Toolkit?**

1. **Less boilerplate** than vanilla Redux
2. **Built-in good practices** (like using Immer)
3. Supports **Thunk for async actions** automatically
4. Integrates easily with **React**
5. Works with **TypeScript**

---

#  **Key Features**

| Feature              | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `configureStore()`   | Sets up store with middleware, devtools, and reducers easily       |
| `createSlice()`      | Combine reducer + actions + initial state in one object            |
| `createAsyncThunk()` | Handles async actions (API calls) like Redux Thunk                 |
| Immer integration    | Allows writing `state.value = x` safely (immutable under the hood) |

---

#  **Basic Example: Counter**

```js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1️⃣ Create Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },  // Immer lets us "mutate"
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload }
  }
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 2️⃣ Configure Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export default store;
```

---

#  **Using in React Component**

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}
```

---

#  **Async Actions with `createAsyncThunk`**

```js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch data
export const fetchTodo = createAsyncThunk(
  "todo/fetchTodo",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: { todo: {}, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => { state.loading = true; })
      .addCase(fetchTodo.fulfilled, (state, action) => { state.loading = false; state.todo = action.payload; })
      .addCase(fetchTodo.rejected, (state, action) => { state.loading = false; state.error = action.error; });
  }
});

export default todoSlice.reducer;
```

* `createAsyncThunk` **automatically dispatches `pending` / `fulfilled` / `rejected` actions**.
* No need for manual `dispatch` inside API calls like in vanilla Redux.

---

#  **Key Advantages of Redux Toolkit**

1. Reduces **boilerplate** by combining actions & reducers.
2. Handles **immutability automatically** (with Immer).
3. Built-in **Redux DevTools support**.
4. Supports **async flows** easily via `createAsyncThunk`.
5. Encourages **best practices** out-of-the-box.

--- 



---

#  **1. `useDispatch`**

* **Purpose:** Allows a React component to **send actions** to the Redux store.
* Think of it as **“dispatching orders”** to the store.

### **Example: Dispatching a simple action**

```jsx
import { useDispatch } from "react-redux";
import { increment } from "./store"; // redux toolkit slice action

function CounterButton() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      Increment
    </button>
  );
}
```

 **Notes:**

* `dispatch()` can accept:

  * A **plain action object**: `{ type: "INCREMENT" }`
  * An **action creator** from Redux Toolkit: `increment()`
  * A **function (Thunk)** if using `redux-thunk`

---

#  **2. `useSelector`**

* **Purpose:** Allows a React component to **read data from the Redux store**.
* Think of it as **“selecting which part of the state you want”**.

### **Example: Selecting counter state**

```jsx
import { useSelector } from "react-redux";

function CounterDisplay() {
  const count = useSelector((state) => state.counter.value);

  return <h1>Count: {count}</h1>;
}
```

 **Notes:**

* `useSelector` subscribes the component to the store.
* Component **re-renders automatically** when selected state changes.
* Accepts a **selector function**: `(state) => state.slice.property`

---

# 🔹 **Combined Example**

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";

function Counter() {
  const count = useSelector(state => state.counter.value); // read state
  const dispatch = useDispatch(); // dispatch actions

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

* `useSelector` → reads `counter.value` from store
* `useDispatch` → sends `increment` or `decrement` actions to store
* State updates → component **re-renders automatically**

---

#  **Key Points**

| Hook          | Purpose               |
| ------------- | --------------------- |
| `useDispatch` | Send actions to store |
| `useSelector` | Read state from store |

* Always use `useDispatch` to **update state**.
* Always use `useSelector` to **read state**.
* Avoid reading state directly from store — hooks ensure **component re-rendering**.

---

#  **Analogy**

* **Store** = warehouse (holds data)
* **useSelector** = “look inside warehouse for what I need”
* **useDispatch** = “send instructions to warehouse to update items”

---

---

#  **What is an Action Creator?**

* An **Action Creator** is a **function that returns an action object**.
* Actions in Redux are **plain objects** with at least a `type` property.
* Action creators **simplify dispatching actions** and avoid hardcoding action objects everywhere.

---

#  **Basic Action Object**

```js
const incrementAction = {
  type: "INCREMENT"
};
```

* You could dispatch this directly:

```js
dispatch({ type: "INCREMENT" });
```

* But using action creators is cleaner.

---

#  **Basic Action Creator Example**

```js
// Action creator function
function increment() {
  return { type: "INCREMENT" };
}

// Usage in component
dispatch(increment());
```

 **Benefits:**

1. Avoid repeating action objects.
2. Easier to manage **payloads**.
3. Makes code **more readable and maintainable**.

---

#  **Action Creator with Payload**

```js
// Action creator with payload
function addTodo(text) {
  return {
    type: "ADD_TODO",
    payload: { text }
  };
}

// Usage
dispatch(addTodo("Learn Redux"));
```

* `payload` carries **data to update the state**.

---

#  **Redux Toolkit Style**

With **Redux Toolkit**, action creators are **automatically generated** from `createSlice`:

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload }
  }
});

// Action creators generated automatically
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
```

* Then in React component:

```jsx
dispatch(incrementByAmount(5));
```

* No need to manually write action creator functions.

---

#  **Async Action Creators**

With **redux-thunk**, an action creator can return a **function instead of an object**:

```js
export const fetchTodo = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error });
    }
  };
};
```

* Useful for **API calls and side effects**.

---

#  **Key Points**

1. **Action creators** are just **functions returning actions**.
2. They make **dispatching cleaner and consistent**.
3. Can accept **parameters** and pass data as **payload**.
4. With Redux Toolkit, action creators are **auto-generated** from slices.
5. Can return **functions** when using middleware like **redux-thunk**.

---

#  **Analogy**

* **Action object** → A single order to the warehouse
* **Action creator** → A function that writes that order for you automatically
* **Dispatch(actionCreator())** → Sends the order to the warehouse

 
---

#  **What is `Provider`?**

* `Provider` is a **component from `react-redux`**.
* Its job: **“provide” the Redux store to all nested React components**.
* Without it, **hooks like `useDispatch` and `useSelector` won’t work**.

---

#  **Why We Need `Provider`**

* Redux store lives **outside React**.
* React components need **access to store** to read state and dispatch actions.
* `Provider` **wraps your app** and makes the store available through React’s **context**.

---

#  **Basic Setup**

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

 **Notes:**

* `store={store}` → the Redux store you created
* All components inside `<Provider>` can now access Redux store via `useSelector` or `useDispatch`.

---

#  **How It Works**

* `Provider` uses **React Context internally**.
* It **injects the store** into the context.
* Hooks like `useSelector` / `useDispatch` **read the store from that context**.

**Flow:**

```
Redux Store
     ↓
   Provider
     ↓
Child Components
     ↓
useSelector / useDispatch
```

---

#  **With Redux Toolkit**

```jsx
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";

// Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 }
  }
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });

// Render App
function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
```

* No matter how many nested components, **all of them can access the same store**.

---

#  **Key Points**

1. **`Provider` wraps the root of your app**.
2. Makes the store accessible **without prop drilling**.
3. Required for **React Redux hooks** (`useSelector`, `useDispatch`).
4. Can wrap **other providers** too (like ThemeProvider, Router).

---


---

#  **What is JWT?**

* **JWT (JSON Web Token)** is a **compact, URL-safe token format** for securely transmitting information between parties.
* Often used for **user authentication** in web apps.
* Tokens are **stateless**: the server doesn’t need to store session info.

---

#  **JWT Structure**

A JWT has **3 parts**, separated by dots:

```
header.payload.signature
```

### **1️⃣ Header**

* Contains metadata about the token:

  * `alg` → signing algorithm (e.g., HS256)
  * `typ` → token type (JWT)

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

* Encoded in **Base64Url**.

---

### **2️⃣ Payload**

* Contains **claims** (information about the user or session).
* Can be **registered, public, or private claims**:

```json
{
  "sub": "1234567890",    // user id
  "name": "John Doe",
  "iat": 1695532800        // issued at (timestamp)
}
```

* Also Base64Url encoded.

---

### **3️⃣ Signature**

* Ensures the token **wasn’t tampered**.
* Created using:

```
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
```

* Only the server with the **secret key** can verify it.

---

#  **How JWT Works**

1. **User logs in** with username/password.
2. Server **verifies credentials** and generates JWT.
3. Server sends JWT to client (usually in response body or HTTP-only cookie).
4. Client **stores JWT** (localStorage, sessionStorage, or cookie).
5. For **subsequent requests**, client sends JWT in **Authorization header**:

```
Authorization: Bearer <token>
```

6. Server **verifies JWT** and grants access.

---

#  **JWT Example**

```js
// Example payload
const payload = {
  userId: "12345",
  role: "admin"
};

// Generate JWT using Node.js & jsonwebtoken
const jwt = require("jsonwebtoken");
const token = jwt.sign(payload, "secret_key", { expiresIn: "1h" });

console.log(token); // JWT string
```

**Verify JWT:**

```js
try {
  const decoded = jwt.verify(token, "secret_key");
  console.log(decoded); // { userId: '12345', role: 'admin', iat: ..., exp: ... }
} catch (err) {
  console.log("Invalid token");
}
```

---

#  **Pros of JWT**

1. **Stateless** → no server session required.
2. **Compact** → can be sent via URL, header, or cookie.
3. **Cross-platform** → works across domains, mobile apps, and web apps.
4. **Secure** → signed to prevent tampering.

---

#  **Cons / Risks**

1. **No easy revocation** → unless you track blacklists.
2. **Store securely** → don’t expose in localStorage if XSS is a risk.
3. **Size grows** → big payloads make headers large.

---

#  **JWT Usage in React + Redux**

1. **Login Action:** API returns JWT → store in Redux + localStorage.
2. **Authenticated Requests:** attach JWT in **Authorization header**.
3. **Logout:** remove JWT from store + localStorage.
4. Optional: **refresh token** for token renewal.

---

#  **Analogy**

* JWT = **digital passport**
* Header → passport metadata (format, algorithm)
* Payload → personal info (claims)
* Signature → security stamp verifying authenticity

---
 
---

#  **What is `subscribe`?**

* `subscribe` is a **method in Redux store** that lets you **listen for state changes**.
* Whenever the **state updates**, the callback you provide to `subscribe` gets called.

---

#  **Why use `subscribe`?**

* Useful when you want to **perform side effects** in response to state changes.
* Example: Logging, saving to `localStorage`, triggering custom UI updates.
* In modern React apps, `useSelector` often **replaces `subscribe`**, but knowing `subscribe` is important for vanilla Redux or non-React integrations.

---

#  **Basic Example**

```js
import { createStore } from "redux";

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch(action.type){
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Create store
const store = createStore(counterReducer);

// Subscribe to state changes
const unsubscribe = store.subscribe(() => {
  console.log("State changed:", store.getState());
});

// Dispatch some actions
store.dispatch({ type: "INCREMENT" }); // logs: State changed: { count: 1 }
store.dispatch({ type: "INCREMENT" }); // logs: State changed: { count: 2 }

// Stop listening
unsubscribe();
```

---

#  **Key Points**

1. `subscribe(listener)` → **listener function called on every state change**.
2. Returns a function to **unsubscribe**.
3. In React, **`useSelector` internally subscribes** to store updates.
4. Manual `subscribe` is mainly for **custom integrations** or **non-React apps**.

---
---

#  **1. Access Token**

* **Purpose:** Used to **authenticate API requests**.
* **Lifespan:** Short-lived (usually **5–15 minutes**).
* **Content:** Usually a JWT containing user info (`userId`, `role`) and expiration (`exp`).
* **Storage:** Typically stored in **memory** or **HTTP-only cookie** for security.

### **Example Flow**

1. User logs in → server issues **access token**.
2. Client sends `Authorization: Bearer <access_token>` in API requests.
3. Server **verifies the token** → allows access if valid.

✅ **Pros:**

* Short-lived → reduces risk if stolen.
* Stateless → server doesn’t need to store it.

❌ **Cons:**

* Expires quickly → user may need to log in again if no refresh token.

---

#  **2. Refresh Token**

* **Purpose:** Used to **get a new access token** without asking the user to log in again.
* **Lifespan:** Long-lived (days or weeks).
* **Content:** Usually a JWT or opaque token stored **securely on the server**.
* **Storage:** **HTTP-only cookie** recommended (not localStorage).

### **Example Flow**

1. Access token expires → client sends **refresh token** to a `/refresh-token` endpoint.
2. Server verifies the refresh token → issues a **new access token**.
3. Client continues using the new access token **without forcing the user to log in**.

 **Pros:**

* Improves **user experience** (no frequent logins).
* Adds a **layer of security** (access token is short-lived).

❌ **Cons:**

* If stolen, can be used to generate new access tokens.
* Must be stored **securely**.

---

#  **Typical JWT Auth Flow**

```
Login
  ↓
Server verifies credentials
  ↓
Server sends:
  - Access Token (short-lived)
  - Refresh Token (long-lived)
  ↓
Client stores tokens securely
  ↓
Client calls API with Access Token
  ↓
If Access Token expires → use Refresh Token to get a new Access Token
```

---

# 🔹 **React + Redux Example**

1. **Login Action**

```js
dispatch(loginUser({ username, password })).then(response => {
  localStorage.setItem("accessToken", response.accessToken);
  // refresh token stored in http-only cookie
});
```

2. **API Request with Axios**

```js
axios.interceptors.request.use(config => {
  const token = localStorage.getItem("accessToken");
  if(token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
```

3. **Refresh Token Flow**

```js
axios.interceptors.response.use(
  res => res,
  async err => {
    if(err.response.status === 401){ // token expired
      const newToken = await axios.post("/refresh-token"); 
      localStorage.setItem("accessToken", newToken.data.accessToken);
      err.config.headers["Authorization"] = `Bearer ${newToken.data.accessToken}`;
      return axios(err.config);
    }
    return Promise.reject(err);
  }
);
```

---

#  **Key Points**

| Token         | Purpose                   | Lifespan    | Storage          |
| ------------- | ------------------------- | ----------- | ---------------- |
| Access Token  | Authenticate API requests | Short-lived | Memory / Cookie  |
| Refresh Token | Get new Access Token      | Long-lived  | HTTP-only Cookie |

---

#  **Analogy**

* **Access Token** → Door key → opens doors, expires quickly
* **Refresh Token** → Master key → gets a new door key when the old one expires

---
 