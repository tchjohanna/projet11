import { Routes, Route } from "react-router-dom";
import "./css/main.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import UserPage from "./pages/user";
import Error from "./pages/error";

// Fonction pour gérer les routes de l'application
function AppRoutes() {
  return (
    <Routes>
      {/* Page d'accueil */}
      <Route exact path="/" element={<Home />} />
      <Route path="/argent-bank-app" element={<Home />} />

      {/* Page de connexion */}
      <Route path="/sign-in" element={<SignIn />} />

      {/* Page utilisateur */}
      <Route path="/user" element={<UserPage />} />

      {/* Page d'erreur 404 */}
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      {/* En-tête de l'application */}
      <Header />

      {/* Contenu principal de l'application (les routes) */}
      <AppRoutes />

      {/* Pied de page de l'application */}
      <Footer />
    </div>
  );
}

export default App;
