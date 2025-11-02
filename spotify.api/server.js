const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = 3000;

const artistas = [
  { id: 1, nome: "The Weeknd", albuns: ["After Hours", "Starboy", "Dawn FM"] },
  { id: 2, nome: "Billie Eilish", albuns: ["Happier Than Ever", "When We All Fall Asleep"] },
  { id: 3, nome: "Travis Scott", albuns: ["Utopia", "Astroworld"] }
];

app.get("/", (req, res) => res.send("🎧 API Spotify simulada está online!"));

app.get("/artistas", (req, res) => res.json(artistas));

app.get("/artistas/:id", (req, res) => {
  const artista = artistas.find(a => a.id == req.params.id);
  if (artista) res.json(artista);
  else res.status(404).json({ erro: "Artista não encontrado" });
});

app.listen(PORT, () => console.log(`🎵 Spotify API rodando na porta ${PORT}`));
