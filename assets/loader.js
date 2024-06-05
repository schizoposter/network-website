window.addEventListener('load', function() {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        fetch('assets/ascii.txt')
            .then(response => response.text())
            .then(data => {
                const asciiArtContainer = document.getElementById('ascii-art-container');
                asciiArtContainer.innerText = data;
            });
    }
});