export default function PupilCard({
    pupil,
    className
}){
     return (
        <div className={`
            ${className}
            bg-slate-800/30 backdrop-blur-sm
            border border-slate-700/30
            rounded-xl p-3
            hover:bg-slate-800/60
            hover:border-purple-500/50
            transition-all duration-300
            flex flex-col items-center gap-3
            cursor-pointer
        `}>
            {/* Аватар */}
            <div className="relative w-full">
                <img src={'/pupils/default.png'} alt={pupil.name} className="w-full aspect-square object-cover rounded-lg"/>
            </div>

            {/* Информация */}
            <div className="">
                <h3 className="text-base font-semibold text-white text-wrap mb-1">{pupil.name}</h3>
                <p className="text-xs text-slate-400 inline gap-1">
                    <span className="text-amber-500">💡</span>
                    {pupil.fact}
                </p>
            </div>
        </div>
    );
}