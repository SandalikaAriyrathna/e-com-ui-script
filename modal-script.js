

    // Get the modal
    const modal = document.getElementById("modal");

    // Get the button that opens the modal
    const openModalButton = document.getElementById("openModalButton");

    // Get the <span> element that closes the modal
    const closeBtn = document.getElementsByClassName("close")[0];

    // Function to show the modal if an hour has passed
    function showModalIfNeeded() {
        const lastShown = localStorage.getItem('lastShown');
        const now = new Date().getTime();

        // Show if more than an hour has passed or never shown
        if (!lastShown || now - lastShown > 60000) {
            modal.style.display = "block";
            localStorage.setItem('lastShown', now.toString());
        }
    }

    // Call showModalIfNeeded on page load
    window.onload = showModalIfNeeded;

    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks on the save preferences button, close the modal
    document.getElementById("savePreferences").onclick = function() {
        modal.style.display = "none";
        const selectedStyle = document.getElementById("stylePreference").value;
        alert("You chose the " + selectedStyle + " style.");
        // Additional logic to save preferences goes here
    }