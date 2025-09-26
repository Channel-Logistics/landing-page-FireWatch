import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { sidebarSections } from "../../data/sidebarData";

const Sidebar = ({
  onSectionChange,
  mobile = false,
  open = false,
  onClose,
  side = "left",
  widthClass,
}) => {
  const [expandedSections, setExpandedSections] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = location.pathname === "/" ? "introduction" : location.pathname.substring(1);


  const closeBtnRef = useRef(null);
  const prevFocusRef = useRef(null);

  useEffect(() => {
    if (!mobile) return;
    if (open) {
      prevFocusRef.current = document.activeElement;
      setTimeout(() => closeBtnRef.current?.focus(), 0);
      const onKey = (e) => e.key === "Escape" && onClose?.();
      window.addEventListener("keydown", onKey);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = prevOverflow || "";
      };
    } else {
      prevFocusRef.current?.focus?.();
    }
  }, [mobile, open, onClose]);

  const handleSectionClick = () => {
    onSectionChange?.();
    if (mobile) onClose?.();
  };

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };

  const handleSectionHeaderClick = (section) => {
    if (section.id === "fires") {
      toggleSection(section.id);
    } else {
      if (section.items && section.items.length > 0) {
        const firstItem = section.items[0];
        const itemPath = firstItem.id === "introduction" ? "/" : `/${firstItem.id}`;
        navigate(itemPath);
        handleSectionClick();
      } else {
        toggleSection(section.id);
      }
    }
  };

  const navClasses = `flex-1 space-y-1.5 p-4 pb-4 ${mobile ? "pt-3" : "pt-4 mt-6"}`;

  const MenuContent = (
    <nav className={navClasses}>
      {sidebarSections.map((section) => {
        const isSectionActive =
          activeSection === section.id ||
          section.items.some((item) => item.id === activeSection);

        return (
          <div key={section.id}>
            <button
              onClick={() => handleSectionHeaderClick(section)}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-lg font-medium text-sm transition-colors duration-200 ${isSectionActive
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                }`}
            >
              <div className="flex items-center">
                {typeof section.icon === "string" ? (
                  <img src={section.icon} alt="icon" className="w-5 h-5 mr-3 object-contain" />
                ) : (
                  <section.icon className="w-5 h-5 mr-3" size={20} />
                )}
                <span className="truncate">{section.title}</span>
              </div>
              {section.id === "fires" && (
                expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                ) : (
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                )
              )}
            </button>

            {expandedSections.includes(section.id) && section.items.length > 0 && (
              <div className="ml-6 mt-1 space-y-1">
                {section.items.map((item) => {
                  const itemPath = item.id === "introduction" ? "/" : `/${item.id}`;
                  return (
                    <Link
                      key={item.id}
                      to={itemPath}
                      onClick={handleSectionClick}
                      className={`block w-full text-left px-2.5 py-1.5 text-sm rounded-lg transition-all duration-200 ${activeSection === item.id
                          ? "bg-orange-100 text-orange-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                        }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );


  if (mobile) {
    const sidePos = side === "right" ? "right-0" : "left-0";
    const slideClosed = side === "right" ? "translate-x-full" : "-translate-x-full";

    return (
      <>

        <div
          className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => onClose?.()}
          aria-hidden="true"
        />

        <div
          className={`fixed inset-y-0 ${sidePos} z-[70] ${widthClass} bg-white shadow-2xl lg:hidden
            transform transition-transform duration-300 ease-out
            ${open ? "translate-x-0" : slideClosed}`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          id="mobile-sidebar"
        >
          <div className="h-16 px-4 flex items-center border-b">
            <button
              ref={closeBtnRef}
              onClick={() => onClose?.()}
              className="p-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label="Cerrar panel"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="ml-2 text-sm font-medium text-gray-700">Navigation</span>
          </div>
          <div className="h-[calc(100%-4rem)] overflow-y-auto">{MenuContent}</div>
        </div>
      </>
    );
  }


  return (
    <aside className="w-79 h-full bg-transparent border-r border-transparent flex flex-col">
      {MenuContent}
    </aside>
  );
};

export default Sidebar;
