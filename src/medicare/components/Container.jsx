export const Container = ({ children, className="" }) => {
    return (
        <div className={`mt-5 w-full min-w-64 nextAppointment rounded-lg p-4 bg-white ${className}`}>
            {children}
        </div>
    )
}