import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "The perfect escape from city life! Our family picnic was unforgettable.",
      author: "Priya Sharma",
      role: "Parent"
    },
    {
      text: "Our corporate offsite at OBI was exactly what we needed - nature and productivity combined.",
      author: "Rajesh Kumar",
      role: "Team Lead, Tech Corp"
    },
    {
      text: "My daughter loves the afterschool program. She's more confident and creative now!",
      author: "Anita Reddy",
      role: "Parent"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gradient">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-warm)] hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary mb-4" />
                
                <p className="text-foreground text-lg mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t-2 border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
