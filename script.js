document.addEventListener("DOMContentLoaded", () => {
  const greetingEl = document.getElementById("greeting");
  const messageEl = document.getElementById("message");
  const morningBtn = document.getElementById("morningBtn");
  const nightBtn = document.getElementById("nightBtn");
  const gallery = document.getElementById("gallery");

  // Image sets
  const morningImages = [
    { src: "cat2.jpg", caption: "Good Morning 💐" },
    { src: "cat3.jpg", caption: "Have a lovely day ☀️" }
  ];

  const nightImages = [
    { src: "cat1.jpg", caption: "Sweet dreams 💖" },
    { src: "cat4.jpg", caption: "Sleep tight 🌙" }
  ];

  function renderImages(images) {
    gallery.innerHTML = "";
    images.forEach(img => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      const caption = document.createElement("figcaption");
      image.src = img.src;
      image.alt = img.caption;
      caption.textContent = img.caption;
      figure.appendChild(image);
      figure.appendChild(caption);
      gallery.appendChild(figure);
    });
  }

  function setMorning() {
    greetingEl.textContent = "☀️ Good Morning! 🌸";
    messageEl.textContent = "Have a bright and lovely day!";
    document.body.classList.remove("night");
    renderImages(morningImages);
  }

  function setNight() {
    greetingEl.textContent = "🌙 Good Night! 💤";
    messageEl.textContent = "May your dreams be peaceful.";
    document.body.classList.add("night");
    renderImages(nightImages);
  }

  morningBtn.addEventListener("click", setMorning);
  nightBtn.addEventListener("click", setNight);

  // Auto set depending on time
  const h = new Date().getHours();
  if (h >= 6 && h < 18) setMorning();
  else setNight();
});