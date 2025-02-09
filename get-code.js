document.addEventListener('DOMContentLoaded', function () {



    // Function to remove Live Server code
    function removeLiveServerCode(html) {
        const liveServerScript = /<!-- Code injected by live-server -->[\s\S]*?<\/script>/g;
        return html.replace(liveServerScript, '');
    }



    // Load the HTML file dynamically
    fetch(`public/html-file.html`)
        .then(response => response.text())
        .then(data => {
            const cleanedData = removeLiveServerCode(data);
            document.getElementById('html-code').textContent = cleanedData;
        });



    // Load the CSS file dynamically
    fetch('public/css-file.css')
        .then(response => response.text())
        .then(data => document.getElementById('css-code').textContent = data);



    // Load the JS file dynamically
    fetch('public/js-file.js')
        .then(response => response.text())
        .then(data => document.getElementById('js-code').textContent = data);



    // Update the iframe with the live preview
    const iframe = document.getElementById('live-preview');
    iframe.src = 'public/html-file.html';
});