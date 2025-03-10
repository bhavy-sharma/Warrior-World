document.addEventListener('DOMContentLoaded', function () {


    //Project ID dynamically fill
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("projectId");


    // Function to remove Live Server code
    function removeLiveServerCode(html) {
        const liveServerScript = /<!-- Code injected by live-server -->[\s\S]*?<\/script>/g;
        return html.replace(liveServerScript, '');
    }



    // Load the HTML file dynamically
    fetch(`public/${projectId}/html-file.html`)
        .then(response => response.text())
        .then(data => {
            const cleanedData = removeLiveServerCode(data);
            document.getElementById('html-code').textContent = cleanedData;
        });



    // Load the CSS file dynamically
    fetch(`public/${projectId}/css-file.css`)
        .then(response => response.text())
        .then(data => document.getElementById('css-code').textContent = data);



    // Load the JS file dynamically
    fetch(`public/${projectId}/js-file.js`)
        .then(response => response.text())
        .then(data => document.getElementById('js-code').textContent = data);



    // Update the iframe with the live preview
    const iframe = document.getElementById('live-preview');
    iframe.src = `public/${projectId}/html-file.html`;
});


document.getElementById('download-button').addEventListener('click', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('projectId');
    if (projectId) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = `https://bhavy-sharma.github.io/Warrior-World/zipped/${projectId}-zipped.zip`;
        a.download = `${projectId}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        alert('Project ID not found.');
    }
});