import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Award, TrendingUp, ArrowRight, Eye } from "lucide-react";
import ParticleSystem from "@/components/3d-particle-system";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const statsRef = useRef(null);

  const projects = [
    {
      title: "E-Commerce Platform Revolution",
      description: "A comprehensive e-commerce solution with AI-powered recommendations, real-time inventory management, and seamless payment integration. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
      duration: "6 months",
      team: "8 developers",
      status: "Completed",
      client: "TechCorp Solutions",
      gradient: "from-blue-500 to-cyan-500",
      stats: { users: "50K+", revenue: "$2M+", performance: "99.9%" }
    },
    {
      title: "Smart IoT Dashboard",
      description: "Real-time monitoring dashboard for IoT devices with predictive analytics, custom alerts, and beautiful data visualizations. Handles millions of data points efficiently.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "IoT & Analytics",
      technologies: ["Vue.js", "Python", "InfluxDB", "Docker", "Kubernetes"],
      duration: "4 months",
      team: "6 developers",
      status: "Completed",
      client: "Industrial Tech Ltd",
      gradient: "from-purple-500 to-pink-500",
      stats: { devices: "10K+", uptime: "99.8%", alerts: "Real-time" }
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, instant transfers, and comprehensive financial management tools. Trusted by thousands of users.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      category: "Mobile Development",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Stripe"],
      duration: "8 months",
      team: "10 developers",
      status: "Live",
      client: "FinanceFlow Bank",
      gradient: "from-green-500 to-teal-500",
      stats: { downloads: "100K+", rating: "4.8/5", transactions: "$10M+" }
    },
    {
      title: "AI-Powered CRM System",
      description: "Customer Relationship Management system with AI-driven insights, automated workflows, and predictive sales analytics. Revolutionizing customer management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "AI & Machine Learning",
      technologies: ["Angular", "Python", "TensorFlow", "PostgreSQL", "Redis"],
      duration: "10 months",
      team: "12 developers",
      status: "In Progress",
      client: "Sales Dynamics Inc",
      gradient: "from-red-500 to-orange-500",
      stats: { accuracy: "94%", automation: "80%", efficiency: "+150%" }
    },
    {
      title: "Cloud Infrastructure Migration",
      description: "Complete migration of legacy systems to cloud infrastructure with auto-scaling, monitoring, and disaster recovery. Achieved 99.99% uptime and 60% cost reduction.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      category: "Cloud Solutions",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      duration: "5 months",
      team: "7 developers",
      status: "Completed",
      client: "Enterprise Corp",
      gradient: "from-indigo-500 to-purple-500",
      stats: { uptime: "99.99%", cost_saving: "60%", performance: "+200%" }
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting system built on blockchain technology with end-to-end encryption, real-time results, and immutable audit trails.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      category: "Blockchain",
      technologies: ["Solidity", "React", "Web3.js", "IPFS", "Ethereum"],
      duration: "7 months",
      team: "9 developers",
      status: "Testing",
      client: "Democratic Solutions",
      gradient: "from-yellow-500 to-orange-500",
      stats: { security: "256-bit", transparency: "100%", verification: "Instant" }
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Project cards animation with 3D transforms
      gsap.fromTo(".project-card", 
        { opacity: 0, y: 100, rotationX: -20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
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

      // Floating animations
      gsap.to(".floating-element", {
        y: -15,
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

      // Advanced 3D hover effects for project cards
      const cards = document.querySelectorAll(".project-card");
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

      // Image parallax effect
      gsap.to(".project-image", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".project-image",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-500";
      case "Live": return "bg-blue-500";
      case "In Progress": return "bg-yellow-500";
      case "Testing": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20">
      <ParticleSystem />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 px-6">
        <div className="container mx-auto text-center relative z-10">
          <div className="floating-element">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Projects
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our portfolio of innovative solutions that have transformed businesses 
            across industries with cutting-edge technology and exceptional design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-cyan-400 font-semibold">✨ 200+ Projects Delivered</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-purple-400 font-semibold">🏆 Industry Leaders</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-green-400 font-semibold">🚀 99% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-16 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card group bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 transform-3d overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getStatusColor(project.status)} text-white border-0`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/50 text-white border-white/20">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </CardTitle>
                  <div className="text-cyan-400 font-semibold">
                    {project.client}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-300 mb-6 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs bg-white/5 text-gray-300 border-white/20">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-white/5 text-gray-300 border-white/20">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2 text-purple-400" />
                      {project.team}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className={`flex-1 bg-gradient-to-r ${project.gradient} hover:scale-105 transition-all duration-300 shadow-lg btn-3d`}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 btn-3d">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Project Success Metrics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in every project we deliver.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="stat-item text-center glass-effect p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">200+</div>
              <div className="text-gray-300 text-lg">Projects Completed</div>
            </div>
            <div className="stat-item text-center glass-effect p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">99%</div>
              <div className="text-gray-300 text-lg">Success Rate</div>
            </div>
            <div className="stat-item text-center glass-effect p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-3">150+</div>
              <div className="text-gray-300 text-lg">Happy Clients</div>
            </div>
            <div className="stat-item text-center glass-effect p-8 rounded-2xl border border-white/10 hover-lift">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-3">5+</div>
              <div className="text-gray-300 text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <div className="glass-effect p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto animate-float">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Start Your Next Project?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's collaborate to bring your vision to life with our proven expertise and innovative approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all duration-300 shadow-xl btn-3d">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 btn-3d">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}