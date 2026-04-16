# DashBoard

A modern, responsive analytics dashboard built with React, TypeScript, and Vite. It provides a clean interface for visualizing data through charts, tracking transactions, managing content, and navigating a calendar — all within a collapsible sidebar layout with dark and light theme support.

## About

DashBoard is a frontend project focused on building a practical, component-driven admin interface. It was built to explore and demonstrate the integration of shadcn/ui primitives, Recharts data visualization, and Tailwind CSS within a React and TypeScript application. The layout features a persistent collapsible sidebar, a top navigation bar with theme switching and a user menu, and a responsive grid of dashboard widgets. It serves as a strong foundation for any data-heavy web application.

## Features

- Collapsible sidebar with navigation links and project management entries
- Top navigation bar with light, dark, and system theme toggle
- User profile dropdown with account, settings, and logout options
- Bar chart displaying monthly expenses and savings
- Area chart for trend visualization
- Pie chart for categorical data breakdown
- Card lists for latest transactions and popular content
- Calendar widget for date navigation
- Fully responsive grid layout that adapts from single-column to four-column views
- Built with accessible Radix UI components via shadcn/ui

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool and dev server |
| Tailwind CSS 4 | Utility-first styling |
| shadcn/ui (Radix UI) | Accessible component primitives |
| Recharts | Data visualization |
| Lucide React | Icon library |
| date-fns | Date utilities |
| react-day-picker | Calendar component |

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended), npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/BABAR-TAHSEEN55/DashBoard.git
cd DashBoard

# Install dependencies
pnpm install
```

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
pnpm build
```

The output will be in the `dist` directory.

### Preview the Production Build

```bash
pnpm preview
```

## Project Structure

```
src/
  components/
    AppArea.tsx          # Area chart widget
    AppCalendar.tsx      # Calendar widget
    AppCharts.tsx        # Bar chart widget
    AppSidebar.tsx       # Collapsible sidebar
    AreaPieChart.tsx     # Pie chart widget
    CardList.tsx         # Transaction and content card list
    CustomButton.tsx     # Reusable button component
    HomePage.tsx         # Main dashboard grid layout
    Navbar.tsx           # Top navigation bar
    ThemeProvider.tsx    # Dark/light theme context
    ui/                  # shadcn/ui base components
  lib/                   # Utility functions
  main.tsx               # Application entry point
```

## Linting

```bash
pnpm lint
```
