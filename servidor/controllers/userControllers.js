import User from "../models/userModel.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error en el controlador de obtener usuarios ", error.message);
    res
      .status(500)
      .json({ message: "Error del servidor al obtener los usuarios" });
  }
};

export { getUsersForSidebar };
