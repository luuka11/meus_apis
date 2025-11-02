const musicContainer = document.getElementById('musicContainer');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

// Exemplo de músicas simuladas
const musicList = [
    { title: "Blinding Lights", artist: "The Weeknd", cover: "https://i.imgur.com/0rH4E2g.jpg" },
    { title: "Levitating", artist: "Dua Lipa", cover: "https://i.imgur.com/4YFjFzV.jpg" },
    { title: "Save Your Tears", artist: "The Weeknd", cover: "https://i.imgur.com/0rH4E2g.jpg" },
    { title: "Peaches", artist: "Justin Bieber", cover: "https://i.imgur.com/z9uOQm1.jpg" },
];

// Função para mostrar músicas
function displayMusics(list) {
    musicContainer.innerHTML = ""; // limpa
    list.forEach(music => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${music.cover}" alt="${music.title}">
            <h3>${music.title}</h3>
            <p>${music.artist}</p>
        `;
        musicContainer.appendChild(card);
    });
}

// Filtra músicas ao buscar
function searchMusic() {
    const term = searchInput.value.toLowerCase();
    const filtered = musicList.filter(m => m.title.toLowerCase().includes(term) || m.artist.toLowerCase().includes(term));
    displayMusics(filtered);
}

// Eventos
searchBtn.addEventListener('click', searchMusic);
searchInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') searchMusic();
});

// Mostra todas as músicas ao abrir
displayMusics(musicList);
