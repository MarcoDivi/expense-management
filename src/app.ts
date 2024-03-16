/**
 * EventListener to load the default structure and the appropriate view on page reload based on the URL ID.
 * IMPORTANT! In navbar.html, each link MUST declare an ID corresponding to the name of the component file without ".html".
 * Example: To load button.html ===> #button
 */
document.addEventListener("DOMContentLoaded", function () {
    // Load the first view to show
    loadContent("App", "/src/views/home.html");
});
  
/**
 * Function to dynamically load content.
 * @param {*} containerId - The section where to render.
 * @param {*} filePath - The file path to load content from.
 */
export function loadContent(containerId: string, filePath: string) {
fetch(filePath)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch ${filePath}`);
        }
        return response.text();
    })
    .then(data => {
        const container = document.getElementById(containerId);
        if (container instanceof HTMLDivElement) {
            container.innerHTML = data;
        } else {
            console.error(`Element with id ${containerId} is not a div.`);
        }
    })
    .catch(error => console.error(`Error loading file ${filePath}:`, error));
}