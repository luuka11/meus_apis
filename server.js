const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = 3001;

const noticias = [
  { id: 1, titulo: "Tecnologia brasileira se destaca no exterior", categoria: "Tecnologia", conteudo: "Startups nacionais estão atraindo investidores internacionais." },
  { id: 2, titulo: "Clássico do futebol termina empatado", categoria: "Esportes", conteudo: "O grande jogo da rodada acabou em 1x1, com emoção até o fim." },
  { id: 3, titulo: "Frente fria chegando ao país", categoria: "Clima", conteudo: "Meteorologistas alertam para queda de temperatura e chuvas." }
];

app.get("/", (req, res) => res.send("📰 API UOL simulada está online!"));

app.get("/noticias", (req, res) => res.json(noticias));

app.get("/noticias/:id", (req, res) => {
  const noticia = noticias.find(n => n.id == req.params.id);
  if (noticia) res.json(noticia);
  else res.status(404).json({ erro: "Notícia não encontrada" });
});

app.listen(PORT, () => console.log(`🗞️ UOL API rodando na porta ${PORT}`));
