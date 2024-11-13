const sendMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;

    const senderId = req.user._id;
  } catch (error) {
    console.log("Error en el controlador de enviar mensaje", error.message);
    res
      .status(500)
      .json({ message: "Error del servidor al enviar el mensaje" });
  }
};

export { sendMessage };
