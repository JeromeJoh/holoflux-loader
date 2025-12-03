const load = () => {
  window.dispatchEvent(new CustomEvent("hololoader:show"));
  console.log("Loading started");

  let p = 0;
  let timer = setInterval(() => {
    p += 0.2;
    window.dispatchEvent(
      new CustomEvent("hololoader:progress", { detail: { value: p } })
    );
    document.getElementById("percent").textContent = Math.floor(p * 100) + "%";

    if (p >= 1) {
      clearInterval(timer);
      window.dispatchEvent(new CustomEvent("hololoader:hide"));
    }
  }, 80);
}

document.querySelector(".trigger-button")?.addEventListener("click", load)

load()