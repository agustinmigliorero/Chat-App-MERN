import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                Usuario
              </span>
            </label>
            <input
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full input input-bordered bg-gray-800 h-10 text-gray-200"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base labe-text text-gray-300">
                Contraseña
              </span>
            </label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full input input-bordered bg-gray-800 h-10 text-gray-200"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            No tenes una cuenta?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-gray-800 text-gray-300 border-gray-900 hover:bg-gray-900"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
