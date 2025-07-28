import HeroSection from "@/components/hero-section";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Rocket, Code, Shield, Zap, Target, Globe, Smartphone, Database, Cloud, HeartHandshake, TrendingUp, CheckCircle } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const techStackRef = useRef(null);
  
  useEffect(() => {
    // Animate stats on scroll
    gsap.fromTo(
      ".stat-card",
      { 
        opacity: 0, 
        y: 50,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    // Animate service cards
    gsap.fromTo(
      ".service-card",
      {
        opacity: 0,
        y: 80,
        rotationX: 15
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
        }
      }
    );

    // Animate feature cards with 3D effect
    gsap.fromTo(
      ".feature-card",
      {
        opacity: 0,
        x: -100,
        rotationY: -15
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 75%",
        }
      }
    );

    // Animate tech stack icons
    gsap.fromTo(
      ".tech-icon",
      {
        opacity: 0,
        scale: 0,
        rotation: 180
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 80%",
        }
      }
    );

    // Floating animation for icons
    gsap.to(".floating-icon", {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

  }, []);

  return (
    <div className="pt-20 overflow-hidden">
      <HeroSection />
      
      {/* Enhanced Stats Section with 3D Cards */}
      <section ref={statsRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Success Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming businesses through innovative technology solutions and exceptional service delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="stat-card bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center floating-icon">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-friench-blue mb-3">
                <AnimatedCounter end={250} suffix="+" />
              </div>
              <p className="text-gray-600 font-semibold text-lg">Happy Clients</p>
              <p className="text-gray-500 text-sm mt-2">Across 15+ countries</p>
            </div>
            
            <div className="stat-card bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center floating-icon">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-friench-blue mb-3">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-gray-600 font-semibold text-lg">Projects Delivered</p>
              <p className="text-gray-500 text-sm mt-2">On time & budget</p>
            </div>
            
            <div className="stat-card bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center floating-icon">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-friench-blue mb-3">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <p className="text-gray-600 font-semibold text-lg">Success Rate</p>
              <p className="text-gray-500 text-sm mt-2">Client satisfaction</p>
            </div>

            <div className="stat-card bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center floating-icon">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-friench-blue mb-3">
                <AnimatedCounter end={7} suffix="+" />
              </div>
              <p className="text-gray-600 font-semibold text-lg">Years Experience</p>
              <p className="text-gray-500 text-sm mt-2">Industry expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with 3D Effects */}
      <section ref={servicesRef} className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-6">Our Premium Services</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge technology solutions designed to accelerate your business growth and digital transformation journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="service-card group bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                <Code className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Web Development</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Modern, responsive web applications built with cutting-edge technologies like React, Next.js, and Node.js. 
                We create scalable solutions that deliver exceptional user experiences across all devices.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Custom Web Applications
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  E-commerce Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Progressive Web Apps
                </li>
              </ul>
              <Link href="/services">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 text-lg">
                  Explore Web Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="service-card group bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                <Smartphone className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Mobile Development</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Native and cross-platform mobile applications that engage users and drive business growth. 
                From iOS to Android, we deliver high-performance apps with stunning UI/UX design.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  iOS & Android Apps
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  React Native Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  App Store Optimization
                </li>
              </ul>
              <Link href="/services">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 text-lg">
                  Explore Mobile Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="service-card group bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                <Cloud className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Cloud Solutions</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Scalable cloud infrastructure and DevOps solutions using AWS, Google Cloud, and Azure. 
                We help businesses migrate, optimize, and manage their cloud environments efficiently.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Cloud Migration
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  DevOps & CI/CD
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Infrastructure Management
                </li>
              </ul>
              <Link href="/services">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 text-lg">
                  Explore Cloud Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Features Section */}
      <section ref={featuresRef} className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-6">Why Choose FrienchTech?</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="feature-card group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security First</h3>
              <p className="text-gray-600 text-lg">
                Enterprise-grade security measures and best practices integrated into every solution we deliver.
              </p>
            </div>

            <div className="feature-card group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600 text-lg">
                Optimized performance and fast loading times to ensure the best user experience possible.
              </p>
            </div>

            <div className="feature-card group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Goal Oriented</h3>
              <p className="text-gray-600 text-lg">
                Every project is aligned with your business objectives to maximize ROI and drive growth.
              </p>
            </div>

            <div className="feature-card group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600 text-lg">
                Scalable solutions designed to work seamlessly across different markets and regions.
              </p>
            </div>

            <div className="feature-card group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 text-lg">
                Round-the-clock support and maintenance to ensure your systems run smoothly.
              </p>
            </div>

            <div className="feature-card group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Driven</h3>
              <p className="text-gray-600 text-lg">
                Analytics and insights to help you make informed decisions and optimize performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section ref={techStackRef} className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-6">Our Technology Stack</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="tech-icon group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Code className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">React</span>
            </div>

            <div className="tech-icon group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Database className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Node.js</span>
            </div>

            <div className="tech-icon group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">AWS</span>
            </div>

            <div className="tech-icon group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Mobile</span>
            </div>

            <div className="tech-icon group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Security</span>
            </div>

            <div className="tech-icon group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Global</span>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              And many more cutting-edge technologies to meet your specific needs
            </p>
            <Link href="/services">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg">
                Explore Our Tech Stack
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Sarah Johnson</h4>
                  <p className="text-gray-300">CEO, TechStart Inc.</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "FrienchTech transformed our outdated systems into a modern, scalable platform. 
                Their expertise and dedication exceeded our expectations. Our revenue increased by 150% after the implementation."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.5 3 2-6.5L.5 7h6.5L10 .5 13 7h6.5l-6 4.5 2 6.5z"/>
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Michael Chen</h4>
                  <p className="text-gray-300">CTO, InnovateLab</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "The mobile app they developed for us has over 100K downloads and a 4.9-star rating. 
                Their attention to detail and user experience design is phenomenal. Highly recommended!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.5 3 2-6.5L.5 7h6.5L10 .5 13 7h6.5l-6 4.5 2 6.5z"/>
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Emma Rodriguez</h4>
                  <p className="text-gray-300">Founder, GrowthHub</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "Their cloud migration strategy saved us 60% in infrastructure costs while improving performance. 
                The team's expertise in DevOps and cloud architecture is unmatched."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.5 3 2-6.5L.5 7h6.5L10 .5 13 7h6.5l-6 4.5 2 6.5z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-friench-blue via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who have revolutionized their operations with our innovative IT solutions. 
            Let's discuss how we can accelerate your digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-friench-blue hover:bg-gray-100 font-bold px-12 py-6 text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start Your Project Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-friench-blue font-bold px-12 py-6 text-xl rounded-full transform hover:scale-105 transition-all duration-300"
              >
                View Our Portfolio
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <p className="text-white/80">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">48hrs</div>
              <p className="text-white/80">Quick Response</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}