import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const linkNames = [
  ["About", "Blog", "Contact"],
  ["Action", "Another action", "Dropdown Submenu", "404 page"],
];

function MobNavbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Menu />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col p-4">
            {linkNames[0].map((link) => (
              <NavigationMenuLink asChild key={crypto.randomUUID()}>
                <Button className="w-full justify-start" variant="ghost">
                  {link}
                </Button>
              </NavigationMenuLink>
            ))}
            <Separator />
            {linkNames[1].map((feature) => (
              <NavigationMenuLink asChild key={crypto.randomUUID()}>
                <Button className="w-full justify-start" variant="ghost">
                  {feature}
                </Button>
              </NavigationMenuLink>
            ))}
            <div className="flex justify-between mt-5">
              <Button variant="outline">Sign in</Button>
              <Button variant="default">Sign up</Button>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function DeskNavbar() {
  return (
    <section>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">Features</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {linkNames[1].map((feature) => (
            <DropdownMenuItem asChild key={crypto.randomUUID()}>
              <Button variant="ghost" className="w-full justify-start">
                {feature}
              </Button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {linkNames[0].map((link) => (
        <Button variant="link" key={crypto.randomUUID()}>
          {link}
        </Button>
      ))}
    </section>
  );
}

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-row-reverse md:flex-row h-20 container mx-auto">
      <span className="space-x-1">
        <b>Tailwind</b>
        <span>css</span>
      </span>
      <div className="md:hidden">
        <MobNavbar />
      </div>
      <div className="hidden md:block">
        <DeskNavbar />
      </div>
      <div className="hidden md:block space-x-5">
        <Button variant="outline">Sign in</Button>
        <Button variant="default">Sign up</Button>
      </div>
    </nav>
  );
}

export default Navbar;
