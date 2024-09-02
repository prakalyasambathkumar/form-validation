// Function to populate event names based on event type
function populateEventNames() {
    const eventType = document.getElementById("event-type").value;
    const eventNameSelect = document.getElementById("event-name");

    // Clear existing options
    eventNameSelect.innerHTML = '<option value="">Select Event</option>';

    let events = [];

    if (eventType === "Cultural") {
        events = ["Dance Competition", "Music Fest", "Drama", "Fashion Show"];
    } else if (eventType === "Technical") {
        events = ["Coding Competition", "Hackathon", "Robotics", "Tech Quiz"];
    }

    events.forEach(event => {
        const option = document.createElement("option");
        option.value = event;
        option.textContent = event;
        eventNameSelect.appendChild(option);
    });
}

// Image preview and validation logic
document.getElementById("college-id").addEventListener("change", function () {
    const file = this.files[0];
    const preview = document.getElementById("id-preview");
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 2 * 1024 * 1024; // 2MB size limit

    if (file) {
        // Validate file type
        if (!allowedTypes.includes(file.type)) {
            alert("Please upload a valid image file (JPEG, PNG, GIF).");
            this.value = ""; // Clear the file input
            preview.style.display = "none";
            return;
        }

        // Validate file size
        if (file.size > maxSize) {
            alert("File size should not exceed 2MB.");
            this.value = ""; // Clear the file input
            preview.style.display = "none";
            return;
        }

        // Show image preview
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    } else {
        preview.style.display = "none";
    }
});

// Form validation logic
function validateForm() {
    const eventType = document.getElementById("event-type").value;
    const eventName = document.getElementById("event-name").value;

    if (!eventType) {
        document.getElementById("event-type-error").textContent = "Please select an event type.";
        return false;
    } else {
        document.getElementById("event-type-error").textContent = "";
    }

    if (!eventName) {
        document.getElementById("event-name-error").textContent = "Please select an event.";
        return false;
    } else {
        document.getElementById("event-name-error").textContent = "";
    }

    return true;
}
