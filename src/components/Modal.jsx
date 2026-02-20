// components/SimpleModal.jsx
function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Затемнение фона */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Контент модалки */}
            <div 
                className="relative bg-slate-900 rounded-xl p-6 max-w-lg w-full mx-4 border border-slate-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Заголовок с крестиком */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <button 
                        onClick={onClose}
                        className="text-slate-400 hover:text-white text-2xl"
                    >
                        ×
                    </button>
                </div>
                
                {/* Контент */}
                <div className="text-slate-300">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;