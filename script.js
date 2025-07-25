document.addEventListener("DOMContentLoaded", function() {
    // In-memory list of breathing styles; each style has a name and description.
    const styles = [
        { name: "4-7-8 Breathing", description: "Inspira per 4, trattieni per 7, espira per 8." },
        { name: "Box Breathing", description: "4 secondi inspira, 4 trattieni, 4 espira, 4 trattieni." }
    ];

    const listElement = document.getElementById("style-list");
    const addButton = document.getElementById("add-style");
    const nameInput = document.getElementById("style-name");
    const descriptionInput = document.getElementById("style-description");

    // Renders the list of styles to the page.
    function renderList() {
        // Clear the list.
        listElement.innerHTML = "";
        // Create a list item for each style.
        styles.forEach((style, index) => {
            const li = document.createElement("li");
            const text = document.createElement("span");
            text.textContent = `${style.name}: ${style.description}`;
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Rimuovi";
            // Remove the selected style when clicking "Rimuovi".
            removeBtn.addEventListener("click", () => {
                styles.splice(index, 1);
                renderList();
            });
            li.appendChild(text);
            li.appendChild(removeBtn);
            listElement.appendChild(li);
        });
    }

    // Add a new style based on user input.
    addButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const desc = descriptionInput.value.trim();
        if (name && desc) {
            styles.push({ name, description: desc });
            nameInput.value = "";
            descriptionInput.value = "";
            renderList();
        }
    });

    // Initial render.
    renderList();
});
