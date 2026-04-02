function copyFunction(targetId, buttonElement) {
    // 1. Find the specific input by the ID we passed in
    const copyText = document.getElementById(targetId);
    
    // 2. Use the modern Clipboard API
    navigator.clipboard.writeText(copyText.value).then(() => {
        // 3. Provide visual feedback on the specific button clicked
        const originalText = buttonElement.innerHTML;
        buttonElement.innerHTML = "Copied!";
        buttonElement.style.backgroundColor = "#28a745"; // Success green

        setTimeout(() => {
            buttonElement.innerHTML = originalText;
            buttonElement.style.backgroundColor = ""; // Reset to CSS default
        }, 2000);
    });
}

// 1. Target the parent 'nav' container
const navBar = document.querySelector('nav');

navBar.addEventListener('click', (e) => {
    // 2. Only run the code if an <a> tag was clicked
    const clickedLink = e.target.closest('a');
    if (!clickedLink) return;

    // 3. Remove the 'active' class from the current highlighted link
    const currentActive = navBar.querySelector('a.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }

    // 4. Add the 'active' class to the link you just pressed
    clickedLink.classList.add('active');

    // 5. UX Bonus: If on mobile, close the menu after a selection is made
    if (window.innerWidth <= 995) {
        navBar.classList.remove('active');
    }
});
const lightbox = document.getElementById("portfolio-lightbox");
const activeImg = document.getElementById("active-lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");

// 1. Open Lightbox when any gallery image is clicked
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = "block";
        activeImg.src = img.src;
        activeImg.classList.remove("zoomed"); // Reset zoom when opening a new image
    });
});

// 2. Toggle the Zoom in/out effect
activeImg.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the lightbox from closing when clicking the image
    activeImg.classList.toggle("zoomed");
});

// 3. Close when clicking the 'X' or the dark background
const closeLightbox = () => {
    lightbox.style.display = "none";
};

closeBtn.onclick = closeLightbox;
lightbox.onclick = closeLightbox;