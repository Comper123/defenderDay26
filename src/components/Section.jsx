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
                before:absolute before:inset-0 
                before:bg-gradient-to-b before:from-white/5 before:to-transparent
                before:pointer-events-none
                after:absolute after:inset-0 
                after:bg-gradient-to-t after:from-slate-950/50 after:to-transparent
                after:pointer-events-none
                hover:border-slate-600/40
                transition-all duration-500
                ${className}
            `}
        >
            <div className="relative mx-auto z-10">
                {title && (
                    <div className="mb-8 md:mb-12">
                        <h2 className="relative inline-block text-start text-3xl md:text-4xl lg:text-3xl font-bold text-slate-100 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-tight">{title}</h2>
                    </div>
                )}
                
                <div className="
                    relative
                    text-slate-200
                    [&_p]:text-slate-300
                    [&_h3]:text-slate-100
                    [&_h3]:font-semibold
                    space-y-6
                ">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Section;