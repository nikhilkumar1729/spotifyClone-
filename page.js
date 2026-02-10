"use client";

import { useState } from "react";
import SongCard from "@/components/SongCard";
import Player from "@/components/Player";

const songs = [
  {
    id: 1,
    title: "Sample Song",
    artist: "Unknown Artist",
    src: "/music/sample.mp3",
  },
];

export default function Home() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <main style={{ padding: 20 }}>
      <h1>🎵 Spotify Clone</h1>

      {songs.map((song) => (
        <SongCard
          key={song.id}
          song={song}
          onPlay={() => setCurrentSong(song)}
        />
      ))}

      {currentSong && <Player song={currentSong} />}
    </main>
  );
}
