import { cn } from "@/lib/utils";

interface CustomProps {
	disabled: false;
	isActive: true;
}
const CustomButton = ({ disabled, isActive }: CustomProps) => {
	return (
		<div>
			{/*This Looks Messy so we use CN - A helping Utility*/}
			{/*<div className={`text-sm ${disabled ? "bg-gray-200" : "bg-red-200"} ${isActive && "roudded-xl"}`}></div>*/}
			{/*// CN*/}
			//This is much more cleaner sytanx so that is why it used
			<button
				className={cn("text-sm", disabled ? "bg-gray-200" : "bg-green-200", isActive && "roudded-xl", "p-4")}
			></button>
		</div>
	);
};
export default CustomButton;
