import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Registrate! <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="text-base labe-text text-gray-300">
                Nombre Completo
              </span>
            </label>
            <input
              type="text"
              placeholder="Ingresa tu nombre y apellido"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              className="w-full input input-bordered bg-gray-800 h-10 text-gray-200"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base labe-text text-gray-300">
                Nombre de Usuario
              </span>
            </label>
            <input
              type="text"
              placeholder="Ingresa tu nombre de usuario"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="w-full input input-bordered bg-gray-800 h-10 text-gray-200"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base labe-text text-gray-300">
                Confirma tu Contraseña
              </span>
            </label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña nuevamente"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              className="w-full input input-bordered bg-gray-800 h-10 text-gray-200"
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Ya tenes una cuenta? Inicia sesion!
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-gray-800 text-gray-300 border-gray-900 hover:bg-gray-900"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Registrarse"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
