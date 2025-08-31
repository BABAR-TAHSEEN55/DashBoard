import { Home, Calendar, Settings, User, User2, ChevronUp, Projector, Plus } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarSeparator,
} from "./ui/sidebar";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

interface Items {
	title: string;
	url: string;
	Icon: React.ComponentType;
}
const Items: Items[] = [
	{
		title: "Home",
		url: "/",
		Icon: Home,
	},

	{
		title: "Calendar",
		url: "/",
		Icon: Calendar,
	},

	{
		title: "Inbox",
		url: "/",
		Icon: Settings,
	},

	{
		title: "User",
		url: "/",
		Icon: User,
	},
];

const AppSidebar = () => {
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader className="mt-3">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton className="flex items-center gap-4 ">
							{/*<div className="bg-blue-400 rounded-full size-8"></div>*/}
							<User2 />
							<span>Suho Kim</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
				<SidebarSeparator />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel className="">Applications</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{Items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.Icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
									{item.title == "Inbox" && <SidebarMenuBadge>40</SidebarMenuBadge>}
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>

					{/*<SidebarGroupContent>
						<SidebarMenu>
							{Items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.Icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>*/}
				</SidebarGroup>
				<SidebarGroup>
					<SidebarContent>
						<SidebarMenu>
							<SidebarMenuItem>
								{/*<SidebarMenuButton />*/}
								<SidebarMenuButton>
									<Projector /> Projects
								</SidebarMenuButton>
								<SidebarMenuSub>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton>
											<Plus /> Add a New Project
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
								</SidebarMenuSub>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<User2 /> John Doe <ChevronUp className="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Account</DropdownMenuItem>
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
};

export default AppSidebar;

//Add a collapsible On Project

//TIP : Look at the format when using NextJs
