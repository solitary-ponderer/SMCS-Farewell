// JavaScript to track mouse movement and adjust background brightness
document.addEventListener("mousemove", (event) => {
    // Get the mouse coordinates relative to the viewport
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    // Update the CSS variables --x and --y for the radial gradient in CSS
    document.body.style.setProperty("--x", `${x * 100}%`);
    document.body.style.setProperty("--y", `${y * 100}%`);
});
