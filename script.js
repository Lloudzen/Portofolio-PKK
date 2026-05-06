console.log("Portofolio TKJ Aktif");

function openModal(src) {
  document.getElementById("modal").classList.add("show");
  document.getElementById("modal-img").src = src;
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

// FADE IN saat halaman dibuka
window.addEventListener("load", () => {
  document.body.classList.add("show");
});


document.addEventListener("DOMContentLoaded", () => {

  // fade in
  document.body.classList.add("show");

  // fade out saat klik link
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");

      if (href && !href.startsWith("#")) {
        e.preventDefault();

        document.body.classList.remove("show");

        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });

});