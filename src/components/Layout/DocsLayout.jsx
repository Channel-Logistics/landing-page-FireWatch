import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";
import { useNavigation } from "../../hooks/useNavigation.js";

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

      
      <div className="flex flex-1 min-h-0 flex-col lg:flex-row">
       
        {isSidebarOpen && (
          <div className="w-full lg:hidden border-b">
            <Sidebar onSectionChange={() => setIsSidebarOpen(false)} />
          </div>
        )}

        
        <aside className="hidden lg:block w-64 shrink-0 border-r bg-white">
          <Sidebar onSectionChange={() => setIsSidebarOpen(false)} />
        </aside>

        
        <main className="flex-1 min-w-0 min-h-0 px-4 sm:px-6 lg:px-8 py-6 overflow-auto">
          <Outlet />
        </main>
      </div>

      
      <Footer />
    </div>
  );
}
