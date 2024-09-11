import Image from "next/image";

export function Form() {
    return (
        <div className="px-3">
            <div className="py-4 px-3 rounded-lg shadow-light">
                <div className="flex gap-4">
                    <Image src='/assets/comercial.png' alt="Form" width={50} height={50} className="border-2 rounded-full border-secondary"/>
                    <div>
                        <p>Alberto Soler</p>
                        <p className="text-secondary font-semibold">Comercial</p>
                    </div>
                </div>
                <div className="my-5">
                    <div>
                        <label className="text-sm text-secondary">Nombre</label>
                        <div className="mt-2 ">
                            <input 
                                type="text" 
                                name="name" 
                                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm" />
                        </div>
                        <label className="text-sm text-secondary">Telefono</label>
                        <div className="mt-2 " >
                            <input 
                                id="phone"
                                type="phone" 
                                name="phone" 
                                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm" />
                        </div>
                        <label className="text-sm text-secondary">Descripcion</label>
                        <div className="mt-2 ">
                            <textarea 
                                name="description"
                                rows={3}
                                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm" />
                        </div>
                        <div className="flex gap-5 my-4">
                            <button className="bg-secondary px-2 py-2 rounded-lg text-white text-sm">Enviar Mensaje</button>
                            <button className="border-[1px] border-secondary text-secondary px-2 py-2 rounded-lg text-sm">Llamar</button>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}
