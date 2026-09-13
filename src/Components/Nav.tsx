import logo from '../assets/logo-text.png'
import humburger from '../assets/hamburger.png'

const Nav = () => {
    return (
        <nav className="w-full h-16 bg-white text-black font-mono border-b border-gray-100 sticky top-0 z-50 w-full h-16">

            <div className="flex sm:hidden items-center w-full h-full px-3">

                <div className="w-8 flex-shrink-0">
                    <img
                        src={humburger}
                        alt="Menu"
                        className="w-5 h-5"
                    />
                </div>

                <div className="flex-1 flex justify-center min-w-0">
                    <img
                        src={logo}
                        alt="Dev Stack"
                        className="w-20"
                    />
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">

                    <span className="text-[10px] whitespace-nowrap">
                        Sign In
                    </span>

                    <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-1.5 px-2 rounded-3xl text-[10px] whitespace-nowrap">
                        Sign Up
                    </button>

                </div>

            </div>


            <div className="hidden sm:flex justify-between items-center max-w-7xl mx-auto px-4 h-full">

                <img
                    src={logo}
                    alt="Dev Stack"
                    className="w-28"
                />

                <ul className="flex items-center gap-4">
                    <li className="text-pink-700">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <ul className="flex items-center gap-4">
                    <li>Sign In</li>

                    <li>
                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-3xl">
                            Sign Up
                        </button>
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default Nav