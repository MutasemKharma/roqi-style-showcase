import { Sparkles, Heart, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "شغف بالتفاصيل",
      description: "نهتم بأدق التفاصيل لنقدم لك قطعاً استثنائية",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "جودة لا تضاهى",
      description: "نختار أجود الخامات لضمان أناقة تدوم",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "تصميم حصري",
      description: "قطع محدودة الإصدار لتميزك الخاص",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-poppins text-sm font-medium">
                قصتنا
              </span>
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              حيث تلتقي الأناقة
              <span className="block text-accent mt-2">بالإبداع</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              في Roqi Style، نؤمن بأن الأزياء ليست مجرد ملابس، بل هي تعبير عن الشخصية
              والذوق الرفيع. منذ انطلاقتنا، حرصنا على تقديم تصاميم تجمع بين الأصالة
              والعصرية، مع الاهتمام بأدق التفاصيل.
            </p>

            <p className="text-muted-foreground mb-8">
              نختار قطعنا بعناية فائقة، ونعمل مع أمهر الحرفيين لنقدم لك تجربة تسوق
              فريدة تليق بذوقك الراقي.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background shadow-sm hover:shadow-elegant transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-rose-gradient rounded-lg transform rotate-3"></div>
              <div className="relative bg-background rounded-lg p-8 shadow-elegant">
                <div className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="font-playfair text-3xl font-bold text-secondary">
                        500+
                      </p>
                      <p className="text-muted-foreground text-sm">قطعة مميزة</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="font-playfair text-3xl font-bold text-accent">
                        1000+
                      </p>
                      <p className="text-muted-foreground text-sm">عميلة سعيدة</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="p-6 bg-primary/5 rounded-lg border-r-4 border-secondary">
                    <p className="font-playfair text-lg text-primary italic">
                      "الأناقة ليست في ما ترتدين، بل في كيفية ارتدائه"
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">- Roqi Style</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;