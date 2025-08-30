import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu } from "./ui/dropdown-menu";
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
	const { setTheme } = useTheme();
	return (
		<nav>
			<div className="container flex m-auto  justify-between mt-4 rounded-xl px-2 items-center">
				<p>Home</p>
				<p>Pricing</p>
				<div className="flex justify-between items-center gap-4">
					<p>DashBoard</p>
					{/*<Moon />*/}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="icon">
								<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
								<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
								<span className="sr-only">Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<User />
								Profile
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Settings /> Settings
							</DropdownMenuItem>
							<DropdownMenuItem variant="destructive">
								<LogOut /> Logout
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
