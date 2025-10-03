import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { BookOpen, MessageCircle, Calendar, Brain, Mic, Sparkles, Trophy, Flame, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function StudentFeaturesSection() {
  const [flipped, setFlipped] = useState(false);
  const [progressAnimated, setProgressAnimated] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  useEffect(() => {
    // Trigger progress animation on mount
    setTimeout(() => setProgressAnimated(true), 300);
  }, []);

  const languages = ["English", "Español", "Français", "中文", "हिन्दी", "العربية"];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with Illustration */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Empowering Students with AI
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Personalized learning experiences that adapt to your pace, style, and goals
            </p>
          </div>
        </div>

        {/* Student Profile Quick View */}
        <div className="mb-12 max-w-md mx-auto">
          <Card className="p-6 border border-gray-200 hover:shadow-xl bg-gradient-to-br from-white to-blue-50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  SJ
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                  <Trophy className="w-3 h-3 text-yellow-800" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">Sarah Johnson</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Visual Learner</Badge>
                  <div className="flex items-center gap-1 text-orange-600 text-sm">
                    <Flame className="w-4 h-4" />
                    <span className="font-semibold">7 day streak</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1,247</div>
                <div className="text-xs text-gray-600">XP Points</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Features Grid - 3 columns on large screens */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Progress Tracking */}
          <Card className="p-8 border border-gray-200 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 transition-all duration-300 group">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">Personalized Progress</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Mathematics</span>
                  <span className="text-blue-600 font-bold">87%</span>
                </div>
                <Progress 
                  value={progressAnimated ? 87 : 0} 
                  className="h-3 bg-blue-100 transition-all duration-1000 ease-out" 
                  aria-label="Mathematics progress: 87%"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Science</span>
                  <span className="text-purple-600 font-bold">92%</span>
                </div>
                <Progress 
                  value={progressAnimated ? 92 : 0} 
                  className="h-3 bg-purple-100 transition-all duration-1000 ease-out delay-100" 
                  aria-label="Science progress: 92%"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Literature</span>
                  <span className="text-green-600 font-bold">78%</span>
                </div>
                <Progress 
                  value={progressAnimated ? 78 : 0} 
                  className="h-3 bg-green-100 transition-all duration-1000 ease-out delay-200" 
                  aria-label="Literature progress: 78%"
                />
              </div>
              <div className="pt-4 flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 flex items-center gap-1">
                  <span className="text-base">🎯</span>
                  <span>3 goals this week</span>
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  <span>Level 12</span>
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* AI Flashcard Generator */}
          <Card className="p-8 border border-gray-200 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 transition-all duration-300 group">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">AI Flashcard Generator</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div 
                className="relative h-48 cursor-pointer perspective-1000"
                onClick={() => setFlipped(!flipped)}
              >
                <div className={`absolute inset-0 transition-transform duration-500 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
                  {/* Front of card */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow-md backface-hidden ${flipped ? 'invisible' : 'visible'}`}>
                    <div className="text-center h-full flex flex-col justify-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">What is photosynthesis?</h4>
                      <div className="flex justify-center gap-2 mt-auto">
                        <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">Easy</Badge>
                        <Badge variant="outline" className="text-blue-600 border-blue-300 bg-blue-50">Biology</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-md backface-hidden rotate-y-180 ${flipped ? 'visible' : 'invisible'}`}>
                    <div className="text-center h-full flex flex-col justify-center">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        The process by which plants convert light energy into chemical energy, producing glucose and oxygen from carbon dioxide and water.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <p className="text-sm text-gray-600">
                  AI generates personalized flashcards based on your learning patterns and weak areas.
                </p>
                <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium">
                  <Sparkles className="w-4 h-4" />
                  Generate New Card
                </button>
              </div>
            </CardContent>
          </Card>

          {/* AI Chatbot */}
          <Card className="p-8 border border-gray-200 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 transition-all duration-300 group">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">Multilingual AI Tutor</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {/* Language Selector */}
              <div className="mb-4">
                <select 
                  className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={currentLanguage}
                  onChange={(e) => setCurrentLanguage(e.target.value)}
                  aria-label="Select language for AI tutor"
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-100 rounded-xl p-4 mb-4 max-h-56 overflow-y-auto">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg max-w-[85%] shadow-md">
                    Can you explain quantum physics in simple terms?
                  </div>
                  <div className="bg-white p-3 rounded-lg ml-auto max-w-[85%] shadow-md border border-gray-200">
                    Of course! Think of quantum physics like magic rules that only apply to very tiny things...
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg max-w-[85%] shadow-md">
                    ¿Puedes explicarlo en español?
                  </div>
                  <div className="bg-white p-3 rounded-lg ml-auto max-w-[85%] shadow-md border border-gray-200">
                    ¡Por supuesto! La física cuántica es como reglas mágicas...
                    <span className="inline-block w-2 h-4 bg-gray-800 ml-1 animate-pulse"></span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 items-center">
                <button className="flex-1 p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-gray-700">
                  <Mic className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium">Voice Input</span>
                </button>
                <Badge className="bg-green-100 text-green-700">18 languages</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Lessons - Full Width */}
        <Card className="p-8 border border-gray-200 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 transition-all duration-300 group">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">Upcoming Lessons</CardTitle>
              </div>
              <Badge className="bg-blue-100 text-blue-700">
                <Sparkles className="w-3 h-3 mr-1 inline" />
                AI Optimized
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {/* AI Recommendation Banner */}
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">AI Recommendation</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Revise Photosynthesis concepts before tomorrow's Chemistry lesson to strengthen understanding of chemical reactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:shadow-md transition-all duration-300 group/item">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl shadow-md">
                    📊
                  </div>
                  <div className="flex-1">
                    <h5 className="text-gray-900 font-semibold">Statistics & Probability</h5>
                    <p className="text-sm text-gray-600">Today, 2:30 PM</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-200 text-blue-800">Ready</Badge>
                  <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1 text-sm font-medium group-hover/item:shadow-md">
                    Join
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:shadow-md transition-all duration-300 group/item">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl shadow-md">
                    🧪
                  </div>
                  <div className="flex-1">
                    <h5 className="text-gray-900 font-semibold">Chemical Reactions</h5>
                    <p className="text-sm text-gray-600">Tomorrow, 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className="bg-purple-200 text-purple-800">Scheduled</Badge>
                  <button className="p-2 bg-white border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors flex items-center gap-1 text-sm font-medium">
                    Preview
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:shadow-md transition-all duration-300 group/item">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-2xl shadow-md">
                    📚
                  </div>
                  <div className="flex-1">
                    <h5 className="text-gray-900 font-semibold">Shakespeare Analysis</h5>
                    <p className="text-sm text-gray-600">Wednesday, 1:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-200 text-green-800">Adaptive</Badge>
                  <button className="p-2 bg-white border border-green-300 text-green-700 rounded-lg hover:bg-green-50 transition-colors flex items-center gap-1 text-sm font-medium">
                    Preview
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}