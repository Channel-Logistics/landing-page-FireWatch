import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { sidebarSections } from "../../data/sidebarData";

const Sidebar = ({ onSectionChange }) => {
  const [expandedSections, setExpandedSections] = useState(["overview", "fires"]);
  const location = useLocation();
  const activeSection = location.pathname === '/' ? 'introduction' : location.pathname.substring(1);

  const handleSectionClick = () => {
    if (onSectionChange) onSectionChange();
  };

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <aside className="w-64 h-full bg-gray-50 border-r border-gray-200 flex flex-col min-h-screen shadow-md">
      <nav className="flex-1 space-y-2 p-4 pt-8 pb-4 mt-10">
        {sidebarSections.map((section) => {
          const isSectionActive =
            activeSection === section.id ||
            section.items.some((item) => item.id === activeSection);

          return (
            <div key={section.id}>
              {/* Botón de sección principal */}
              <button
                onClick={() => toggleSection(section.id)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  isSectionActive
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                }`}
              >
                <div className="flex items-center">
                  <section.icon className="w-5 h-5 mr-4" />
                  <span>{section.title}</span>
                </div>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </button>

              {/* Sub-items */}
              {expandedSections.includes(section.id) && section.items.length > 0 && (
                <div className="ml-8 mt-1 space-y-1">
                  {section.items.map((item) => {
                    const itemPath = item.id === 'introduction' ? '/' : `/${item.id}`;
                    return (
                      <Link
                        key={item.id}
                        to={itemPath}
                        onClick={handleSectionClick}
                        className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                          activeSection === item.id
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
    </aside>
  );
};

export default Sidebar;
