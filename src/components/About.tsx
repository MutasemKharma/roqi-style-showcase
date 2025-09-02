import { Sparkles, Heart, Award, Users, Palette } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "تصاميم حصرية",
      description: "تطريز يدوي فاخر بنقوش عربية أصيلة",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "جودة استثنائية",
      description: "دعاسات مصنوعة من أجود الخامات لضمان المتانة والأناقة",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "خدمة متميزة",
      description: "نساعدك في اختيار التصميم المناسب لسيارتك",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "ثقة العملاء",
      description: "آلاف العملاء الراضين عن منتجاتنا وخدماتنا",
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
              خبرة تمتد لسنوات
              <span className="block text-accent mt-2">في عالم التطريز الفاخر</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              في Roqi Style، نفخر بتقديم دعاسات سيارة فاخرة مطرزة يدوياً بنفس جودة 
              وإتقان سجاد المنزل الأصيل. نحرص على انتقاء كل خامة بعناية فائقة لنضمن 
              لك الحصول على دعاسات تجمع بين الجمال والجودة والمتانة.
            </p>

            <p className="text-muted-foreground mb-8">
              مع خبرة تمتد لسنوات في مجال التطريز اليدوي، نقدم لعملائنا تشكيلة واسعة 
              من التصاميم الكلاسيكية والعصرية التي تناسب جميع أنواع السيارات وتضفي 
              لمسة من الفخامة والأناقة على سيارتك.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background shadow-sm hover:shadow-elegant transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary mb-1 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-xs">
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
                        1000+
                      </p>
                      <p className="text-muted-foreground text-sm">منتج مميز</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <p className="font-playfair text-3xl font-bold text-accent">
                        5000+
                      </p>
                      <p className="text-muted-foreground text-sm">عميل راضٍ</p>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="p-6 bg-primary/5 rounded-lg border-r-4 border-secondary">
                    <h3 className="font-poppins font-semibold text-primary mb-3">
                      خدماتنا المميزة
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• توصيل مجاني للطلبات الكبيرة</li>
                      <li>• استشارات مجانية لاختيار التصميم المناسب</li>
                      <li>• ضمان على جميع المنتجات</li>
                      <li>• تصاميم حسب الطلب</li>
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className="p-4 bg-gold-gradient rounded-lg">
                    <p className="font-playfair text-primary-foreground italic">
                      "دعاسات السيارة الفاخرة ليست مجرد حماية، بل لوحة فنية في سيارتك"
                    </p>
                    <p className="text-primary-foreground/80 text-sm mt-2">- Roqi Style</p>
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