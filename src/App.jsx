import { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import ParallaxImage from "./components/ui/ParallaxImg";
import { pupilsData } from "./data/mockData";
import PupilCard from "./components/PupilCard";

function App() {
  const [pupils, setPupils] = useState(pupilsData);

  return (
    <div>
      <div className="w-100 h-100 fixed top-0 left-0 right-0 bottom-0">
        <ParallaxImage src={"/class.jpg"}></ParallaxImage>
        <div className="absolute z-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center flex-col justify-center">
          <h1 className="text-white text-[min(200px,20vw)] leading-none mb-4 font-extrabold drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] [text-shadow:0_0_20px_rgba(255,255,255,0.3)] animate-fade-in-up">
            11 Т
          </h1>
          <h1 className="text-white text-[min(80px,8vw)] font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] [text-shadow:0_0_15px_rgba(168,85,247,0.5)] animate-fade-in-up animation-delay-200">
            Самый лучший
          </h1>
          <p className="text-white/80 text-xl mt-8 tracking-[0.2em] uppercase animate-fade-in-up animation-delay-400">
            Выпуск 2026
          </p>
          <div className="absolute bottom-10 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
        </div>
      </div>
      <div className="mt-[100vh]">
        <Section title="Наши ученики">
          <div className="grid grid-cols-4 gap-8">
            {pupils.map((pupil) => (
              <PupilCard
                pupil={pupil}
                className="group"
              ></PupilCard>
            ))}
          </div>
        </Section>
        <Section title="Наша королева" className=""></Section>
        <Section title="Галерея" className=""></Section>
      </div>
    </div>
  );
}

export default App;
