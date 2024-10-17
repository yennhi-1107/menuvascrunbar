// for order tracker
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("email").value;
    let orderNumber = document.getElementById("orderNumber").value;
    let emailError = document.getElementById("emailError");
    let orderError = document.getElementById("orderError");

    // Clear previous error messages
    emailError.textContent = "";
    orderError.textContent = "";

    let valid = true;

// Validate email specifically for @gmail.com
const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid Gmail address (e.g., example@gmail.com).";
    document.getElementById("email").classList.add("error-input");
    valid = false;
} else {
    document.getElementById("email").classList.remove("error-input");
}

// Validate order number
if (orderNumber.trim() === "") {
    orderError.textContent = "Please enter your order number.";
    document.getElementById("orderNumber").classList.add("error-input");
    valid = false;
} else {
    document.getElementById("orderNumber").classList.remove("error-input");
}

if (valid) {
    // Proceed with form submission
    alert("Form submitted successfully!");
}
});

// for contact
document.addEventListener("DOMContentLoaded", function () {
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phoneNumber");
    const province = document.getElementById("province");
    const district = document.getElementById("district");
    const ward = document.getElementById("ward");
    const address = document.getElementById("address");
    const content = document.getElementById("content");
    const submitButton = document.getElementById("submitButton");

    const districtsData = {
        "HCMC": ["Binh Thanh", "Tan Binh", "District 1", "District 2", "Binh Chanh"],
        "Hanoi": ["Ba Dinh", "Hoan Kiem", "Dong Da", "Cau Giay"],
        "Danang": ["Hai Chau", "Son Tra", "Thanh Khe"],
        "Cantho": ["Ninh Kieu", "Cai Rang", "Binh Thuy"],
        "Haiphong": ["Ngo Quyen", "Le Chan", "Hong Bang"]
    };

    const wardsData = {
        "Binh Thanh": ["Ward 1", "Ward 2", "Ward 3"],
        "Tan Binh": ["Ward 4", "Ward 5", "Ward 6"],
        "Binh Chanh": ["Ward 7", "Ward 8", "Ward 9"],
        "Ba Dinh": ["Ward 10", "Ward 11", "Ward 12"],
        "Hoan Kiem": ["Ward 13", "Ward 14", "Ward 15"],
        "Hai Chau": ["Ward 16", "Ward 17", "Ward 18"]
    };

    // Show/Hide district options based on province selection
    province.addEventListener("change", function () {
        district.innerHTML = '<option value="">District</option>'; // Reset district options
        ward.innerHTML = '<option value="">Ward</option>'; // Reset ward options
        ward.style.display = "inline-block"; // Show ward dropdown
        if (province.value !== "") {
            // Populate districts
            districtsData[province.value].forEach(d => {
                district.innerHTML += `<option value="${d}">${d}</option>`;
            });
        }else {
            console.log("No districts available for the selected province.");}
    });

   // Handle district selection and display corresponding wards
district.addEventListener("change", function () {
    console.log(district.value);  // Log the selected district value
    ward.innerHTML = '<option value="">Ward</option>'; // Reset ward options

    if (district.value !== "") {
        if (wardsData[district.value]) { // Check if district has corresponding wards
            wardsData[district.value].forEach(w => {
                ward.innerHTML += `<option value="${w}">${w}</option>`;
            });
        } else {
            console.log("No wards available for the selected district.");
        }
    }
});

    // Check if all fields are filled
    function checkFormCompletion() {
        if (
            fullName.value.trim() !== "" &&
            email.value.trim() !== "" &&
            phoneNumber.value.trim() !== "" &&
            province.value !== "" &&
            district.value !== "" &&
            ward.value !== "" &&
            address.value.trim() !== "" &&
            content.value.trim() !== ""
        ) {
            submitButton.disabled = false;
            submitButton.style.cursor = "pointer";
        } else {
            submitButton.disabled = true;
            submitButton.style.cursor = "not-allowed";
        }
    }

    // Add event listeners to all form fields
    [fullName, email, phoneNumber, province, district, ward, address].forEach(field => {
        field.addEventListener("input", checkFormCompletion);
    });
});


