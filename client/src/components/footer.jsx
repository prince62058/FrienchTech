import { Link } from "wouter";
import { Code, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoImage from "@assets/Feiechtechlogo(copy)_1753162037206.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt="FrienchTech Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold">
                <span className="text-friench-orange">Friench</span>
                <span className="text-white">Tech</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Welcome to FrienchTech! We specialize in creating captivating websites that drive results. 
              Let our team craft a unique digital experience tailored to your brand's needs. 
              Elevate your online presence with us!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-friench-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-friench-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-friench-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-friench-blue transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Core Values</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <p className="text-gray-400">123 Business Street</p>
              <p className="text-gray-400">City, State 12345</p>
              <p className="text-gray-400">contact@frienchtech.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 FrienchTech IT Solution Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>by FrienchTech</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}