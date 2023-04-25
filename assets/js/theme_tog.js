const theme_toggle = document.getElementById("l_m_mode");
const theme_stylesheet = document.getElementById("theme-stylesheet");
const Licon = document.getElementById("icon");

theme_toggle.addEventListener("click", () => {
  const current_theme = theme_stylesheet.href;

  if (current_theme.endsWith("/style_light.css")) {
    theme_stylesheet.href = "./assets/css/style_dark.css";
    Licon.classList.remove("fa-moon");
  } else {
    theme_stylesheet.href = "./assets/css/style_light.css";
    Licon.classList.add("fa-moon");
  }


  localStorage.setItem("theme", theme_stylesheet.href);
});

// dark theme default
let stored_theme = localStorage.getItem("theme");
if (!stored_theme) {
  theme_stylesheet.href = "./assets/css/style_dark.css";
  stored_theme = "./assets/css/style_dark.css";
} else {
  theme_stylesheet.href = stored_theme;
}

// icon update for startup
if (stored_theme.endsWith("/style_light.css")) {
  Licon.classList.add("fa-moon");
} else {
  Licon.classList.remove("fa-moon");
}
