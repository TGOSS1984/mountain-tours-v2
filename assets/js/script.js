// scripts/include.js
async function loadIncludes() {
  const header = await fetch("header.html").then(res => res.text());
  const footer = await fetch("footer.html").then(res => res.text());

  document.getElementById("header").innerHTML = header;
  document.getElementById("footer").innerHTML = footer;

  setTimeout(() => {
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  }, 100);
}

loadIncludes();