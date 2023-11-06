import Link from "next/link";

const Register = () => {
  const handleRegister = () => {
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
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
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          onClick={handleRegister}
        >
          Register
        </button>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <Link href="/">
            <b className="text-blue-500 hover:underline">Login</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
