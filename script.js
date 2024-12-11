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
                "1": "Boudi"
            },
            "B": {
                "1": "Abbasa Afrin Khan",
                "2": "Adiba Aliya",
                "3": "Adrija Jana",
                "4": "Aishika Paul",
                "5": "Arpita Sahu",
                "6": "Arundhuti Bar",
                "7": "Atufa Hassan",
                "8": "Kritilata Prasad",
                "9": "Megha Gharami",
                "10": "Raina Dey",
                "11": "Pajashree Das",
                "12": "Rayeda Fatin",
                "13": "Sandhya Kumari Shaw",
                "14": "ShyamaShree Das",
                "15": "Sreeja Goswami",
                "16": "Sulakshmi Tudu",
                "17": "Sumaiya Sk",
                "18": "Swikriti Podder",
                "19": "Tarnistha Das",
                "20": "Tina Saha",
                "21": "Adarsh Shaw",
                "22": "Aditya Pandey",
                "23": "Anupam Mishra",
                "24": "Arindam Sarkar",
                "25": "Aritra Ghosh",
                "26": "Aritro Ghosh",
                "27": "Arnab Mukherjee",
                "28": "Ashraya Manna",
                "29": "Ayush Emmamuel Aind",
                "30": "Ayush Roy",
                "31": "Ishant Dharamdas Hurra",
                "32": "Jayadrito Jana",
                "33": "Kunal Jana",
                "34": "Rohit Gupta",
                "35": "Sayandeep Pramanick",
                "36": "Sarbajit Dey Neogi",
                "37": "Sohom Banerjee",
                "38": "Soumalya Singha",
                "39": "Suprit Roy",
                "40": "Tannistho Adhikary",
                "41": "Rhitesh Mohanta"
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
            const rollNumbers = section === 'A' ? Array.from({ length: 16 }, (_, i) => i + 1) : Array.from({ length: 15 }, (_, i) => i + 1);
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
