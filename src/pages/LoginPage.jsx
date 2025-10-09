import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../api/api";

// Componente funcional da página de login
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.login(email, password);

      if (response.userType === "school") {
        navigate("/schoolcontrolpanel");
      } else if (response.userType === "admin") {
        navigate("/admincontrolpanel");
      } else {
        navigate("/studentcontrolpanel");
      }
    } catch (error) {
      console.error("Erro ao login:", error);
      setError(error.response?.data?.error || "Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-screen">
      {/* Lado esquerdo da página */}
      <div className="flex-1 bg-blue-600 text-white flex flex-col justify-center items-center p-10 text-center">
        {/* Ícone com aviso */}
        <div className="relative bg-white/10 p-5 rounded-xl mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-white p-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l8 4v5c0 5.25-3.25 10-8 12-4.75-2-8-6.75-8-12V7l8-4z"
            />
          </svg>
          <div className="absolute bottom-1 right-1 text-yellow-300 text-lg"></div>
        </div>

        <h1 className="text-2xl font-bold">Sua voz na Escola</h1>

        <p className="mt-2 mb-5">Plataforma segura para denúncias escolares</p>

        <ul className="text-left mt-2 space-y-2 text-sm">
          <li>• Denúncias anônimas e seguras</li>
          <li>• Ambiente escolar mais seguro</li>
        </ul>
      </div>

      {/* Lado direito da página */}
      <div className="flex-1 flex justify-center items-center p-10">
        <div className="w-full max-w-sm">
          <h2 className="text-xl font-bold">Bem-vindo de volta</h2>
          <p className="text-gray-500 text-sm mb-5">
            Faça login para acessar sua conta
          </p>

          {/* Mensagem de erro */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Form de login */}
          <form onSubmit={handleLogin}>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              disabled={loading}
            />

            {/* Campo de senha */}
            <label className="block text-sm mt-3 mb-1">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                disabled={loading}
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-2 text-gray-500 cursor-pointer text-sm">
                👁
              </span>
              {/*
              Ícone para mostrar/ocultar senha
              - absolute: posicionamento absoluto dentro do input
              - right-3 top-2: posição no canto superior direito
            */}
            </div>

            {/* Lembrar de mim e esqueci a senha */}
            <div className="flex justify-between items-center text-xs my-4">
              <label className="flex items-center space-x-1">
                <input type="checkbox" />
                <span>Lembrar de mim</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Esqueci minha senha
              </a>
            </div>

            {/* Botão de login */}
            <button
              className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
              disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
          {/* Link para cadastro */}
          <p className="text-sm text-center mt-5">
            Não tem uma conta?{" "}
            <NavLink to="/signup">
              <span href="#" className="text-blue-600 hover:underline">
                Cadastre-se aqui
              </span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
