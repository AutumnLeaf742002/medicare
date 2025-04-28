export const Notification = () => {

    const totalNotifications = 3

    return (
        <div className="cursor-pointer relative">
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {
                    totalNotifications
                }
            </span>
            <span className="text-gray-500">
                <i className="bi bi-bell-fill"></i>
            </span>
        </div>
    )
}