export const DotGridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle, rgba(236, 72, 153, 0.15) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        animation: 'dotPulse 4s ease-in-out infinite',
      }} />
      <style>{`
        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};
