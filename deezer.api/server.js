const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = 3002;

const musicas = [
  { id: 1, titulo: "Blinding Lights", artista: "The Weeknd", genero: "Pop", duracao: "3:20" },
  { id: 2, titulo: "Lose Yourself", artista: "Eminem", genero: "Rap", duracao: "5:26" },
  { id: 3, titulo: "Levitating", artista: "Dua Lipa", genero: "Pop", duracao: "3:24" }
];

const playlists = [
  { id: 1, nome: "Pop Hits 2025", descricao: "As músicas pop mais tocadas.", musicas: [1, 3] },
  { id: 2, nome: "Rap Old School", descricao: "Clássicos do rap que marcaram época.", musicas: [2] }
];

app.get("/", (req, res) => res.send("🎶 API Deezer simulada está online!"));

app.get("/musicas", (req, res) => res.json(musicas));

app.get("/musicas/:id", (req, res) => {
  const musica = musicas.find(m => m.id == req.params.id);
  if (musica) res.json(musica);
  else res.status(404).json({ erro: "Música não encontrada" });
});

app.get("/playlists", (req, res) => res.json(playlists));

app.get("/playlists/:id", (req, res) => {
  const playlist = playlists.find(p => p.id == req.params.id);
  if (!playlist) return res.status(404).json({ erro: "Playlist não encontrada" });

  const musicasDaPlaylist = playlist.musicas.map(id => musicas.find(m => m.id == id));
  res.json({ ...playlist, musicas: musicasDaPlaylist });
});

app.listen(PORT, () => console.log(`🎵 Deezer API rodando na porta ${PORT}`));
