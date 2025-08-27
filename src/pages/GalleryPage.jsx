// src/pages/GalleryPage.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const CommunityGalleryContent = () => (
  <>
    <header className="mb-10">
      <h1 className="text-4xl font-bold text-gray-800">
        Galeria da Comunidade
      </h1>
      <p className="text-gray-500 text-lg">
        Explore as criações de todos os artistas.
      </p>
    </header>
    <section>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-16 text-center bg-white">
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">
          Em breve...
        </h2>
        <p className="text-gray-400">
          A galeria comunitária será exibida aqui.
        </p>
      </div>
    </section>
  </>
);

const ProfileContent = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro ao buscar posts:", error);
    } else {
      setPosts(data);
    }
    setLoading(false);
  }, [user.id]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    setUploading(true);

    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();
    console.log("Sessão atual no momento do upload:", session);
    if (sessionError || !session) {
      alert(
        "Erro ao obter sessão ou sessão não encontrada. Por favor, faça login novamente."
      );
      console.error("Erro de sessão:", sessionError);
      setUploading(false);
      return;
    }
    const user = session.user;

    if (!file) {
      alert("Por favor, selecione uma imagem para enviar.");
      setUploading(false);
      return;
    }

    const cleanFileName = file.name.replace(/[^a-zA-Z0-9_.-]/g, "_");
    const fileName = `${Date.now()}_${cleanFileName}`;
    const filePath = `${user.id}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("gallery-images")
      .upload(filePath, file);

    if (uploadError) {
      alert(`Erro no upload: ${uploadError.message}`);
      setUploading(false);
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("gallery-images").getPublicUrl(filePath);

    const { error: dbError } = await supabase
      .from("posts")
      .insert({ title: title, image_url: publicUrl });

    if (dbError) {
      alert(`Erro ao salvar no banco de dados: ${dbError.message}`);
    } else {
      setTitle("");
      setFile(null);
      fetchPosts();
    }

    setUploading(false);
  };

  const username = user.user_metadata?.username || user.email;

  return (
    <>
      {/* Banner do Perfil */}
      <div className="relative w-full h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500 rounded-xl shadow-md mb-12">
        <img
          src="/vanda2-flow.png"
          alt="Banner de Perfil"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute -bottom-6 left-8">
          <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-3xl font-bold text-cyan-600">
            {username.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>

      {/* Informações do Usuário e Botões de Ação */}
      <section className="bg-white p-8 pt-20 rounded-xl shadow-md mb-10 relative">
        <div className="flex justify-end space-x-4 mb-4">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors">
            Seguir
          </button>
          <button className="bg-cyan-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-cyan-600 transition-colors">
            Mensagem
          </button>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">{username}</h1>
        <p className="text-gray-600 mb-4">{user.email}</p>
        <p className="text-gray-700 text-lg mb-6">Biografia Vazia...</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700">
          <div>
            <span className="block font-bold text-xl">{posts.length}</span>
            <span className="text-sm">Obras</span>
          </div>
          <div>
            <span className="block font-bold text-xl">0</span>
            <span className="text-sm">Seguidores</span>
          </div>
          <div>
            <span className="block font-bold text-xl">0</span>
            <span className="text-sm">Seguindo</span>
          </div>
          <div>
            <span className="block font-bold text-xl">
              {new Date(user.created_at).toLocaleDateString()}
            </span>
            <span className="text-sm">Membro desde</span>
          </div>
        </div>
      </section>

      {/* Formulário de Upload */}
      <section className="bg-white p-8 rounded-xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Adicionar Nova Obra
        </h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Título (opcional)
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Arquivo de Imagem
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
              required
            />
          </div>
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-cyan-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-cyan-600 transition-colors disabled:bg-gray-400"
          >
            {uploading ? "Enviando..." : "Enviar Obra"}
          </button>
        </form>
      </section>

      {/* Galeria Pessoal */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Minhas Obras
        </h2>
        {loading ? (
          <p>Carregando sua galeria...</p>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <img
                  src={post.image_url}
                  alt={post.title || "Obra de arte"}
                  className="w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {post.title && (
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 truncate">
                      {post.title}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            Você ainda não enviou nenhuma obra. Use o formulário acima para
            começar.
          </p>
        )}
      </section>
    </>
  );
};

function GalleryPage() {
  const [activeView, setActiveView] = useState("gallery");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
      } else {
        setCurrentUser(user);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (!currentUser) {
    return null;
  }

  const username = currentUser.user_metadata?.username || currentUser.email;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ===== BARRA LATERAL (SIDEBAR) ===== */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-5">
        <div className="mb-8">
          <Link to="/">
            <img
              src="/flowlogo-nv.png"
              alt="ArtFlow Logo"
              className="h-9 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-8">
          <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center text-2xl font-bold">
            {username.charAt(0).toUpperCase()}
          </div>
          <div>
            <span className="font-semibold text-gray-800 block">
              {username}
            </span>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:underline"
            >
              Sair
            </button>
          </div>
        </div>

        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveView("gallery")}
                className={`w-full flex items-center gap-4 p-3 rounded-lg text-left transition-colors ${
                  activeView === "gallery"
                    ? "bg-cyan-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <i className="fa-solid fa-grip w-5 text-center text-lg"></i>{" "}
                Galeria
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveView("profile")}
                className={`w-full flex items-center gap-4 p-3 rounded-lg text-left transition-colors ${
                  activeView === "profile"
                    ? "bg-cyan-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <i className="fa-solid fa-user-circle w-5 text-center text-lg"></i>{" "}
                Perfil
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ===== CONTEÚDO PRINCIPAL ===== */}
      <main className="flex-1 p-10 overflow-y-auto">
        {activeView === "gallery" && <CommunityGalleryContent />}
        {activeView === "profile" && <ProfileContent user={currentUser} />}
      </main>
    </div>
  );
}

export default GalleryPage;
