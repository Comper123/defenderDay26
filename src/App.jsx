import "./App.css";
import Section from "./components/Section";
import { Teacher, galery, pupilsData } from "./data/mockData";
import PupilCard from "./components/PupilCard";
import { Speech } from "lucide-react";
import Slider from "./components/Slider";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import { Analytics } from "@vercel/analytics/react"


function App() {
    const [activeSection, setActiveSection] = useState('');
    const [activePupil, setActivePupil] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
      setIsModalOpen(false);
    }

    const openModal = (pupil) => {
      setActivePupil(pupil);
      setIsModalOpen(true);
    }

    // Отслеживание активной секции
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <Analytics />
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div>
              <img src={activePupil.img} alt="" className="aspect-square object-cover" />
              <h2 className="text-white text-2xl font-bold mt-4">{activePupil.lastName} {activePupil.firstName}</h2>
              <p>{activePupil.fact}</p>
            </div>
          </Modal>
            {/* Hero секция (остается без изменений) */}
            <div className="w-100 h-100 fixed top-0 left-0 right-0 bottom-0">
                <img
                    src={"/11t.png"}
                    className="
                        absolute inset-0
                        w-full h-[100%]
                        object-cover object-center
                    "
                />
                <div className="absolute z-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center flex-col sm:justify-start sm:mt-20 md:justify-center md:mt-0 h-full">
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

            {/* Основной контент */}
            <div className="mt-[100vh]">
                <Section title="Наши ученики" id="students">
                    <div className="grid sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-8">
                        {pupilsData.map((pupil) => (
                            <PupilCard pupil={pupil} openModal={openModal}/>
                        ))}
                    </div>
                </Section>

                <Section title="Наша королева" id="teacher">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-1 h-full">
                            <img 
                                src="/nataly.png" 
                                alt="Учитель" 
                                className="sm:mx-auto sm:w-2/3 md:w-full rounded-xl"
                            />
                        </div>
                        
                        <div className="md:col-span-2 h-full">
                            <h2 className="text-3xl font-bold mb-2">
                                {Teacher.lastName} {Teacher.firstName} {Teacher.fatherName}
                            </h2>
                            <p className="text-purple-600 mb-4">Классный руководитель</p>
                            <p className="text-gray-500">
                                {Teacher.description}
                            </p>
                            <div className="flex sm:flex-col md:flex-row flex-wrap justify-center mt-10 gap-6">
                                {Teacher.opinions.map((opinion, index) => (
                                    <div 
                                        key={index}
                                        className="
                                        sm:w-full
                                        md:w-[45%] 
                                            border-2 rounded-lg border-gray-600 
                                            py-4 px-6 
                                            hover:-translate-y-1 duration-300 
                                            cursor-pointer hover:border-purple-600
                                        "
                                    >
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

                <Section title="Галерея" id="gallery" className="mb-20 pb-20">
                    <Slider autoPlay={true} interval={8000}>
                        {galery.map((image, index) => (
                            <img 
                                key={index}
                                src={image.img} 
                                alt={`Фото ${index + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                                loading="lazy"
                                decoding="async"
                            />
                        ))}
                    </Slider>
                </Section>
            </div>

            {/* Мини-навигация (активная секция подсвечивается) */}
            {/* <div className="
                fixed right-8 top-1/2 -translate-y-1/2 z-50
                flex flex-col gap-4
            ">
                {['students', 'teacher', 'gallery'].map((id) => (
                    <button
                        key={id}
                        onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                        className={`
                            w-3 h-3 rounded-full
                            transition-all duration-300
                            ${activeSection === id 
                                ? 'bg-purple-500 scale-150' 
                                : 'bg-slate-600 hover:bg-slate-400'
                            }
                        `}
                        title={id === 'students' ? 'Ученики' : id === 'teacher' ? 'Учитель' : 'Галерея'}
                    />
                ))}
            </div> */}
        </div>
    );
}

export default App;