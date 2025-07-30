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
      title: "App Generator",
      description: "This service provides a user-friendly platform to generate custom mobile applications without the need for coding skills. Create apps for various purposes such as business, education, entertainment.",
      image: "https://frienchtech.com/images/App_Generater.png",
      category: "Mobile Development",
      technologies: ["React Native", "Node.js", "Firebase", "AI/ML"],
      duration: "4 months",
      team: "6 developers",
      status: "Live",
      client: "FrienchTech",
      gradient: "from-blue-500 to-cyan-500",
      stats: { apps: "1000+", users: "50K+", success: "95%" }
    },
    {
      title: "My Manager",
      description: "My Manager is a personal productivity tool that helps users organize their tasks, schedules, and projects efficiently. It offers features such as task lists, calendar, and project management.",
      image: "https://frienchtech.com/images/mymanager.jpg",
      category: "Productivity",
      technologies: ["Spring Boot", "Java", "MySQL", "Angular"],
      duration: "5 months",
      team: "4 developers",
      status: "Completed",
      client: "FrienchTech",
      gradient: "from-green-500 to-teal-500",
      stats: { users: "25K+", tasks: "500K+", efficiency: "+40%" }
    },
    {
      title: "Fast Scanner",
      description: "This service utilizes advanced image recognition technology to convert images containing text into editable text format. It is useful for tasks such as extracting text from documents and images.",
      image: "https://frienchtech.com/images/fast_scan.jpg",
      category: "AI & OCR",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask"],
      duration: "3 months",
      team: "3 developers",
      status: "Live",
      client: "FrienchTech",
      gradient: "from-purple-500 to-pink-500",
      stats: { accuracy: "98%", scans: "100K+", speed: "2s avg" }
    },
    {
      title: "Self Help Audio Book",
      description: "The Self Help Audio Book service offers a vast collection of audio books covering various self-help topics such as personal development, motivation, mindfulness, and success strategies.",
      image: "https://frienchtech.com/images/audiobook.png",
      category: "Educational",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
      duration: "6 months",
      team: "5 developers",
      status: "Live",
      client: "FrienchTech",
      gradient: "from-orange-500 to-red-500",
      stats: { books: "500+", users: "30K+", hours: "10K+" }
    },
    {
      title: "Chalo Pandit Ji",
      description: "Chalo Pandit Ji is the nation's largest aggregator of Pandit Ji's, offering personalized pooja services to devotees. Users can book appointments for various religious ceremonies, rituals, and special occasions.",
      image: "https://frienchtech.com/images/panditji.png",
      category: "Religious Services",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      duration: "7 months",
      team: "8 developers",
      status: "Live",
      client: "FrienchTech",
      gradient: "from-yellow-500 to-orange-500",
      stats: { pandits: "1000+", bookings: "50K+", cities: "100+" }
    },
    {
      title: "Photo Copy Service",
      description: "Photo Copy is a document scanning and printing service that allows users to make copies of physical documents quickly and conveniently. It offers high-quality scanning and printing solutions for both personal and professional use.",
      image: "https://frienchtech.com/images/photocopy.png",
      category: "Document Services",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      duration: "2 months",
      team: "3 developers",
      status: "Live",
      client: "FrienchTech",
      gradient: "from-indigo-500 to-purple-500",
      stats: { copies: "100K+", quality: "HD", speed: "Fast" }
    },
    {
      title: "NeuroTherapy App",
      description: "Our NeuroTherapy Management App is tailored for doctors, offering efficient tools to streamline patient care. Access patient records, treatment plans, and communicate seamlessly—all in one platform.",
      image: "https://frienchtech.com/images/neurotherapy.jpg",
      category: "Healthcare",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      duration: "8 months",
      team: "7 developers",
      status: "Testing",
      client: "FrienchTech",
      gradient: "from-teal-500 to-blue-500",
      stats: { doctors: "500+", patients: "5K+", efficiency: "+60%" }
    },
    {
      title: "New Aashiyana",
      description: "Explore your dream home with the new Aashiyana Website! Our comprehensive platform offers a wide range of properties for sale and rent, expert guidance from real estate professionals, and innovative tools to simplify your property search.",
      image: "https://frienchtech.com/images/newaashiyana.jpg",
      category: "Real Estate",
      technologies: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
      duration: "6 months",
      team: "6 developers",
      status: "Live",
      client: "FrienchTech",
      gradient: "from-green-500 to-blue-500",
      stats: { properties: "10K+", users: "20K+", matches: "85%" }
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
