import Hero from "@/components/Hero";
import About from "@/components/About";
import Offerings from "@/components/Offerings";
import EventSpaces from "@/components/EventSpaces";
import Packages from "@/components/Packages";
import Afterschool from "@/components/Afterschool";
import VirtualTour from "@/components/VirtualTour";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Offerings />
      <EventSpaces />
      <Packages />
      <Afterschool />
      <VirtualTour />
      <Gallery />
      <Testimonials />
      <Location />
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Index;
