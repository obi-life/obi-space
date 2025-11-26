import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, TreePine, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const navigate = useNavigate();
  const heroAnimation = useScrollAnimation();
  const introAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Move",
      description: "Physical activity and movement in nature for health and well-being."
    },
    {
      icon: Users,
      title: "Connect",
      description: "Building relationships and community through shared experiences."
    },
    {
      icon: TreePine,
      title: "Grow",
      description: "Personal development, learning, and growth in a natural environment."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div 
            ref={heroAnimation.ref}
            className={`text-center max-w-4xl mx-auto animate-on-scroll ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gradient">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            
            {/* Introduction */}
            <div 
              ref={introAnimation.ref}
              className={`animate-on-scroll ${introAnimation.isVisible ? 'visible' : ''}`}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed mb-6 font-medium">
                OBI is a nature-connected space for families to relax, play, and grow together.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                We created OBI to give kids and adults a break from city routines — a place where you can slow down, move freely, and enjoy the outdoors.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                At our farm campus, families come together for movement classes, art, community events, after-school programs, and weekend activities. Kids get space to explore, parents get time to unwind, and everyone gets to connect with nature.
              </p>
            </div>

            {/* Values Section */}
            <div 
              ref={valuesAnimation.ref}
              className={`pt-8 sm:pt-12 animate-on-scroll ${valuesAnimation.isVisible ? 'visible' : ''}`}
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-center text-gradient">
                OBI is built on three simple ideas:
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Move.</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Connect.</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Grow.</span>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-warm)] transition-all duration-300 hover:-translate-y-1 text-center"
                  >
                    <div className="w-16 h-16 rounded-full gradient-sunset flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Belief Statement */}
            <div className="bg-muted/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-medium italic">
                We believe that when families spend time in nature, they feel healthier, happier, and more connected.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="text-center space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Whether you're here for a class, a day out, or a community event — OBI is your place to breathe, learn, and enjoy meaningful time together.
              </p>
              
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary mt-8">
                Welcome to OBI. A place for families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnimation.ref}
        className={`py-12 sm:py-16 md:py-20 bg-muted/30 animate-on-scroll ${ctaAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-gradient">
              Ready to Experience OBI?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Explore our spaces, programs, and activities designed for families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-sunset hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/spaces')}
              >
                Explore Spaces
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

