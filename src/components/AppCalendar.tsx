import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

interface Todo {
	id: number;
	text: string;
	completed: boolean;
	label: string;
}

const todos: Todo[] = [
	{ id: 1, text: "Complete project documentation", completed: false, label: "Documentation" },
	{ id: 2, text: "Review pull requests", completed: true, label: "Code Review" },
	{ id: 3, text: "Update dependencies", completed: false, label: "Maintenance" },
	{ id: 4, text: "Fix responsive design issues", completed: false, label: "Bug Fix" },
	{ id: 5, text: "Deploy to production", completed: true, label: "Deployment" },
	{ id: 6, text: "Write unit tests", completed: true, label: "Testing" },
	{ id: 7, text: "Optimize database queries", completed: true, label: "Performance" },
	{ id: 8, text: "Update user interface", completed: true, label: "UI/UX" },
];
const AppCalendar = () => {
	const [date, setDate] = useState<Date>(new Date());
	const [open, setOpen] = useState(false);

	// const [date, setDate] = useState<Date | undefined>(new Date());
	// return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border h-full w-full" />;
	return (
		<div>
			{/*Calendar*/}
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button className="w-full">{date ? format(date, "PPP") : <span>Pick a Date</span>}</Button>
				</PopoverTrigger>
				<PopoverContent>
					<Calendar
						mode="single"
						selected={date}
						onSelect={(date: Date) => {
							setDate(date);
							setOpen(false);
						}}
						className="rounded-lg border w-full"
					/>
				</PopoverContent>
			</Popover>
			<ScrollArea className="h-[450px] overflow-y-auto mt-6">
				{todos.map((todo) => (
					<Card className="p-2 mb-4">
						<div key={todo.id} className="flex  gap-4 items-center">
							<Checkbox id={todo.label} />
							<label htmlFor={todo.label}>{todo.text}</label>
						</div>
					</Card>
				))}
			</ScrollArea>
		</div>
	);
};

export default AppCalendar;

//TODO: What is Hydration Error?
