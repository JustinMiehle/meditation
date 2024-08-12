import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import "./dayjsConfig";
import i18n from "./i18n";
import "./index.css";
import CustomRoutes from "./routes";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<ThemeProvider>
				<Router>
					<CustomRoutes />
				</Router>
			</ThemeProvider>
		</I18nextProvider>
	</React.StrictMode>,
);
