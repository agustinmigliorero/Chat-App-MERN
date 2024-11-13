import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage);
    }

    //ACA VA A IR LA FUNCIONALIDAD CON WEBSOCKETS

    //ACA VA A IR LA FUNCIONALIDAD CON WEBSOCKETS

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error en el controlador de enviar mensaje", error.message);
    res
      .status(500)
      .json({ message: "Error del servidor al enviar el mensaje" });
  }
};

export { sendMessage };
