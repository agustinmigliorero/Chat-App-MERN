import { useState } from "react";
import { toast } from "react-hot-toast";

function useSignup() {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
}

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword }) {
  if (!fullName || !username || !password || !confirmPassword) {
    toast.error("Todos los campos son obligatorios");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Las contraseñas no coinciden");
    return false;
  }

  if (password.length < 6) {
    toast.error("La contraseña debe tener al menos 6 caracteres");
    return false;
  }

  return true;
}
