import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { 
  Brain, 
  Zap, 
  ArrowRight, 
  Star, 
  Users, 
  CheckCircle, 
  Sparkles,
  Play,
  Mail,
  Shield,
  Trophy,
  Clock,
  Lock,
  TrendingUp
} from "lucide-react";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

// Circular Progress Ring
function ProgressRing({ percentage, color = "blue" }: { percentage: number; color?: string }) {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorMap: { [key: string]: string } = {
    blue: "#60a5fa",
    purple: "#a78bfa",
    green: "#4ade80",
    pink: "#f472b6"
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
        <circle
          stroke="rgba(255, 255, 255, 0.2)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={colorMap[color] || colorMap.blue}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ 
            strokeDashoffset,
            transition: 'stroke-dashoffset 1s ease-out'
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold">{percentage}%</span>
      </div>
    </div>
  );
}

// Animated Star Rating
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-6 h-6 ${
            star <= Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
          } transition-all duration-300 hover:scale-110`}
          style={{
            animation: `fadeIn 0.3s ease-out ${star * 0.1}s both`
          }}
        />
      ))}
    </div>
  );
}

// User Avatar Stack
function UserAvatarStack() {
  const avatars = [
    { bg: "bg-blue-500" },
    { bg: "bg-purple-500" },
    { bg: "bg-pink-500" },
    { bg: "bg-green-500" },
    { bg: "bg-orange-500" }
  ];

  return (
    <div className="flex items-center -space-x-2">
      {avatars.map((avatar, i) => (
        <div
          key={i}
          className={`w-10 h-10 rounded-full ${avatar.bg} border-2 border-white flex items-center justify-center text-white text-sm font-semibold transform hover:scale-110 transition-transform cursor-pointer`}
        >
          {String.fromCharCode(65 + i)}
        </div>
      ))}
      <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
        +45K
      </div>
    </div>
  );
}

// Partner Logos
function PartnerLogos() {
  const partners = ["HarvardX", "Coursera", "Udemy", "Khan Academy"];
  
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
      {partners.map((partner) => (
        <div key={partner} className="text-white/80 text-sm font-medium">
          {partner}
        </div>
      ))}
    </div>
  );
}

export function CTASections() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Mid-page CTA - After Student Features */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden text-white">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white" style={{ color: '#ffffff' }}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-effect rounded-full">
                <Star className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium">Join 50,000+ students worldwide</span>
              </div>
              
              {/* User Avatar Stack */}
              <div className="flex items-center gap-3 mb-6">
                <UserAvatarStack />
                <span className="text-sm text-blue-100">Real students, real results</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-responsive-xl text-white" style={{ color: '#ffffff' }}>
                Start Learning Smarter Today
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Experience personalized AI tutoring that adapts to your learning style. 
                No credit card required to get started.
              </p>
              
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-yellow-400/90 text-gray-900 rounded-full font-semibold text-sm">
                <Zap className="h-4 w-4" />
                Limited: New signups get AI Lesson Planner (Beta)
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-xl hover-lift animate-pulse-glow flex items-center justify-center gap-2"
                >
                  <Brain className="w-5 h-5" />
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm hover-lift flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            
            {/* Visual Element - Dashboard Mockup */}
            <div className="relative animate-float">
              <div className="bg-white rounded-3xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Sarah K.</div>
                        <div className="text-blue-100 text-sm">Level 12 • Streak: 45 days</div>
                      </div>
                    </div>
                    <Trophy className="w-8 h-8 text-yellow-300" />
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                    <div className="bg-white h-full w-3/4 rounded-full"></div>
                  </div>
                  <div className="text-white text-sm mt-2">75% to next level</div>
                </div>
                
                {/* Feature Cards */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">Calculus Module</div>
                      <div className="text-gray-600 text-xs">Completed 2 hours ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">AI Tutor Session</div>
                      <div className="text-gray-600 text-xs">In progress...</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">Grade Improved +15%</div>
                      <div className="text-gray-600 text-xs">Last 30 days</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-xl font-semibold text-sm animate-pulse">
                Live Dashboard
              </div>
            </div>
          </div>
          
          {/* Partner Logos */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-center text-blue-100 text-sm mb-6">Trusted by leading institutions</p>
            <PartnerLogos />
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden" style={{ color: '#ffffff' }}>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-effect rounded-full">
              <Trophy className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">Ready to excel in your studies?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-responsive-xl text-white" style={{ color: '#ffffff' }}>
              Ready to Transform Your Learning?
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of students who have already improved their grades and confidence with EduAI. 
              Start your journey to academic excellence today.
            </p>
          </div>
          
          {/* Dual CTAs - Now with Clear Hierarchy */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center mb-12 max-w-4xl mx-auto">
            {/* Primary CTA - Larger and More Prominent */}
            <Card className="flex-1 p-10 bg-gradient-to-br from-blue-600 to-purple-600 border-none rounded-3xl shadow-2xl hover-lift">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Zap className="w-10 h-10 text-blue-600" />
                </div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-xs font-bold relative overflow-hidden">
                  <div className="absolute inset-0 animate-shimmer"></div>
                  <Star className="w-3 h-3 relative z-10" />
                  <span className="relative z-10">MOST POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white" style={{ color: '#ffffff' }}>Start Free Trial</h3>
                <p className="text-blue-100 mb-6">
                  Get full access to all features for 14 days. No credit card required.
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-6 rounded-xl shadow-xl hover-lift text-lg gradient-shift"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <div className="flex items-center justify-center gap-4 mt-6 text-sm text-blue-100">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Instant access</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Secondary CTA - Subtler */}
            <Card className="flex-1 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white" style={{ color: '#ffffff' }}>Schedule Demo</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  See EduAI in action with a personalized demo for your institution.
                </p>
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-semibold py-4 rounded-xl backdrop-blur-sm hover-lift"
                >
                  Schedule Demo
                </Button>
                <p className="mt-4 text-xs text-gray-400">Perfect for schools & organizations</p>
              </div>
            </Card>
          </div>
          
          {/* Email Signup - Enhanced */}
          <div className="max-w-lg mx-auto mb-12 slide-in-up">
            <div className="bg-white rounded-2xl p-8 shadow-2xl hover-lift">
              <div className="flex items-center gap-2 mb-3 text-gray-900">
                <Mail className="w-6 h-6 text-blue-600" />
                <h4 className="font-bold text-lg">Stay Updated</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest updates on new features and educational insights.
              </p>
              <div className="flex gap-2 mb-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 font-semibold"
                >
                  Subscribe
                </Button>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Lock className="w-3 h-3" />
                <span>We'll never spam you. Unsubscribe anytime.</span>
              </div>
            </div>
          </div>
          
          {/* Trust Indicators - Animated */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <ProgressRing percentage={98} color="blue" />
              <div className="text-sm text-gray-400 mt-2">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">
                <AnimatedCounter end={50} suffix="K+" />
              </div>
              <div className="text-sm text-gray-400">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="mb-1">
                <StarRating rating={4.9} />
              </div>
              <div className="text-2xl font-bold text-pink-400 mb-1">4.9/5</div>
              <div className="text-sm text-gray-400">User Rating</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}