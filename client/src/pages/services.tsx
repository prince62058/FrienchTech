import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Cloud, Shield, Smartphone, Globe, ArrowRight, Star, Lightbulb, Network, HeadphonesIcon, Gamepad2, Server } from "lucide-react";
import ParticleSystem from "@/components/3d-particle-system";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "We specialize in software development services. Our team crafts custom software solutions tailored to your specific needs. From conceptualization to deployment, we handle the entire process.",
      features: ["Web Applications", "Desktop Software", "API Development", "System Integration"],
      category: "Development",
      price: "Starting at $5,000",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Product Development",
      description: "We specialize in product development, from concept to market. Our focus is on generating ideas, refining designs, rigorous testing, and successful launches.",
      features: ["Concept Design", "Prototyping", "Testing & QA", "Market Launch"],
      category: "Innovation",
      price: "Starting at $8,000",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Azure Services",
      description: "We offer Azure services tailored to your business needs. Leveraging Microsoft's powerful cloud computing platform, we provide comprehensive solutions.",
      features: ["Cloud Migration", "Virtual Machines", "Data Storage", "DevOps Integration"],
      category: "Cloud",
      price: "Starting at $3,000",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Network,
      title: "Internet of Things",
      description: "Explore the possibilities of IoT with our tailored services. We connect everyday objects to the internet, turning them into smart devices.",
      features: ["Smart Devices", "Sensor Integration", "Data Analytics", "Automation"],
      category: "IoT",
      price: "Starting at $6,000",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: HeadphonesIcon,
      title: "IT Consultancy",
      description: "Empower your business with our IT consultancy services. Our experts offer strategic guidance to optimize your technology utilization.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Security Audits"],
      category: "Consulting",
      price: "Starting at $1,500",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Dive into the world of game development with us. From initial concept to polished product, we specialize in bringing video games to life.",
      features: ["2D/3D Games", "Mobile Gaming", "VR/AR Games", "Game Testing"],
      category: "Gaming",
      price: "Starting at $10,000",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Server,
      title: "VPS Services",
      description: "We offer Virtual Private Server (VPS) services that provide you with dedicated resources and complete control over your hosting environment.",
      features: ["Dedicated Resources", "Custom Configuration", "24/7 Monitoring", "Scalable Solutions"],
      category: "Hosting",
      price: "Starting at $50/month",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Cloud,
      title: "AWS Cloud Computing",
      description: "We provide cloud computing services powered by AWS, enabling businesses to access and store data securely with unmatched scalability.",
      features: ["EC2 Instances", "S3 Storage", "RDS Database", "Lambda Functions"],
      category: "AWS",
      price: "Starting at $2,500",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Services cards animation
      gsap.fromTo(".service-card", 
        { opacity: 0, y: 100, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats animation
      gsap.fromTo(".stat-item",
        { opacity: 0, scale: 0.8, rotationY: 90 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating elements animation
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

      // 3D hover effects for service cards
      const cards = document.querySelectorAll(".service-card");
      cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { 
            rotationY: 5, 
            rotationX: 5, 
            scale: 1.05, 
            duration: 0.3,
            transformPerspective: 1000
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { 
            rotationY: 0, 
            rotationX: 0, 
            scale: 1, 
            duration: 0.3
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20">
      <ParticleSystem />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 px-6">
        <div className="container mx-auto text-center relative z-10">
          <div className="floating-element">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Looking for better & reliable services? Our comprehensive range of IT solutions 
            designed to elevate your business with cutting-edge technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-cyan-400 font-semibold">✨ 200+ Projects Delivered</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-purple-400 font-semibold">🚀 8+ Service Categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-16 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="service-card group bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 transform-3d">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <Badge variant="secondary" className="w-fit mx-auto mb-3 bg-white/10 text-white border-white/20">
                      {service.category}
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </CardTitle>
                    <div className="text-cyan-400 font-semibold text-lg">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-6 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-200">
                          <Star className="w-4 h-4 text-yellow-400 mr-3 fill-current" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:scale-105 transition-all duration-300 shadow-lg btn-3d`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose FrienchTech?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. We deliver excellence through innovation and dedication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="stat-item text-center glass-effect p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">200+</div>
              <div className="text-gray-300 text-lg">Projects Completed</div>
            </div>
            <div className="stat-item text-center glass-effect p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">150+</div>
              <div className="text-gray-300 text-lg">Happy Clients</div>
            </div>
            <div className="stat-item text-center glass-effect p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-3">5+</div>
              <div className="text-gray-300 text-lg">Years Experience</div>
            </div>
            <div className="stat-item text-center glass-effect p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-3">24/7</div>
              <div className="text-gray-300 text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto animate-float">
            <h3 className="text-4xl font-bold text-white mb-6">LET'S GET YOUR PROJECT STARTED</h3>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business with our cutting-edge IT solutions?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all duration-300 shadow-xl btn-3d">
                CONTACT WITH US
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 btn-3d">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}