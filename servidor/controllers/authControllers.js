import bcryptjs from "bcryptjs";

import User from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Credenciales invalidas" });
    }

    const userPassword = user.password ? user.password : "";

    const isPasswordCorrect = await bcryptjs.compare(password, userPassword);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Credenciales invalidas" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      message: "Login exitoso",
      _id: user._id,
      username,
      fullName: user.fullName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error del servidor al iniciar sesion" });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxage: 0 });

    res.status(200).json({ message: "Logout exitoso" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error del servidor al desconectarse" });
  }
};

const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Las contraseñas no coinciden" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ message: "El nombre de usuario ya existe" });
    }

    // Encriptar la contraseña
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // Encriptar la contraseña

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (!newUser) {
      return res.status(400).json({ message: "Error al crear el usuario" });
    }

    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(201).json({
      message: "Usuario creado exitosamente",
      _id: newUser._id,
      username: newUser.username,
      fullName: newUser.fullName,
      gender: newUser.gender,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error del servidor al crear el usuario" });
  }
};

export { login, logout, signup };
