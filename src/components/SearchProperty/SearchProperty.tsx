import { useState } from "react";
import { GrFormDown, GrHome, GrFormUp } from "react-icons/gr";

export function SearchProperty() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative md-2 md:mb-0 flex items-center gap-4 border-[1px] border-secondary rounded-lg px-3 py-2 justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <GrHome/>
            <div>
                <p>Propiedad</p>
                <p className='text-xs'>Seleciona el tipo de propiedad</p>
            </div>
            {isOpen? (<GrFormUp/>):(<GrFormDown/>)}
            {isOpen && (
                <div className='absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-xl w-[230px] left-0'>
                    <p>Casa</p>
                    <p>Apartamento</p>
                    <p>Aparta Estudio</p>
                    <p>Local</p>

                </div>
            )}
        </div>
    )
}