import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpecial: false,
  });

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setRegisterPassword(newPassword);
    setPasswordValidation({
      minLength: newPassword.length >= 8,
      hasLower: /[a-z]/.test(newPassword),
      hasUpper: /[A-Z]/.test(newPassword),
      hasNumber: /\d/.test(newPassword),
      hasSpecial: /[@$!%*?&]/.test(newPassword),
    });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    if (error) {
      alert(`Erro no login: ${error.message}`);
    } else {
      navigate("/gallery");
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!usernameRegex.test(registerUsername)) {
      alert(
        "Nome de usuário inválido. Use apenas letras, números e _, com 3 a 20 caracteres."
      );
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(registerEmail)) {
      alert("Formato de e-mail inválido.");
      return;
    }

    const allPasswordReqsMet = Object.values(passwordValidation).every(Boolean);
    if (!allPasswordReqsMet) {
      alert("Por favor, cumpra todos os requisitos da senha.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: registerEmail,
      password: registerPassword,
      options: {
        data: {
          username: registerUsername,
        },
      },
    });

    if (error) {
      alert(`Erro no registro: ${error.message}`);
    } else {
      alert(
        "Conta criada com sucesso! Verifique seu e-mail para confirmar o registro."
      );
      setIsLoginView(true);
    }
  };

  const Requirement = ({ met, text }) => (
    <li
      className={`flex items-center transition-colors duration-300 ${
        met ? "text-green-500" : "text-gray-500"
      }`}
    >
      <span className="mr-2">{met ? "✓" : "•"}</span>
      {text}
    </li>
  );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-[#f4f4f9] bg-[radial-gradient(circle_at_top_left,rgba(0,245,218,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,210,35,0.15),transparent_35%)]">
      <div className="w-full flex justify-center pt-10 pb-2">
        <Link to="/">
          <img
            src="/flowlogo-nv.png"
            alt="ArtFlow Logo"
            className="h-16 w-auto mx-auto hover:scale-105 transition-transform duration-200"
          />
        </Link>
      </div>

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md text-center mb-10">
        {isLoginView ? (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Bem-vindo de Volta!
            </h1>
            <p className="text-gray-500 mb-8">
              Faça login para continuar no ArtFlow.
            </p>
            <form onSubmit={handleLoginSubmit} className="text-left">
              <div className="mb-5">
                <label
                  htmlFor="login-email"
                  className="block mb-2 font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="login-password"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Senha
                </label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-cyan-600 transition-colors mt-3"
              >
                Entrar
              </button>
            </form>
            <p className="mt-6 text-gray-600">
              Não tem uma conta?{" "}
              <button
                onClick={() => setIsLoginView(false)}
                className="font-semibold text-cyan-500 hover:underline"
              >
                Cadastre-se
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Crie sua Conta no ArtFlow
            </h1>
            <p className="text-gray-500 mb-8">
              Junte-se à nossa comunidade e compartilhe sua arte.
            </p>
            <form onSubmit={handleRegisterSubmit} className="text-left">
              <div className="mb-5">
                <label
                  htmlFor="register-username"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Nome de Usuário
                </label>
                <input
                  type="text"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="register-email"
                  className="block mb-2 font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="register-password"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Senha
                </label>
                <input
                  type="password"
                  value={registerPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              <div className="mt-[-10px] mb-4 text-sm text-left">
                <ul className="space-y-1">
                  <Requirement
                    met={passwordValidation.minLength}
                    text="Mínimo de 8 caracteres"
                  />
                  <Requirement
                    met={passwordValidation.hasLower}
                    text="Uma letra minúscula"
                  />
                  <Requirement
                    met={passwordValidation.hasUpper}
                    text="Uma letra maiúscula"
                  />
                  <Requirement
                    met={passwordValidation.hasNumber}
                    text="Um número"
                  />
                  <Requirement
                    met={passwordValidation.hasSpecial}
                    text="Um caractere especial (@$!%*?&)"
                  />
                </ul>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-cyan-600 transition-colors mt-3"
              >
                Criar Conta
              </button>
            </form>
            <p className="mt-6 text-gray-600">
              Já tem uma conta?{" "}
              <button
                onClick={() => setIsLoginView(true)}
                className="font-semibold text-cyan-500 hover:underline"
              >
                Faça login
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
