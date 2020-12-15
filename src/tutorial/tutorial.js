const toggle = document.querySelector('.toggle');
let root = document.documentElement;

toggle.addEventListener('change', e => {
  if (e.target.checked) {
    root.style.setProperty("--background", "black");
    root.style.setProperty("--text", "white");
  } else {
    root.style.setProperty("--background", "white");
    root.style.setProperty("--text", "black");
  }
})