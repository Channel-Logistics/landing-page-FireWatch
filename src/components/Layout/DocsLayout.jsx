import { Link, Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";
import { useNavigation } from "../../hooks/useNavigation.js";
import { useIsMobile } from "../../hooks/useIsMobile.js";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LogoSpaceEyes } from "..";

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
        <div className="flex items-center flex-row">
          <div>
            <button
              onClick={() => setIsSideBarMobileOpen((v) => !v)}
              className="p-2 text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <>
                <Menu className="w-6 h-6" />

              </>}
            </button>
          </div>


          <div className="flex items-center justify-center flex-1 py-3">
            <Link to="/" className="flex items-center">
              <div className="shrink-0 flex items-center">
                <img
                  src={LogoSpaceEyes.src}
                  alt="Space Eyes Logo"
                  className="h-6 w-auto object-contain"
                />
                <div className="h-6 border-l border-gray-300 mx-2" />
                <div className=" leading-tight">
                  <span className="text-xs font-bold text-orange-500 block">FireWatch</span>
                  <span className="text-xs text-gray-500 -mt-0.5 block">Global Fire Monitor</span>
                </div>
              </div>
            </Link>
          </div>

          <Sidebar
            onSectionChange={() => setIsSidebarOpen(false)}
            mobile={true}
            open={isSideBarMobileOpen}
            onClose={() => setIsSideBarMobileOpen(false)}
            widthClass="w-80 max-w-[85%]"
          />
        </div>
      )}



      <div className="flex flex-1 min-h-0 flex-col lg:flex-row">

        {isSidebarOpen && (
          <div className="w-full lg:hidden border-b">
            <Sidebar onSectionChange={() => setIsSidebarOpen(false)} />
          </div>
        )}

        <aside className="hidden lg:block w-80 shrink-0 sticky top-16 self-start bg-gradient-to-b from-white/60 to-white/20 border-r border-gray-200">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Sidebar onSectionChange={() => setIsSidebarOpen(false)} />
          </div>
        </aside>


        <main className="flex-1 min-w-0 min-h-0 px-4 sm:px-6 lg:px-8 py-6 overflow-auto">
          <Outlet />
        </main>
      </div>


      <Footer />
    </div>
  );
}
