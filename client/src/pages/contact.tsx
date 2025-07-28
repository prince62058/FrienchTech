import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Award, ArrowRight } from "lucide-react";
import ParticleSystem from "@/components/3d-particle-system";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    projectType: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@frienchtech.com",
      secondary: "support@frienchtech.com",
      description: "Get in touch via email for detailed discussions",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 765-4321",
      description: "Speak directly with our team",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "123 Tech Street",
      secondary: "Innovation City, IC 12345",
      description: "Come visit our modern office space",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon - Fri: 9AM - 6PM",
      secondary: "Sat: 10AM - 4PM",
      description: "We're here when you need us",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solution",
    "Custom Software",
    "Cloud Solutions",
    "IoT Development",
    "Consulting Services",
    "Other"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Form animation
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -100, rotationY: -15 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Contact info cards animation
      gsap.fromTo(".contact-card",
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animations
      gsap.to(".floating-element", {
        y: -15,
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

      // Form field animations on focus
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          gsap.to(input.parentElement, { 
            scale: 1.02, 
            duration: 0.2,
            ease: "power2.out"
          });
        });
        
        input.addEventListener('blur', () => {
          gsap.to(input.parentElement, { 
            scale: 1, 
            duration: 0.2,
            ease: "power2.out"
          });
        });
      });

      // 3D hover effects for contact cards
      const cards = document.querySelectorAll(".contact-card");
      cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { 
            rotationY: 8, 
            rotationX: 8, 
            scale: 1.05, 
            duration: 0.3,
            transformPerspective: 1000,
            ease: "power2.out"
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { 
            rotationY: 0, 
            rotationX: 0, 
            scale: 1, 
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    
    // Success animation
    gsap.to(".submit-btn", {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20">
      <ParticleSystem />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 px-6">
        <div className="container mx-auto text-center relative z-10">
          <div className="floating-element">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Ready to start your next project? Let's discuss how we can bring your vision to life 
            with our cutting-edge technology solutions and expert team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-cyan-400 font-semibold">💬 Free Consultation</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-purple-400 font-semibold">⚡ Quick Response</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-green-400 font-semibold">🎯 Tailored Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card ref={formRef} className="bg-black/20 backdrop-blur-xl border border-white/10 transform-3d">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-white">Project Type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/20 text-white rounded-md px-3 py-2 focus:border-cyan-400 transition-all duration-300"
                      >
                        <option value="" className="bg-slate-800">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type} className="bg-slate-800">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project in detail..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="submit-btn w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all duration-300 shadow-xl btn-3d text-lg py-6"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div ref={infoRef} className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="contact-card group bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 transform-3d">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300`}>
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                          <p className="text-cyan-400 font-semibold mb-1">{info.primary}</p>
                          <p className="text-gray-300 mb-2">{info.secondary}</p>
                          <p className="text-gray-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We bring expertise, innovation, and dedication to every project we undertake.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass-effect p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Our skilled developers and designers bring years of experience and cutting-edge expertise to your project.
              </p>
            </div>
            
            <div className="text-center glass-effect p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300 leading-relaxed">
                With 200+ successful projects and 99% client satisfaction rate, we deliver solutions that exceed expectations.
              </p>
            </div>
            
            <div className="text-center glass-effect p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">On-Time Delivery</h3>
              <p className="text-gray-300 leading-relaxed">
                We respect your timeline and consistently deliver projects on schedule without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto animate-float">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait! Contact us today and let's discuss how we can transform your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all duration-300 shadow-xl btn-3d">
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 btn-3d">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}