const corsProxy = 'https://api.allorigins.win/get?url=';

async function fetchJson(url) {
    const response = await fetch(`${corsProxy}${encodeURIComponent(url)}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return JSON.parse(data.contents);
}

async function getLatestComicNumber() {
    const url = 'https://xkcd.com/info.0.json';
    console.log('Fetching latest comic number from URL:', url);
    const data = await fetchJson(url);
    return data.num;
}

function getRandomComicNumber(latestComicNumber) {
    return Math.floor(Math.random() * latestComicNumber) + 1;
}

async function getComicDetails(comicNumber) {
    const url = `https://xkcd.com/${comicNumber}/info.0.json`;
    console.log('Fetching comic details from URL:', url);
    const data = await fetchJson(url);
    return data;
}

function updateComicOnPage(comic) {
    const comicContainer = document.getElementById('comic-container');
    comicContainer.innerHTML = `
        <h2>${comic.title}</h2>
        <img src="${comic.img}" title="${comic.alt}" alt="${comic.title}">
        <p>${comic.alt}</p>
    `;
}

async function displayRandomComic() {
    try {
        const latestComicNumber = await getLatestComicNumber();
        const randomComicNumber = getRandomComicNumber(latestComicNumber);
        const comic = await getComicDetails(randomComicNumber);
        updateComicOnPage(comic);
    } catch (error) {
        console.error('Error fetching comic:', error);
    }
}

document.addEventListener('DOMContentLoaded', displayRandomComic);