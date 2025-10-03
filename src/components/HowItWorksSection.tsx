import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  UserPlus, 
  Brain, 
  BookOpen, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  Target,
  Zap
} from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Sign Up & Choose Your Path",
      description: "Create your account in seconds and tell us about your learning goals, subjects of interest, and current level.",
      details: [
        "Quick 2-minute onboarding",
        "Select your subjects and difficulty level",
        "Set personalized learning goals",
        "Choose your preferred learning style"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      step: 2,
      icon: Brain,
      title: "AI Assessment & Personalization",
      description: "Our AI analyzes your responses to create a completely personalized learning plan tailored to your needs.",
      details: [
        "Adaptive assessment quiz",
        "Learning style analysis",
        "Knowledge gap identification",
        "Custom learning path creation"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      step: 3,
      icon: BookOpen,
      title: "Start Interactive Learning",
      description: "Dive into AI-powered lessons, get instant help from your personal tutor, and practice with adaptive exercises.",
      details: [
        "Interactive AI tutor sessions",
        "Real-time doubt resolution",
        "Adaptive practice problems",
        "Multimedia learning content"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      step: 4,
      icon: TrendingUp,
      title: "Track Progress & Excel",
      description: "Monitor your improvement with detailed analytics, celebrate achievements, and continuously optimize your learning.",
      details: [
        "Real-time progress tracking",
        "Performance analytics dashboard",
        "Achievement badges and rewards",
        "Continuous plan optimization"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Simple 4-step process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
            How EduAI Works
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get started with AI-powered learning in just a few minutes. Our intelligent system adapts to your pace and style for maximum effectiveness.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={step.step} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="bg-gray-100 text-gray-700 text-sm px-3 py-1">
                      Step {step.step}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3">
                        <div className={`w-6 h-6 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Zap className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {step.step === 1 && (
                    <Button className={`bg-gradient-to-r ${step.color} hover:opacity-90 text-white`}>
                      Get Started Free
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
                
                {/* Visual Card */}
                <div className={isEven ? 'lg:col-start-1' : ''}>
                  <Card className={`p-8 bg-gradient-to-br ${step.bgColor} border-2 border-gray-200 hover:shadow-xl transition-all duration-300`}>
                    <CardContent className="p-0">
                      <div className="text-center">
                        <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        
                        {/* Step-specific visual content */}
                        {step.step === 1 && (
                          <div className="space-y-4">
                            <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
                              <h5 className="font-semibold text-gray-900 mb-2">Quick Setup</h5>
                              <div className="text-sm text-gray-600">
                                <p>✓ Math • Science • Literature</p>
                                <p>✓ Beginner to Advanced</p>
                                <p>✓ Visual Learning Style</p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {step.step === 2 && (
                          <div className="space-y-4">
                            <div className="bg-white/80 rounded-lg p-4 border border-purple-200">
                              <h5 className="font-semibold text-gray-900 mb-2">AI Analysis</h5>
                              <div className="flex items-center justify-center gap-2 text-sm text-purple-700">
                                <Target className="w-4 h-4" />
                                <span>Analyzing learning patterns...</span>
                              </div>
                              <div className="mt-2 bg-purple-200 rounded-full h-2">
                                <div className="bg-purple-600 h-2 rounded-full w-3/4 transition-all duration-1000"></div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {step.step === 3 && (
                          <div className="space-y-4">
                            <div className="bg-white/80 rounded-lg p-4 border border-green-200">
                              <h5 className="font-semibold text-gray-900 mb-2">Interactive Session</h5>
                              <div className="text-sm text-gray-600 space-y-1">
                                <p className="bg-green-100 p-2 rounded">Student: "Explain photosynthesis"</p>
                                <p className="bg-blue-100 p-2 rounded">AI Tutor: "Great question! Let me break it down..."</p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {step.step === 4 && (
                          <div className="space-y-4">
                            <div className="bg-white/80 rounded-lg p-4 border border-orange-200">
                              <h5 className="font-semibold text-gray-900 mb-2">Progress Dashboard</h5>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-orange-100 p-2 rounded text-center">
                                  <div className="font-bold text-orange-700">87%</div>
                                  <div className="text-orange-600">Math</div>
                                </div>
                                <div className="bg-green-100 p-2 rounded text-center">
                                  <div className="font-bold text-green-700">92%</div>
                                  <div className="text-green-600">Science</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Connection Lines for Desktop */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-blue-300 via-purple-300 to-orange-300 opacity-30"></div>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-200">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-gray-700 mb-8">
              Join thousands of students who have already transformed their learning experience with EduAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Brain className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-xl"
              >
                Watch How It Works
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}