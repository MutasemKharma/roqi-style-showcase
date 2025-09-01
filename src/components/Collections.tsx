import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

const Collections = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const collections = [
    {
      id: 1,
      title: "الأكسسوارات الفاخرة",
      subtitle: "مجوهرات ذهبية راقية",
      image: collection1,
      description: "تشكيلة حصرية من الأكسسوارات المصممة بعناية",
    },
    {
      id: 2,
      title: "الأزياء العربية العصرية",
      subtitle: "عباءات بلمسة عصرية",
      image: collection2,
      description: "تصاميم تجمع بين الأصالة والحداثة",
    },
    {
      id: 3,
      title: "أزياء السهرة",
      subtitle: "فساتين راقية للمناسبات",
      image: collection3,
      description: "إطلالات ساحرة لأمسياتك المميزة",
    },
  ];

  return (
    <section id="collections" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            مجموعاتنا المميزة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشفي تشكيلتنا المنتقاة بعناية من أرقى التصاميم
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-lg shadow-elegant cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground">
                  <h3 className="font-playfair text-2xl font-bold mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-sm mb-3 opacity-90">{collection.subtitle}</p>
                  
                  {/* Hidden Description - Shows on Hover */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      hoveredIndex === index ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm mb-4">{collection.description}</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="hero"
                    size="sm"
                    className={`self-start transition-all duration-500 ${
                      hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    استكشف المجموعة
                    <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg" className="px-8">
            عرض جميع المجموعات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collections;