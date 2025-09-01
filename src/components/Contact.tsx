import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "انستجرام",
      value: "@roqi_style",
      link: "https://www.instagram.com/roqi_style",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "الهاتف",
      value: "+966 50 XXX XXXX",
      link: "tel:+966501234567",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "البريد الإلكتروني",
      value: "info@roqistyle.com",
      link: "mailto:info@roqistyle.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "الموقع",
      value: "الرياض، المملكة العربية السعودية",
    },
  ];

  const workingHours = [
    { day: "السبت - الخميس", time: "10:00 صباحاً - 10:00 مساءً" },
    { day: "الجمعة", time: "2:00 مساءً - 10:00 مساءً" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            تواصلي معنا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نحن هنا لخدمتك ومساعدتك في اختيار ما يناسب ذوقك الرفيع
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg hover:shadow-elegant transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    {info.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary hover:text-secondary transition-colors duration-300 font-poppins"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-primary font-poppins">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-secondary" />
                <h3 className="font-poppins font-semibold text-primary">ساعات العمل</h3>
              </div>
              <div className="space-y-2">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="text-primary font-poppins">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gold-gradient rounded-lg p-8 md:p-12 text-center flex flex-col justify-center">
            <h3 className="font-playfair text-3xl font-bold text-primary-foreground mb-4">
              انضمي إلى عائلة Roqi Style
            </h3>
            <p className="text-primary-foreground/90 mb-8">
              تابعنا على انستجرام لمشاهدة أحدث تشكيلاتنا من السجاد الفاخر والعروض الحصرية
            </p>
            <div className="space-y-4">
              <Button
                variant="hero"
                size="lg"
                className="w-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
                onClick={() => window.open("https://www.instagram.com/roqi_style", "_blank")}
              >
                <Instagram className="h-5 w-5 ml-2" />
                تابعنا على انستجرام
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                احجزي موعد استشارة
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/80 text-sm">
                انضم أكثر من <span className="font-bold">10,000</span> متابعة إلى مجتمعنا
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;