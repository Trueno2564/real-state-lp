import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative md-2 md:mb-0 flex items-center gap-4 border-[1px] border-secondary rounded-lg px-3 py-2 justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <GrTag/>
            <div>
                <p>Rango de precios</p>
                <p className='text-xs'>Seleciona tu rango de precios</p>
            </div>
            {isOpen? (<GrFormUp/>):(<GrFormDown/>)}
            {isOpen && (
                <div className='absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-xl w-[230px] left-0'>
                    <p>Cualquier rango</p>
                    <p>500.000 - 800.000</p>
                    <p>800.000 - 1.000.000</p>
                    <p>1.000.000 - 1.500.000</p>
                    <p>1.500.000 - 2.000.000</p>

                </div>
            )}
        </div>
    )
}
