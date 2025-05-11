import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { StoreProvider } from "./app/store/storeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <App />
  </StoreProvider>,
);