import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme, Theme } from "@/components/ThemeProvider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem
          checked={theme === Theme.LIGHT}
          onCheckedChange={() => setTheme(Theme.LIGHT)}
        >
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === Theme.DARK}
          onCheckedChange={() => setTheme(Theme.DARK)}
        >
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === Theme.SYSTEM}
          onCheckedChange={() => setTheme(Theme.SYSTEM)}
        >
          System
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ModeToggle;
