import React from "react";
import { useThemeStore } from "../store/UseThemeStore";
import THEMES from "../constants/index";

// Color definitions for each theme.
const THEME_COLORS = {
  light: ["#BBDEFB", "#64B5F6", "#2196F3"],
  dark: ["#424242", "#616161", "#9E9E9E"],
  cupcake: ["#F8BBD0", "#F48FB1", "#E91E63"],
  bumblebee: ["#FFF9C4", "#FFECB3", "#FFC107"],
  emerald: ["#B2DFDB", "#80CBC4", "#4CAF50"],
  corporate: ["#CFD8DC", "#90A4AE", "#607D8B"],
  synthwave: ["#F48FB1", "#E040FB", "#AA00FF"],
  retro: ["#FFCDD2", "#EF9A9A", "#F44336"],
  cyberpunk: ["#FF4081", "#E040FB", "#9C27B0"],
  valentine: ["#F8BBD0", "#F48FB1", "#E91E63"],
  halloween: ["#FF9800", "#FF5722", "#795548"],
  garden: ["#A5D6A7", "#81C784", "#388E3C"],
  forest: ["#A5D6A7", "#81C784", "#388E3C"],
  aqua: ["#B2EBF2", "#4DD0E1", "#00BCD4"],
  lofi: ["#E0E0E0", "#9E9E9E", "#616161"],
  pastel: ["#F06292", "#BA68C8", "#9C27B0"],
  fantasy: ["#9575CD", "#673AB7", "#311B92"],
  wireframe: ["#E0E0E0", "#BDBDBD", "#757575"],
  black: ["#212121", "#424242", "#757575"],
  luxury: ["#D7CCC8", "#A1887F", "#5D4037"],
  dracula: ["#BBDEFB", "#64B5F6", "#2196F3"],
  cmyk: ["#FFCDD2", "#EF9A9A", "#F44336"],
  autumn: ["#FFCDD2", "#EF9A9A", "#F44336"],
  business: ["#CFD8DC", "#90A4AE", "#607D8B"],
  acid: ["#FF4081", "#E040FB", "#9C27B0"],
  lemonade: ["#FFF9C4", "#FFECB3", "#FFC107"],
  night: ["#424242", "#616161", "#9E9E9E"],
  coffee: ["#D7CCC8", "#A1887F", "#5D4037"],
  winter: ["#B2EBF2", "#4DD0E1", "#00BCD4"],
  dim: ["#E0E0E0", "#9E9E9E", "#616161"],
  nord: ["#CFD8DC", "#90A4AE", "#607D8B"],
  sunset: ["#FFCDD2", "#EF9A9A", "#F44336"]
};

const Settings = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="container vh-100 pt-5 d-flex justify-content-center" style={{marginTop: "3rem"}}>
      <div className="w-75">
        {/* Theme Selection */}
        <div className="mb-4">
          <h2 className="h5 fw-bold">Choose a Theme</h2>
          <p className="text-muted">Select a theme for your chat interface</p>

          <div className="row g-3">
            {THEMES.map((t) => (
              <div key={t} className="col-6 col-md-4 col-lg-3">
                <button
                  aria-label={`Select ${t} theme`}
                  className={`btn w-100 p-0 position-relative`}
                  onClick={() => setTheme(t)}
                  data-theme={t}
                  style={{
                    border: theme === t ? "2px solid var(--button-bg)" : "1px solid var(--text-color)",
                    borderRadius: "5px",
                    overflow: "hidden"
                  }}
                >
                  <div className="d-flex" style={{ height: "30px" }}>
                    {THEME_COLORS[t].map((color, index) => (
                      <div
                        key={index}
                        style={{
                          backgroundColor: color,
                          width: `${100 / THEME_COLORS[t].length}%`,
                          height: "100%"
                        }}
                      />
                    ))}
                  </div>
                  <small className="position-absolute bottom-0 start-0 w-100 text-center" style={{ fontSize: "0.7rem", color: "var(--text-color)" }}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </small>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <h3 className="h6 fw-bold mb-3">Preview</h3>
        <div className="border rounded shadow-sm p-3" style={{ backgroundColor: `var(--bg-color)`, color: `var(--text-color)` }}>
          {/* Header */}
          <div className="p-3 border-bottom" style={{ backgroundColor: `var(--button-bg)`, color: `var(--button-text)` }}>
            <h3 className="h6 mb-0">John Doe</h3>
            <p className="text-muted mb-0 small">Online</p>
          </div>

          {/* Chat Preview */}
          <div className="p-3" style={{ minHeight: "200px", maxHeight: "200px", overflowY: "auto" }}>
            <div className="d-flex justify-content-end mb-2">
              <div className="p-2 rounded" style={{ backgroundColor: `var(--button-bg)`, color: `var(--button-text)` }}>Hello, how are you?</div>
            </div>
            <div className="d-flex justify-content-start mb-2">
              <div className="p-2 rounded" style={{ backgroundColor: `var(--bg-color)`, color: `var(--text-color)` }}>I am fine, thank you.</div>
            </div>
          </div>

          {/* Input Field */}
          <div className="p-3 border-top">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Type a message" 
              readOnly 
              style={{ backgroundColor: `var(--bg-color)`, color: `var(--text-color)` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
