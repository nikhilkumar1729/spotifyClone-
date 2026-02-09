import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

type Track = {
  id: number;
  title: string;
  artist: string;
  duration: string;
  url?: string;
};

const tracks: Track[] = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
  { id: 2, title: "Levitating", artist: "Dua Lipa", duration: "3:23" },
  { id: 3, title: "As It Was", artist: "Harry Styles", duration: "2:47" }
];

// Health
app.get("/", (_, res) => {
  res.json({ status: "Spotify Clone API running" });
});

// Get all tracks
app.get("/tracks", (_, res) => {
  res.json(tracks);
});

// Get track by ID
app.get("/tracks/:id", (req, res) => {
  const track = tracks.find(t => t.id === Number(req.params.id));
  if (!track) return res.status(404).json({ error: "Not found" });
  res.json(track);
});

// Fake login
app.post("/login", (req, res) => {
  const { username } = req.body;
  res.json({
    token: "fake-jwt-token",
    user: { username }
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
