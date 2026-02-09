import { useEffect, useState } from "react";

type Track = {
  id: number;
  title: string;
  artist: string;
};

export default function App() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    setTracks([
      { id: 1, title: "Blinding Lights", artist: "The Weeknd" },
      { id: 2, title: "Levitating", artist: "Dua Lipa" },
      { id: 3, title: "As It Was", artist: "Harry Styles" },
    ]);
  }, []);

  return (
    <div style={{ background: "#121212", minHeight: "100vh", color: "#fff", padding: 20 }}>
      <h1>🎵 Spotify Clone</h1>

      <ul>
        {tracks.map(track => (
          <li key={track.id} style={{ margin: "10px 0" }}>
            <strong>{track.title}</strong> — {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}
