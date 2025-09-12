import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";
import { useNavigation } from "../../hooks/useNavigation.js";
import { useIsMobile } from "../../hooks/useIsMobile.js";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function DocsLayout() {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isSidebarOpen,
    setIsSidebarOpen,
  } = useNavigation();

  const isMobile = useIsMobile("lg");
  const [isSideBarMobileOpen, setIsSideBarMobileOpen] = useState(false);


  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">

      {!isMobile ? (
        <Header
          variant="mobile"
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      ) : (
        <>
          <button
            onClick={() => setIsSideBarMobileOpen((v) => !v)}
            className="p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Sidebar
            onSectionChange={() => setIsSidebarOpen(false)}
            mobile={true}
            open={isSideBarMobileOpen}
            onClose={() => setIsSideBarMobileOpen(false)}
            widthClass="w-80 max-w-[85%]"
          />
        </>
      )}



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
