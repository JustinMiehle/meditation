import Home from "@/pages/Home";
import type React from "react";
import { Route, Routes } from "react-router-dom";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";

const CustomRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/imprint" element={<Imprint />} />
			<Route path="/privacy" element={<Privacy />} />
		</Routes>
	);
};

export default CustomRoutes;
