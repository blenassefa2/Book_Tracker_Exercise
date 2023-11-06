import Link from "next/link";

const Login = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <Link href="/register">
            <b className="text-blue-500 hover:underline">Register</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
