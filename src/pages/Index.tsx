import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, Truck, Package, BarChart3, Brain } from "lucide-react";
import GetStartedModal from "../components/GetStartedModal";

const Index = () => {
  const [stats] = useState({
    mealsDonated: "150,000+",
    activeDonors: "500+",
    sheltersServed: "50+",
    carbonSaved: "75+"
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/10 to-accent/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Connecting Food Surplus<br />with Those in Need
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            FoodLink uses AI to match food donors with local shelters, making food redistribution efficient and impactful.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">About FoodLink</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">Reduce food waste while helping those in need through efficient redistribution.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Package className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">How It Works</h3>
              <p className="text-gray-600">Connect donors with local shelters using smart AI matching technology.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">Optimize routes for quick and efficient food distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimony" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"FoodLink has revolutionized how we handle food donations. The AI matching system makes it incredibly efficient."</p>
              <p className="font-semibold">- Sarah Johnson, Restaurant Owner</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"Thanks to FoodLink, we've been able to help more people than ever before. The platform is a game-changer."</p>
              <p className="font-semibold">- Michael Chen, Shelter Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Food Tracking Section */}
      <section id="tracking" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Food Tracking</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Real-time Tracking</h3>
                <p className="text-gray-600 mb-4">
                  Monitor donations from pickup to delivery with our advanced tracking system. Get real-time updates and ensure food safety compliance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    <span>Track donation status</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    <span>Monitor delivery routes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span>Generate reports</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 h-64 rounded-lg animate-float">
                {/* Placeholder for tracking interface mockup */}
                <div className="h-full flex items-center justify-center text-gray-400">
                  Tracking Interface Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section id="impact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">{stats.mealsDonated}</p>
              <p className="text-gray-600">Meals Donated</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">{stats.activeDonors}</p>
              <p className="text-gray-600">Active Donors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">{stats.sheltersServed}</p>
              <p className="text-gray-600">Shelters Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">{stats.carbonSaved}</p>
              <p className="text-gray-600">Tons of CO₂ Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Matching Section */}
      <section id="ai-matching" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">AI Matching Technology</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-100 h-64 rounded-lg animate-float">
                {/* Placeholder for AI matching visualization */}
                <div className="h-full flex items-center justify-center text-gray-400">
                  AI Matching Visualization
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Smart Matching System</h3>
                <p className="text-gray-600 mb-4">
                  Our AI-powered system matches food donations with recipients based on multiple factors:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <span>Food type and quantity matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <span>Location-based optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <span>Time-sensitive distribution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <GetStartedModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;