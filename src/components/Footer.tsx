import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { 
  Brain, 
  Mail, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram
} from "lucide-react";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "For Students", href: "#students" },
      { name: "For Teachers", href: "#teachers" },
      { name: "Pricing", href: "#pricing" },
      { name: "Demo", href: "#demo" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EduAI
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              AI-Powered Learning for Everyone. Transform your education with personalized tutoring and adaptive learning paths.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-slate-700"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            {/* Newsletter */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-blue-400">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-purple-400">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Security Badges */}
            <div className="mt-6 space-y-2">
              <Badge className="bg-blue-600/20 text-blue-300 text-xs">
                🔒 SOC 2 Certified
              </Badge>
              <Badge className="bg-green-600/20 text-green-300 text-xs">
                🛡️ GDPR Compliant
              </Badge>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-400">
            © 2025 EduAI. All rights reserved. Built with ❤️ for learners worldwide.
          </div>
        </div>
      </div>
    </footer>
  );
}