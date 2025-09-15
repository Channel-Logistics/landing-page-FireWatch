import { ChevronDown, ChevronRight, Home } from "lucide-react";

export default function LayerPill({
  id,
  label,
  open = false,
  onToggle = () => {},
  onAction = () => {},
  className,
  icon,
  children: hasChildren,
}) {
  const menuId = id ? `${id}-menu` : undefined;

  return (
    <div
      id={id}
      className={`inline-flex items-center gap-3 rounded-full border border-gray-200
                  bg-white/95 backdrop-blur-md shadow-md px-4 py-2
                  text-gray-900 ${className}`}
      role="group"
    >
      {hasChildren && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Contraer capa" : "Expandir capa"}
          className="p-1 -ml-1 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
        >
          {open ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      )}

      <span className="select-none font-extrabold tracking-tight">
        {label}
      </span>

      <button
        type="button"
        onClick={onAction}
        aria-label="Acción de la capa"
        className="ml-2 rounded-full border border-gray-300 p-1 hover:bg-gray-50
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
      >
        <div className="relative grid place-items-center h-8 w-8 rounded-full bg-gray-900 text-white">
          {icon ? icon : <Home className="w-4 h-4" />}
        </div>
      </button>
    </div>
  );
}
