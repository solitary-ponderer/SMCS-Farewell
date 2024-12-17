//Sidebar drop down Menu
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        const parent = this.closest('.dropdown');
        parent.classList.toggle('open');
    });
});

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


//Student Form
document.addEventListener('DOMContentLoaded', () => {
    const inputContainer = document.getElementById('inputContainer');
    const messageContainer = document.getElementById('messageContainer');
    const rollNumberForm = document.getElementById('rollNumberForm');
    const sectionSelect = document.getElementById('section');
    const rollNumberSelect = document.getElementById('rollNumber');
    const header = document.getElementById('header');

 // Function to get student name based on section and roll number
    function getStudentName(section, rollNumber) {
        const students = {
            "A": {
                "1": "Aalia Sultana",
                "2": "Ananya Goon",
                "3": "Ashiya Khatun",
                "4": "Mahira Midday",
                "5": "Mosalmat Mehek",
                "6": "Pragya Dwivedi",
                "7": "Priya Kerketta",
                "8": "Rishita Mahana",
                "9": "Ritwika Saha",
                "10": "Sahana Khatoon",
                "11": "Smriti Samanta",
                "12": "Srijani Bal",
                "13": "Srijita Das",
                "14": "Sucharita Mallick",
                "15": "Taniya Santra",
                "16": "Vironika Soren",
                "17": "Abhijay Chatterjee",
                "18": "Adarsh Thakur",
                "19": "Adarsh Tiwari",
                "20": "Alipta Chakraborty",
                "21": "Anant Bahadur Chetri",
                "22": "Ankit Shaw",
                "23": "Ankur Samanta",
                "24": "Arko Bachar",
                "25": "Arno Bachar",
                "26": "Ashish Sangha",
                "27": "Asmit Prasad",
                "28": "Ayush Singh Yadav",
                "29": "Bishal Sur Chowdhary",
                "30": "Dwaipayan Ghosh",
                "31": "Hindol Saha",
                "32": "Joydip Hansda",
                "33": "Karan Agarwal",
                "34": "Pratikshit Pradhan",
                "35": "Prince Mukhia",
                "36": "Promit Bag",
                "37": "Rahul Santra",
                "38": "Rajat Sankha Basu",
                "39": "Ripom Dey",
                "40": "Rohit Dhara",
                "41": "Sagnik Kundu",
                "42": "Saptarshi Nandi",
                "43": "Sattwik Kundu",
                "44": "Sk. Md. Fardeen",
                "45": "Sk. Nayab Hussain",
                "46": "Subhojit Ray",
                "47": "Susmit Prasad",
                "48": "Tishan Kr. Biswas",
                "49": "Tuhin Sardar",
                "50": "Vishal Singh"
            },
            "B": {
                1: "Abbasa Afrin Khan",
                2: "Adiba Aliya",
                3: "Adrija Jana",
                4: "Afiya Tanzeel",
                5: "Ahana Samanta",
                6: "Aishika Paul",
                7: "Anushka Sah",
                8: "Arpita Sahu",
                9: "Arundhuti Bar",
                10: "Atufa Hassan",
                11: "Kirtilata Prasad",
                12: "Kritika Das",
                13: "Megha Gharami",
                14: "Raina Dey",
                15: "Rajashree Das",
                16: "Rayeda Fatin",
                17: "Sandhya Kumari Shaw",
                18: "Shyamashree Das",
                19: "Sohini Chakraborty",
                20: "Sreeja Goswami",
                21: "Sulakshmi Tudu",
                22: "Sumaiya Sk",
                23: "Swikriti Podder",
                24: "Tarnistha Das",
                25: "Tina Saha",
                26: "Adarsh Shaw",
                27: "Aditya Pandey",
                28: "Anupam Mishra",
                29: "Arindam Sarkar",
                30: "Aritra Ghosh",
                31: "Aritro Ghosh",
                32: "Arnab Mukherjee",
                33: "Ashraya Manna",
                34: "Ayush Aind",
                35: "Ayush Roy",
                36: "Dandasi Rohit",
                37: "Ishant Hurre",
                38: "Jayadrito Jana",
                39: "Kunal Jana",
                40: "Rhitesh Mahanta",
                41: "Rohit Gupta",
                42: "Sarabjit Dey Neogi",
                43: "Sayandeep Pramanick",
                44: "Siddharth Mahaptra",
                45: "Sohan Banerjee",
                46: "Soumalya Singha",
                47: "Soumendra Pandit",
                48: "Suprit Roy",
                49: "Tannishtho Adhikari",
                50: "Anushree Sarkar",
                51: "Agnimitra Mukherjee"
            }            
        };
        return students[section] && students[section][rollNumber]
            ? students[section][rollNumber]
            : null;
    }

    // Populate roll numbers dynamically based on section
    sectionSelect.addEventListener('change', () => {
        const section = sectionSelect.value;
        rollNumberSelect.innerHTML = '<option value="">Select Roll Number</option>';
        if (section) {
            const rollNumbers = section === 'A' ? Array.from({ length: 50 }, (_, i) => i + 1) : Array.from({ length: 51 }, (_, i) => i + 1);
            rollNumbers.forEach(num => {
                const option = document.createElement('option');
                option.value = num;
                option.textContent = num;
                rollNumberSelect.appendChild(option);
            });
        }
    });

    // Handle form submission
    rollNumberForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const section = sectionSelect.value;
        const rollNumber = rollNumberSelect.value;
        const studentName = getStudentName(section, rollNumber);

        if (studentName) {
            header.textContent = `Welcome, ${studentName}!`;
        } else {
            header.textContent = `Welcome, Student!`;
        }

        // Hide the input form and show the welcome message
        inputContainer.classList.add('hidden');
        messageContainer.classList.remove('hidden');
    });
});

// Memories Tab
// Initialize the current index for each section
let currentIndex = []; // Tracks the current image for each section

document.querySelectorAll('.slides').forEach((slides, index) => {
    currentIndex[index] = 0; // Initialize all sections to the first slide
    showSlide(index, 0); // Display the first slide for each section
});

// Function to display the slide
function showSlide(sectionIndex, index) {
    const slides = document.querySelectorAll('.slides')[sectionIndex];
    const totalSlides = slides.children.length;

    // Wrap around slides when going past the last or first slide
    if (index >= totalSlides) {
        currentIndex[sectionIndex] = 0;
    } else if (index < 0) {
        currentIndex[sectionIndex] = totalSlides - 1;
    } else {
        currentIndex[sectionIndex] = index;
    }

    const offset = -currentIndex[sectionIndex] * 100; // Offset in percentage
    slides.style.transform = `translateX(${offset}%)`;
}

// Function to move to the next slide
function nextSlide(sectionIndex) {
    showSlide(sectionIndex, currentIndex[sectionIndex] + 1);
}

// Function to move to the previous slide
function prevSlide(sectionIndex) {
    showSlide(sectionIndex, currentIndex[sectionIndex] - 1);
}

// Show the popup when the page loads
window.onload = function () {
    // Popup 1
    const popupContainer = document.getElementById('popup-container');
    const redirectButton = document.getElementById('popup-ok'); // Redirect Me button
    const closeButton = document.getElementById('popup-close'); // Close button

    if (popupContainer) {
        // Display the popup
        popupContainer.style.display = 'flex';

        // Handle "Redirect Me" button click
        redirectButton.addEventListener('click', () => {
            window.open('https://drive.google.com/file/d/1i0EVVBnn8X2hv-HZn5TCtGnMRnr12tl6/view?usp=sharing', '_blank'); // Open YouTube in a new tab
        });

        // Handle "Close" button click
        closeButton.addEventListener('click', () => {
            popupContainer.style.display = 'none'; // Hide the popup
        });
    }

    // Popup 2
    const popup2Container = document.getElementById('popup2-container');
    const close2Button = document.getElementById('popup2-close'); // Close button

    if (popup2Container) {
        // Display the popup
        popup2Container.style.display = 'flex';

        // Set a timer to hide the popup after 5 seconds
        const timer = setTimeout(() => {
            popup2Container.style.display = 'none';
        }, 5000);

        // Handle "Close" button click
        close2Button.addEventListener('click', () => {
            clearTimeout(timer); // Clear the timer if the user closes manually
            popup2Container.style.display = 'none'; // Hide the popup
        });
    }
};
