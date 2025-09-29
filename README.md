# React Hot Toast

A lightweight, customizable, and easy-to-use toast notification library for React. Display beautiful, animated toast messages in your application with minimal setup and maximum flexibility.

## Features

- ⚡ Super fast and easy to use
- 🎨 Customizable toast styles and positions
- 🛠️ TypeScript support
- 🧩 Composable API for advanced use cases
- 🌓 Supports light and dark themes
- 🔥 Zero dependencies (except React)
- 📱 Responsive and accessible

## Installation

```bash
npm install react-hot-toast-vxt
# or
yarn add react-hot-toast-vxt
```

## Usage

Wrap your app with the `Toaster` and use the `toast` functions to show toasts anywhere in your component tree.

### 1. Add Toaster Component

```tsx
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
```

### 2. Show a Toast

```tsx
// src/App.tsx
import { toast } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <>
      <button
        onClick={() => toast.success(`toast success`, { duration: 5000 })}
      >
        add toast success
      </button>
      <button onClick={() => toast.warning(`toast warning`)}>
        add toast warning
      </button>
      <button onClick={() => toast.error(`toast error`)}>
        add toast error
      </button>
      <button onClick={() => toast.loading(`toast loading`)}>
        add toast loading
      </button>
    </>
  );
}

export default App;
```

## API

### `toast`

Returns an object with methods to show different types of toasts:

- `toast(message: string, config?: ToastConfig)`
- `toast.success(message: string, config?: ToastConfig)`
- `toast.error(message: string, config?: ToastConfig)`
- `toast.loading(message: string, config?: ToastConfig)`
- `toast.warning(message: string, config?: ToastConfig)`
- `toast.dismiss(toastId: string)`

### `Toaster` Props

- `position (optional)`: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' (default: 'top-right')
- `duration (optional)`: 'number' (default: 2000)

## Customization

You can customize the appearance and behavior of toasts via props and CSS. For advanced customization, override the default styles in your app's CSS.

## Example

See the [`example/`](../example) folder for a full working demo.

---

MIT License
