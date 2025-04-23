import { create } from "zustand";
import THEMES from "../constants/index.js"; 

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "light",
  
  setTheme: (newTheme) => {
    if (!THEMES.includes(newTheme)) return; 
    
    localStorage.setItem("chat-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    set({ theme: newTheme });
  },
}));

const initialTheme = localStorage.getItem("chat-theme") || "light";
document.documentElement.setAttribute("data-theme", initialTheme);
