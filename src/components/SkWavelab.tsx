import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, List, Music, ChevronDown, Mic2 } from 'lucide-react';
import { songs } from '../data/songs';
import { useMusic } from '../contexts/MusicContext';

export default function SkWavelab() {
  const { 
    currentSong, 
    isPlaying, 
    progress, 
    duration, 
    currentTime, 
    volume, 
    isMuted, 
    togglePlay, 
    nextSong, 
    prevSong, 
    seek, 
    setVolume, 
    setIsMuted,
    playSong
  } = useMusic();

  const [showLyrics, setShowLyrics] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const formatTime = (time: number) => {
    if (!isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Artwork / Visualizer placeholder */}
        <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] overflow-hidden group">
          <motion.img 
            key={currentSong.id}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={currentSong.logo} 
            alt={currentSong.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-12 left-12 right-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={`info-${currentSong.id}`}
            >
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2 italic uppercase">
                {currentSong.title}
              </h3>
              <p className="text-xl text-purple-400 font-mono tracking-[0.2em]">
                {currentSong.artist}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right: Controls & Lyrics */}
        <div className="p-8 md:p-12 flex flex-col justify-between h-auto lg:h-full">
          <div className="flex justify-between items-start mb-8">
            <button 
              onClick={() => setShowPlaylist(!showPlaylist)}
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <List size={24} />
            </button>
            <button 
              onClick={() => setShowLyrics(!showLyrics)}
              className={`p-3 rounded-full transition-all ${showLyrics ? 'bg-purple-500 text-white' : 'bg-white/5 hover:bg-white/10'}`}
            >
              <Mic2 size={24} />
            </button>
          </div>

          <div className="flex-grow flex items-center justify-center py-12">
            <AnimatePresence mode="wait">
              {showLyrics ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full max-h-[400px] overflow-y-auto pr-4 scrollbar-hide text-center"
                >
                  <pre className="whitespace-pre-wrap font-sans text-xl leading-loose text-gray-300 font-medium">
                    {currentSong.lyrics}
                  </pre>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center">
                   <div className="w-16 h-16 border-2 border-purple-500 rounded-full flex items-center justify-center animate-pulse mb-4">
                      <Music className="text-purple-500" size={32} />
                   </div>
                   <p className="text-white/20 uppercase tracking-[1em] text-xs">Audio Visualizer Active</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-8">
            {/* Progress */}
            <div className="space-y-3">
              <div className="relative h-1.5 w-full bg-white/10 rounded-full">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-indigo-400 rounded-full"
                  style={{ width: `${progress}%` }}
                />
                <input 
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => seek(parseFloat(e.target.value))}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <div className="flex justify-between font-mono text-xs text-gray-500">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Main Controls */}
            <div className="flex items-center justify-center gap-10">
              <button onClick={prevSong} className="text-gray-400 hover:text-white transition-colors">
                <SkipBack size={36} />
              </button>
              <button 
                onClick={togglePlay}
                className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                {isPlaying ? <Pause size={40} /> : <Play size={40} className="ml-1" />}
              </button>
              <button onClick={nextSong} className="text-gray-400 hover:text-white transition-colors">
                <SkipForward size={36} />
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-6 pt-4">
              <button onClick={() => setIsMuted(!isMuted)}>
                {isMuted || volume === 0 ? <VolumeX size={20} className="text-red-500" /> : <Volume2 size={20} className="text-gray-400" />}
              </button>
              <div className="flex-grow h-1 bg-white/10 rounded-full relative">
                <div className="absolute top-0 left-0 h-full bg-white/40 rounded-full" style={{ width: `${volume * 100}%` }} />
                <input 
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Playlist Overlay */}
      <AnimatePresence>
        {showPlaylist && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-50 bg-black/95 backdrop-blur-3xl overflow-y-auto p-8 md:p-16"
          >
            <div className="flex justify-between items-center mb-12">
               <h2 className="text-4xl font-black text-white italic tracking-tighter">THE CATALOG</h2>
               <button onClick={() => setShowPlaylist(false)} className="p-4 rounded-full bg-white/5">
                 <ChevronDown size={32} />
               </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {songs.map((song, idx) => (
                <button
                  key={song.id}
                  onClick={() => {
                    playSong(idx);
                    setShowPlaylist(false);
                  }}
                  className={`flex items-center gap-6 p-6 rounded-2xl transition-all border ${currentSong.id === song.id ? 'bg-white/10 border-purple-500/50 shadow-2xl' : 'bg-white/5 border-transparent hover:bg-white/10'}`}
                >
                  <img src={song.logo} alt="" className="w-20 h-20 rounded-lg object-cover" referrerPolicy="no-referrer" />
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white break-words">{song.title}</p>
                    <p className="text-purple-400 font-mono text-sm tracking-widest">{song.artist}</p>
                  </div>
                  {currentSong.id === song.id && isPlaying && (
                    <div className="ml-auto flex gap-1 h-8 items-end">
                      {[1, 2, 3].map(i => (
                        <motion.div 
                          key={i}
                          animate={{ height: [4, 24, 12, 24, 4] }}
                          transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                          className="w-1 bg-purple-500"
                        />
                      ))}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
