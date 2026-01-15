document.addEventListener("DOMContentLoaded", function () {

  // Do not add controls on index page
  const path = window.location.pathname;
  if (path.endsWith("/ml-notes/") || path.endsWith("/ml-notes/index.html")) {
    return;
  }

  // Find the page title (first h1)
  const title = document.querySelector("main h1");
  if (!title) return;

  // Create controls container
  const controls = document.createElement("div");
  controls.id = "ml-notes-controls";
  controls.style.margin = "0.5rem 0 1rem 0";

  controls.innerHTML = `
    <button onclick="expandAll()">Expand All</button>
    <button onclick="collapseAll()">Collapse All</button>
  `;

  // Insert controls right after the title
  title.insertAdjacentElement("afterend", controls);
});

function expandAll() {
  document.querySelectorAll("details.qa").forEach(d => d.open = true);
}

function collapseAll() {
  document.querySelectorAll("details.qa").forEach(d => d.open = false);
}

