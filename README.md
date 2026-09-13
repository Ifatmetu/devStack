# Dev Stack

A simple, clean React application where developers can explore different frontend, backend, database, and tooling technologies, and build their own ideal development stack by adding/removing items from a personalized list.

## Description

Dev Stack lets a user browse a curated list of technologies (React, Vue, Node.js, PostgreSQL, Docker, etc.), each shown as a card with an icon, category, difficulty level, and rating. Users can click **"Add to Stack"** to collect the technologies they want to use in their next project, see a live running list in a **"Your Stack"** sidebar, remove individual items, or clear the whole stack at once — with toast notifications confirming every action.

## Technologies Used

- **React 19** (using the `use()` hook + `Suspense` for data fetching)
- **TypeScript**
- **Vite** (build tool / dev server)
- **Tailwind CSS v4**
- **react-icons** (technology logos)
- **react-toastify** (toast notifications)

## Key Features

1. **Build Your Own Stack** — Browse technology cards and add any of them to a personal "Your Stack" list with one click; added cards are visually highlighted (pink border + ✓ Added to Stack) so you always know what you've picked.
2. **Manage Your Selections** — Remove a single technology from your stack, or clear everything at once with the "Remove All" button — each action is confirmed instantly with a toast notification.
3. **Fully Responsive Layout** — The layout adapts from a single column on mobile to a multi-column grid on tablet/desktop, with a sticky sidebar for "Your Stack" and a loading spinner shown while the technology data is being fetched.

---

## Questions & Answers

### i. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup directly inside JavaScript/TypeScript files. Under the hood, a JSX element like:

```jsx
<h1 className="text-base font-bold">{tech.name}</h1>
```

is compiled by tools like Vite/Babel into plain `React.createElement()` calls. It's used in React because it lets you describe *what the UI should look like* in the same place as the logic that drives it, making components easier to read and reason about compared to manually calling `createElement` or building HTML strings. It also gives compile-time checks (especially with TypeScript) and lets you embed dynamic JavaScript expressions directly using `{}`, as seen throughout `Techonologies.tsx` (e.g. `{tech.name}`, `{stack.length}`).

### ii. What is the difference between props and state?

- **Props** ("properties") are data passed **into** a component from its parent. They are **read-only** — a component cannot change its own props. Example in this project: `main.tsx` passes `users={users}` into `<Techonologies users={users} />`; inside `Techonologies`, `users` is received as a prop and never mutated.
- **State** is data that a component **owns and manages internally**, and which can change over time (usually via `useState`). Changing state causes the component to re-render. Example: the `stack` array in `Techonologies.tsx` — `const [stack, setStack] = useState<ITechnology[]>([])` — is state because it's created, updated (`addToStack`, `removeFromStack`, `removeAllFromStack`), and read entirely within that component.

In short: **props flow down and are fixed by the parent; state lives inside a component and can change itself.**

### iii. What does the useState hook do, and where did you use it in the project?

`useState` lets a functional component hold and update local values across re-renders, without needing a class. Calling `useState(initialValue)` returns a `[value, setValue]` pair; calling `setValue` schedules a re-render with the new value.

In this project, `useState` is used in `Techonologies.tsx`:

```tsx
const [stack, setStack] = useState<ITechnology[]>([]);
```

`stack` holds the list of technologies the user has added. Every time `addToStack`, `removeFromStack`, or `removeAllFromStack` calls `setStack(...)`, React re-renders the component so the "Your Stack" panel and each card's `isAdded` styling stay in sync with the current selection.

### iv. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` normally lets you run "side effects" (like fetching data, subscribing to events, or manually touching the DOM) after a component renders, and optionally clean them up. A classic data-fetching pattern with it looks like:

```tsx
useEffect(() => {
  fetch('techonology.json').then(res => res.json()).then(setData);
}, []);
```

**In this specific project, `useEffect` was not actually used for loading the JSON.** Instead, the project uses React's newer `use()` hook together with `<Suspense>`:

```tsx
// main.tsx
const techsFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch('techonology.json');
  return response.json();
};
const users = techsFetch(); // a Promise, not yet resolved

// Techonologies.tsx
const data = use(users); // suspends the component until the promise resolves
```

The `use()` hook lets a component "wait" on a promise directly during render — while it's pending, React shows the nearest `<Suspense fallback={...}>` (in this project, a loading `Spinner`) instead of the component; once the promise resolves, React automatically renders `Techonologies` with the real data. This achieves the same goal as the classic `useEffect + useState` fetching pattern (load JSON once, show a loading state, then render data) but with less boilerplate — no separate `loading`/`error`/`data` state variables are needed.

### v. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify which items in a list have changed, been added, or been removed between renders, so it can update the DOM efficiently instead of re-rendering the whole list from scratch. Without a stable, unique key, React may confuse one list item for another (mismatched keys can cause wrong data to appear in the wrong row, broken input focus, or unnecessary re-renders).

In this project, every mapped list uses `tech.id` as the key, for example:

```tsx
{data.map((tech) => (
  <div key={tech.id} className="...">
    ...
  </div>
))}
```

and similarly `key={tech.id}` in the "Your Stack" list — `id` is unique per technology, so React can correctly track each card even as items are added/removed from the `stack` array.

### vi. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different JSX depending on a condition — the same component can render different UI based on state, props, or data. It's done with normal JavaScript (`if`, ternary `? :`, or `&&`) inside the returned JSX.

Example from `Techonologies.tsx` — the "Your Stack" panel shows an empty-state message if nothing has been added yet, or the actual list (plus a "Remove All" button) otherwise:

```tsx
{stack.length === 0 ? (
  <div className="text-[10px] text-gray-400 border border-dashed border-gray-200 rounded-xl h-14 flex items-center justify-center mt-3">
    Your stack is empty.
  </div>
) : (
  <>
    <div className="mt-4 space-y-2">
      {stack.map((tech) => ( /* ...list item... */ ))}
    </div>
    <button onClick={removeAllFromStack}>Remove All</button>
  </>
)}
```

Another example is each card's "Add to Stack" button, which conditionally renders either `"Add to Stack"` or `✓ Added to Stack` (with different styling) depending on the `isAdded` boolean.

### vii. How do you pass data from a parent component to a child, and how does a child send something back to the parent?

**Parent → Child:** data is passed down as **props**. In this project, `main.tsx` (parent) passes the fetch promise down to the child component:

```tsx
// main.tsx (parent)
<Techonologies users={users} />

// Techonologies.tsx (child)
const Techonologies = ({ users }: ITechonologiesProps) => {
  const data = use(users); // uses the prop passed from the parent
  ...
}
```

**Child → Parent:** since a child can't directly modify a parent's variables, the standard pattern is for the **parent to pass a function down as a prop**, and the child calls that function (optionally with a value) whenever it needs to "send something back." For example, if `Techonologies` were split so that each card lived in its own child component, the parent would pass `onAdd={addToStack}` down as a prop, and the child would call `onAdd(tech)` on click — this runs the parent's `setStack(...)` and updates the parent's state, effectively sending data back up. This is exactly how the `addToStack`, `removeFromStack`, and `removeAllFromStack` functions in `Techonologies.tsx` are wired to each button's `onClick` — the button (conceptually "the child" of the render tree) invokes a function that lives in and updates the parent component's state.
