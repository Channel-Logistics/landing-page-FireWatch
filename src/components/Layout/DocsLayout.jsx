// src/components/Layout/DocsLayout.jsx
import { Outlet } from "react-router-dom";
import Header from './Header.jsx';
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";
import { useNavigation } from "../../hooks/useNavigation";

export default function DocsLayout() {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isSidebarOpen,
    setIsSidebarOpen,
  } = useNavigation();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Contenedor principal SIN fixed/sticky */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar móvil: aparece en flujo, arriba del contenido */}
        {isSidebarOpen && (
          <div className="w-full lg:hidden border-b">
            <Sidebar onSectionChange={() => setIsSidebarOpen(false)} />
          </div>
        )}

        {/* Sidebar desktop en flujo (no fixed, no sticky) */}
        <aside className="hidden lg:block w-64 shrink-0 border-r bg-white">
          <Sidebar onSectionChange={() => setIsSidebarOpen(false)} />
        </aside>

        {/* Contenido con scroll propio si hace falta */}
        <main className="flex-1 min-w-0 min-h-0 px-4 sm:px-6 lg:px-8 py-6 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Footer solo en las páginas de docs */}
      <Footer />
    </div>
  );
}
