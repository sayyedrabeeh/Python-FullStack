### REACT-1

 
---

##  What is React?

React is a **JavaScript library** (not a full framework) created by **Facebook (Meta)** for building **user interfaces (UI)** — mainly **single-page applications (SPA)** where parts of the page update without reloading.

* It’s **component-based**: you build UI as small reusable pieces (buttons, forms, navbars, etc.).
* It uses a **Virtual DOM**: a lightweight copy of the real DOM that React updates very efficiently.
* It’s **declarative**: you describe *what you want* and React figures out *how to update the DOM*.

---

##  Why use React over others (Angular, Vue, plain JS)?
 

### 1. **Compared to plain JavaScript (DOM manipulation)**

* In plain JS, updating UI means manually selecting DOM nodes (`document.querySelector`) and updating them.
* With React, you don’t manually touch the DOM — you just change **state**, and React updates the UI automatically.
   This makes code easier to maintain, less error-prone.

---

### 2. **Compared to Angular**

* Angular = full framework (lots of built-in rules, dependency injection, RxJS, etc.).
* React = lightweight library, more freedom. You choose your own routing, state management, etc.
   React is simpler to learn at first, less opinionated.

---

### 3. **Compared to Vue**

* Vue and React are similar in concept (components, reactivity).
* Vue is often simpler for beginners (template-based syntax).
* React has a **larger ecosystem, job market, and community**.
   Companies pick React more often for scalability.

---

### 4. **Ecosystem**

* React has huge ecosystem → React Router (navigation), Redux/Zustand/Recoil (state management), Next.js (SSR, full-stack).
* Tons of third-party UI libraries (Material UI, Ant Design, Tailwind integrations).
   It’s very flexible and industry-backed.

---

##  Why React is so popular?

1. **Performance** → Virtual DOM makes UI updates fast.
2. **Reusability** → Components can be shared across projects.
3. **Community** → Massive ecosystem, tutorials, and support.
4. **Industry adoption** → Facebook, Instagram, WhatsApp, Netflix, Airbnb, Uber, etc. use React.
5. **Flexibility** → Works in web, mobile (React Native), even VR (React 360).
6. **Future-proof** → Backed by Meta, open-source, widely trusted.

---

##  Real-world analogy

Think of building UI like building a car :

* **Plain JS/jQuery** = every time you need to fix something, you open the hood and directly change wires (DOM). Messy, easy to break.
* **Angular** = buying a car kit with everything included. Powerful, but heavy and strict.
* **React** = Lego blocks. You build your car out of reusable blocks (components). Easy to swap, upgrade, and maintain.

---

**Summary:**
React is used **over others** because it:

* Makes UI building **simpler and faster**.
* Scales better for **big apps**.
* Has a **huge ecosystem and job market**.
* Provides **high performance** via Virtual DOM.
 
---

## **1. What is Vite?**

* **Vite** is a modern build tool that focuses on **fast development** and **optimized production builds**.
* Pronounced like “veet”.
* Created by Evan You (the creator of Vue.js) but works great with **React, Vue, Svelte, and vanilla JS**.
* It uses **ES Modules (ESM)** in the browser during development, so you don’t need to bundle everything initially.

### **Key Features**

1. **Blazing fast startup:**
   Only loads the modules your app actually uses, unlike CRA/Webpack that bundles the entire app before running.
2. **Hot Module Replacement (HMR):**
   Makes React component updates almost instantaneous.
3. **Optimized production build:**
   Uses **Rollup** under the hood for tree-shaking, code splitting, and minification.
4. **TypeScript support out-of-the-box:**
   Works without extra configuration.
5. **Less config required:**
   Zero-config for most apps, but highly extensible if needed.

---

## **2. Why use Vite with React?**

Compare **CRA vs Vite**:

| Feature            | CRA                       | Vite                               |
| ------------------ | ------------------------- | ---------------------------------- |
| Startup speed      | Slow (bundles entire app) | Very fast (ESM, no initial bundle) |
| HMR                | Slow                      | Near-instant                       |
| Build tool         | Webpack                   | Rollup                             |
| TypeScript setup   | Extra setup               | Built-in                           |
| Config flexibility | Harder to customize       | Very flexible                      |

So basically, **Vite is faster and more modern**, making React development smoother, especially for large projects.

---

## **3. How to create a React project with Vite**

```bash
# Step 1: Create a new project
npm create vite@latest my-react-app
# or using Yarn
yarn create vite my-react-app

# Step 2: Choose template
# Select "React" or "React + TypeScript"

# Step 3: Install dependencies
cd my-react-app
npm install
# or
yarn

# Step 4: Run dev server
npm run dev
# or
yarn dev
```

You’ll see a URL like `http://localhost:5173` where your app runs instantly with HMR.

---

## **4. Why modern React dev prefers Vite**

1. **Instant reloads:** You don’t wait for Webpack bundling.
2. **Smaller builds:** Tree-shaking and modern ESM syntax reduce bundle size.
3. **Easy integration with React 18 features:** Suspense, concurrent rendering, hooks.
4. **Better DX (Developer Experience):** Less waiting, instant feedback.

---

---

## **1. Creating a React App**

Traditionally, we use **Create React App (CRA)** or **Vite** to scaffold a React project.

* **CRA** uses **Webpack** under the hood.
* **Vite** uses **native ES Modules in dev** and **Rollup** for production.

**CRA example:**

```bash
npx create-react-app my-app
cd my-app
npm start
```

* `npm start` runs a **Webpack dev server**.
* You can now edit React components, and the browser updates automatically (via HMR).

**Vite example:**

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

* Vite doesn’t bundle everything upfront. It serves **ES Modules** directly in the browser.
* React updates instantly using HMR.

---

## **2. Webpack**

* **Webpack** is a **module bundler**.
* Its job: take many JS/TS files (modules) and **bundle them into a few files** for the browser.
* It handles **JS, CSS, images**, even fonts—everything can be a module.
* CRA uses Webpack by default.

**How it works:**

* It analyzes `import` statements and builds a **dependency graph**.
* Then bundles everything into one or few JS files.
* During development, it also supports **Hot Module Replacement (HMR)** to refresh only the changed parts.

---

## **3. ESM (ECMAScript Modules)**

* **ESM** is the modern JS module system using `import` and `export`.

```js
// math.js
export function add(a, b) { return a + b; }

// main.js
import { add } from './math.js';
console.log(add(2,3));
```

* **Vite** serves **ESM directly** in the browser during dev.
* **Webpack** also supports ESM but usually bundles them together, so the browser sees one big JS file instead of separate modules.

**Why ESM is important:**

* Native browser support for modules.
* Enables **faster development** because the browser loads only what’s needed.

---

## **4. HMR (Hot Module Replacement)**

* **HMR** allows updating **only the changed module** in the browser **without refreshing the whole page**.
* Example: You change a React component:

  * With HMR, only that component updates, keeping the state intact.
  * Without HMR, the whole app reloads and you lose state.

**CRA + Webpack:**

* Webpack dev server manages HMR for React components.

**Vite:**

* Uses ESM + its own HMR protocol, which is **faster than Webpack**.

---

### **Putting it all together**

| Tool / Concept         | Role in React Dev                                               |
| ---------------------- | --------------------------------------------------------------- |
| Create React App (CRA) | Scaffolds app, uses Webpack                                     |
| Webpack                | Bundles modules, manages dependencies, supports HMR             |
| ESM (import/export)    | Modern JS module system, enables tree-shaking                   |
| HMR                    | Updates only changed modules in the browser, fast feedback      |
| Vite                   | Modern dev server, serves ESM directly, faster HMR than Webpack |

 **Key insight:**
Vite + React = almost instant reloads using native ESM + HMR. CRA + Webpack = slower dev because of bundling, but very compatible and configurable.

---



---

## **1. DOM (Document Object Model)**

* **Definition:** DOM is a **programmatic representation of the HTML document**. It lets JavaScript **access and manipulate the HTML elements** on a page.
* Think of it as a **tree structure** of all HTML elements.

### **Key Points**

1. Represents **HTML elements as objects**.
2. Allows you to **read, modify, add, or delete elements**.
3. Part of the **Web API** provided by browsers.

### **Examples**

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Hello World</h1>
  <button onclick="changeText()">Click me</button>

  <script>
    function changeText() {
      // Access the DOM element by ID
      document.getElementById("title").innerText = "DOM Changed!";
    }
  </script>
</body>
</html>
```

* `document.getElementById()` → accesses an element
* `innerText` → changes the text content

Other DOM methods:

* `document.querySelector()`
* `document.createElement()`
* `element.appendChild()`, `element.remove()`

---

## **2. BOM (Browser Object Model)**

* **Definition:** BOM is the **browser-specific objects** that allow JS to interact **with the browser window itself**, not just the page content.
* Examples include **window size, browser history, alerts, and location**.

### **Key Points**

1. Allows interaction with **browser features** outside the page content.
2. Not standardized like DOM, but all modern browsers support the main BOM objects.

### **Examples**

```js
// Alert box
window.alert("Hello BOM!");

// Browser location
console.log(window.location.href);

// Browser history
window.history.back();  // go to previous page

// Screen info
console.log(window.screen.width, window.screen.height);
```

* `window` is the **global object** in browsers. DOM is part of it.
* BOM objects include:

  * `window`
  * `navigator`
  * `screen`
  * `location`
  * `history`
  * `alert, confirm, prompt`

---

### **DOM vs BOM – Quick Comparison**

| Feature    | DOM                                          | BOM                                                 |
| ---------- | -------------------------------------------- | --------------------------------------------------- |
| Represents | HTML document                                | Browser window & environment                        |
| Purpose    | Manipulate page content                      | Interact with browser & system info                 |
| Examples   | `document.getElementById()`, `element.style` | `window.location`, `alert()`, `navigator.userAgent` |
| Standard   | W3C standard                                 | Not strictly standardized                           |

 **Key insight:**

* **DOM** = inside the page (content).
* **BOM** = outside the page (browser features).

---
Ah! You want to understand **Virtual DOM (VDOM)** — this is a key concept in **React**. Let’s go step by step, clearly explaining what it is, why it exists, and how it works.

---

## **1. What is Virtual DOM?**

* **Virtual DOM** is a **lightweight, in-memory representation of the real DOM**.
* React keeps a **virtual copy of the DOM in memory** and updates the real DOM **efficiently** when something changes.
* Think of it as a **blueprint of the real DOM**.

---

## **2. Why do we need Virtual DOM?**

* Updating the **real DOM** is **slow** because the browser has to recalculate styles, reflow layouts, and repaint elements.
* Direct DOM manipulation in plain JS can be inefficient for large apps.
* **VDOM allows React to minimize DOM operations**, making apps faster.

---

## **3. How Virtual DOM works (Conceptually)**

1. **Initial Render:**

   * React builds a **Virtual DOM tree** from your JSX components.
   * Then it renders it to the **real DOM**.

2. **Update:**

   * When a component’s state or props change, React creates a **new Virtual DOM tree**.
   * React compares the **new VDOM tree** with the **previous VDOM tree** using a **diffing algorithm**.
   * React calculates the **minimal set of changes (patches)** needed.

3. **Reconciliation:**

   * React updates **only the parts of the real DOM that changed**, instead of re-rendering the entire page.

---

### **4. Example in React**

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**What happens internally:**

1. Initial render → Virtual DOM is created for `<div><h1>0</h1><button>Increment</button></div>`.
2. User clicks the button → `count` changes → React creates a **new Virtual DOM** with `<h1>1</h1>`.
3. React compares old VDOM and new VDOM → only `<h1>` changed.
4. React updates **only `<h1>`** in the real DOM, not the whole `<div>`.

 This is **why React apps are fast**, even for complex UIs.

---

### **5. Virtual DOM vs Real DOM**

| Feature      | Real DOM                    | Virtual DOM                   |
| ------------ | --------------------------- | ----------------------------- |
| Nature       | Browser’s actual DOM        | In-memory lightweight copy    |
| Update speed | Slow                        | Fast, minimal changes         |
| Manipulation | Direct                      | Through React / diffing       |
| Re-render    | Whole DOM or subtree        | Only changed nodes            |
| Example      | `document.getElementById()` | React’s internal VDOM diffing |

---

### **6. Key insight**

* Virtual DOM **abstracts the real DOM**.
* React efficiently updates only the necessary parts.
* This is why React encourages **declarative programming**: you just declare the UI, React handles the DOM updates under the hood.

---
---

## **1. What is a Single Page Application (SPA)?**

* A **Single Page Application** is a **web app that loads a single HTML page** and dynamically updates content **without reloading the whole page**.
* Unlike traditional multi-page apps (MPAs), SPAs **don’t fetch a new HTML page** on every user interaction.

**Example:** Gmail, Facebook, Instagram web version.

---

## **2. How SPAs work**

1. **Initial Load:**

   * Browser downloads a **single HTML file** + **CSS + JavaScript bundle**.
   * JavaScript initializes the app and renders content dynamically.

2. **User Interaction:**

   * When a user clicks a link or submits a form:

     * SPA **intercepts the action** using JS (usually through a router).
     * Fetches only **data from the server (API)** via AJAX / Fetch / Axios.
     * Updates the **DOM dynamically** without reloading the page.

3. **Routing:**

   * SPAs use **client-side routing**. Example: React Router.
   * The URL can change (`/dashboard`, `/profile`) without triggering a full page reload.

---

## **3. SPA vs MPA (Multi-Page Application)**

| Feature        | SPA                       | MPA                              |
| -------------- | ------------------------- | -------------------------------- |
| Page reload    | No reload                 | Full reload for every page       |
| Speed          | Faster after initial load | Slower, multiple reloads         |
| Server calls   | API calls only            | HTML pages + assets each request |
| State handling | Maintained across views   | Reset on every page load         |
| Example        | Gmail, Facebook           | WordPress blog, Wikipedia        |

---

## **4. Why React is perfect for SPAs**

1. **Virtual DOM** → Efficient updates without full page reload.
2. **Component-based architecture** → UI divided into reusable components.
3. **Client-side routing** → React Router manages SPA URLs.
4. **State management** → Redux / Context API helps maintain state across views.
5. **Fast UX** → Only data is fetched, not full HTML pages.

---

## **5. Basic React SPA Example**

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() { return <h1>Home Page</h1>; }
function About() { return <h1>About Page</h1>; }

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

 **What happens:**

* Clicking links **does not reload the page**.
* React dynamically renders `<Home />` or `<About />` in the same HTML page.

---

### **6. Key insight**

* **SPA = single HTML page, dynamic content updates.**
* **Benefits:** Faster, smoother UX, better state handling.
* **Drawbacks:** Initial load can be heavy, SEO needs extra work (SSR / prerendering).

---

---

## **1. What is an MPA (Multi-Page Application)?**

* **Definition:** A **Multi-Page Application** is a traditional web app where **each page is a separate HTML file**.
* Whenever the user navigates to a new page, the **browser requests a new HTML page from the server**.

**Examples:**

* Amazon, eBay, WordPress blogs, Wikipedia.

---

## **2. How MPA works**

1. **User requests a page:**

   * Example: User goes to `www.example.com/about`.
2. **Server responds:**

   * Server sends a **full HTML page**, along with CSS, JS, images.
3. **Browser renders:**

   * The browser renders the entire page.
4. **Navigation to another page:**

   * Example: User clicks “Contact”.
   * Browser makes **another request**, loads a new HTML page, and reloads the entire DOM.

**Flowchart:**

```
User Clicks Link → Server Request → Server Sends HTML → Browser Renders
```

---

## **3. MPA vs SPA (Quick Comparison)**

| Feature          | MPA                          | SPA                                         |
| ---------------- | ---------------------------- | ------------------------------------------- |
| Page reload      | Reloads entire page          | No reload, dynamic content                  |
| Server requests  | Multiple full-page requests  | Only API / data requests after initial load |
| Speed            | Slower after each navigation | Faster after initial load                   |
| State management | Resets after page reload     | Maintains state across views                |
| Complexity       | Simple to implement          | Requires JS framework (React, Vue)          |
| Example          | Amazon, Wikipedia            | Gmail, Facebook                             |

---

## **4. Advantages of MPA**

1. Simple structure; easy to implement with HTML + server-side languages.
2. SEO-friendly by default (since each page has its own URL and content).
3. Works even if JavaScript is disabled.

---

## **5. Disadvantages of MPA**

1. Slower navigation due to **full page reloads**.
2. More server load (every page request hits the server).
3. State handling is harder (data resets on each page load).

---

### **6. Key insight**

* **MPA:** Traditional web apps → multiple HTML pages → full reloads on navigation.
* **SPA:** Modern web apps → single HTML page → dynamic content update → faster UX.

---
 
  
---

## **1. What is Client-Side Rendering (CSR)?**

* **CSR** is a rendering technique where the **browser (client) is responsible for generating the HTML dynamically** using JavaScript.
* The server usually sends a **bare-bones HTML page** with a `<div id="root"></div>` and JS bundles.
* The **JS code then renders the full UI** in the browser.

**Example:** React, Angular, Vue apps by default use CSR.

---

## **2. How CSR works**

1. **Initial request:**

   * User requests `www.example.com`.
   * Server sends **minimal HTML + JS bundle**.

2. **Browser executes JS:**

   * The JS library/framework (React, Vue) **renders the UI** inside a container (`<div id="root">`).

3. **Subsequent actions:**

   * When the user clicks links or interacts, **data is fetched via API calls** (AJAX / Fetch / Axios).
   * The page updates **dynamically without full reload**.

**Flowchart:**

```
User → Browser → Request HTML → Server sends HTML+JS → Browser executes JS → UI rendered
```

---

## **3. CSR Example in React**

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

* **What happens:**

  * The server sends only `<div id="root"></div>` and JS bundle.
  * React renders `<h1>` and `<button>` dynamically in the browser.
  * Updates are handled in the **client-side**.

---

## **4. CSR vs SSR (Server-Side Rendering)**

| Feature            | CSR                        | SSR                          |
| ------------------ | -------------------------- | ---------------------------- |
| Who renders HTML   | Browser (client)           | Server                       |
| Initial load speed | Slower (JS must execute)   | Faster (HTML ready)          |
| SEO                | Harder, needs extra tools  | Better SEO by default        |
| Page updates       | Dynamically without reload | Requires new server requests |
| Example            | React SPA                  | Next.js, Nuxt.js (with SSR)  |

---

## **5. Advantages of CSR**

1. **Fast interactions after initial load** (no full page reloads).
2. **Rich user experience** (dynamic, app-like).
3. **Decoupled frontend & backend** (API-driven apps).

---

## **6. Disadvantages of CSR**

1. **Slower initial load** (JS bundle must download and execute).
2. **SEO challenges** (search engines may not index dynamic content well without SSR or prerendering).
3. **Heavier browser load** for large apps.

---

### **Key insight**

* **CSR = client renders HTML dynamically.**
* React, Vue, Angular SPAs mostly use CSR by default.
* Great for **dynamic, interactive web apps**.

---
 
---

## **1. What is a Server?**

* A **server** is a computer or system that **provides resources, data, or services** to other computers (clients) over a network (usually the internet).
* In web development, the server **hosts websites, APIs, and databases**.

### **Key Roles of a Server**

1. **Handles requests** from clients.
2. **Processes logic** (e.g., authentication, database queries, calculations).
3. **Sends responses** (HTML, JSON, images, etc.) back to the client.

**Example:**

* When you go to `www.example.com`, your browser sends a request → the server sends back HTML/CSS/JS files.

---

## **2. What is a Browser (Client)?**

* A **browser** is a **program that runs on the user’s device** to access web content.
* Examples: Chrome, Firefox, Edge.

### **Key Roles of a Browser**

1. **Sends HTTP requests** to servers.
2. **Renders content** (HTML, CSS, JS) for the user.
3. **Executes client-side logic** (JavaScript) to make web pages interactive.

**Example:**

* React, Vue, or vanilla JS runs in the browser to update the DOM dynamically.

---

## **3. Server vs Browser – Quick Comparison**

| Feature     | Server                                       | Browser (Client)                      |
| ----------- | -------------------------------------------- | ------------------------------------- |
| Location    | Remote machine or cloud                      | User’s device                         |
| Purpose     | Provide data/resources                       | Display content & handle interaction  |
| Programming | Node.js, Python, PHP, Java, etc.             | JavaScript, WebAssembly               |
| Rendering   | Can render HTML (SSR) or send raw data (API) | Renders HTML/CSS/JS to UI             |
| Examples    | Apache, Nginx, Express.js                    | Chrome, Firefox                       |
| Storage     | Databases, files                             | Cookies, localStorage, sessionStorage |
| Control     | Full control of backend                      | Limited to security sandbox           |

---

## **4. How They Work Together**

1. **User opens URL in browser** → Browser sends HTTP request to server.
2. **Server processes request** → Fetches data or renders HTML.
3. **Server sends response** → Browser receives HTML, CSS, JS.
4. **Browser renders page** → Executes JavaScript, handles interactivity.

**Flow:**

```
User → Browser → HTTP Request → Server → Response → Browser → Render & Interact
```

---

### **Key insight**

* **Server = brain / storage / processing hub**
* **Browser = eyes / interface / executor**

Modern frameworks blur the line:

* **CSR:** Browser handles rendering and updates.
* **SSR:** Server sends pre-rendered HTML.

---
 
 

---

# **1. What are `export` and `import`?**

* **`export`**: Allows you to **share variables, functions, or classes** from one module so that other modules can use them.
* **`import`**: Allows you to **bring in exported code** from another module.
* Both are part of **ES Modules (ESM)** syntax in modern JS.

---

# **2. Types of Exports**

There are **two main types**:

## **A. Named Exports**

* You can export **multiple things** from a single module.
* Imported **must match the exported names**.

**Example:**

```js
// math.js
export const pi = 3.14;
export function add(a, b) { return a + b; }
export class Circle { constructor(radius) { this.radius = radius; } }
```

**Importing named exports:**

```js
// main.js
import { pi, add, Circle } from './math.js';
console.log(pi);         // 3.14
console.log(add(2,3));   // 5
const c = new Circle(5);
```

 You can also **rename** while importing:

```js
import { pi as PI } from './math.js';
console.log(PI);
```

---

## **B. Default Exports**

* Each module can have **only one default export**.
* Imported **name can be anything**.

**Example:**

```js
// greet.js
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

**Importing default export:**

```js
// main.js
import greetFunction from './greet.js';
console.log(greetFunction("Alice")); // Hello, Alice!
```

---

# **3. Import Types**

1. **Named Import** – imports specific exports by name:

```js
import { add, pi } from './math.js';
```

2. **Default Import** – imports the default export:

```js
import greet from './greet.js';
```

3. **Mixed Import** – default + named in one statement:

```js
import greet, { pi, add } from './math-and-greet.js';
```

4. **Import all as namespace** – import everything under a single object:

```js
import * as math from './math.js';
console.log(math.pi);    // 3.14
console.log(math.add(2,3)); // 5
```

---

# **4. Re-exporting**

You can **re-export** from another module:

```js
// utils.js
export { add, pi } from './math.js';
export { default as greet } from './greet.js';
```

* Allows you to **aggregate exports** in one file.

---

# **5. Key Points / Rules**

* **Named exports:** `export {name}` or `export const name = ...`
* **Default exports:** `export default ...`
* You **can have multiple named exports**, but only **one default export** per module.
* When importing:

  * Named → must match (or rename)
  * Default → can name anything

---

### **Quick Summary Table**

| Export Type | Syntax                           | Import Example                      |
| ----------- | -------------------------------- | ----------------------------------- |
| Named       | `export const x = 5;`            | `import { x } from './file.js';`    |
| Default     | `export default function(){}`    | `import myFunc from './file.js';`   |
| Namespace   | N/A (import type)                | `import * as obj from './file.js';` |
| Re-export   | `export { x } from './file.js';` | `import { x } from './utils.js';`   |

---

 
 
---

## **1. What is JSX?**

* **JSX** stands for **JavaScript XML**.
* It’s a **syntax extension for JavaScript** that lets you write **HTML-like code inside JS**.
* React uses JSX to describe what the **UI should look like**.

**Key idea:** JSX is **not HTML**, but it looks like HTML and is **compiled to `React.createElement` calls** behind the scenes.

---

## **2. Why JSX is useful**

1. **Readable UI code:**

   ```jsx
   <h1>Hello World</h1>
   ```

   looks like HTML but is part of JS.
2. **Dynamic content:**
   You can embed JavaScript expressions with `{}`.

   ```jsx
   const name = "Alice";
   <h1>Hello {name}</h1> // Renders: Hello Alice
   ```
3. **Component-based structure:**
   Makes it easier to write and reuse components.

---

## **3. JSX Syntax Rules**

1. **Use `{}` to embed JS expressions**

   ```jsx
   const a = 5;
   <p>{a + 10}</p> // Renders 15
   ```

2. **Must have a single root element**

   ```jsx
   // ❌ Invalid
   <h1>Hello</h1>
   <p>World</p>

   // ✅ Valid
   <div>
     <h1>Hello</h1>
     <p>World</p>
   </div>
   ```

3. **Use `className` instead of `class`**

   ```jsx
   <div className="container">Content</div>
   ```

4. **Self-closing tags for empty elements**

   ```jsx
   <img src="logo.png" />
   <input type="text" />
   ```

5. **CamelCase for event handlers**

   ```jsx
   <button onClick={handleClick}>Click Me</button>
   ```

---

## **4. How JSX works under the hood**

* JSX is **transpiled by Babel** to `React.createElement` calls.

Example:

```jsx
const element = <h1>Hello World</h1>;
```

is transformed to:

```js
const element = React.createElement(
  'h1',
  null,
  'Hello World'
);
```

* React then uses this to create **Virtual DOM nodes**.

---

## **5. Embedding JavaScript and Expressions**

* **Variables**

```jsx
const name = "Alice";
<h1>Hello {name}</h1>
```

* **Functions**

```jsx
function greet(user) { return `Hello ${user}`; }
<h1>{greet("Alice")}</h1>
```

* **Conditional Rendering**

```jsx
const loggedIn = true;
<p>{loggedIn ? "Welcome back!" : "Please log in"}</p>
```

* **Lists / Arrays**

```jsx
const items = ["Apple", "Banana", "Cherry"];
<ul>
  {items.map(item => <li key={item}>{item}</li>)}
</ul>
```

> **Note:** `key` is required when rendering lists in React.

---

## **6. Key Insight**

* JSX = **HTML-like syntax in JS**
* Makes **React code readable and declarative**
* Always compiled to **React.createElement** → Virtual DOM → Real DOM

---
 
 

---

## **1. What is a Component?**

* A **component** is a **reusable piece of UI** in React.
* Think of it as a **function or class** that returns JSX to display on the screen.
* Components **allow you to split your UI** into independent, reusable parts.

---

## **2. Types of Components**

### **A. Functional Components (Modern way)**

* These are **JS functions** that return JSX.
* Can use **state and side effects** via **React Hooks** (`useState`, `useEffect`, etc.).

**Example:**

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

---

### **B. Class Components (Older way)**

* ES6 **classes** that extend `React.Component`.
* Have **state** and **lifecycle methods** (`componentDidMount`, `componentDidUpdate`).

**Example:**

```jsx
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

> Note: Functional components with Hooks are now the recommended approach.

---

## **3. Component Structure**

* **Props:** Read-only values passed from parent to child.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
<Greeting name="Alice" />
```

* **State:** Internal data that can change over time.

```jsx
const [count, setCount] = useState(0);
```

* **Lifecycle / Effects:** Code that runs at specific times (mount, update, unmount).

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

---

## **4. Component Reusability**

* Components can be **nested** inside other components.

```jsx
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
```

* This allows **modular and maintainable code**.

---

## **5. Functional vs Class Components – Quick Comparison**

| Feature     | Functional  | Class                     |
| ----------- | ----------- | ------------------------- |
| Syntax      | JS function | ES6 class                 |
| State       | `useState`  | `this.state`              |
| Lifecycle   | `useEffect` | `componentDidMount`, etc. |
| Simpler     | ✅           | ❌                         |
| Recommended | ✅           | ❌ (legacy)                |

---

### **Key insight**

* **Component = reusable UI building block**
* Props = input, State = internal data
* Functional components + Hooks = modern React way

---
 
 

---

## **1. What is a Functional Component?**

* A **functional component** is a **JavaScript function** that returns JSX (UI).
* It **does not require classes**.
* It can **accept props** (input from parent components) and manage **state** using **Hooks**.

**Basic Syntax:**

```jsx
function MyComponent(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

* Or as an **arrow function**:

```jsx
const MyComponent = (props) => <h1>Hello, {props.name}</h1>;
```

---

## **2. Props in Functional Components**

* **Props** = data passed from parent to child.
* Props are **read-only**, i.e., you cannot modify them inside the component.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="Alice" />
```

---

## **3. State in Functional Components (useState Hook)**

* **useState** allows a functional component to have internal, mutable state.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // count = state, setCount = updater

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

* **Explanation:**

  * `useState(0)` → initial value 0
  * `count` → current state
  * `setCount()` → updates the state and triggers re-render

---

## **4. Side Effects (useEffect Hook)**

* **useEffect** allows functional components to handle lifecycle events like `componentDidMount` or `componentDidUpdate`.

```jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency = run once

  return <h1>Seconds: {seconds}</h1>;
}
```

---

## **5. Advantages of Functional Components**

1. **Simpler syntax** than class components.
2. **No `this` keyword** – less confusing.
3. **Hooks** allow full functionality (state, lifecycle, context).
4. **Easier to test and maintain**.
5. **Recommended for modern React** (React team encourages functional + hooks).

---

 

---

### **Key insight**

* Functional Components are **modern, clean, and powerful**.
* Hooks let them do everything class components can do.
* Preferred approach in almost all new React projects.

---
 

 .

---

## **1. What is a Class Component?**

* A **class component** is a React component defined using **ES6 class syntax**.
* It **extends `React.Component`** and must have a **`render()` method** that returns JSX.
* Can have **state** and **lifecycle methods**.

**Example:**

```jsx
import React from "react";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Alice" };
  }

  render() {
    return <h1>Hello, {this.state.name}!</h1>;
  }
}

export default Greeting;
```

---

## **2. Lifecycle of a Class Component**

A **React class component goes through three main phases**:

1. **Mounting** → When component is created and inserted into DOM
2. **Updating** → When component re-renders due to state/props change
3. **Unmounting** → When component is removed from DOM

---

## **3. Mounting Phase Methods**

| Method                                          | When called                 | Purpose                                            |
| ----------------------------------------------- | --------------------------- | -------------------------------------------------- |
| `constructor(props)`                            | Before component is mounted | Initialize state, bind methods                     |
| `static getDerivedStateFromProps(props, state)` | Before render               | Update state based on props (rarely used)          |
| `render()`                                      | During mount                | Returns JSX to render UI                           |
| `componentDidMount()`                           | After component is mounted  | Ideal for API calls, DOM operations, subscriptions |

**Example:**

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return <h1>{this.state.time.toLocaleTimeString()}</h1>;
  }
}
```

---

## **4. Updating Phase Methods**

Triggered when **state or props change**.

| Method                                               | When called        | Purpose                                         |
| ---------------------------------------------------- | ------------------ | ----------------------------------------------- |
| `static getDerivedStateFromProps(props, state)`      | Before render      | Sync state with props                           |
| `shouldComponentUpdate(nextProps, nextState)`        | Before render      | Decide whether to re-render (return true/false) |
| `render()`                                           | During update      | Returns JSX                                     |
| `getSnapshotBeforeUpdate(prevProps, prevState)`      | Before DOM updates | Capture info from DOM (like scroll position)    |
| `componentDidUpdate(prevProps, prevState, snapshot)` | After DOM updates  | Useful for network requests or DOM operations   |

---

## **5. Unmounting Phase Methods**

Called **before component is removed from DOM**.

| Method                   | Purpose                                                        |
| ------------------------ | -------------------------------------------------------------- |
| `componentWillUnmount()` | Clean up timers, cancel network requests, remove subscriptions |

**Example:**

```jsx
componentWillUnmount() {
  clearInterval(this.timerID);
}
```

---

## **6. Error Handling Lifecycle Methods (Optional)**

| Method                                   | Purpose                                           |
| ---------------------------------------- | ------------------------------------------------- |
| `static getDerivedStateFromError(error)` | Catch errors in child components and update state |
| `componentDidCatch(error, info)`         | Log error info (like stack trace)                 |

---

## **7. Lifecycle Flow Diagram (Simplified)**

```
Mounting:
constructor → getDerivedStateFromProps → render → componentDidMount

Updating:
getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate

Unmounting:
componentWillUnmount
```

---

## **8. Key Insight**

* **Class components = full control** over component lifecycle.
* **Lifecycle methods** allow developers to:

  * Initialize state
  * Fetch data
  * Perform DOM operations
  * Clean up resources
* With **Hooks in functional components**, most of these can now be done in a simpler way (`useState`, `useEffect`), which is why functional components are now preferred.

---

 Perfect! Let’s dive into **React Hooks**, which are a fundamental concept in modern React development. I’ll break it down clearly.

---

## **1. What are Hooks?**

* **Hooks** are functions that let **functional components** have **state and lifecycle features** previously only available in class components.
* Introduced in **React 16.8**.
* **Goal:** Avoid using classes, make code simpler, reusable, and easier to understand.

**Key hooks:** `useState`, `useEffect`, `useContext`, `useReducer`, `useRef`, `useMemo`, `useCallback`, etc.

---

## **2. Basic Hooks**

### **A. useState**

* Adds **state to functional components**.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // count = state, setCount = updater

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

* `useState(initialValue)` → returns `[state, setState]`

---

### **B. useEffect**

* Handles **side effects** (like lifecycle methods).
* Can replace **componentDidMount, componentDidUpdate, componentWillUnmount**.

```jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency = run once (mount)
  
  return <h1>Seconds: {seconds}</h1>;
}
```

* Dependency array `[]` controls **when effect runs**:

  * `[]` → run once (on mount)
  * `[count]` → run when `count` changes
  * No array → run on every render

---

### **C. useContext**

* Allows **sharing data across components** without prop drilling.

```jsx
import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Child() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}
```

---

### **D. useRef**

* Stores **mutable values** that **persist across renders** without causing re-renders.
* Can also reference **DOM elements**.

```jsx
import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const focusInput = () => inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

---

### **E. useReducer**

* Like `useState` but for **complex state logic**.
* Useful for **state machines or multiple state transitions**.

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

---

## **3. Rules of Hooks**

1. Only call hooks **at the top level** (not inside loops or conditions).
2. Only call hooks **inside React functional components** (or custom hooks).
3. Hooks should always start with `use` (e.g., `useState`, `useEffect`).

---

## **4. Why Hooks?**

* Replace class components → simpler, less boilerplate.
* Share logic across components via **custom hooks**.
* Handle **state, lifecycle, context, refs** in functional components.

---

### **Key Insight**

* Hooks = **functional components + class features**
* `useState` → state
* `useEffect` → lifecycle
* `useContext` → global data
* `useReducer` → complex state
* `useRef` → DOM or persistent values

---

 
 
---

## **1. What are Event Handlers?**

* **Event Handlers** are functions that run in response to **events** triggered by the user or browser.
* Examples of events: `click`, `change`, `submit`, `keydown`, `mouseover`.
* In React, **events are written in camelCase** (`onClick`, `onChange`) instead of lowercase like in HTML.

---

## **2. Basic Syntax in React**

```jsx
function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

* `onClick={handleClick}` → attaches the function to the button click.
* **Do NOT call the function immediately** (no parentheses) when assigning:

  ```jsx
  // ❌ Wrong
  <button onClick={handleClick()}>Click Me</button>
  ```

---

## **3. Common React Events**

| Event Type | React Attribute                                            | Example                                          |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------ |
| Mouse      | `onClick`, `onDoubleClick`, `onMouseEnter`, `onMouseLeave` | `<div onMouseEnter={handleHover}>Hover me</div>` |
| Keyboard   | `onKeyDown`, `onKeyPress`, `onKeyUp`                       | `<input onKeyDown={handleKey} />`                |
| Form       | `onChange`, `onSubmit`                                     | `<form onSubmit={handleSubmit}></form>`          |
| Focus      | `onFocus`, `onBlur`                                        | `<input onFocus={handleFocus} />`                |
| Clipboard  | `onCopy`, `onPaste`                                        | `<input onCopy={handleCopy} />`                  |

---

## **4. Passing Arguments to Event Handlers**

```jsx
function Button({ id }) {
  const handleClick = (id, event) => {
    alert(`Button ${id} clicked`);
    console.log(event); // Access native event
  };

  return <button onClick={(e) => handleClick(id, e)}>Click Me</button>;
}
```

* Wrap the handler in an **arrow function** to pass arguments.

---

## **5. Synthetic Events**

* React wraps native browser events in **SyntheticEvent**, which is **cross-browser compatible**.
* SyntheticEvent behaves like normal DOM events, but React handles cleanup automatically.

**Example:**

```jsx
function Input() {
  const handleChange = (event) => {
    console.log(event.target.value); // Access input value
  };

  return <input type="text" onChange={handleChange} />;
}
```

---

## **6. Event Binding in Class Components**

In class components, you often need to **bind `this`**:

```jsx
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); // Bind this
  }

  handleClick() {
    alert("Clicked!");
  }

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

* Or use **arrow functions** to automatically bind `this`:

```jsx
handleClick = () => { alert("Clicked!"); }
```

---

## **7. Key Points**

1. React events use **camelCase** (`onClick`, `onChange`).
2. Assign **function reference**, don’t call it immediately.
3. React wraps events in **SyntheticEvent** for cross-browser compatibility.
4. Use arrow functions or bind in class components to handle `this`.

---

### **Key Insight**

* Event handlers in React are **how UI responds to user actions**.
* They work for both **functional components** (with Hooks) and **class components** (with state/lifecycle).

---
 
 

---

## **1. What is React Fiber?**

* **React Fiber** is the **reimplementation of React’s core rendering engine** introduced in **React 16**.
* Purpose: Make **rendering more efficient, flexible, and interruptible**.
* Think of Fiber as the **internal algorithm that React uses to build, update, and manage the Virtual DOM**.

**Key idea:** Fiber allows React to **split rendering work into chunks** and prioritize important updates.

---

## **2. Why React Fiber?**

Before Fiber, React used a **stack-based synchronous rendering algorithm**:

* Problem: **Large component trees could block the main thread** → UI lag, slow updates.
* Example: Animations or input could freeze while React updated a big tree.

**Fiber solves this by:**

1. **Incremental rendering:** Break work into units (fibers) and spread across multiple frames.
2. **Prioritization:** High-priority updates (like typing or animations) can interrupt low-priority ones (like network updates).
3. **Concurrency:** Enables React to schedule updates efficiently.

---

## **3. How Fiber Works (Conceptually)**

1. React represents each element/component as a **Fiber node**.

2. Each Fiber has:

   * Type (function/class/host component)
   * Props and state
   * Parent/child/sibling links
   * Priority and effects list

3. React creates a **Fiber tree** (similar to the Virtual DOM tree).

4. **Rendering phases:**

* **Render (Reconciliation) Phase:**

  * Fiber tree is built or updated **offscreen**.
  * Can be paused, aborted, or reused.
  * Does not touch the real DOM yet.

* **Commit Phase:**

  * Fiber tree changes are **committed to the real DOM**.
  * This phase is **synchronous** (cannot be interrupted).

**Flow:**

```
JSX -> Virtual DOM -> Fiber Tree (Render) -> Commit to DOM
```

---

## **4. Key Features of Fiber**

| Feature               | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| Incremental rendering | Updates split into units, processed over multiple frames   |
| Prioritization        | High-priority updates (user input) run before low-priority |
| Better error handling | Fiber improves error boundaries and recovery               |
| Concurrency support   | Enables future features like Concurrent Mode and Suspense  |

---

## **5. Fiber vs Old React (Stack Reconciler)**

| Feature         | Stack Reconciler (Pre-React16) | Fiber                      |
| --------------- | ------------------------------ | -------------------------- |
| Rendering       | Synchronous, blocking          | Incremental, interruptible |
| Update priority | No prioritization              | Prioritized updates        |
| Large trees     | Can freeze UI                  | Can spread work over time  |
| Concurrency     | No                             | Supports Concurrent Mode   |

---

## **6. Why Developers Care**

* React Fiber **improves performance** for complex apps.
* Enables **Concurrent Mode** → better animations, responsiveness, and async rendering.
* Most **React internals now use Fiber**, but developers **don’t manipulate it directly**.
* Understanding Fiber helps in **performance optimization** and understanding **why React sometimes pauses or batches updates**.

---

### **Key Insight**

* **Fiber = React’s internal scheduler and reconciliation engine**
* Splits rendering into **units of work** → smooth UI, prioritization, concurrency
* Everything you write in JSX ultimately goes through **Fiber** before reaching the real DOM

---

 

---

#  **What is `useEffect`?**

* `useEffect` is a **React Hook** that lets you perform **side effects** in a **functional component**.
* Side effects = anything that affects something outside of the component’s render process.

👉 Examples of side effects:

* Fetching data from an API
* Setting up a subscription (WebSocket, event listener)
* Updating the DOM manually
* Starting/stopping timers

---

#  **Syntax**

```jsx
useEffect(() => {
  // Side effect logic (runs after render)

  return () => {
    // Cleanup (optional) runs before unmount or before next effect run
  };
}, [dependencies]);
```

---

#  **How it Works**

1. Component renders.
2. After painting to the DOM, React runs the effect.
3. If the effect has dependencies, React decides whether to re-run it.
4. If the effect returns a cleanup function, React runs it before:

   * The component unmounts
   * OR before running the effect again (on re-render)

---

#  **Dependencies Behavior**

The second argument (`[dependencies]`) controls when the effect runs:

| Dependency Array        | When it runs                                                      |
| ----------------------- | ----------------------------------------------------------------- |
| `useEffect(fn)`         | Runs **after every render**                                       |
| `useEffect(fn, [])`     | Runs **only once** (after first render, like `componentDidMount`) |
| `useEffect(fn, [a, b])` | Runs when **`a` or `b` changes**                                  |

---

#  **Examples**

### 1. **Run on Every Render**

```jsx
useEffect(() => {
  console.log("Runs after every render");
});
```

### 2. **Run Only Once**

```jsx
useEffect(() => {
  console.log("Runs only once on mount");
}, []);
```

### 3. **Run When Specific State Changes**

```jsx
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

### 4. **Cleanup (like componentWillUnmount)**

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer running");
  }, 1000);

  return () => {
    clearInterval(timer); // cleanup
    console.log("Timer cleared");
  };
}, []);
```

---

#  **Class Component Equivalent**

In **class components**, we had lifecycle methods:

| Class Method           | Equivalent `useEffect`     |
| ---------------------- | -------------------------- |
| `componentDidMount`    | `useEffect(fn, [])`        |
| `componentDidUpdate`   | `useEffect(fn, [deps])`    |
| `componentWillUnmount` | Cleanup inside `useEffect` |

---

#  **Real-World Example: Fetch Data**

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));

    // optional cleanup
    return () => console.log("Cleanup before unmount");
  }, []); // run once on mount

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

---

#  **Key Points to Remember**

* **Runs after render**, not during render.
* Use **cleanup** to prevent memory leaks (timers, subscriptions).
* Dependency array is very important → prevents unnecessary re-renders.
* `useEffect` replaces **3 lifecycle methods** (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

---
#  **Controlled Component**

A **controlled component** is a form element (like `<input>`, `<textarea>`, `<select>`) that is **controlled by React state**.

* The **value** of the input is stored in React’s state.
* The UI updates whenever the state changes.
* You always need an `onChange` handler to update the state.

 Basically, React is the **single source of truth** for the form data.

### Example: Controlled Input

```jsx
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={name} // controlled by React state
        onChange={(e) => setName(e.target.value)} 
      />
      <p>You typed: {name}</p>
    </div>
  );
}
```

 Advantages:

* Easy validation (you always know the current value).
* State-driven → predictable.
* Useful when form data must be processed or stored immediately.

 Disadvantage:

* More code (boilerplate).
* Every keystroke re-renders (though React is optimized).

---

#  **Uncontrolled Component**

An **uncontrolled component** is when the form element **keeps its own internal state** — React does not control it directly.

* Instead of `value`, you use `defaultValue` (or no value).
* You access the current value using a **ref**.

 Here, the **DOM itself is the source of truth**, not React.

### Example: Uncontrolled Input

```jsx
import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert("You typed: " + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} defaultValue="Hello" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

 Advantages:

* Less code (no `onChange`, no state updates).
* Useful for quick forms or when integrating with non-React code (like jQuery plugins).

 Disadvantages:

* Harder to validate in real-time.
* Less predictable since React doesn’t know the value until you read it.

---

#  **Comparison Table**

| Feature         | Controlled                          | Uncontrolled                     |
| --------------- | ----------------------------------- | -------------------------------- |
| Source of truth | React state                         | DOM element                      |
| Access value    | `state` variable                    | `ref.current.value`              |
| Validation      | Easy (since value is in state)      | Harder (need to read DOM value)  |
| Code            | More boilerplate                    | Less code                        |
| Use case        | Complex forms, real-time validation | Simple forms, external libraries |

---

#  **Analogy**

* **Controlled Component** → Like a parent constantly monitoring a child (React always knows what’s typed).
* **Uncontrolled Component** → Like a child doing their own thing, and the parent only checks when needed.

---
---

#  **What is a Synthetic Event?**

In React, when you attach an event handler (like `onClick`, `onChange`, etc.), you don’t get the **native browser event** directly.
Instead, React wraps it in a **SyntheticEvent** — a cross-browser wrapper around the native event.

 Purpose:

* To make events **work the same across all browsers**.
* To improve **performance** with event delegation.
* To give React more control over events (pooling, batching updates, etc.).

---

#  **Example**

```jsx
function App() {
  const handleClick = (e) => {
    console.log(e); // SyntheticEvent
    console.log(e.nativeEvent); // Real browser event
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

* `e` → React SyntheticEvent (React’s version of the event).
* `e.nativeEvent` → The actual browser DOM event.

---

#  **Why Synthetic Events?**

1. **Cross-browser compatibility**

   * Older browsers (like IE) had different event APIs.
   * React normalizes them so your code works everywhere.

2. **Event Delegation**

   * Instead of attaching events to every node, React attaches a **single event listener at the root (`document`)**.
   * When an event happens, React figures out which component should handle it.
   * → Faster and uses less memory.

3. **Batching Updates**

   * Synthetic events let React control **when state updates happen** (important for performance).

---

#  **Event Pooling (React ≤ v16)**

In older React versions, SyntheticEvents were **pooled** for performance:

* The same event object was reused across multiple events.
* This meant you couldn’t access `e.target` after an async call.

Example (old React):

```jsx
function App() {
  const handleChange = (e) => {
    setTimeout(() => {
      console.log(e.target.value); // ❌ ERROR (event already nullified)
    }, 1000);
  };

  return <input onChange={handleChange} />;
}
```

 Fix (old way):

```jsx
const value = e.target.value;
setTimeout(() => {
  console.log(value); // works
}, 1000);
```

 Note: **React 17+ no longer uses event pooling**, so now you can safely use `e` in async calls.

---

#  **Synthetic vs Native Event**

| Feature       | SyntheticEvent        | Native DOM Event              |
| ------------- | --------------------- | ----------------------------- |
| Origin        | Created by React      | Created by Browser            |
| Cross-browser | Normalized            | Different across browsers     |
| Delegation    | Handled at root level | Attached directly to elements |
| Access        | `e` in handler        | `e.nativeEvent`               |
| Pooling       | Used in React ≤ 16    | N/A                           |

---

#  **Example: Both Events**

```jsx
function App() {
  const handleClick = (e) => {
    console.log("Synthetic Event:", e.type); // "click"
    console.log("Native Event:", e.nativeEvent.type); // "click"
  };

  return <button onClick={handleClick}>Click</button>;
}
```

---

 **In short:**

* **SyntheticEvent** is React’s wrapper around the browser event.
* Makes events consistent, performant, and easier to manage.
* You can always access the real event via `e.nativeEvent`.

---

---

#  **What is Event Pooling?**

In React (before v17), every event you handled (`onClick`, `onChange`, etc.) was a **SyntheticEvent**.
To improve performance, React used an optimization called **event pooling**.

 Event pooling means:

* Instead of creating a new event object for every event, React **reused (pooled) a single event object**.
* After your handler finished, React **cleared (nullified)** its properties (`e.target`, `e.type`, etc.) so it could recycle it for the next event.

---

#  **Why Event Pooling?**

* Creating lots of event objects in large apps is expensive.
* Pooling reduced **memory usage** and **GC (garbage collection) pressure**.

---

#  **Problem With Event Pooling**

Since React cleared the event object after the handler finished, you **couldn’t use it asynchronously**.

### Example (React ≤ 16):

```jsx
function App() {
  const handleChange = (e) => {
    setTimeout(() => {
      console.log(e.target.value); 
      // ❌ Error: e.target is null because event was cleared
    }, 1000);
  };

  return <input onChange={handleChange} />;
}
```

---

#  **Solutions in Older React**

###  Save the value immediately

```jsx
const handleChange = (e) => {
  const value = e.target.value;
  setTimeout(() => {
    console.log(value); // works fine
  }, 1000);
};
```

###  Call `e.persist()` to prevent pooling

```jsx
const handleChange = (e) => {
  e.persist(); // tells React: "don’t pool this event"
  setTimeout(() => {
    console.log(e.target.value); // works now
  }, 1000);
};
```

---

#  **React 17+ Update**

* Starting with **React 17**, **event pooling was removed**.
* Now, SyntheticEvents behave like normal DOM events — you can safely use them asynchronously.

So in React 17 and later:

```jsx
const handleChange = (e) => {
  setTimeout(() => {
    console.log(e.target.value);  
  }, 1000);
};
```

---

#  **Summary**

* **Event pooling** = React reused one event object for performance.
* Problem: Event properties became `null` after the handler finished.
* Fix: Use `e.persist()` or copy needed values.
* **React 17+** → pooling is **removed**, no need to worry anymore.

---
 
---

#  **What is a Fragment?**

* A **React Fragment** lets you group multiple elements **without adding extra nodes to the DOM**.
* In HTML, you usually wrap multiple elements in a `<div>` or another container.
* Fragments solve the problem of **unnecessary wrapper elements** that can clutter the DOM or break CSS layouts.

---

#  **Why Use Fragments?**

1. Avoid extra `<div>` wrappers (aka "div soup").
2. Keep the DOM **clean and semantic**.
3. Necessary when returning **multiple elements** from a component (because JSX must return **one root element**).

---

#  **Syntax**

### 1. Using `<React.Fragment>`

```jsx
import React from "react";

function MyComponent() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Description</p>
    </React.Fragment>
  );
}
```

* Multiple elements are grouped, but **no extra DOM node is created**.

---

### 2. Using Short Syntax `<>` `</>` (shorthand)

```jsx
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}
```

* Same behavior, shorter syntax.
* Cannot use `key` with this shorthand if needed (use `<React.Fragment>` in that case).

---

#  **Example With Map (Lists)**

When rendering a list, sometimes you need a key for each item:

```jsx
function ItemList({ items }) {
  return items.map(item => (
    <React.Fragment key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </React.Fragment>
  ));
}
```

* Using a fragment here avoids adding an extra `<div>` for each item.
* `key` can only be used on `<React.Fragment>`, **not shorthand `<>`**.

---

#  **DOM Comparison**

### Without Fragment

```jsx
<div>
  <h1>Title</h1>
  <p>Description</p>
</div>
```

* Adds an extra `<div>` to the DOM.

### With Fragment

```jsx
<h1>Title</h1>
<p>Description</p>
```

* No extra wrapper, **cleaner DOM**.

---

#  **Key Points**

1. Fragments let you **return multiple children** from a component.
2. No additional DOM element is created.
3. Use `React.Fragment` when you need a **key or other attributes**.
4. Use shorthand `<> </>` for simple grouping without keys.

---

 **Analogy:**

* `<div>` → physical container in the DOM.
* `<Fragment>` → invisible container, just groups things logically in React.

---

---

#  **What is Transpilation?**

* **Transpilation** = transforming source code from **one language version or syntax** to another **equivalent version**.
* In JavaScript/React, it usually means:

> Converting **modern JS/JSX code** into **older JS code** that browsers can understand.

* Unlike **compilation** (source → machine code), **transpilation** → source → source (same language, different version).

---

#  **Why Transpilation is Needed**

1. **Browser Compatibility:**

   * Older browsers do **not support ES6+ features** (`let`, `const`, arrow functions, classes, async/await).
   * React JSX (`<div>Hello</div>`) is **not valid JavaScript**.

2. **React JSX → JavaScript:**

   * Browsers cannot natively understand JSX, so we **transpile JSX to `React.createElement` calls**.

---

#  **Common Transpilers in React**

### 1. **Babel**

* Most popular transpiler in React projects.
* Converts modern JS (ES6+) and JSX to ES5 JS for browser compatibility.

**Example: JSX → JS**

```jsx
// JSX
const element = <h1>Hello, React!</h1>;
```

**Transpiled JS**

```js
const element = React.createElement("h1", null, "Hello, React!");
```

### 2. **TypeScript Compiler (tsc)**

* Converts TypeScript → JavaScript.
* Also handles JSX if configured.

---

#  **Transpilation in Action**

Suppose you write **modern JS with JSX**:

```jsx
const App = () => {
  const name = "Alice";
  return <h1>Hello, {name}!</h1>;
};
```

After **Babel transpilation**:

```js
const App = function App() {
  var name = "Alice";
  return React.createElement("h1", null, "Hello, ", name, "!");
};
```

* JSX → `React.createElement`
* `const` → `var` (for older browsers)
* Arrow function → normal function

---

#  **Key Points**

1. **Transpilation = source → source transformation** (not machine code).
2. React projects **must be transpiled** for browser compatibility.
3. Babel + Vite/Webpack handles this automatically.
4. Transpilation is **different from polyfills**:

   * Transpilation = convert code
   * Polyfill = provide missing features (e.g., `Promise`, `fetch`)

---

 **Analogy:**

* You write in **modern English**, but the reader only understands **Old English** → a translator converts your sentences without changing the meaning.
---

#  **1. Prop Drilling**

### **Definition:**

* **Prop Drilling** happens when you pass data from a parent component down to deeply nested child components **through multiple intermediate components**, even if those intermediate components don’t use the data.

* Essentially, **props are "drilled" through layers** just to reach the component that needs them.

---

### **Example of Prop Drilling**

```jsx
function App() {
  const user = "Alice";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello, {user}!</h1>;
}
```

* Here, `user` goes through **Parent → Child → GrandChild**.
* Problem: If you add more nested layers, props become tedious and harder to manage.

---

### **Problems with Prop Drilling**

1. Makes code **less maintainable**.
2. Intermediate components **don’t need the data** but still must pass it.
3. Difficult to **refactor or reuse components**.

---

#  **2. State Lifting**

### **Definition:**

* **State Lifting** is the process of **moving state up** to the **closest common ancestor** so multiple components can share it.
* Helps to **avoid duplication** and coordinate updates between components.

---

### **Example of State Lifting**

Suppose we have two components that need the same state:

```jsx
function App() {
  const [count, setCount] = React.useState(0); // lifted state

  return (
    <div>
      <Display count={count} />
      <Controls setCount={setCount} />
    </div>
  );
}

function Display({ count }) {
  return <h1>Count: {count}</h1>;
}

function Controls({ setCount }) {
  return (
    <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
  );
}
```

* **State lives in the parent (`App`)** → both `Display` and `Controls` can access it.
* This **avoids duplicating state** in children and keeps data in sync.

---

#  **Prop Drilling vs State Lifting**

| Concept       | Description                                                        | Example Scenario                                               |
| ------------- | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| Prop Drilling | Passing props through many layers to reach a child                 | `App → Parent → Child → GrandChild`                            |
| State Lifting | Moving state up to a common parent so multiple children can use it | `App` holds `count`, `Display` shows it, `Controls` updates it |

---

#  **Tips to Avoid Deep Prop Drilling**

1. **Use Context API**

   * Provide data at top-level and consume it in any nested component without passing props manually.
2. **State Management Libraries** (Redux, Zustand, etc.)

   * Good for very complex apps with many levels of components.
3. **Component Composition**

   * Sometimes restructuring components can reduce drilling.

---

 **Analogy:**

* **Prop Drilling:** Passing a message through many people to reach the right person.
* **State Lifting:** Putting the message on a **shared noticeboard** everyone can see and update.

---

---

#  **What is Profiling in React?**

* **Profiling** = measuring how your React app performs, especially **how long components take to render and re-render**.
* Purpose: Identify **slow components or unnecessary renders** so you can optimize them.

---

#  **Why Profiling is Important**

1. React apps can become slow if components render too often.
2. Profiling helps you:

   * Detect performance bottlenecks.
   * Optimize expensive renders.
   * Make apps smoother and more responsive.

---

#  **How to Profile in React**

### **1. Using React DevTools Profiler**

* Install **React Developer Tools** browser extension.
* Go to the **Profiler** tab.
* Steps:

  1. Click **Record** to start profiling.
  2. Interact with your app (click buttons, type, navigate).
  3. Stop recording to see results.

---

### **Profiler Metrics**

| Metric              | Description                                                          |
| ------------------- | -------------------------------------------------------------------- |
| **Commit Duration** | Time React took to render and commit changes to the DOM.             |
| **Render Count**    | How many times a component rendered during the session.              |
| **Wasted Time**     | Time spent rendering components that did not actually change the UI. |

---

### **2. Using `<Profiler>` Component in Code**

React provides a **Profiler API** to programmatically measure performance.

```jsx
import { Profiler } from "react";

function onRenderCallback(
  id, // the "id" prop of the Profiler tree
   phase, // "mount" or "update"
  actualDuration, // time spent rendering the component
  baseDuration, // estimated time without memoization
  startTime, // when React started rendering
  commitTime, // when React committed changes
  interactions // Set of interactions
) {
  console.log({ id, phase, actualDuration });
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <MyComponent />
    </Profiler>
  );
}
```

* **`id`** → unique name for the component being profiled.
* **`onRenderCallback`** → receives metrics like **actual render time**, **mount/update phase**, etc.

---

#  **Optimizations After Profiling**

1. **Use `React.memo()`** to avoid unnecessary re-renders.
2. **Use `useMemo()` and `useCallback()`** to memoize expensive calculations or functions.
3. **Split large components** into smaller ones.
4. **Lazy-load components** with `React.lazy()` and `Suspense`.

---

#  **Analogy**

* Profiling = **checking how long each worker takes to do their job**.
* After seeing slow workers, you **optimize their process** or **replace them** to improve overall efficiency.

---

 **Key Insight:**

* Profiling helps **measure performance**, not just guess.
* Always profile before optimizing — sometimes React’s re-rendering is already very fast.

---

---

#  **What is Throttling?**

* **Throttling** = limiting how often a function can run over time.

* Even if an event happens **multiple times**, the function is **only called once every X milliseconds**.

* Purpose: **improve performance** by preventing a function from running too frequently.

---

#  **When to Use Throttling**

Events that can fire **many times per second** are perfect candidates:

| Event Type  | Why Throttle                                                      |
| ----------- | ----------------------------------------------------------------- |
| `scroll`    | Fires constantly while scrolling → heavy calculations can slow UI |
| `resize`    | Fires many times when resizing window                             |
| `mousemove` | Fires every tiny mouse movement                                   |
| `keydown`   | Fires on every keypress, sometimes too frequent                   |

---

#  **Throttle vs Debounce**

| Concept  | Throttle                                 | Debounce                                            |
| -------- | ---------------------------------------- | --------------------------------------------------- |
| Behavior | Run function **at most once every X ms** | Run function **after X ms of inactivity**           |
| Example  | Scroll handler that runs every 200ms     | Search input: API call only after user stops typing |
| Use case | Scroll, resize                           | Autocomplete, search, input validation              |

---

#  **Example: Throttle Function in JS**

```js
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Usage
window.addEventListener("scroll", throttle(() => {
  console.log("Scroll event handled!");
}, 200));
```

* `fn` → function to throttle
* `delay` → minimum time between calls (in ms)
* Even if the scroll fires 100 times per second, our function runs **only once every 200ms**

---

#  **Example in React**

```jsx
import { useCallback } from "react";

function App() {
  const handleScroll = useCallback(
    throttle(() => {
      console.log("Scrolled!");
    }, 200),
    []
  );

  return <div onScroll={handleScroll} style={{ height: "200px", overflow: "auto" }}>
    <div style={{ height: "1000px" }}>Scroll me</div>
  </div>;
}
```

* Wrapping in `useCallback` ensures **throttle function reference remains stable**.

---

#  **Why Throttle is Useful**

1. **Reduces CPU usage** → prevents performance bottlenecks.
2. **Prevents too many state updates** → React re-renders efficiently.
3. **Smooth UX** → scrolls, animations, and inputs feel responsive.

---

#  **Analogy**

* Imagine a **traffic light** that only lets **cars pass once every 5 seconds**, even if many cars arrive → throttling controls the flow of events.

---
---

#  **What is `useRef`?**

* `useRef` is a React Hook that lets you **persist values across renders** without triggering a re-render.

* It can also be used to **access DOM elements directly**.

* Think of it as a **box that holds a value**: you can put something in it and access it anytime.

---

#  **Syntax**

```jsx
const refContainer = useRef(initialValue);
```

* `refContainer` → an object with a single property `.current`
* `initialValue` → optional initial value

---

#  **Two Main Uses of `useRef`**

### **1. Accessing DOM Elements**

```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // access DOM node directly
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

* `.current` points to the actual DOM element.
* Useful for **focus, scroll, or measuring element dimensions**.

---

### **2. Persisting Values Across Renders**

```jsx
import { useRef, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
```

* `intervalRef.current` stores the interval ID **without causing re-renders**.
* Unlike state, updating `.current` **does not trigger a render**.

---

#  **Key Points**

1. **`useRef` does NOT trigger re-renders** when `.current` changes.
2. Useful for **storing mutable values** across renders (like timers, previous values).
3. Can reference **DOM elements** with `ref`.
4. Works as a **persistent container** — survives through the entire component lifecycle.

---

#  **Common Patterns**

* **Access DOM nodes:** `ref` + `current`
* **Store previous state/value:** `prevCount = useRef(count)`
* **Timers or intervals:** store ID to clear later
* **Avoid re-renders** for non-UI-changing values

---

#  **Analogy**

* `useState` → state in React, **changes trigger UI updates**
* `useRef` → **a box that holds stuff** that you can change **without causing a UI update**

---
---

#  **What is Shadow DOM?**

* **Shadow DOM** is a **browser feature** that allows you to **encapsulate a part of the DOM** and **CSS**, so it’s **isolated** from the rest of the document.
* Think of it as a **“mini DOM” inside an element**.
* Anything inside a shadow DOM **doesn’t clash with the outer DOM** (no CSS leaks, no global ID conflicts).

---

#  **Why Shadow DOM Exists**

1. **Encapsulation:**

   * Protect your component’s styles and structure from outside interference.
   * Prevent your styles from affecting the rest of the page.

2. **Reusable Components:**

   * Build custom elements (Web Components) that can be reused anywhere without worrying about CSS or JS conflicts.

3. **Isolation:**

   * Script and CSS inside the shadow DOM **cannot directly affect the outside DOM**, and vice versa (unless explicitly designed).

---

#  **Example: Creating Shadow DOM**

```html
<div id="host"></div>

<script>
  const host = document.getElementById("host");

  // Attach a shadow root
  const shadowRoot = host.attachShadow({ mode: "open" });

  // Add content to the shadow DOM
  shadowRoot.innerHTML = `
    <style>
      p {
        color: red;
        font-weight: bold;
      }
    </style>
    <p>Hello from Shadow DOM!</p>
  `;
</script>
```

* `<div id="host">` → host element
* `attachShadow({ mode: "open" })` → creates shadow root
* Styles inside the shadow DOM **won’t affect the outer page**

---

#  **Key Points About Shadow DOM**

1. **Encapsulated Styles:**

   * CSS inside shadow DOM applies **only to that DOM**, not outside.

2. **Encapsulated Structure:**

   * DOM elements inside shadow DOM are **invisible to global CSS selectors**.

3. **Mode:**

   * `"open"` → shadow DOM can be accessed via `element.shadowRoot`
   * `"closed"` → shadow DOM **cannot be accessed externally**

4. **Event Handling:**

   * Events inside shadow DOM **bubble up normally**, but the DOM structure is hidden.

---

#  **Shadow DOM vs Regular DOM**

| Feature            | Shadow DOM                    | Regular DOM          |
| ------------------ | ----------------------------- | -------------------- |
| CSS Encapsulation  | Yes                           | No                   |
| JS Access          | Only via `shadowRoot` if open | Direct               |
| ID/Class Conflicts | No                            | Possible             |
| Use Case           | Web Components                | Normal HTML elements |

---

#  **React and Shadow DOM**

* React does **not use Shadow DOM by default**.
* You can combine **React with Web Components** to use Shadow DOM:

  * React renders inside a shadow root for encapsulation.

---

#  **Analogy**

* **Shadow DOM** = a **room inside a house** with its own furniture and style.
* You can decorate it however you like, and it **won’t affect the rest of the house**.

---

 

 

















