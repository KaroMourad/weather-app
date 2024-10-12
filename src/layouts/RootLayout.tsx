import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.svg";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        asChild
        title="Home"
        className="fixed top-4 left-4 z-[3]"
      >
        <a href="/" className="font-black text-lg">
          <img src={Logo} alt="Logo" className="w-6 h-6" />
        </a>
      </Button>
      <div className="w-screen min-h-screen fixed flex justify-center pointer-events-none">
        <div className="absolute inset-0 opacity-40 z-[2] dark:bg-radial-dark bg-radial" />
        <div className="absolute inset-0 opacity-40 bg-[url('./assets/grid.svg')] invert dark:invert-0" />
      </div>
      <div className="fixed z-[3] right-4 top-4">
        <ModeToggle />
      </div>
      {children}
    </>
  );
};

RootLayout.displayName = "RootLayout";
export default RootLayout;
