import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Buscar..."
        className="input input-bordered rounded-full bg-gray-800 text-gray-200"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
