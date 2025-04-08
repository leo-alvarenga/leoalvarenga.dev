function randInt(max) {
  return Math.floor(Math.random() * max);
}

function getCurrentRef() {
  return window.currentRef;
}

function setCurrentRef() {
  window.currentRef = location.pathname;
}

function shouldRecalculateImage() {
  return getCurrentRef() !== location.pathname;
}

function toggleItem(item) {
  if (typeof item !== "object" || typeof item.className !== "string") return;

  const { className } = item;

  if (className.includes("hidden")) {
    item.className = className.replace("hidden", "");
  } else {
    item.className = className.concat(" hidden");
  }

  window.currentImage = item;
}

function displayRandomImage() {
  if (!shouldRecalculateImage()) return;

  const images = Array.from(document.querySelectorAll('[data-isimage="true"]'));
  if (!images?.length) return;

  try {
    toggleItem(images[randInt(images.length)]);
  } catch (e) {
    console.error("Could not display random image as intended...", e);

    toggleItem(images[0]);
  }

  setCurrentRef();
}

function setupImageScript(interval = 200) {
  displayRandomImage();
  setInterval(displayRandomImage, interval);
}
