import { useState } from "react";

export default function PupilCard({
    pupil,
    className
}){
    const [isHovered, setIsHovered] = useState(false);
     return (
        <div className={`${className} transition-all duration-300 overflow-hidden relative aspect-square cursor-pointer`}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            {/* Аватар */}
            <div className="relative w-full h-full">
                <img src={pupil.img || '/pupils/default.png'} alt={pupil.name} className="w-full aspect-square object-cover absolute z-1"/>
                <span className={`${
                    isHovered ? 'opacity-100' : 'opacity-0'
                } bg-black/40 absolute z-3 w-full h-full top-0 left-0 right-0 bottom-0 duration-300`}></span>
            </div>

            {/* Информация */}
            <div className={`${isHovered ? '-translate-y-[100%]' : 'translate-y-0'} duration-300 py-3 px-5`}>
                <h3 className="text-white text-wrap mb-1 text-xl font-bold">{pupil.lastName} {pupil.firstName}</h3>
                <p className="text-sm text-slate-400 inline gap-1">
                    <span className="text-amber-500">💡</span>
                    {pupil.fact}
                </p>
            </div>
        </div>
    );
}