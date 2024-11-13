import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useLogin() {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputErrors({
      username,
      password,
    });

    if (!success) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data.user));
      setAuthUser(data.user);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}

export default useLogin;

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    toast.error("Todos los campos son obligatorios");
    return false;
  }

  if (password.length < 6) {
    toast.error("La contraseña debe tener al menos 6 caracteres");
    return false;
  }

  return true;
}
