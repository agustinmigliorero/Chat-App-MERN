import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ message: "No autorizado - Token no encontrado" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ message: "No autorizado - Token invalido" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res
        .status(401)
        .json({ message: "No autorizado - Usuario no encontrado" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error en el middleware de proteger ruta", error.message);
    res.status(500).json({ message: "Error del servidor al proteger la ruta" });
  }
};

export default protectRoute;
