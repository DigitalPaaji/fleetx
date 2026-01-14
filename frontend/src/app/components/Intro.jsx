import { TrendingUp, Users, Star, BarChart3, CreditCard, Send, Download, Zap, Shield, PieChart, Clock, CheckCircle } from 'lucide-react';

const MonetaLandingPage = () => {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "2500+", label: "Partners & Customers", color: "text-purple-600" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "$2.5M", label: "Invested in 2024", color: "text-emerald-600" },
    { icon: <Star className="w-5 h-5" />, value: "5.0", label: "Customer Rating", color: "text-amber-600" },
    { icon: <BarChart3 className="w-5 h-5" />, value: "205+", label: "Products", color: "text-blue-600" }
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "Bank-Level Security", desc: "Enterprise-grade encryption for all transactions" },
    { icon: <PieChart className="w-6 h-6" />, title: "Real-Time Analytics", desc: "Live financial insights and forecasting" },
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Support", desc: "Round-the-clock customer assistance" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Automated Workflows", desc: "Streamline repetitive financial tasks" }
  ];

  const steps = [
    { number: "1", title: "Sign Up & Customize", desc: "Create account in minutes, tailored to your business needs" },
    { number: "2", title: "Integrate Your Data", desc: "Seamlessly connect with existing financial tools" },
    { number: "3", title: "Manage Efficiently", desc: "Use intuitive dashboard for daily operations" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4" />
              <span className="font-medium">Trusted by 1500+ companies</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Enhance finances with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                Moneta
              </span>{' '}
              tools
            </h1>
            
            <p className="text-lg text-slate-600 mb-8">
              Streamline your business's financial management with our intuitive, scalable SaaS platform. 
              Designed for modern enterprises seeking precision and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-violet-200 transition-all">
                <Download className="w-5 h-5" />
                Download App
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-3.5 rounded-full font-semibold hover:border-violet-400 hover:text-violet-700 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
              {/* User Profile */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                <div>
                  <p className="text-sm text-slate-500">Hello,</p>
                  <p className="font-bold text-slate-800">Ismu Adiyat</p>
                </div>
              </div>
              
              {/* Balance Card */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 text-white mb-8">
                <p className="text-slate-300 mb-2">Total Balance</p>
                <p className="text-3xl font-bold mb-6">$5,502.45</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <p className="text-sm text-slate-400">Income Analysis</p>
                    <p className="text-lg font-semibold">$332,349</p>
                  </div>
                  <div className="bg-violet-500/20 px-4 py-2 rounded-lg">
                    <span className="text-violet-300 font-medium">VISA</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { icon: <CreditCard className="w-5 h-5" />, label: "Balance" },
                  { icon: <Send className="w-5 h-5" />, label: "Transfer" },
                  { icon: <Users className="w-5 h-5" />, label: "Request" },
                  { icon: <Zap className="w-5 h-5" />, label: "Active" }
                ].map((action, idx) => (
                  <button key={idx} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center text-violet-600">
                      {action.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-700">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2.5 rounded-full font-bold shadow-lg">
              Live Preview
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 transition-colors">
              <div className={`${stat.color} mb-4`}>{stat.icon}</div>
              <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Elevate Your Financial Operations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Automate repetitive tasks, reduce manual errors, and unlock real-time analytics with our cutting-edge platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <p className="text-slate-700">
              Automate repetitive financial tasks, reduce manual errors, and free up your team's time for strategic planning and decision-making.
            </p>
            <p className="text-slate-700">
              Unlock the power of real-time analytics with our cutting-edge financial dashboard. Monitor your cash flow, track expenses, and forecast trends with precision—all in one place.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-violet-300 transition-colors">
                <div className="text-violet-600 mb-3">{feature.icon}</div>
                <h4 className="font-bold text-slate-800 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* How It Works */}
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-violet-100">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            How It Works: Simplifying Your Financial Journey
          </h3>
          <p className="text-slate-700 text-center mb-12 max-w-2xl mx-auto">
            Navigating finance can be complex, but we make it simple. Our intuitive tools empower you to take control of your financial future.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Management?
          </h3>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Moneta to streamline their financial operations.
          </p>
          <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all">
            Get Started For Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="container mx-auto px-6 text-center text-slate-600">
          <p>© 2024 Moneta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MonetaLandingPage;