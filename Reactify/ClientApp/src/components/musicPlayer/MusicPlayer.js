import axios from "axios";
import React, { useEffect, useState } from 'react';
import './MusicPlayer.css';
import Player from './Player.js';


const MusicPlayer = (detail) => {
    const [songs, setSongs] = useState({});

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
    
    const [isAlbumReady, setIsAlbumReady] = useState(false);

    useEffect(() => {
        // console.log(location.state.detail)
        axios
            .get(`player?albumId=${7049462}`) // location.state.detail
            //.get(`player`)
            //7049462
            .then(
                res => {
                    setSongs(res.data);
                    setIsAlbumReady(true);
                })
    }, []);


    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        })
    }, [currentSongIndex, songs.length]);

    return (
        <div className="MusicPlayer" data-testid="music-player">
            {isAlbumReady ?
                <Player
                    currentSongIndex={currentSongIndex}
                    setCurrentSongIndex={setCurrentSongIndex}
                    nextSongIndex={nextSongIndex}
                    songs={songs}
                />
                :
                <div>:(</div>
            }
        </div>
    );
}

export default MusicPlayer;