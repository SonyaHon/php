const root = document.getElementById("root");
// show loader
root.style.display = 'none';
// load window
window.addEventListener('load', () => {
  root.style.display = 'block';
});