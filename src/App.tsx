import AppSidebar from "./components/AppSidebar";
import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";

const App = () => {
	return (
		<div className="flex h-full w-full">
			<AppSidebar />

			{/*// Use Flex-1 when your contents are Squashed instead of w-full*/}
			<div className="flex flex-col flex-1">
				<Navbar />
				<main className="flex-1 p-4 overflow-auto">
					<HomePage />
				</main>
			</div>
		</div>
	);
};

export default App;
