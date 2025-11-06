import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--section-bg))] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Sheromi Inthirabala | Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};
