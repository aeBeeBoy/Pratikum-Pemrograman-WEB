// Tunggu sampai DOM siap
document.addEventListener("DOMContentLoaded", function () {
  // ========== TOGGLE MENU ==========
  const menuIcon = document.querySelector(".menu-icon");
  const navMenu = document.querySelector("nav ul");

  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // ========== FORM FEEDBACK ==========
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // supaya tidak reload
    const nama = document.getElementById("nama").value;
    const pengalaman = document.getElementById("pilih").value;
    const rekomendasi = document.getElementById("kategori").value;
    const kritik = document.getElementById("deskripsi").value;

    alert(
      `Terima kasih, ${nama}!\n\nFeedback Anda:\n- Pengalaman: ${pengalaman}\n- Rekomendasi: ${rekomendasi}\n- Kritik/Saran: ${kritik}`
    );

    form.reset(); // kosongkan form
  });

  // ========== INTERAKSI PADA CARD ==========
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("highlight");
    });
  });
});
