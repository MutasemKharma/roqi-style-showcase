import { Instagram, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

          {/* Contact Form */}
          <div className="bg-gold-gradient rounded-lg p-8 md:p-12">
            <h3 className="font-playfair text-3xl font-bold text-primary-foreground mb-4">
              اطلبي دعاساتك المطرزة الآن
            </h3>
            <p className="text-primary-foreground/90 mb-8">
              اتصلي بنا للحصول على دعاسات سيارة مطرزة بتصاميم فاخرة تناسب ذوقك
            </p>
            
            <form 
              action="https://formspree.io/f/xqadlnyo" 
              method="POST"
              className="space-y-4"
              onSubmit={(e) => {
                setIsSubmitting(true);
                setTimeout(() => setIsSubmitting(false), 3000);
              }}
            >
              <Input
                name="name"
                type="text"
                placeholder="الاسم الكامل"
                required
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="رقم الهاتف"
                required
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Input
                name="email"
                type="email"
                placeholder="البريد الإلكتروني (اختياري)"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Textarea
                name="message"
                placeholder="نوع السيارة والتصميم المطلوب..."
                rows={4}
                required
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full bg-primary-foreground/10 hover:bg-primary-foreground/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "جاري الإرسال..."
                ) : (
                  <>
                    <Send className="h-5 w-5 ml-2" />
                    إرسال الطلب
                  </>
                )}
              </Button>
            </form>

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