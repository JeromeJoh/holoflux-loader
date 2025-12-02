window.dispatchEvent(new CustomEvent("hololoader:show"));

let p = 0;
let timer = setInterval(() => {
  p += 0.1;
  window.dispatchEvent(
    new CustomEvent("hololoader:progress", { detail: { value: p } })
  );
  document.getElementById("percent").textContent = Math.floor(p * 100) + "%";

  if (p >= 1) {
    clearInterval(timer);
    window.dispatchEvent(new CustomEvent("hololoader:hide"));
  }
}, 80);
