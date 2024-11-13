function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/40"
            alt="Imagen de usuario"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">
        Hola!, como estas?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-100">
        12:42
      </div>
    </div>
  );
}

export default Message;
