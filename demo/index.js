window.dispatchEvent(new CustomEvent("hololoader:show"));

let p = 0;
let timer = setInterval(() => {
  p += 0.03;
  window.dispatchEvent(new CustomEvent("hololoader:progress", {
    detail: { value: p }
  }));
  if (p >= 1) {
    clearInterval(timer);
    window.dispatchEvent(new CustomEvent("hololoader:hide"));
  }
}, 100);