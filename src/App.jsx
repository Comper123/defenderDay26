import "./App.css";
import Section from "./components/Section";
import ParallaxImage from "./components/ui/ParallaxImg";
import { Teacher, galery, pupilsData } from "./data/mockData";
import PupilCard from "./components/PupilCard";
import { Speech } from "lucide-react";
import Slider from "./components/Slider";

function App() {

  return (
    <div>
      <div className="w-100 h-100 fixed top-0 left-0 right-0 bottom-0">
        {/* <ParallaxImage src={"/class.jpg"}></ParallaxImage> */}
        <img
                src={"/class.jpg"}
                className="
                    absolute inset-0
                    w-full h-[100%]
                    object-cover object-center
                "
            />
        <div className="absolute z-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center flex-col justify-center">
          <h1 className="text-white text-[min(200px,20vw)] leading-none mb-4 font-extrabold drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] [text-shadow:0_0_20px_rgba(255,255,255,0.3)] animate-fade-in-up">
            11 Т
          </h1>
          <h1 className="text-white text-[min(80px,8vw)] text-nowrap font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] [text-shadow:0_0_15px_rgba(168,85,247,0.5)] animate-fade-in-up animation-delay-200">
            Лучший класс Родной 36
          </h1>
          <p className="text-white/80 text-xl mt-8 tracking-[0.2em] uppercase animate-fade-in-up animation-delay-400">
            Выпуск 2026
          </p>
          <div className="absolute bottom-10 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
        </div>
      </div>
      <div className="mt-[100vh]">
        <Section title="Наши ученики">
          <div className="grid sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-8">
            {pupilsData.map((pupil) => (
              <PupilCard
                pupil={pupil}
              ></PupilCard>
            ))}
          </div>
        </Section>
        <Section title="Наша королева">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Фото */}
            <div className="md:col-span-1 h-full">
              <img 
                src="/nataly.png" 
                alt="Учитель" 
                className="w-full rounded-xl"
              />
            </div>
            
            {/* Информация */}
            <div className="md:col-span-2 h-full">
              <h2 className="text-3xl font-bold mb-2">
                {Teacher.lastName} {Teacher.firstName} {Teacher.fatherName}
              </h2>
              <p className="text-purple-600 mb-4">Классный руководитель</p>
              <p className="text-gray-500">
                {Teacher.description}
              </p>
              <div className="flex flex-wrap justify-center mt-10 gap-6">
                {Teacher.opinions.map((opinion) => (
                  <div className="border-2 rounded-lg border-gray-600 py-4 px-6 w-[45%] hover:-translate-y-1 duration-300 cursor-pointer hover:border-purple-600">
                    <h4 className="text-lg mb-1 font-semibold">{opinion.autor}</h4>
                    <p className="text-gray-400 text-sm">
                      <Speech className="h-5 w-5 inline my-auto mr-1"/>
                      <span className="inline">{opinion.text}</span>  
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section title="Галерея" className="mb-20 pb-20">
          <Slider autoPlay={true} interval={8000}>
            {galery.map((image, index) => (
              <img 
                key={index}
                src={image.img} 
                alt={`Фото ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            ))}
          </Slider>
        </Section>
      </div>
    </div>
  );
}

export default App;
