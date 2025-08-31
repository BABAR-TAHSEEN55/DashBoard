import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface Transaction {
	id: number;
	profileImage: string;
	name: string;
	amount: string;
	field: string;
}
interface PopularContent {
	id: number;
	title: string;
	views: string;
	thumbnail: string;
	field: string;
	badge: string;
}

const popularContent: PopularContent[] = [
	{
		id: 1,
		title: "React Guide",
		views: "12.5k",
		thumbnail: "https://via.placeholder.com/60x40",
		field: "popular content",
		badge: "coding",
	},
	{
		id: 2,
		title: "TypeScript Tips",
		views: "8.2k",
		thumbnail: "https://via.placeholder.com/60x40",
		field: "popular content",
		badge: "coding",
	},
	{
		id: 3,
		title: "CSS Tricks",
		views: "15.7k",
		thumbnail: "https://via.placeholder.com/60x40",
		field: "popular content",
		badge: "coding",
	},
	{
		id: 4,
		title: "Node.js Tips",
		views: "6.9k",
		thumbnail: "https://via.placeholder.com/60x40",
		field: "popular content",
		badge: "coding",
	},
];

const transactions: Transaction[] = [
	{
		id: 1,
		profileImage: "https://www.pexels.com/photo/person-using-camera-1759530/",
		name: "John Smith",
		amount: "$125.50",
		field: "latest transaction",
	},
	{
		id: 2,
		profileImage: "https://via.placeholder.com/40x40",
		name: "Sarah Johnson",
		amount: "$89.25",
		field: "latest transaction",
	},
	{
		id: 3,
		profileImage: "https://via.placeholder.com/40x40",
		name: "Mike Wilson",
		amount: "$234.75",
		field: "latest transaction",
	},
	{
		id: 4,
		profileImage: "https://via.placeholder.com/40x40",
		name: "Emily Davis",
		amount: "$67.00",
		field: "latest transaction",
	},
];
const CardList = ({ title }: { title: string }) => {
	const IsPopularContent = title.toLowerCase().includes("popular");
	const list = IsPopularContent ? popularContent : transactions;
	// const list = title === "popular content" ? popularContent : transactions;
	return (
		<div>
			<h1 className="text-lg mb-2 py-2">{title}</h1>
			<div className="flex flex-col gap-2">
				{list.map((item) => (
					<Card>
						<div>
							{IsPopularContent ? (
								<CardContent className="flex items-center px-1">
									<div className="flex flex-col justify-center p-2 space-y-2">
										<div className="text-sm  mr-auto">{(item as PopularContent).title}</div>
										<Badge variant="secondary">{(item as PopularContent).badge}</Badge>
									</div>

									<div className="ml-auto px-1">{(item as PopularContent).views}</div>
								</CardContent>
							) : (
								<CardContent className="flex px-2">
									<div>{(item as Transaction).name}</div>

									<div className="ml-auto text-green-500">{(item as Transaction).amount}</div>
								</CardContent>
							)}
						</div>
					</Card>
				))}
			</div>
		</div>
	);
};

export default CardList;
