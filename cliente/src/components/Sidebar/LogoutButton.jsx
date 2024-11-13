import { BiLogOut } from "react-icons/bi";

function LogoutButton() {
  return (
    <div className="mt-auto ">
      <span className="text-white cursor-pointer hover:text-sky-300 hover:underline">
        <BiLogOut className="w-6 h-6 cursor-pointer inline me-3" />
        Cerrar Sesión
      </span>
    </div>
  );
}

export default LogoutButton;
