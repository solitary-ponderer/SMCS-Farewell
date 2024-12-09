// Check if the device is mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (!isMobile) {
    // Mouse movement effect for desktop
    document.addEventListener("mousemove", (event) => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        // Update the coordinates for the cursor effect
        document.body.style.setProperty("--x", `${x * 100}%`);
        document.body.style.setProperty("--y", `${y * 100}%`);
    });
} else {
    // Disable background effect on mobile
    document.body.style.setProperty("--x", "50%");
    document.body.style.setProperty("--y", "50%");
}

// Ensure script runs after DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    // Add event listener for toggling the sidebar
    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('open'); // Toggle visibility
    });
});
