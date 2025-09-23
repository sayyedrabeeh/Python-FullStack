
---

#  **What is `useCallback`?**

* `useCallback` is a React hook that **returns a memoized version of a function**.
* It ensures that the same function reference is **reused between renders**, unless dependencies change.
* Mainly used to **prevent unnecessary re-renders** of child components that depend on stable function references.

---

#  **Syntax**

```jsx
const memoizedCallback = useCallback(() => {
  // function body
}, [dependencies]);
```

* `() => {}` → your function
* `[dependencies]` → function will be recreated only when dependencies change

---

#  **Why do we need `useCallback`?**

 In React, every time a component re-renders, **all functions inside it are re-created**.
 This can cause performance issues when:

1. Passing functions to child components (they think props changed → unnecessary re-render).
2. Using functions in expensive computations or effects.

`useCallback` **stabilizes the function reference**.

---

#  **Example Without `useCallback`**

```jsx
import React, { useState } from "react";

function Child({ onClick }) {
  console.log("Child rendered!");
  return <button onClick={onClick}>Click Me</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```

 Problem:

* Every time you click "Increase", `App` re-renders.
* `handleClick` is re-created → child thinks `onClick` changed → **Child re-renders unnecessarily**.

---

#  **Fix with `useCallback`**

```jsx
import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child rendered!");
  return <button onClick={onClick}>Click Me</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // no dependencies, so same function reference always

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```

 Now:

* `handleClick` reference is **stable**.
* `Child` will not re-render when only `count` changes.

---

#  **Key Points**

1. `useCallback` **caches a function reference**.
2. Useful for **passing functions to memoized children** (`React.memo`).
3. Not for performance micro-optimizations → use only when needed.
4. Works best when combined with **React.memo**.

---

#  **Analogy**

* Think of React functions like **making a new coffee every time someone enters the room** ☕.
* Even if they just want to look at it, you still brew a new one → wasteful.
* `useCallback` is like **keeping the same coffee cup on the table** until ingredients (dependencies) change.

---

 **Quick Recap:**

* `useCallback(fn, deps)` = memoizes a function
* Prevents **unnecessary re-renders** of children
* Use with **React.memo** for best results

---


---

#  **What is `React.memo`?**

* `React.memo` is a **higher-order component (HOC)** that **memoizes (remembers) the rendered output of a component**.
* If the **props don’t change**, React will **skip re-rendering** that component.

 In short: **"Don’t re-render me if my props are the same."**

---

#  **Syntax**

```jsx
const MemoizedComponent = React.memo(MyComponent);
```

---

#  **Example Without `React.memo`**

```jsx
import React, { useState } from "react";

function Child({ value }) {
  console.log("Child rendered!");
  return <h3>Child Value: {value}</h3>;
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Parent Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child value="Hello" />
    </div>
  );
}
```

 Problem:

* Even though `value="Hello"` **never changes**, `Child` re-renders every time parent updates `count`.

---

#  **Fix with `React.memo`**

```jsx
const Child = React.memo(function Child({ value }) {
  console.log("Child rendered!");
  return <h3>Child Value: {value}</h3>;
});
```

 Now:

* `Child` will **not re-render** when only `count` changes in parent.
* It re-renders **only if `value` changes**.

---

#  **React.memo with `useCallback`**

Often, `React.memo` is used together with `useCallback`.
Because if you pass a new function every render, `React.memo` won’t help.

```jsx
function Child({ onClick }) {
  console.log("Child rendered!");
  return <button onClick={onClick}>Click Me</button>;
}

const MemoChild = React.memo(Child);

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []); // stable reference

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <MemoChild onClick={handleClick} />
    </div>
  );
}
```

 Here:

* `MemoChild` does **not re-render** when `count` changes.
* Without `useCallback`, the child would still re-render because the function reference changes.

---

#  **Key Points**

1. `React.memo` = **pure component for functional components**.
2. Prevents unnecessary re-renders when props haven’t changed.
3. Good for **performance optimization**, but don’t overuse it.
4. Works best with `useCallback` / `useMemo` for stable props.
5. Can take a **custom comparison function**:

```jsx
const MyComp = React.memo(Component, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});
```

---

#  **Analogy**

* Imagine you’re showing a photo to a friend 📸.
* If the photo hasn’t changed, you don’t print it again — you just **reuse the old print**.
* That’s what `React.memo` does with components.

---

 **Quick Recap:**

* `React.memo` = skip re-render if props are same
* Helps optimize performance
* Works best with `useCallback` + `useMemo`
* Equivalent to **`PureComponent`** but for functional components

---
---

##  What is Context API?

The **Context API** is React’s built-in way to manage **global state** (or shared data) without having to pass props down manually through multiple levels (called **prop drilling**).

It acts like a **“global store”** for a part of your component tree.

---

##  Why do we need it?

Imagine you have this component tree:

```
App → Header → Navbar → UserMenu → Avatar
```

If the `Avatar` needs the current `user` data, without Context, you’d have to pass it like this:

```jsx
<App user={user}>
  <Header user={user}>
    <Navbar user={user}>
      <UserMenu user={user}>
        <Avatar user={user} />
      </UserMenu>
    </Navbar>
  </Header>
</App>
```

This is **prop drilling** → messy and hard to maintain.

With Context API, `Avatar` can directly access `user` without going through all parents.

---

##  How Context API works (3 steps)

### 1. Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext(null);
```

---

### 2. Provide Context (wrap components)

```jsx
import { UserContext } from "./UserContext";

function App() {
  const user = { name: "Rabeeh", role: "Full Stack Dev" };

  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}
```

`UserContext.Provider` makes `user` available to all children.

---

### 3. Consume Context

Options to use the data inside children:

#### a) With `useContext` Hook (recommended)

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Avatar() {
  const user = useContext(UserContext);
  return <h3>{user.name}</h3>;
}
```

#### b) With `Context.Consumer` (old way)

```jsx
<UserContext.Consumer>
  {user => <h3>{user.name}</h3>}
</UserContext.Consumer>
```

---

##  Real-World Uses

* **Theme switching** (dark/light mode)
* **User authentication** (logged-in user info)
* **Language settings** (i18n / translations)
* **Cart management** in e-commerce

---
##  Context API vs Redux

* Context is **simpler**, built-in, great for **small/medium apps**.
* Redux (or Zustand, Recoil, etc.) is better for **large apps** with complex state logic, middleware, or debugging needs.

---

 **In short**: Context API = a React way to share data globally without props drilling.

---
---

# 🔹 What is `useReducer`?

* `useReducer` is a React Hook that lets you manage **complex state logic** in a predictable way.
* It’s an alternative to `useState`.
* Think of it as **Redux inside a component**.

Instead of directly setting state, you **dispatch actions**, and a `reducer` function decides how to update the state.

---

#  Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

* **state** → current state value
* **dispatch** → function to send actions
* **reducer** → function `(state, action) => newState`
* **initialState** → starting state

---

#  Example 1: Counter with `useReducer`

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
```

 Here, instead of directly setting `count`, we `dispatch` an action.
The `reducer` decides **how** to update state.

---

#  Example 2: Todo List with `useReducer`

```jsx
import { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.text }];
    case "remove":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    dispatch({ type: "add", text: input });
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} 
            <button onClick={() => dispatch({ type: "remove", id: todo.id })}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

 Now we have **predictable state updates** like Redux but with no external library.

---

#  When to use `useReducer`?

* When state **depends on previous state**.
* When state has **multiple sub-values** (e.g., object or array).
* When you want a **centralized state logic** (like mini Redux).
* Good for **forms, counters, todo apps, authentication flows**.

---

#  `useReducer` + Context API (Global Store)

You can wrap `useReducer` in **Context API** to create a global state manager (a simpler Redux alternative).

```jsx
import { createContext, useReducer, useContext } from "react";

const initialState = { user: null };

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    default:
      return state;
  }
}

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

Now any component can do:

```jsx
const { state, dispatch } = useAuth();
dispatch({ type: "login", payload: { name: "Rabeeh" } });
```

---

 **In short:**

* `useState` → simple local state.
* `useReducer` → structured, predictable state (mini Redux).
* `useReducer + Context` → global state management.

---
 
---

#  What is Code Splitting?

* **Code splitting** is the process of breaking your big JavaScript bundle into **smaller chunks**.
* Instead of sending *all* your app code to the browser at once, you load only what’s needed **when it’s needed**.
* This improves **initial load speed** and **performance**.

 Think of it like Netflix: you don’t download all movies at once, you stream only the one you want to watch.

---

#  Why Code Splitting?

Without splitting:

* A single `bundle.js` file may be **huge**.
* User waits longer for the app to load.

With splitting:

* Smaller initial load.
* Extra code is **lazy-loaded** when needed.
* Faster performance, especially for **Single Page Applications (SPAs)**.

---

#  How to do Code Splitting in React?

## 1. **Dynamic `import()`**

JavaScript supports **dynamic imports**, which return a Promise.

```js
import("./math").then(math => {
  console.log(math.add(2, 3));
});
```

 Instead of including `math` in the main bundle, it will be **lazy-loaded** when needed.

---

## 2. **React.lazy + Suspense**

React provides `React.lazy()` for **component-level code splitting**.

```jsx
import React, { Suspense } from "react";

// Lazy load component
const Profile = React.lazy(() => import("./Profile"));

function App() {
  return (
    <div>
      <h1>Welcome!</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Profile />
      </Suspense>
    </div>
  );
}
```

* `Profile` component is not in the main bundle.
* It loads **only when rendered**.
* `Suspense` shows a fallback UI while loading.

---

## 3. **React Router + Lazy Loading**

When using React Router, you can lazy load routes:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

 This way, `About` is loaded **only when user visits `/about`**.

---

#  Tools that help with Code Splitting

* **Webpack** → built-in support for code splitting.
* **Vite / ESBuild** → automatically splits code with dynamic imports.
* **Parcel, Rollup** → also handle code splitting.

---

#  Real-World Example

Imagine an **E-commerce app**:

* Landing Page → fast load (only home bundle).
* Checkout Page → heavy logic (only load when user goes there).
* Admin Dashboard → loaded only for admins.
 This keeps initial load **fast for all users**, while heavy code loads **on demand**.

---

 **In summary:**

* Code Splitting = splitting JS into smaller chunks.
* Improves performance by lazy-loading.
* In React, done with `React.lazy`, `Suspense`, and dynamic imports.

---
---

#  What is `React.lazy`?

* `React.lazy()` is a function that lets you **lazy-load a React component**.
* Instead of importing a component at the top of the file, you load it **only when it’s needed**.
* Helps reduce the **initial bundle size** and improves **performance**.

Think of it like: "Don’t cook all dishes at once, only prepare when someone orders."

---

#  Syntax

```jsx
const ComponentName = React.lazy(() => import("./ComponentPath"));
```

* `React.lazy()` takes a **function** that calls `import()`.
* The component is loaded **asynchronously**.

---

#  Example 1: Simple Lazy Component

```jsx
import React, { Suspense } from "react";

const Profile = React.lazy(() => import("./Profile"));

function App() {
  return (
    <div>
      <h1>Welcome!</h1>

      <Suspense fallback={<p>Loading Profile...</p>}>
        <Profile />
      </Suspense>
    </div>
  );
}

export default App;
```

* `Profile` component loads **only when rendered**.
* `Suspense` provides a **loading UI** until it finishes.

---

#  Example 2: Lazy Loading Routes

With React Router:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading Page...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

 `About` component will **not** be part of the initial bundle.
I’s fetched only when user navigates to `/about`.

---

#  Rules of `React.lazy`

1. Must be wrapped in **`<Suspense>`**.
2. Only works with **default exports**.

   ```js
   export default function Profile() { ... } ✅
   export function Profile() { ... } ❌
   ```
3. Best used for **large components/pages** (not for tiny buttons).

---

#  When to Use

* Large components (e.g., charts, modals, maps).
* Route-based components (each page loads separately).
* Rarely-used UI elements (e.g., admin dashboard, settings).

---

 **In short:**

* `React.lazy` = lazy-load components.
* Requires `Suspense` for fallback.
* Great for performance and code splitting.
 
---

#  1. What is **Fetch**?

* **Built-in** JavaScript API (`window.fetch`).
* No need to install anything.
* Returns a **Promise**.
* Minimal, but less features — you often need extra code for things like error handling, timeouts, and request cancellation.

 Example:

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));
```

---

#  2. What is **Axios**?

* **Third-party library** (must install: `npm install axios`).
* Provides a cleaner API for HTTP requests.
* Automatically parses JSON responses.
* Easier error handling.
* Supports **request cancellation, interceptors, and timeouts** out of the box.

 Example:

```js
import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response.data))
  .catch(error => console.error("Axios error:", error));
```

---

#  3. Key Differences

| Feature              | **Fetch**                                                                      | **Axios**                                            |
| -------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| **Availability**     | Built-in (no install)                                                          | External library (install needed)                    |
| **Response Parsing** | Must call `.json()` manually                                                   | Auto JSON parsing                                    |
| **Error Handling**   | Doesn’t reject for HTTP errors (e.g., 404, 500) — you must check `response.ok` | Rejects automatically for non-2xx status codes       |
| **Timeouts**         | No built-in support (need AbortController)                                     | Built-in `timeout` option                            |
| **Interceptors**     | Not supported                                                                  | Supports request/response interceptors               |
| **Request Cancel**   | Using `AbortController`                                                        | Built-in `CancelToken` (or `AbortController` in v1+) |
| **Upload Progress**  | No direct support                                                              | Supports progress tracking (`onUploadProgress`)      |
| **Browser Support**  | Modern browsers only                                                           | Works in older browsers too                          |

---

#  4. Example: POST Request

### Using **Fetch**

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Hello", body: "World" })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Using **Axios**

```js
axios.post("https://jsonplaceholder.typicode.com/posts", {
  title: "Hello",
  body: "World"
})
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
```

 Notice Axios is shorter and cleaner.

---

#  5. When to Use What?

*  **Use Fetch**:

  * Small apps, no extra dependencies.
  * Modern browsers (React apps usually fine).
  * You don’t need advanced features.

*  **Use Axios**:

  * Large-scale apps (e.g., e-commerce, dashboards).
  * Need **interceptors** (for auth tokens, logging).
  * Need **timeouts, request canceling, progress tracking**.
  * Want cleaner, more readable code.

---
 **Summary:**

* **Fetch** = free, built-in, lightweight, but less features.
* **Axios** = external, heavier, but cleaner API & more features.

---
---

#  1. What is an Axios Interceptor?

* **Interceptor** = a function that Axios runs **before a request is sent** or **after a response is received**.
* Helps **modify requests or responses globally**.
* Common use cases:

  * Adding **JWT tokens** to headers
  * Handling **401 Unauthorized** globally
  * Logging requests/responses

Axios supports **two types**:

1. **Request Interceptor** → runs before sending request
2. **Response Interceptor** → runs after receiving response

---

#  2. Syntax

```js
// Request interceptor
axios.interceptors.request.use(
  config => {
    // Modify config (e.g., add auth token)
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    // Handle error globally
    return Promise.reject(error);
  }
);
```

---

#  3. Example: Adding JWT Token to Every Request

```js
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
```

 Now every Axios request automatically includes the JWT token.

---

#  4. Example: Global Error Handling

```js
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized! Redirect to login.");
      // redirect user to login page
    }
    return Promise.reject(error);
  }
);
```

* Instead of handling 401 errors in every API call, you handle it **once globally**.

---

#  5. Using Axios Instance with Interceptors

Sometimes you want a **custom Axios instance**:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403) alert("Forbidden!");
    return Promise.reject(error);
  }
);

export default api;
```

Usage in React component:

```js
import api from "./api";

api.get("/user/profile").then(res => console.log(res.data));
```

 Benefits of using an instance:

* Keeps interceptors separate
* Different base URLs for different APIs
* Cleaner code

---

#  6. Key Points

1. **Request interceptors** → modify or log request before sending.
2. **Response interceptors** → handle responses or errors globally.
3. **Return config/response** → if you forget, request/response will fail.
4. **Always reject errors** with `Promise.reject(error)` if you want the calling code to handle it.
5. You can **eject interceptors** if needed:

   ```js
   const myInterceptor = axios.interceptors.request.use(config => config);
   axios.interceptors.request.eject(myInterceptor);
   ```

---

 **In short:**

* Axios interceptors = global hooks for requests/responses.
* Ideal for auth tokens, error handling, logging, or headers.
* Use custom Axios instances for cleaner, maintainable code.

---

---

# What is Hydration?

* **Hydration** = the process where **React attaches event listeners** to HTML that was **rendered on the server** (SSR).
* Server sends **static HTML** to the browser → **React “hydrates” it** to make it interactive.
* This allows **fast initial load** (server-rendered HTML) + **full React interactivity** on the client.

---

#  Why Hydration?

Without hydration:

* You’d either do **CSR only** (slow initial render).
* Or have static HTML that **can’t respond to clicks, forms, or state changes**.

With hydration:

* Users see **content immediately** (SSR HTML).
* React “wakes up” and attaches **event handlers** → fully interactive SPA.

---

#  How It Works (Step by Step)

1. Server renders React component → outputs **HTML markup**.

```html
<div id="root">
  <button>Click Me</button>
</div>
```

2. Browser loads HTML → shows **static page immediately**.

3. React runs in the browser:

```js
ReactDOM.hydrate(
  <App />,
  document.getElementById("root")
);
```

4. React **attaches event listeners** to the existing DOM → page becomes interactive.

---

#  Hydration vs Normal Render

| Feature       | CSR (Client Render)           | SSR + Hydration                            |
| ------------- | ----------------------------- | ------------------------------------------ |
| Initial load  | Blank → JS downloads → render | Server HTML → instant content              |
| SEO           | Poor (depends on JS)          | Great (server HTML visible to crawlers)    |
| Interactivity | React renders from scratch    | React attaches to existing HTML (hydrates) |
| Performance   | Slower first paint            | Faster first contentful paint              |

---

#  Example (Next.js)

```jsx
// pages/index.js
export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

* Server sends HTML:

```html
<h1>Count: 0</h1>
<button>Increment</button>
```

* Browser hydrates → button becomes interactive.

---

#  Key Points

1. **Hydration is only needed when HTML is rendered on the server.**
2. Use `ReactDOM.hydrate()` instead of `ReactDOM.render()` for SSR.
3. Mismatches between server and client render can cause **hydration warnings**:

   * Example: rendering `Math.random()` on server and client → HTML mismatch.
4. Hydration enables **SEO-friendly, fast-loading React apps**.

---
---

#  What is HTML Sanitization?

* **HTML Sanitization** = the process of **cleaning up user-supplied HTML** before rendering it.
* Goal: **remove malicious code** like `<script>` tags or `onerror` attributes that can lead to **XSS (Cross-Site Scripting) attacks**.
* Important whenever you’re rendering **user-generated content** in React or the web.

---

#  Why It’s Important

Example of a dangerous input:

```html
<p>Hello</p>
<img src="x" onerror="alert('Hacked!')" />
<script>alert('XSS');</script>
```

* If rendered directly in React with `dangerouslySetInnerHTML`, it can **execute JS** in your page → security breach.
* Sanitization **removes scripts, event handlers, or unsafe attributes**.

---

#  How It Works

1. **Parse the HTML**
2. **Whitelist tags** (`<p>`, `<b>`, `<ul>`…)
3. **Remove dangerous attributes** (`onerror`, `onclick`, `style` with `url()`…)
4. **Return safe HTML**

---

#  Example in React (using `dompurify`)

1. Install `dompurify`:

```bash
npm install dompurify
```

2. Use it in React:

```jsx
import DOMPurify from "dompurify";

function App() {
  const userInput = `<img src="x" onerror="alert('hacked')" /><p>Hello</p>`;
  const cleanHTML = DOMPurify.sanitize(userInput);

  return (
    <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
  );
}
```

 Now only safe HTML is rendered: `<p>Hello</p>`
 The malicious `<script>` or `onerror` is removed.

---

#  Libraries for HTML Sanitization

* **DOMPurify** → most popular, actively maintained
* **sanitize-html** → highly configurable
* **xss** → simple and lightweight

---

#  React-Specific Tips

1. **Avoid `dangerouslySetInnerHTML`** if possible.
2. If you must render HTML from users → always sanitize first.
3. Combine with **Content Security Policy (CSP)** in headers for extra protection.
4. Do **not trust server-side sanitization alone**; sanitize again in the client if rendering HTML.

---

#  Summary

* **Sanitization** = cleaning HTML to prevent XSS.
* Use libraries like **DOMPurify** in React.
* Always **sanitize before rendering user content**, especially with `dangerouslySetInnerHTML`.
* Safe HTML = no scripts, no inline event handlers, no unsafe URLs.

---
---

#  1. What is Referential Equality?

* **Referential equality** checks if **two variables reference the exact same object in memory**.
* In JS, objects and arrays are **reference types**.
* Even if two objects have the **same content**, they are **not referentially equal** unless they point to the same memory address.

---

#  2. Examples in JavaScript

### Primitive types (numbers, strings, booleans)

```js
let a = 5;
let b = 5;
console.log(a === b); // true (primitives are compared by value)
```

### Reference types (objects, arrays)

```js
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
let obj3 = obj1;

console.log(obj1 === obj2); // false (different objects in memory)
console.log(obj1 === obj3); // true (same reference)
```

 Key point: **`===` checks reference for objects, value for primitives**.

---

#  3. Referential Equality in React

React uses **referential equality** in:

1. **`React.memo`** → shallow compare props
2. **`useEffect` dependency array** → checks if dependencies changed
3. **`useCallback` / `useMemo`** → memoize functions or values

---

### Example 1: React.memo

```jsx
const Child = React.memo(({ data }) => {
  console.log("Child rendered");
  return <div>{data.text}</div>;
});

function Parent() {
  const [count, setCount] = React.useState(0);

  const obj = { text: "Hello" }; // new object on every render

  return (
    <div>
      <Child data={obj} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

* Every render creates a **new object** → `Child` re-renders.
* Even though `data.text` is `"Hello"`, **referential equality fails** because `obj` is a **new reference**.

---

### Example 2: Fix with useMemo

```jsx
function Parent() {
  const [count, setCount] = React.useState(0);

  const obj = React.useMemo(() => ({ text: "Hello" }), []);

  return (
    <div>
      <Child data={obj} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

* `obj` is memoized → **same reference across renders** → `Child` does **not re-render** unnecessarily.

---

#  4. Key Points in React

1. Referential equality matters for **performance optimization**.
2. Objects, arrays, and functions **fail referential equality** unless memoized.
3. Use `useMemo` and `useCallback` to **preserve reference**.
4. `React.memo` relies on **referential equality** of props.
5. Primitives (numbers, strings, booleans) **are compared by value**.

---

#  5. Quick Summary Table

| Type             | Comparison           | Example                                                             |
| ---------------- | -------------------- | ------------------------------------------------------------------- |
| Primitive        | Value equality       | `5 === 5 → true`                                                    |
| Object / Array   | Reference equality   | `{a:1} === {a:1} → false`                                           |
| React.memo props | Referential equality | Objects/functions must be memoized to prevent unnecessary re-render |

---

 **In short:**

* **Referential equality** = two variables point to **exact same object in memory**.
* Crucial in **React optimization**, `useEffect` dependencies, `React.memo`, `useCallback`, `useMemo`.
* Without it, React may **re-render unnecessarily**.

---

---

# 🔹1. What is a Stale Closure?

* In React, **functional components** create a **new function on every render**.
* A **closure** “remembers” the variables from when it was created.
* **Stale closure** happens when a function **captures old state or props** and doesn’t see the latest updates.

 Think of it like: “Your function is holding onto an **old snapshot** of the state.”

---

#  2. Example: Stale State in setInterval

```jsx
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1); // 🔴 stale closure
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

export default Counter;
```

* `useEffect` runs once (empty dependency array).
* `count` inside `setInterval` is **0 forever** → increments **never reflect latest state**.
* This happens because the function **closes over the `count` value at the time of effect creation**.

---

#  3. Fixing Stale Closures

###  Method 1: Functional update in `setState`

```jsx
setCount(prev => prev + 1);
```

Full fixed example:

```jsx
useEffect(() => {
  const id = setInterval(() => {
    setCount(prev => prev + 1); // ✅ latest state
  }, 1000);

  return () => clearInterval(id);
}, []);
```

* `prev` always holds the **latest state**, avoiding stale closures.

---

###  Method 2: Add dependencies to `useEffect`

```jsx
useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1);
  }, 1000);

  return () => clearInterval(id);
}, [count]); // effect re-runs every time count changes
```

* But this **recreates the interval every render**, not always ideal.

---

###  Method 3: useRef to keep latest value

```jsx
const countRef = useRef(0);

useEffect(() => {
  const id = setInterval(() => {
    console.log(countRef.current); // latest value
    countRef.current += 1;
  }, 1000);
}, []);
```

* `useRef` stores a **mutable object** that does **not trigger re-renders**, but is always up-to-date.

---

#  4. Why It Happens

1. React functional components **re-run on each render**.
2. Effects created **capture the variables from their creation time**.
3. If your function uses **state or props inside an effect or callback**, it may be **stale**.

---

#  5. Common Situations

* `setInterval`, `setTimeout`
* Event listeners inside `useEffect`
* Callbacks passed to child components
* `useCallback` / `useMemo` with stale dependencies

---

#  6. Key Takeaways

1. **Functional updates** (`prev => prev + 1`) prevent stale closures.
2. **Add dependencies** to `useEffect` or `useCallback` to always capture latest values.
3. **useRef** can store latest value without triggering re-renders.
4. Be careful when **reading state or props inside async callbacks**.

---

 **In short:**

* Stale closure = a function “remembers” old state or props.
* Happens in effects, timers, or callbacks in functional components.
* Fix with **functional updates**, **dependency arrays**, or **refs**.

---

---

#  1. What is Batching?

* **Batching** = React’s way of **grouping multiple state updates together** into a **single render**.
* Instead of re-rendering the component for **every single `setState`**, React waits and **applies all updates at once**.
* This **improves performance** by avoiding unnecessary renders.

---

#  2. Example: Without Batching

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 2);
    setCount(count + 3);
  };

  console.log("Render", count);

  return <button onClick={handleClick}>Increment</button>;
}

export default Counter;
```

* Before React 18 (or outside event handlers), each `setCount` **triggers a separate render** → inefficient.
* You may not get the expected value because state updates **override each other**.

---

#  3. How React Batching Works

###  Automatic Batching (React 18+)

```jsx
const handleClick = () => {
  setCount(c => c + 1);
  setCount(c => c + 2);
  setCount(c => c + 3);
};
```

* All three updates are **batched together** in **one render**.
* Final state = `count + 6` (1 + 2 + 3).
* React **merges multiple state updates** in the same render cycle.

---

###  Outside React Events

* Before React 18, batching **only worked inside React event handlers**.
* Updates inside `setTimeout`, `fetch`, or native event listeners were **not batched**.
* React 18+ introduced **automatic batching everywhere**.

```jsx
setTimeout(() => {
  setCount(c => c + 1);
  setCount(c => c + 2);
}, 1000);
```

* React 18+ batches these too → only **one render**.

---

#  4. Why Batching is Important

1. **Performance** → fewer renders → faster UI updates.
2. **Consistency** → state updates applied together.
3. **Predictable behavior** → functional updates work correctly with batched updates.

---

#  5. Key Points

| Feature            | Before React 18              | React 18+                                            |
| ------------------ | ---------------------------- | ---------------------------------------------------- |
| Batching           | Only in React event handlers | Works everywhere (timeouts, promises, native events) |
| Multiple setState  | Multiple renders             | Single render                                        |
| Functional updates | Optional                     | Recommended for consistency                          |

---

#  6. Tips to Use Batching Effectively

1. Use **functional updates** for dependent state changes:

```jsx
setCount(prev => prev + 1);
```

2. Avoid calling `setState` too many times unnecessarily.
3. Take advantage of **React 18 automatic batching** in async code.
4. Understand that batching **does not merge objects automatically** — you still need to spread previous state:

```jsx
setState(prev => ({ ...prev, name: "John" }));
```

---
 
