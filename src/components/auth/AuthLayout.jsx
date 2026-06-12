const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side */}
      <div className="hidden lg:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
          alt="auth"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
