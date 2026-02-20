// components/Section/Section.jsx
import { useRef } from 'react';

function Section({ title, children, id, className = "" }) {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <section 
            ref={sectionRef}
            id={id} 
            className={`
                relative
                border border-slate-700/30
                px-4 sm:pb-10 md:px-16 md:pt-8 mx-auto md:pb-16
                sm:w-full md:w-[90%] mb-8
                bg-slate-900/90
                bg-gradient-to-br from-gray-900/80 to-gray-800/80
                backdrop-blur-sm
                shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]
                scroll-mt-20 /* Отступ при скролле к якорю */
                ${className}
            `}
        >
            {/* Sticky заголовок */}
            <div 
                onClick={scrollToSection}
                className="
                    sticky top-0 z-20
                    py-4 -mx-4 px-4 md:-mx-16 md:px-16
                    bg-slate-900/95 backdrop-blur-md
                    border-b border-slate-700/30
                    cursor-pointer
                    group
                    transition-all duration-300
                    hover:bg-slate-800/95
                "
            >
                <div className="relative mx-auto w-max">
                    <h2 className="
                        text-center text-3xl sm:text-2xl 
                        md:text-4xl lg:text-3xl 
                        font-bold text-slate-100 
                        drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] 
                        tracking-tight
                        group-hover:text-purple-400
                        transition-colors duration-300
                    ">
                        {title}
                    </h2>
                    
                    {/* Декоративная линия под заголовком */}
                    <span className="
                        block w-[min(100px,50%)] mx-auto 
                        rounded-full h-1 mt-2 
                        bg-gradient-to-br from-slate-600 to-slate-100
                        group-hover:from-purple-500 group-hover:to-pink-500
                        transition-all duration-300
                    "/>

                    {/* Индикатор "нажмите чтобы вернуться" */}
                    <div className="
                        absolute -right-8 top-1/2 -translate-y-1/2
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                    ">
                        <svg 
                            className="w-5 h-5 text-purple-400 animate-bounce" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M5 10l7-7m0 0l7 7m-7-7v18" 
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Контент секции */}
            <div className="relative z-10 pt-8">
                <div className="
                    relative
                    text-slate-200 
                    [&>_p]:text-slate-300 
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