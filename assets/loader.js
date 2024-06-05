window.addEventListener('load', function() {
    fetch('assets/ascii.txt')
        .then(response => response.text())
        .then(data => {
            const asciiArtContainer = document.getElementById('ascii-art-container');
            asciiArtContainer.innerText = data;
            initAsciiEffect(data);
        });
});
function adjustFontSize() {
    const asciiArtContainer = document.getElementById('ascii-art-container');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const baseFontSize = Math.min(windowWidth, windowHeight) / 150;
    asciiArtContainer.style.fontSize = `${baseFontSize}px`;
    asciiArtContainer.style.top = `${windowHeight / 2}px`;
    asciiArtContainer.style.left = `${windowWidth / 2}px`;
    asciiArtContainer.style.transform = 'translate(-50%, -50%)';
  }
window.addEventListener('resize', adjustFontSize);
window.addEventListener('load', adjustFontSize);
function initAsciiEffect(asciiArt) {
    const asciiArtContainer = document.getElementById('ascii-art-container');
    const chars = asciiArt.split('');
    const updateFrequency = 1;
    function getRandomIndex() {
        return Math.floor(Math.random() * chars.length);
    }
    function flipBit() {
        const index = getRandomIndex();
        const char = chars[index];
        if (char === '0') {
            chars[index] = '1';
        } else if (char === '1') {
            chars[index] = '0';
        } else if (char === '@') {
            chars[index] = '#';
        } else if (char === '#') {
            chars[index] = '@';
        }
        asciiArtContainer.innerText = chars.join('');
    }
    setInterval(flipBit, updateFrequency);
}
