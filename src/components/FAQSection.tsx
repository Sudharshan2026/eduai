import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Search, MessageCircle, HelpCircle } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      name: "General",
      color: "bg-blue-100 text-blue-700",
      faqs: [
        {
          question: "How does the AI tutor work?",
          answer: "Our AI tutor uses advanced natural language processing and machine learning to understand your learning style, pace, and knowledge gaps. It provides personalized explanations, creates custom practice problems, and adapts its teaching method based on your responses and progress."
        },
        {
          question: "What subjects are covered?",
          answer: "EduAI covers a comprehensive range of subjects including Mathematics (Algebra, Geometry, Calculus), Sciences (Physics, Chemistry, Biology), Literature, History, Languages, and more. We're constantly adding new subjects based on user feedback."
        },
        {
          question: "Can I use EduAI on multiple devices?",
          answer: "Yes! Your EduAI account syncs across all devices. You can study on your laptop, tablet, or phone, and your progress, notes, and preferences will be automatically synchronized."
        }
      ]
    },
    {
      name: "Pricing",
      color: "bg-purple-100 text-purple-700",
      faqs: [
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Absolutely! You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term commitments. Your access will continue until the end of your current billing period."
        },
        {
          question: "Do you offer refunds?",
          answer: "Yes, we offer a 14-day money-back guarantee for all paid plans. If you're not satisfied within the first 14 days, we'll provide a full refund, no questions asked."
        },
        {
          question: "Is there a student discount?",
          answer: "Yes! We offer a 30% discount for verified students and a 20% discount for educators. Contact our support team with your school email address to get your discount code."
        }
      ]
    },
    {
      name: "Technical",
      color: "bg-green-100 text-green-700",
      faqs: [
        {
          question: "What devices and browsers are supported?",
          answer: "EduAI works on all modern devices and browsers including Chrome, Firefox, Safari, and Edge. We also have mobile apps for iOS and Android. The platform is optimized for both desktop and mobile learning."
        },
        {
          question: "Do I need to install any software?",
          answer: "No installation required! EduAI is a web-based platform that runs entirely in your browser. Simply create an account and start learning immediately. Our mobile apps are optional for enhanced mobile experience."
        },
        {
          question: "Can I use EduAI offline?",
          answer: "Pro and Enterprise users can download lessons and flashcards for offline study. Your progress will sync automatically when you reconnect to the internet."
        }
      ]
    },
    {
      name: "Privacy",
      color: "bg-orange-100 text-orange-700",
      faqs: [
        {
          question: "Is my data secure?",
          answer: "Yes, we take data security very seriously. We use enterprise-grade encryption, are SOC 2 certified, and comply with GDPR, COPPA, and other privacy regulations. Your personal information and learning data are never shared with third parties."
        },
        {
          question: "What data do you collect?",
          answer: "We only collect data necessary to provide our educational services: your learning progress, quiz responses, and usage patterns to personalize your experience. We never collect unnecessary personal information or sell your data."
        }
      ]
    }
  ];

  const allFAQs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({ ...faq, category: category.name, color: category.color }))
  );

  const filteredFAQs = searchTerm 
    ? allFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allFAQs;

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Get instant answers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-900 mb-8">
            Everything you need to know about EduAI. Can't find the answer you're looking for?
            Feel free to reach out to our support team.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          {/* Category Badges */}
          {!searchTerm && (
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {faqCategories.map((category) => (
                <Badge key={category.name} className={`${category.color} border-transparent px-3 py-1`}>
                  {category.name}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                  <div className="flex items-center gap-3">
                    {searchTerm && (
                      <Badge className={`${faq.color} text-xs border-transparent`}>
                        {faq.category}
                      </Badge>
                    )}
                    <span className="font-medium text-gray-900">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-900 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* No Results */}
        {searchTerm && filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-4">
              Try different keywords or browse our categories above.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setSearchTerm("")}
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              Clear Search
            </Button>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-900 mb-6 max-w-2xl mx-auto">
            Our friendly support team is here to help. Get in touch and we'll get back to you as soon as possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              variant="outline" 
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              Browse Help Center
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Contact Support
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Average response: 2 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>24/7 support available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}