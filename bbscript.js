// PDF download
function downloadPDF() {
    const element = document.getElementById("specifications");
    const btn = document.querySelector('.download-btn button');

    btn.innerText = 'Downloading...';
    btn.disabled = true;

    const opt = {
        margin: 0.5,
        filename: 'bugatti_bolide_specs.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        callback: function () {
            btn.innerText = 'Download (PDF)';
            btn.disabled = false;
            alert('PDF download complete!');
        }
    };

    html2pdf().set(opt).from(element).save();
}

// Navbar visibility on scroll
window.addEventListener("scroll", function () {
    const nav = document.getElementById("overviewNav");
    const overlayHeight = document.querySelector('.overlay').offsetHeight;

    if (window.scrollY > overlayHeight) {
        nav.classList.add("show");
    } else {
        nav.classList.remove("show");
    }
});
