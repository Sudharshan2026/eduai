import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, TrendingUp, Users, Award, Globe, Shield } from "lucide-react";

export function SocialProofSection() {
  const studentTestimonials = [
    {
      name: "Sarah Chen",
      grade: "11th Grade",
      avatar: "https://images.unsplash.com/photo-1727875075949-8b36efd25260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU5NDk0NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "EduAI helped me understand calculus concepts I struggled with for months. The AI tutor explains things in ways that make sense to ME!",
      result: "Improved from B to A",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      grade: "University Freshman",
      avatar: "https://images.unsplash.com/photo-1727875075949-8b36efd25260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU5NDk0NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "The multilingual support is amazing! I can learn in Spanish and English, which really helps me understand complex chemistry concepts.",
      result: "98% quiz average",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      grade: "10th Grade",
      avatar: "https://images.unsplash.com/photo-1727875075949-8b36efd25260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU5NDk0NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "I love how the AI creates personalized flashcards for my weak areas. My study time is now 50% more effective!",
      result: "50% faster learning",
      rating: 5
    },
    {
      name: "David Park",
      grade: "12th Grade",
      avatar: "https://images.unsplash.com/photo-1727875075949-8b36efd25260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHMlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU5NDk0NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "The progress tracking helped me see exactly where I needed to improve. I went from struggling in physics to being top of my class!",
      result: "Top 5% in class",
      rating: 5
    }
  ];

  const teacherTestimonials = [
    {
      name: "Dr. Jennifer Walsh",
      subject: "Mathematics",
      school: "Lincoln High School",
      avatar: "https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDczMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "EduAI has transformed my classroom. The AI quiz generator saves me 5 hours per week, and the student insights help me identify who needs help before they fall behind.",
      result: "Saved 5 hours/week",
      rating: 5
    },
    {
      name: "Prof. Michael Torres",
      subject: "Science",
      school: "Roosevelt Academy",
      avatar: "https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDczMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "The predictive analytics are incredible. I can now intervene early when students start struggling, improving my class average by 15%.",
      result: "15% grade improvement",
      rating: 5
    },
    {
      name: "Ms. Lisa Chen",
      subject: "Literature",
      school: "Westfield College Prep",
      avatar: "https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NDczMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "My students are more engaged than ever. The AI-powered lesson plans are creative and standards-aligned, making my job easier and more enjoyable.",
      result: "90% engagement rate",
      rating: 5
    }
  ];

  const trustStats = [
    { icon: Users, value: "50,000+", label: "Active Students", color: "from-blue-500 to-blue-600" },
    { icon: Award, value: "98%", label: "Satisfaction Rate", color: "from-green-500 to-green-600" },
    { icon: Globe, value: "150+", label: "Countries", color: "from-purple-500 to-purple-600" },
    { icon: TrendingUp, value: "1M+", label: "Lessons Completed", color: "from-orange-500 to-orange-600" }
  ];

  const companyLogos = [
    { name: "Stanford University", logo: "🎓" },
    { name: "MIT", logo: "🔬" },
    { name: "Harvard", logo: "📚" },
    { name: "Oxford", logo: "🎯" },
    { name: "Berkeley", logo: "🌟" },
    { name: "Yale", logo: "📖" }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust Statistics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
            Trusted by Learners Worldwide
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Join thousands of students and educators who have transformed their learning experience with AI
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {trustStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">What Students Say</h3>
            <p className="text-gray-600">Real results from real students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentTestimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Student Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-600">{testimonial.grade}</div>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                    🎯 {testimonial.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Teacher Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Educators Love EduAI</h3>
            <p className="text-gray-600">Saving time and improving outcomes</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teacherTestimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-0">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Teacher Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').slice(-1)[0].split('.').slice(-1)[0][0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.subject} • {testimonial.school}</div>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                    ⚡ {testimonial.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Trusted by Leading Institutions</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center hover:opacity-100 transition-opacity duration-300">
                <div className="text-4xl mb-2">{company.logo}</div>
                <div className="text-xs text-gray-600 font-medium">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-16 p-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Security & Compliance</h3>
            <p className="text-gray-600">Your data is protected with enterprise-grade security</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900 text-sm">SOC 2 Certified</div>
              <div className="text-xs text-gray-600 mt-1">Enterprise security</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">🔒</span>
              </div>
              <div className="font-semibold text-gray-900 text-sm">GDPR Compliant</div>
              <div className="text-xs text-gray-600 mt-1">Privacy protected</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">👨‍👩‍👧‍👦</span>
              </div>
              <div className="font-semibold text-gray-900 text-sm">COPPA Safe</div>
              <div className="text-xs text-gray-600 mt-1">Child protection</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-lg">🛡️</span>
              </div>
              <div className="font-semibold text-gray-900 text-sm">256-bit SSL</div>
              <div className="text-xs text-gray-600 mt-1">Data encryption</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}