
import { 
  Home, Cat, Heart, Users, Calendar, 
  DollarSign, Settings, Menu, X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { 
    title: "Dashboard", 
    icon: Home, 
    path: "/" 
  },
  { 
    title: "Animais", 
    icon: Cat, 
    path: "/animals" 
  },
  { 
    title: "Adoções", 
    icon: Heart, 
    path: "/adoptions" 
  },
  { 
    title: "Voluntários", 
    icon: Users, 
    path: "/volunteers" 
  },
  { 
    title: "Agendar", 
    icon: Calendar, 
    path: "/schedule" 
  },
  { 
    title: "Doações", 
    icon: DollarSign, 
    path: "/donations" 
  },
  { 
    title: "Configurações", 
    icon: Settings, 
    path: "/settings" 
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={cn(
      "min-h-screen bg-white border-r border-gray-200 transition-all duration-300",
      collapsed ? "w-[70px]" : "w-[250px]"
    )}>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {!collapsed && (
            <div className="font-bold text-lg text-ngo-primary">Conexão Animal</div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="ml-auto"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </Button>
        </div>
        
        <div className="flex-1 py-6">
          <ul className="space-y-2 px-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "w-full justify-start font-medium",
                      location.pathname === item.path ? "bg-ngo-primary/10 text-ngo-primary" : "",
                      collapsed ? "px-2" : "px-4"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", !collapsed && "mr-2")} />
                    {!collapsed && <span>{item.title}</span>}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          {!collapsed && (
            <div className="text-xs text-gray-500">
              Conexão Animal v1.0
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
