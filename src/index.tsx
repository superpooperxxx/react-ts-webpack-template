import { createRoot } from "react-dom/client";
import { App } from "./App";

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("root") as Element);
root.render(<App />);
