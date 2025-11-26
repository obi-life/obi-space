import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Activity, Users, Sparkles, Music, Camera } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ArtMovementPrograms = () => {
  const titleAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();

  const programs = [
    {
      icon: Palette,
      title: "Art Workshops",
      description: "Painting, pottery, clay modeling, and creative expression sessions for all ages.",
      ageGroups: ["Kids (5-12)", "Teens (13-17)", "Adults (18+)"]
    },
    {
      icon: Activity,
      title: "Movement & Fitness",
      description: "Yoga, dance, outdoor fitness, and wellness programs in nature.",
      ageGroups: ["Kids (7-12)", "Teens (13-17)", "Adults (18+)"]
    },
    {
      icon: Music,
      title: "Music & Performance",
      description: "Music lessons, drum circles, and performance arts workshops.",
      ageGroups: ["Kids (6-12)", "Teens (13-17)", "Adults (18+)"]
    },
    {
      icon: Camera,
      title: "Creative Photography",
      description: "Nature photography, storytelling through images, and visual arts.",
      ageGroups: ["Teens (13-17)", "Adults (18+)"]
    },
    {
      icon: Sparkles,
      title: "Mixed Media Art",
      description: "Combining various art forms, crafts, and creative techniques.",
      ageGroups: ["Kids (8-12)", "Teens (13-17)", "Adults (18+)"]
    },
    {
      icon: Users,
      title: "Community Art Projects",
      description: "Collaborative art sessions bringing families and communities together.",
      ageGroups: ["All Ages"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-12 sm:mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gradient px-2">
            Art & Movement Programs for Adults & Kids
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Discover your creative side and stay active with our diverse range of art and movement programs designed for all ages.
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {programs.map((program, index) => (
            <Card 
              key={index}
              className={`border-2 hover:border-primary transition-all duration-700 hover-lift hover-glow cursor-pointer animate-scale-in stagger-${(index % 6) + 1} ${cardsAnimation.isVisible ? 'visible' : ''}`}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 rounded-full gradient-sunset flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <program.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-foreground">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {program.ageGroups.map((age, idx) => (
                    <span 
                      key={idx}
                      className="text-xs sm:text-sm px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {age}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button 
            size="lg" 
            className="gradient-sunset hover:scale-105 transition-all duration-300 text-base px-10"
          >
            View All Programs & Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtMovementPrograms;

