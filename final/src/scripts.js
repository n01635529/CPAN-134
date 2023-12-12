function setTheme(theme) {
  localStorage.setItem("theme", theme);
  applyTheme();
  updateDropdown(theme);
}

function getTheme() {
  return localStorage.getItem("theme") || "default-theme";
}

function applyTheme() {
  const theme = getTheme();
  document.body.className = theme;
}

function updateDropdown(selectedTheme) {
  const dropdown = document.getElementById("theme-selector");

  for (let i = 0; i < dropdown.options.length; i++) {
    if (dropdown.options[i].value === selectedTheme) {
      dropdown.selectedIndex = i;
      break;
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  applyTheme();
  updateDropdown(getTheme());
});
