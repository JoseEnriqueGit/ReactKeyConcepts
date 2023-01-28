import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Context
import { ProductsProvider } from "./hooks/useEffects/ApiProducts";
// Css
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ProductsProvider>
			<App />
		</ProductsProvider>
	</React.StrictMode>
);
