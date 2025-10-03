import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Brain, Zap, Globe, Users, Trophy } from 'lucide-react';



export function HeroSection() {
  return (
    <div id="home" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700">Powered by Advanced AI</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                Learn Smarter with AI
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your learning experience with our AI-powered education platform. 
                Personalized lessons, intelligent tutoring, and adaptive learning paths designed for your success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-6 rounded-xl transition-all duration-300"
                  size="lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Try Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <ImageWithFallback
                src="https://blocks.mvp-subha.me/assets/robo.svg"
                alt="Futuristic classroom with AI technology"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Why Choose EduAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of education with cutting-edge AI technology that adapts to your learning style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">AI-Powered Learning</h3>
              <p className="text-gray-600">
                Personalized learning paths powered by advanced AI algorithms that adapt to your pace and style.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Multilingual Support</h3>
              <p className="text-gray-600">
                Learn in your preferred language with our multilingual AI tutoring system.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your learning journey with detailed analytics and personalized insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}