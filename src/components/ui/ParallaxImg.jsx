export default function ParallaxImage({ src, alt }) {
    return (
        <div className="
            relative
            w-full h-[60vh] md:h-screen
            overflow-hidden
            bg-slate-900
            z-2
        ">
            <img
                src={src}
                alt={alt}
                className="
                    absolute inset-0
                    w-full h-[100%]
                    object-cover object-center
                "
            />
            <div className="
                absolute inset-0
                bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900
            " />
        </div>
    );
}