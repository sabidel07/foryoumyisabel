function showPage(pageId) {
    // Hide all sections
    document.querySelectorAll('.content').forEach(section => {
        section.style.display = 'none';
        section.style.opacity = 0; // Make them invisible
    });

    // Show the selected section
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';

        // Add a small delay to make the fade-in effect smooth
        setTimeout(() => {
            selectedPage.style.opacity = 1;
        }, 50);
    }
}
