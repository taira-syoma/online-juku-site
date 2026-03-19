import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-primary font-bold">
            <GraduationCap className="w-5 h-5 text-accent" />
            <span>個別学習戦略室</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              プライバシーポリシー
            </a>
            
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 個別学習戦略室
          </p>
        </div>
      </div>
    </footer>
  );
}
