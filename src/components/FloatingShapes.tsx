export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#E97BA0] rounded-full opacity-10 blur-2xl animate-float"></div>
      <div className="absolute top-1/4 right-20 w-48 h-48 bg-[#8B7BA8] rounded-full opacity-10 blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[#7AB88E] rounded-full opacity-10 blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/3 w-56 h-56 bg-[#F4D4C4] rounded-full opacity-15 blur-3xl animate-float"></div>
      
      {/* Geometric shapes */}
      <svg className="absolute top-1/3 left-1/2 w-24 h-24 text-[#E97BA0] opacity-5 animate-spin-slow" viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" fill="currentColor"/>
      </svg>
      
      <svg className="absolute bottom-1/3 right-1/4 w-32 h-32 text-[#8B7BA8] opacity-5 animate-spin-reverse" viewBox="0 0 100 100">
        <rect x="25" y="25" width="50" height="50" fill="currentColor" transform="rotate(45 50 50)"/>
      </svg>
    </div>
  );
}