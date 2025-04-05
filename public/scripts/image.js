function randInt(max) {
  return Math.floor(Math.random() * max);
}

function displayItem(item) {
  if (typeof item !== "object" || typeof item.className !== "string") return;

  item.className = item.className.replace("hidden", "");
}

function displayRandomImage() {
  const images = Array.from(document.querySelectorAll('[data-isimage="true"]'));

  if (!images?.length) return;

  try {
    displayItem(images[randInt(images.length)]);
  } catch (e) {
    console.error("Could not display random image as intended...", e);

    displayItem(images[0]);
  }
}

displayRandomImage();
