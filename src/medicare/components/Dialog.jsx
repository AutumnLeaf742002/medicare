import { useEffect } from "react"

import { Title } from "./Title"
import { Button } from "./Button"

export const Dialog = ({ children, className, title = "no title", ref, callback = ()=>{} }) => {

    const onClose = () => {
        ref.current.close()
    }

    return (
        <dialog ref={ref} className={`${className} outline-none w-xl top-1/2 left-1/2 -translate-1/2 rounded-md backdrop:bg-black/50 animate__animated animate__slideInDown animate__faster`}>
            <div className="flex flex-col min-h-96 max-h-[90vh]">
                <header className="w-full p-4 h-20 flex items-center justify-between border-b border-[var(--border-color)]">
                    <Title>
                        {title}
                    </Title>
                    <span onClick={onClose}>
                        <i className="bi bi-x-circle-fill text-lg text-[var(--secondary-color)] cursor-pointer hover:scale-110 transition-all"></i>
                    </span>
                </header>

                <div className="flex-1 p-4">
                    {children}
                </div>

                <div className="w-full h-16 flex gap-4 items-center justify-end border-t border-[var(--border-color)] p-4">
                    <Button className="bg-[var(--danger-color)]"
                        callback={onClose}>
                        Cancelar
                    </Button>
                    <Button className="bg-[var(--secondary-color)] h-6"
                        callback={callback}
                    >
                        Aceptar
                    </Button>
                </div>
            </div>
        </dialog>
    )
}