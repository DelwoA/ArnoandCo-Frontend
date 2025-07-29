function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large gradient circles for background design */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

        {/* Floating small grey circles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gray-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gray-300 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gray-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-gray-400 rounded-full opacity-30 animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-gray-300 rounded-full opacity-25 animate-ping animation-delay-2000"></div>
        <div className="absolute top-3/4 left-1/5 w-2 h-2 bg-gray-400 rounded-full opacity-35 animate-pulse animation-delay-3000"></div>

        {/* Flowing background shapes inspired by the screenshot */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
              </linearGradient>
            </defs>
            <path
              d="M0,20 C20,5 40,35 60,20 C80,5 100,20 100,20 L100,0 L0,0 Z"
              fill="url(#gradient1)"
            />
            <path
              d="M0,100 C20,85 40,100 60,85 C80,70 100,85 100,85 L100,100 Z"
              fill="url(#gradient1)"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto w-full">
        {/* Logo */}
        <div className="mb-10 sm:mb-12 flex justify-center">
          <img
            src="/logo-primary.png"
            alt="Arno & Co. Technologies"
            className="h-32 lg:h-36 w-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Coming Soon Text */}
        <h1 className="text-6xl lg:text-7xl font-bold text-white mb-7 tracking-tight">
          <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
          We're working on something exciting!
        </p>

        {/* Additional descriptive text */}
        <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed px-4">
          Our team is crafting an innovative experience that will transform the
          way you think about technology. Stay tuned for something
          extraordinary.
        </p>

        {/* Decorative element */}
        <div className="mt-8 sm:mt-12 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-300"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse animation-delay-600"></div>
        </div>
      </div>

      {/* Additional floating elements for visual appeal */}
      <div className="absolute top-16 right-16 w-6 h-6 border-2 border-gray-400 border-opacity-30 rounded-full animate-spin animation-duration-slow hidden sm:block"></div>
      <div className="absolute bottom-20 left-16 w-8 h-8 border border-gray-300 border-opacity-20 rotate-45 animate-pulse hidden sm:block"></div>
    </div>
  );
}

export default App;
