document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            nim: formData.get("nim"),
            parentName: formData.get("parent-name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            religion: formData.get("religion"),
            address: formData.get("address")
        };

        // Load existing results from localStorage
        const storedResults = JSON.parse(localStorage.getItem("formResults")) || [];
        storedResults.push(data);
        localStorage.setItem("formResults", JSON.stringify(storedResults));

        // Redirect to results page
        window.location.href = "results.html";

        // Clear the form fields
        form.reset();
    });
});
