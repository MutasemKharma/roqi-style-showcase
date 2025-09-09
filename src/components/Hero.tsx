import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import heroBg from "@/assets/car-mat-hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Roqi Style Car Mats"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="flex justify-center mb-6">
            <Sparkles className="h-8 w-8 text-secondary animate-pulse" />
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            رقي ستايل | RQI Style
            <span className="block text-secondary mt-2">حماية صامدة.. وفخامة صادقة.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-poppins">
            أرضيات فاخرة مقاومة للماء والأوساخ، تحافظ على جمال سيارتك وتحميها بعناية فائقة.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 font-poppins"
            >
              استكشف المجموعة
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 font-poppins border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              تسوق الآن
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;