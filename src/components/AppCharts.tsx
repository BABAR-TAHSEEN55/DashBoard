import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
const AppCharts = () => {
	interface ChartData {
		month: string;
		expenses: number;
		savings: number;
	}

	const chartConfig = {
		desktop: {
			label: "expenses",
			color: "var(--chart-1)",
		},
		mobile: {
			label: "savings",
			color: "var(--chart-3)",
		},
	} satisfies ChartConfig;

	const chartData: ChartData[] = [
		{ month: "January", expenses: 186, savings: 80 },
		{ month: "February", expenses: 305, savings: 200 },
		{ month: "March", expenses: 237, savings: 120 },
		{ month: "April", expenses: 73, savings: 190 },
		{ month: "May", expenses: 209, savings: 130 },
		{ month: "June", expenses: 214, savings: 140 },
	];

	return (
		<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
			<BarChart accessibilityLayer data={chartData}>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={false}
					tickMargin={10}
					axisLine={false}
					tickFormatter={(value) => value.slice(0, 3)}
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
				<Bar dataKey="expenses" fill="var(--color-desktop)" radius={4} />
				<Bar dataKey="savings" fill="var(--color-mobile)" radius={4} />
			</BarChart>
		</ChartContainer>
	);
};

export default AppCharts;
