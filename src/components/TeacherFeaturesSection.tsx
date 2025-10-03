import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  FileText, 
  TrendingUp, 
  Users, 
  Award, 
  AlertCircle, 
  Star, 
  Download,
  Zap,
  ArrowUp,
  ArrowDown,
  Clock,
  BookOpen,
  Play,
  BarChart3,
  MessageSquare,
  Gift,
  Target
} from "lucide-react";

export function TeacherFeaturesSection() {
  return (
    <section id="teachers" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
            <Star className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-800">✨ 92% Efficiency: AI reduced grading workload by 3 hours this week</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">
            AI-Powered Teaching Tools
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Intelligent insights and automated tools that help you focus on what matters most: teaching
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {/* AI-Generated Quizzes */}
          <Card className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
                  <FileText className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-blue-900 font-semibold">AI Quiz Generator</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-xl p-4 border border-gray-100 mb-4 shadow-sm">
                <h5 className="mb-3 text-gray-900 font-medium">Sample Quiz: World War II</h5>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-blue-50 rounded-lg border-l-2 border-blue-300">
                    <span className="text-blue-800 font-medium">Q1:</span> <span className="text-gray-700">What year did WWII begin?</span>
                  </div>
                  <div className="p-2 bg-purple-50 rounded-lg border-l-2 border-purple-300">
                    <span className="text-purple-800 font-medium">Q2:</span> <span className="text-gray-700">Explain the significance of D-Day</span>
                  </div>
                  <div className="p-2 bg-green-50 rounded-lg border-l-2 border-green-300">
                    <span className="text-green-800 font-medium">Q3:</span> <span className="text-gray-700">Multiple choice: Allied powers included...</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Auto-graded</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">Adaptive</Badge>
                <Badge className="bg-green-100 text-green-800 border-green-200">Easy</Badge>
                <Badge className="bg-orange-100 text-orange-800 border-orange-200">Medium</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Zap className="h-3 w-3 mr-1" />
                  Generate
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Download className="h-3 w-3 mr-1" />
                  Export PDF
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Student Performance Analytics */}
          <Card className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-purple-700" />
                </div>
                <CardTitle className="text-purple-900 font-semibold">Performance Insights</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Class Average</span>
                    <span className="text-purple-700 font-bold">78%</span>
                  </div>
                  <div className="relative">
                    <Progress value={78} className="h-3 bg-purple-50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" 
                         style={{ width: '78%', animation: 'fillProgress 2s ease-out' }} />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <h6 className="mb-3 text-gray-900 font-medium">Subject Trends</h6>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">Algebraic Equations</span>
                      <div className="flex items-center gap-1">
                        <ArrowUp className="h-3 w-3 text-green-600" />
                        <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">12%</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">Geometry</span>
                      <div className="flex items-center gap-1">
                        <ArrowDown className="h-3 w-3 text-red-600" />
                        <Badge variant="outline" className="text-red-700 border-red-200 bg-red-50">8%</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-xl">
                  <Users className="h-6 w-6 text-green-700" />
                </div>
                <CardTitle className="text-green-900 font-semibold">Smart Recommendations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-xl border border-red-200 cursor-pointer hover:bg-red-100 transition-colors" 
                     role="button" tabIndex={0} aria-label="View Sarah Martinez's profile">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-medium text-red-900">⚠️ At Risk</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-red-900 font-medium">Sarah Martinez</span>
                    <p className="text-red-700">Struggling with calculus concepts</p>
                  </div>
                  <div className="flex gap-1 mt-2">
                    <Button size="xs" variant="outline" className="text-xs border-red-300 text-red-700 hover:bg-red-100">
                      <BookOpen className="h-3 w-3 mr-1" />
                      Assign Practice
                    </Button>
                  </div>
                </div>
                
                <div className="p-3 bg-yellow-50 rounded-xl border border-yellow-200 cursor-pointer hover:bg-yellow-100 transition-colors" 
                     role="button" tabIndex={0} aria-label="View David Chen's profile">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-900">🕒 Attendance</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-yellow-900 font-medium">David Chen</span>
                    <p className="text-yellow-700">Attendance pattern indicates risk</p>
                  </div>
                  <div className="flex gap-1 mt-2">
                    <Button size="xs" variant="outline" className="text-xs border-yellow-300 text-yellow-700 hover:bg-yellow-100">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Send Reminder
                    </Button>
                  </div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-xl border border-green-200 cursor-pointer hover:bg-green-100 transition-colors" 
                     role="button" tabIndex={0} aria-label="View Emma Wilson's profile">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-900">⭐ High Performer</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-green-900 font-medium">Emma Wilson</span>
                    <p className="text-green-700">Ready for advanced challenges</p>
                  </div>
                  <div className="flex gap-1 mt-2">
                    <Button size="xs" variant="outline" className="text-xs border-green-300 text-green-700 hover:bg-green-100">
                      <Gift className="h-3 w-3 mr-1" />
                      Offer Challenge
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Lesson Plan Assistant */}
          <Card className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl">
                  <BookOpen className="h-6 w-6 text-indigo-700" />
                </div>
                <CardTitle className="text-indigo-900 font-semibold">AI Lesson Planner</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-xl p-4 border border-gray-100 mb-4 shadow-sm">
                <h5 className="mb-3 text-gray-900 font-medium">Topic: Photosynthesis</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                    <Play className="h-3 w-3 text-blue-600" />
                    <span className="text-gray-700"><strong>Warm-up (5 min):</strong> Quick poll</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                    <Target className="h-3 w-3 text-purple-600" />
                    <span className="text-gray-700"><strong>Core (30 min):</strong> Interactive demo</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                    <Award className="h-3 w-3 text-green-600" />
                    <span className="text-gray-700"><strong>Wrap-up (10 min):</strong> AI quiz</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">Standards-aligned</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">Interactive</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Zap className="h-3 w-3 mr-1" />
                  Generate Plan
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Download className="h-3 w-3 mr-1" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics Dashboard Preview */}
        <Card className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl">
                  <BarChart3 className="h-6 w-6 text-slate-700" />
                </div>
                <CardTitle className="text-slate-900 font-semibold">Class Performance Dashboard</CardTitle>
              </div>
              <Badge className="bg-slate-100 text-slate-800 border-slate-200">Live Data</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                    <div className="text-3xl mb-2 text-blue-700 font-bold">24</div>
                    <div className="text-sm text-blue-800 font-medium">Active Students</div>
                    <div className="text-xs text-blue-600 mt-1 flex items-center justify-center gap-1">
                      <ArrowUp className="h-3 w-3" />
                      2 this week
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                    <div className="text-3xl mb-2 text-purple-700 font-bold">87%</div>
                    <div className="text-sm text-purple-800 font-medium">Assignment Completion</div>
                    <div className="text-xs text-purple-600 mt-1 flex items-center justify-center gap-1">
                      <ArrowUp className="h-3 w-3" />
                      5% improvement
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                    <div className="text-3xl mb-2 text-green-700 font-bold">4.2</div>
                    <div className="text-sm text-green-800 font-medium">Average Grade</div>
                    <div className="text-xs text-green-600 mt-1 flex items-center justify-center gap-1">
                      <ArrowUp className="h-3 w-3" />
                      0.3 from last month
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
                    <div className="text-3xl mb-2 text-orange-700 font-bold">12</div>
                    <div className="text-sm text-orange-800 font-medium">Quizzes Generated</div>
                    <div className="text-xs text-orange-600 mt-1">This week</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="students" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <h6 className="font-medium text-gray-900 mb-2">Top Performers</h6>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">Emma Wilson</span>
                        <span className="text-green-600 font-medium">98%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">Alex Johnson</span>
                        <span className="text-green-600 font-medium">95%</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <h6 className="font-medium text-gray-900 mb-2">Needs Attention</h6>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">Sarah Martinez</span>
                        <span className="text-red-600 font-medium">65%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">David Chen</span>
                        <span className="text-yellow-600 font-medium">72%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="assignments" className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <h6 className="font-medium text-gray-900 mb-2">Recent Assignments</h6>
                    <div className="text-sm text-gray-600">
                      <p>Algebra Quiz #3</p>
                      <p className="text-xs text-gray-500">Due: Tomorrow</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <h6 className="font-medium text-gray-900 mb-2">Grading Queue</h6>
                    <div className="text-sm text-gray-600">
                      <p>5 submissions pending</p>
                      <p className="text-xs text-blue-600">Auto-grade available</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <h6 className="font-medium text-gray-900 mb-2">Upcoming</h6>
                    <div className="text-sm text-gray-600">
                      <p>Geometry Test</p>
                      <p className="text-xs text-gray-500">Next Friday</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 rounded-2xl border border-blue-200" 
                 aria-live="polite">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-blue-600" />
                <h5 className="text-slate-900 font-semibold">🔮 AI Insights & Suggestions</h5>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-800">
                    <span className="font-medium text-blue-700">📊 Performance Alert:</span> Consider reviewing logarithmic functions - 40% of students show uncertainty
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-800">
                    <span className="font-medium text-purple-700">⏰ Engagement Tip:</span> Friday afternoon classes show 15% lower engagement - suggest interactive activities
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}