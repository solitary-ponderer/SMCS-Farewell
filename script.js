//Mouse movement
document.addEventListener("mousemove", (event) => {
    // Collecting cursor coordinate
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    // Updating the co ordinates
    document.body.style.setProperty("--x", `${x * 100}%`);
    document.body.style.setProperty("--y", `${y * 100}%`);
});
