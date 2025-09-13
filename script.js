const wrapper = document.querySelector(".tunnel-wrapper-interactive");
const container = document.querySelector(".tunnel-container-interactive");
const addBtn = document.getElementById("add-frame");
const removeBtn = document.getElementById("remove-frame");

const MAX_FRAMES = 100;
const MIN_FRAMES = 2;

// Mouse tracking
wrapper.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const mouseX = (x / rect.width) * 2 - 1;
  const mouseY = (y / rect.height) * 2 - 1;

  document.documentElement.style.setProperty("--mouseX", mouseX);
  document.documentElement.style.setProperty("--mouseY", mouseY);
});

wrapper.addEventListener("mouseleave", () => {
  // Reset position
  document.documentElement.style.setProperty("--mouseX", 0);
  document.documentElement.style.setProperty("--mouseY", 0);
});

// Add/Remove frames
addBtn.addEventListener("click", () => {
  if (container.children.length < MAX_FRAMES) {
    const newFrame = document.createElement("div");
    newFrame.classList.add("tunnel-frame-interactive");
    container.appendChild(newFrame);
  }
});

removeBtn.addEventListener("click", () => {
  if (container.children.length > MIN_FRAMES) {
    container.removeChild(container.lastElementChild);
  }
});