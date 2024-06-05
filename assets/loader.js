// keep the main html clean by loading in ascii art from file
function asciiLoader() {
    fetch('assets/ascii.txt')
        .then(response => response.text())
        .then(data => {
            const asciiArtContainer = document.getElementById('ascii-art-container');
            asciiArtContainer.innerText = data;
            initAsciiEffect(data);
        }); }
// because different screen sizes require different positioning and font size, we adjust it dynamically
function adjustFontSize() {
    const asciiArtContainer = document.getElementById('ascii-art-container');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const baseFontSize = Math.min(windowWidth, windowHeight) / 145;
    asciiArtContainer.style.fontSize = `${baseFontSize}px`;
    asciiArtContainer.style.top = `${windowHeight / 2}px`;
    asciiArtContainer.style.left = `${windowWidth / 2}px`;
    asciiArtContainer.style.transform = 'translate(-50%, -50%)'; }
// if you are wondering why this function exists,
// i wanted to play with js, and it should show that everything will deteriorate eventually
// and nothing is permament, so enjoy it while it lasts.
function initAsciiEffect(asciiArt) {
    const asciiArtContainer = document.getElementById('ascii-art-container');
    const chars = asciiArt.split('');
    const updateFrequency = 0;
    function getRandomIndex() {
        return Math.floor(Math.random() * chars.length);
    }
    function flipBit() {
        const index = getRandomIndex();
        const char = chars[index];
        if (char === '@') {
            chars[index] = '#';
        } else if (char === '#') {
            chars[index] = '@';
        } else if (char === '*') {
            chars[index] = '-';
        }
        asciiArtContainer.innerText = chars.join('');
    }
    setInterval(flipBit, updateFrequency); }
// i require a function that greets beings of unknown heritage
function greetBeingOfUnknownHeritage() {
    console.log(`

    　　　　　  ___
    　　　　 ／イ   フ  
    　　　　|  _  _|  
    　 　 / ミ__xノ
    　   /　　 　 |        
    　　 /　 ヽ　　ﾉ         
       │　  | | |　　 　 
    ／￣|　　| | |　　 
    | (￣ヽ_ヽ_)_)　
    ＼二つ　　　　　　
    
    `);
    console.log("hello there, have fun"); }
window.addEventListener('resize', adjustFontSize);
window.addEventListener('load', adjustFontSize);
window.addEventListener('load', asciiLoader);
window.addEventListener('load', greetBeingOfUnknownHeritage);
// meow