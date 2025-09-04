import React from 'react';
import images from '../../../public/images/index'; // Asegúrate de que esté bien importado

export default function Hero() {
    return (
        <section className="px-8 py-12 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                
                {/* Logo con fondo oscuro */}
                <div className="bg-gray-900 p-5 rounded-lg shadow-md w-[240px]">
                    <img 
                        src={images.spaceEyes} 
                        alt="Space Eyes Logo" 
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

        </section>
    );
}
