import AppArea from "./AppArea";
import AppCalendar from "./AppCalendar";
import AppCharts from "./AppCharts";
import AppPieChart from "./AreaPieChart";
import CardList from "./CardList";

const HomePage = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 ">
			<div className="bg-primary-foreground rounded-xl p-4 xl:col-span-2">
				<AppCharts />
			</div>
			<div className="bg-primary-foreground rounded-xl p-4 ">
				<AppPieChart />
			</div>
			<div className="bg-primary-foreground rounded-xl p-4">
				<CardList title="Latest Transactions" />
			</div>
			<div className="bg-primary-foreground rounded-xl p-4">
				<CardList title="Popular Content " />
			</div>
			<div className="bg-primary-foreground rounded-xl p-4 xl:col-span-2">
				<AppArea />
			</div>
			<div className="bg-primary-foreground rounded-xl p-4 ">
				<AppCalendar />
			</div>
		</div>
	);
};

export default HomePage;
