// components/Section/Section.jsx
function Section({ title, children, id, className = "" }) {

    return (
        <section 
            id={id} 
            className={`
                relative
                border border-slate-700/30
                px-4 md:px-16 md:pt-8 mx-auto md:pb-16
                w-[90%]
                bg-slate-900/90
                bg-gradient-to-br from-gray-900/80 to-gray-800/80
                backdrop-blur-sm
                shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]
                ${className}
            `}
        >
            <div className="relative mx-auto z-10">
                {title && (
                    <div className="mb-8 md:mb-12 w-max mx-auto sticky">
                        <h2 className="relative text-center text-3xl sm:mt-4 mx-auto sm:text-2xl md:text-4xl lg:text-3xl font-bold text-slate-100 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-tight">{title}</h2>
                        <span className="block w-[min(100px,50%)] mx-auto rounded-full h-1 mt-2 bg-gradient-to-br from-slate-600 to-slate-100"></span>
                        
                    </div>
                )}
                
                <div className="relative text-slate-200 [&>_p]:text-slate-300 [&_h3]:text-slate-100 [&_h3]:font-semibold space-y-6">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Section;