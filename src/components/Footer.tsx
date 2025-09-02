import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="font-playfair text-2xl font-bold mb-4">Roqi Style</h3>
          <p className="text-primary-foreground/80 mb-4">
            دعاسات سيارة فاخرة مطرزة يدوياً بإتقان
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-primary-foreground/60">
            <span>صُنع بـ</span>
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span>© 2024 جميع الحقوق محفوظة</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;