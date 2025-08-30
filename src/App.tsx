// import { Button } from "./components/ui/button";
// import { CircuitBoard } from "lucide-react";

import AppSidebar from "./components/AppSidebar";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<div className="flex w-full">
			<AppSidebar />
			<div className="w-full">
				<Navbar />
			</div>
		</div>
	);
};

export default App;

//TODO: Learn about Oklach & Explore components of ShadCn
