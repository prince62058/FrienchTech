import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, ArrowRight, Users, Clock, Shield } from "lucide-react";
import ParticleSystem from "@/components/3d-particle-system";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const pricingRef = useRef(null);
  const featuresRef = useRef(null);

  const pricingPlans = [
    {
      name: "Starter",
      price: "$999",
      period: "per project",
      description: "Perfect for small businesses and startups looking to establish their digital presence.",
      icon: Zap,
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Responsive Web Design",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "3-5 Page Website",
        "Mobile Optimization",
        "Social Media Integration",
        "30 Days Support",
        "Basic Analytics Setup"
      ],
      deliverables: [
        "Custom Website Design",
        "Source Code",
        "Deployment Assistance",
        "Basic Documentation"
      ]
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "per project",
      description: "Ideal for growing businesses that need advanced features and functionality.",
      icon: Star,
      popular: true,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Everything in Starter",
        "Custom Web Application",
        "Database Integration",
        "Advanced SEO",
        "E-commerce Functionality",
        "User Authentication",
        "Admin Dashboard",
        "90 Days Support",
        "Performance Optimization",
        "Security Implementation"
      ],
      deliverables: [
        "Full-Stack Application",
        "Database Design",
        "API Development",
        "Comprehensive Documentation",
        "Training Session"
      ]
    },
    {
      name: "Enterprise",
      price: "$5,999",
      period: "per project",
      description: "Complete solution for large organizations requiring scalable and robust systems.",
      icon: Crown,
      popular: false,
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "Everything in Professional",
        "Microservices Architecture",
        "Cloud Infrastructure Setup",
        "Advanced Security Features",
        "Load Balancing",
        "Automated Deployment",
        "Monitoring & Analytics",
        "24/7 Priority Support",
        "Scalability Planning",
        "Performance Monitoring",
        "Backup & Recovery",
        "Compliance Implementation"
      ],
      deliverables: [
        "Scalable Architecture",
        "Cloud Deployment",
        "DevOps Pipeline",
        "Security Audit",
        "Detailed Documentation",
        "Team Training"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Mobile App Development",
      price: "$3,999",
      description: "Native iOS and Android applications with modern UI/UX design.",
      icon: Users,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Maintenance & Support",
      price: "$299",
      period: "per month",
      description: "Ongoing maintenance, updates, and technical support for your applications.",
      icon: Clock,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Security Audit",
      price: "$1,499",
      description: "Comprehensive security assessment and vulnerability testing.",
      icon: Shield,
      gradient: "from-red-500 to-orange-500"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Pricing cards animation with staggered 3D entrance
      gsap.fromTo(".pricing-card", 
        { opacity: 0, y: 100, rotationX: -20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Features cards animation
      gsap.fromTo(".feature-card",
        { opacity: 0, x: -50, rotationY: -15 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animations
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.4
      });

      // Advanced 3D hover effects for pricing cards
      const cards = document.querySelectorAll(".pricing-card");
      cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { 
            rotationY: 8, 
            rotationX: 8, 
            scale: 1.05, 
            duration: 0.4,
            transformPerspective: 1000,
            ease: "power2.out"
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { 
            rotationY: 0, 
            rotationX: 0, 
            scale: 1, 
            duration: 0.4,
            ease: "power2.out"
          });
        });
      });

      // Popular badge pulse effect
      gsap.to(".popular-badge", {
        scale: 1.1,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
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
              Pricing Plans
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose the perfect plan for your project. Transparent pricing with no hidden fees. 
            Every plan includes our commitment to quality and excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-cyan-400 font-semibold">💎 Premium Quality</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-purple-400 font-semibold">🚀 Fast Delivery</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-green-400 font-semibold">✅ Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={pricingRef} className="py-16 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card key={index} className={`pricing-card group relative bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 transform-3d ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="popular-badge absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-semibold">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-white mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3">Features Include:</h4>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-200">
                          <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3">Deliverables:</h4>
                      {plan.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center text-gray-200">
                          <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0 fill-current" />
                          <span className="text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:scale-105 transition-all duration-300 shadow-lg btn-3d text-lg py-6`}>
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section ref={featuresRef} className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Extend your project with our specialized services designed to enhance and maintain your digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="feature-card group bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 transform-3d">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </CardTitle>
                    <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                      {service.price}
                      {service.period && <span className="text-sm text-gray-400 ml-1">{service.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center mb-6">
                      {service.description}
                    </CardDescription>
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 transition-all duration-300 btn-3d">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What's included in the project timeline?",
                answer: "Each project includes planning, design, development, testing, and deployment phases. We provide regular updates and maintain transparent communication throughout."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! All plans include initial support period, and we offer extended maintenance packages to keep your application running smoothly."
              },
              {
                question: "Can I customize a plan for my specific needs?",
                answer: "Absolutely! We understand every project is unique. Contact us to discuss a custom solution tailored to your requirements."
              },
              {
                question: "What technologies do you use?",
                answer: "We use modern, industry-standard technologies including React, Node.js, Python, cloud platforms, and many more based on project requirements."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto animate-float">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with us today to discuss your requirements and receive a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all duration-300 shadow-xl btn-3d">
                Get Custom Quote
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