function copyBlock(btn) {
  const target = document.getElementById(btn.dataset.target);
  if (!target) return;
  const text = target.value !== undefined ? target.value : target.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = "Copied!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = orig;
      btn.classList.remove("copied");
    }, 1500);
  }).catch(() => {
    target.select();
    document.execCommand("copy");
    btn.textContent = "Copied (fallback)";
    btn.classList.add("copied");
  });
}
function updateCharCounts() {
  document.querySelectorAll("[data-char-count]").forEach((el) => {
    const target = document.getElementById(el.dataset.charCount);
    if (!target) return;
    const txt = target.value !== undefined ? target.value : target.textContent;
    el.textContent = `${txt.length} chars`;
  });
}
document.addEventListener("DOMContentLoaded", updateCharCounts);
