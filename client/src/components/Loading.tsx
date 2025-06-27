export const Loading = ({ loading }) => {
    return (
        <div
            className={`fixed inset-0 w-full h-full bg-white/70 flex items-center justify-center z-[9999] transition-opacity duration-300 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <span className="loading loading-spinner text-secondary text-4xl"></span>
        </div>
    )
}