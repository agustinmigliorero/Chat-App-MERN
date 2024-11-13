import GenderCheckbox from "./GenderCheckbox";

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Registrate! <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label">
              <span className="text-base labe-text text-gray-300">
                Nombre Completo
              </span>
            </label>
            <input
              type="text"
              placeholder="Ingresa tu nombre y apellido"
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
              className="w-full input input-bordered bg-gray-800 h-10 text-gray-200"
            />
          </div>

          <GenderCheckbox />

          <a
            href="#"
            className="text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Ya tenes una cuenta? Inicia sesion!
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 bg-gray-800 text-gray-300 border-gray-900 hover:bg-gray-900">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
