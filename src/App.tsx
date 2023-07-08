import "./App.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect, useRef } from "react";
import { VscGithub } from "react-icons/vsc";
import { BsPlayCircle } from "react-icons/bs";
import rupucu from "./assets/rupucu.png";
import audioFile from "./assets/audio.mp3";
import Confetti from "react-confetti";

function App() {
  const [age, setAge] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(true);
  const [height, setHeight] = useState<number | null>(null);
  const [width, setWidth] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    const audio = audioRef.current;

    if (audio instanceof HTMLAudioElement) {
      if (!isPlaying) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  const confetiRef = useRef({});

  const getAge = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let isAfterBirthday =
      currentDate.getMonth() > 6 ||
      (currentDate.getMonth() === 6 && currentDate.getDate() >= 8);

    let year = isAfterBirthday ? currentYear : currentYear - 1;
    const age = year - 1997;
    setAge(age);
    console.log(isAfterBirthday);
  };

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);

    getAge();
  }, []);

  return (
    <div className="" ref={confetiRef}>
      {toggle ? (
        <div className="modal">
          <h1>Open For An Epic Surprise</h1>
          <button type="button" onClick={() => setToggle(!toggle)}>
            🎈✨🎉
          </button>

          <Confetti numberOfPieces={7} width={width} height={height} />
        </div>
      ) : (
        <div className="confetti-wrap">
          {/* color-change-5x */}
          <div className="banner" />
          <h1>HAPPY BIRTHDAY</h1>
          <h2 className="gradient-text">RUPUCU</h2>

          <div className="lottie-container">
            <Player
              src="https://assets10.lottiefiles.com/packages/lf20_qJMzk9Ka5U.json"
              className="lottie-item"
              loop
              autoplay
            />
          </div>

          <div className="card">
            <div className="image-container">
              <img src={rupucu} alt="rupucucucu" />
              <div
                className={`play-button ${isPlaying ? "playing" : ""}`}
                onClick={handlePlay}
              >
                <BsPlayCircle />
              </div>
            </div>
            <audio ref={audioRef} src={audioFile} />
          </div>

          <h3>Disfruta Los {age} Bro</h3>

          <Confetti numberOfPieces={150} width={width} height={height} />
          <div>
            <a href="https://github.com/treee97/rupucu" target="_blank">
              <VscGithub size={48} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
