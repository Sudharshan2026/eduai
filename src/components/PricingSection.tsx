import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Check, X, Zap, Star, Crown, Users } from "lucide-react";
import { useState } from "react";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Student Starter",
      subtitle: "Perfect for trying out",
      price: { monthly: 0, yearly: 0 },
      icon: Zap,
      iconColor: "from-blue-500 to-blue-600",
      borderColor: "border-blue-200",
      buttonStyle: "border-blue-600 text-blue-600 hover:bg-blue-50",
      features: [
        { name: "5 AI tutoring sessions/month", included: true },
        { name: "Basic progress tracking", included: true },
        { name: "1 subject access", included: true },
        { name: "Community support", included: true },
        { name: "Mobile app access", included: true },
        { name: "AI flashcard generator", included: false },
        { name: "Multilingual support", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false }
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Power Learner",
      subtitle: "Most Popular",
      price: { monthly: 19, yearly: 190 },
      icon: Star,
      iconColor: "from-purple-500 to-purple-600",
      borderColor: "border-purple-300",
      buttonStyle: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white",
      features: [
        { name: "Unlimited AI tutoring", included: true },
        { name: "Advanced analytics dashboard", included: true },
        { name: "All subjects access", included: true },
        { name: "Priority support", included: true },
        { name: "AI flashcard generator", included: true },
        { name: "Multilingual support", included: true },
        { name: "Custom learning paths", included: true },
        { name: "Offline mode", included: true },
        { name: "Performance insights", included: true }
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Institution",
      subtitle: "For schools & organizations",
      price: { monthly: "Custom", yearly: "Custom" },
      icon: Crown,
      iconColor: "from-indigo-500 to-indigo-600",
      borderColor: "border-indigo-200",
      buttonStyle: "border-indigo-600 text-indigo-600 hover:bg-indigo-50",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Multiple teacher accounts", included: true },
        { name: "Admin dashboard", included: true },
        { name: "Custom integrations", included: true },
        { name: "Dedicated support", included: true },
        { name: "White-label option", included: true },
        { name: "LMS integration", included: true },
        { name: "Advanced reporting", included: true },
        { name: "SSO & security", included: true }
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
            <Users className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-800">Trusted by 50,000+ students worldwide</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">
            Choose Your Learning Journey
          </h2>
          <p className="text-lg text-gray-900 max-w-3xl mx-auto mb-8">
            Start free and upgrade as you grow. All plans include our core AI tutoring features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-blue-600"
            />
            <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-green-100 text-green-700 border-green-200">
                Save 17%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.name}
                className={`relative p-8 ${plan.borderColor} ${
                  plan.popular 
                    ? 'border-2 shadow-2xl scale-105 bg-white' 
                    : 'border hover:shadow-xl bg-white/80'
                } transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 text-sm font-medium">
                      ⭐ Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.iconColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
                  
                  <div className="text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-900">
                        {typeof plan.price.monthly === 'number' ? '$' : ''}
                        {isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      {typeof plan.price.monthly === 'number' && plan.price.monthly > 0 && (
                        <span className="text-gray-600 text-lg">
                          /{isYearly ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                    {plan.price.monthly > 0 && isYearly && (
                      <p className="text-sm text-green-600 mt-1">
                        ${Math.round(plan.price.yearly / 12)}/month billed annually
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <Button 
                    className={`w-full mb-6 ${plan.buttonStyle} transition-all duration-300`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-gray-900' : 'text-gray-400'
                        }`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white/80 rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🔒</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">14-day free trial</h4>
            <p className="text-sm text-gray-600">No credit card required</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">↩️</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Cancel anytime</h4>
            <p className="text-sm text-gray-600">No long-term commitments</p>
          </div>
          
          <div className="text-center p-6 bg-white/80 rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">💬</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">24/7 support</h4>
            <p className="text-sm text-gray-600">We're here to help</p>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Have questions?</h3>
          <p className="text-gray-600 mb-4">Check out our comprehensive FAQ section or get in touch with our team.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              View FAQ
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}