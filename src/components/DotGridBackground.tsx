export const DotGridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Animated waves */}
      <div className="absolute inset-0">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(0, 0, 0, 1)', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0, 0, 0, 1)', stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,160 Q250,100 500,160 T1000,160 T1500,160 T2000,160 L2000,0 L0,0 Z"
            fill="url(#wave-gradient)"
            className="animate-wave-slow"
          />
          <path
            d="M0,120 Q250,180 500,120 T1000,120 T1500,120 T2000,120 L2000,0 L0,0 Z"
            fill="url(#wave-gradient)"
            className="animate-wave-fast"
            opacity="0.5"
          />
        </svg>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-medium"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float-fast"></div>
      
      <style>{`
        @keyframes wave-slow {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-50px) translateY(10px);
          }
        }
        
        @keyframes wave-fast {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(50px) translateY(-10px);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }
        
        @keyframes float-medium {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, 40px);
          }
        }
        
        @keyframes float-fast {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, 30px);
          }
        }
        
        .animate-wave-slow {
          animation: wave-slow 15s ease-in-out infinite;
        }
        
        .animate-wave-fast {
          animation: wave-fast 10s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 25s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
