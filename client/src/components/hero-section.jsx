import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import ThreeBackground from "./three-background";
import heroVideo from "@assets/6036381_Keyboard_Laptop_3840x2160_1753162786293.mp4";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-1"></div>
      
      <ThreeBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Innovative Solution of 
              <span className="text-yellow-300 block">Software & Hardware</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              FrienchTech IT Solution Pvt Ltd is a leading provider of innovative IT solutions, 
              specializing in software development, consulting services, and cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}