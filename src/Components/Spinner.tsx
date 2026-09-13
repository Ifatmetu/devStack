const Spinner = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-24">

            <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin" />

            <p className="text-xs text-gray-400 mt-4">
                Loading technologies...
            </p>

        </div>
    )
}

export default Spinner