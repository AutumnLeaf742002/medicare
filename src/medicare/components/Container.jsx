export const Container = ({ children, className="" }) => {
    return (
        <div className={`mt-5 mx-auto w-full min-w-64 max-w-5xl nextAppointment rounded-lg p-4 bg-white ${className}`}>
            {children}
        </div>
    )
}