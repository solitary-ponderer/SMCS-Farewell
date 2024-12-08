// Check if the device is mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (!isMobile) {
    //Mouse movement for PC
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
