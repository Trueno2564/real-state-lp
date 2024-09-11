import { useState } from 'react'
import { GrFormDown, GrLocation, GrFormUp } from 'react-icons/gr'

export function SearchLocation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative md-2 md:mb-0 flex items-center gap-4 border-[1px] border-secondary rounded-lg px-3 py-2 justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <GrLocation/>
            <div>
                <p>Localizacion</p>
                <p className='text-xs'>Seleciona tu localizacion</p>
            </div>
            {isOpen? (<GrFormUp/>):(<GrFormDown/>)}
            {isOpen && (
                <div className='absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-xl w-[230px] left-0'>
                    <p>Ipiales</p>
                    <p>Pasto</p>
                    <p>Cali</p>
                    <p>Bogota</p>
                    <p>Medellin</p>

                </div>
            )}
        </div>
    )
}
