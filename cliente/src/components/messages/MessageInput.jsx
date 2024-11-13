import { BsSend } from "react-icons/bs";

function MessageInput() {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Escribe tu mensaje..."
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-gray-200 hover:text-sky-300"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
