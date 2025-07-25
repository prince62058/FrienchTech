import HeroSection from "@/components/hero-section";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Rocket, Code } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      
      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-friench-blue" />
              </div>
              <div className="text-4xl font-bold text-friench-blue mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Satisfied Clients</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-friench-orange" />
              </div>
              <div className="text-4xl font-bold text-friench-blue mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Rocket className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-friench-blue mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Projects Launched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-friench-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Custom web applications built with modern technologies to deliver exceptional user experiences.
              </p>
              <Link href="/services">
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-friench-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-4">IT Consulting</h3>
              <p className="text-gray-600 mb-6">
                Strategic technology consulting to optimize your business processes and drive growth.
              </p>
              <Link href="/services">
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Digital Solutions</h3>
              <p className="text-gray-600 mb-6">
                Innovative digital solutions to transform your business and enhance operational efficiency.
              </p>
              <Link href="/services">
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-friench-blue text-white hover:bg-friench-blue/90">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-friench-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help you achieve your digital transformation goals with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-friench-blue hover:bg-gray-100 font-semibold px-8"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-friench-blue font-semibold px-8"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}