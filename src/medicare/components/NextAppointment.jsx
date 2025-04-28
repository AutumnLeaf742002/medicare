export const NextAppointment = ({ time = "no time", name = "no name", description = "no description", type }) => {

    let style = ""

    switch (type) {
        case "success":
            style = "border-[var(--success-color)]"
            break
        case "danger":
            style = "border-[var(--danger-color)]"
            break
        case "warning":
            style = "border-[var(--warning-color)]"
            break
    }

    return (
        <div className={`flex nextAppointment rounded-lg h-20.5 border-l-4 hover:translate-x-1.5 transition-all relative group ${style}`}>
            <div className="w-full flex items-center">
                <span className="flex items-center gap-2 h-7 px-4 border-r border-gray-300">
                    <h1 className="font-bold">
                        {time}
                    </h1>
                    <p className="text-xs text-gray-400">
                        Hoy
                    </p>
                </span>
                <span className="flex gap-1 justify-center flex-col h-full px-4">
                    <h1 className="text-base font-bold text-gray-700">
                        {name}
                    </h1>
                    <p className="text-base text-gray-400">
                        {description}
                    </p>
                </span>

                <span className="transition-all cursor-pointer group-hover:block hidden absolute right-3 top-1/2 -translate-y-1/2">
                    <i className="bi bi-three-dots-vertical"></i>
                </span>
            </div>
        </div>
    )
}