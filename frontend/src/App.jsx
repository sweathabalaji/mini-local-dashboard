import { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import DisplayCard from "./components/DisplayCard";

const API_BASE_URL = "http://localhost:5000";

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      setError(null);
      console.log("Submitting form data:", formData);

      const response = await fetch(`${API_BASE_URL}/business-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          location: formData.location,
        }),
      });

      const data = await response.json();
      console.log("Received response:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch business data");
      }

      console.log("Response data shape:", {
        hasHeadline: "headline" in data,
        hasName: "name" in data,
        hasLocation: "location" in data,
        headline: data.headline,
        name: data.name,
        location: data.location
      });

      setBusinessData({
        rating: data.rating || 4.5,
        reviews: data.reviews || 150,
        headline: data.headline || "Default headline",
        name: formData.name,
        location: formData.location
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err.message);
      setBusinessData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerateHeadline = async (name, location) => {
    try {
      setLoading(true);
      setError(null);
      console.log("Regenerating headline for:", { name, location });

      const response = await fetch(
        `${API_BASE_URL}/regenerate-headline?name=${encodeURIComponent(
          name
        )}&location=${encodeURIComponent(location)}`,
      );

      const data = await response.json();
      console.log("Received regenerated headline:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to regenerate headline");
      }

      if (!data.headline) {
        console.error("Invalid headline in response:", data);
        throw new Error("Server did not return a headline");
      }

      setBusinessData((prev) => ({
        ...prev,
        headline: data.headline,
      }));
    } catch (err) {
      console.error("Error regenerating headline:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large animated gradient circles */}
        <div className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-3xl animate-float-slow-reverse" />
        
        {/* Floating blobs with stronger colors */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/40 to-cyan-300/40 rounded-full blur-2xl animate-blob" />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-purple-300/40 to-pink-300/40 rounded-full blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-r from-pink-300/40 to-rose-300/40 rounded-full blur-2xl animate-blob animation-delay-4000" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] animate-grid-fade" />
        
        {/* Larger sparkles */}
        <div className="absolute h-8 w-8 bg-white/80 rounded-full top-1/4 right-1/4 animate-sparkle" />
        <div className="absolute h-6 w-6 bg-white/80 rounded-full top-3/4 left-1/3 animate-sparkle animation-delay-1000" />
        <div className="absolute h-4 w-4 bg-white/80 rounded-full bottom-1/4 right-1/3 animate-sparkle animation-delay-3000" />
        
        {/* Additional moving particles */}
        <div className="absolute inset-0">
          <div className="absolute h-2 w-2 bg-blue-400/60 rounded-full top-[10%] left-[45%] animate-particle" />
          <div className="absolute h-2 w-2 bg-purple-400/60 rounded-full top-[40%] left-[25%] animate-particle animation-delay-1000" />
          <div className="absolute h-2 w-2 bg-pink-400/60 rounded-full top-[80%] left-[65%] animate-particle animation-delay-2000" />
          <div className="absolute h-2 w-2 bg-cyan-400/60 rounded-full top-[25%] left-[85%] animate-particle animation-delay-3000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            
            {/* Main heading */}
            <div className="relative">
              <h1 className="text-5xl font-extrabold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
                  Local Business Dashboard
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-transparent" />
                <span className="text-lg font-medium text-gray-600 px-4 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
                  Elevate Your Business Presence
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-purple-500 to-transparent" />
              </div>
              <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                Generate engaging SEO headlines and track your business metrics with our
                intelligent dashboard
              </p>
            </div>

            {/* Decorative badges */}
            <div className="absolute -right-4 top-0 transform rotate-12">
              <div className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm">
                Smart AI
              </div>
            </div>
            <div className="absolute -left-4 bottom-0 transform -rotate-12">
              <div className="text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full shadow-sm">
                SEO Ready
              </div>
            </div>
          </div>
          
          {error && (
            <div className="mb-8 backdrop-blur-lg bg-red-50/50 border-l-4 border-red-400 p-6 rounded-2xl shadow-lg">
              <div className="text-red-700">
                <p className="font-semibold mb-1">Error</p>
                <p>{error}</p>
              </div>
            </div>
          )}

          <BusinessForm onSubmit={handleSubmit} disabled={loading} />
          
          {loading && (
            <div className="flex justify-center my-12">
              <div className="relative">
                <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-blue-600 rounded-full" />
                </div>
                <div className="mt-4 text-sm text-gray-600 font-medium">
                  Processing...
                </div>
              </div>
            </div>
          )}
          
          {businessData && !loading && (
            <DisplayCard
              data={businessData}
              onRegenerateHeadline={handleRegenerateHeadline}
              disabled={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
