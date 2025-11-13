// Sidebar.jsx
import React, { createContext, useContext, useState } from "react";

// --- Provider ---
const SidebarContext = createContext();
export const useSidebar = () => useContext(SidebarContext);
export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [openMobile, setOpenMobile] = useState(false);
  const toggleSidebar = () => setOpen(!open);
  const toggleMobileSidebar = () => setOpenMobile(!openMobile);
  return (
    <SidebarContext.Provider
      value={{ open, openMobile, toggleSidebar, toggleMobileSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// --- Sidebar ---
export const Sidebar = ({ children }) => {
  const { open } = useSidebar();
  return (
    <aside
      className={`bg-gray-800 text-white h-screen transition-all duration-300 flex flex-col ${
        open ? "w-64" : "w-16"
      }`}
    >
      {children}
    </aside>
  );
};
export const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return <button onClick={toggleSidebar}>Toggle</button>;
};
export const SidebarContent = ({ children }) => <div>{children}</div>;
export const SidebarHeader = ({ children }) => <div>{children}</div>;
export const SidebarFooter = ({ children }) => <div>{children}</div>;
