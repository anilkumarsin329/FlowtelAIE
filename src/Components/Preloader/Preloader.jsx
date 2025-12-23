import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        {/* Logo with pulse animation */}
        <div className="flex items-center gap-3 mb-8 animate-pulse">
          <img 
            src="/logo.jpeg" 
            alt="Flowtel Logo" 
            className="h-16 w-auto animate-spin-slow"
          />
          <span className="text-4xl font-bold text-white animate-bounce">Flowtel</span>
        </div>
        
        {/* Rotating circle loader */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-purple-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1s'}}></div>
        </div>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" style={{width: '100%', animation: 'loading 3s ease-in-out infinite'}}></div>
        </div>
        
        <p className="text-gray-300 text-lg animate-pulse">Initializing AI Experience...</p>
      </div>
      
      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
}