

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];

var newElement = document.createElement('a');
newElement.setAttribute('href', addresses[index]);
newElement.textContent = `click here for ' ${addresses[index]}`;