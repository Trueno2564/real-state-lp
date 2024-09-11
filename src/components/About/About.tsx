import Image from "next/image";
import { Transition } from "../Transition";

export function About() {
    return (
        <Transition className="grid px-4 py-8 md:px-36 md:py-44 md:grid-cols-2 gap-5">
            <div className="flex flex-col items-center justify-center max-w-xl mb-7" id="about">
                <h4 className="text-secondary">Sobre Nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold">Mas de 1.000 viviendas para vender y comprar en Colombia</h2>
                <p className="mb-10 mt-7 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod assumenda, inventore quis rem nisi natus officiis commodi consectetur quas facere doloremque incidunt accusamus, eaque nostrum! Eos animi sunt ullam.</p>
                <button className="px-4 py-3 text-white transition-all duration-200 bg-secondary rounded-lg hover:bg-black">Cargar más</button>
            </div>
            <div className="flex items-center justify-center">
                <Image src='/assets/house.jpeg' alt="About" width={350} height={350} className="w-auto h-auto" priority/>

            </div>
        </Transition>
    )
}
