const AuthForm = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-4xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-gray-500 mb-6">
        {subtitle}
      </p>

      {children}
    </div>
  );
};

export default AuthForm;