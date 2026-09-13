import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className="border-t border-gray-100">

            <div className="container mx-auto px-4 py-10">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className="text-center md:text-left">
                        <img
                            src={logo}
                            alt="Dev Stack"
                            className="w-28 mx-auto md:mx-0"
                        />

                        <p className="text-xs text-gray-400 mt-3 max-w-sm leading-5 mx-auto md:mx-0">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-2 mt-5 text-xs text-gray-600">
                            <span>GitHub</span>
                            <span className="text-gray-300">•</span>
                            <span>Twitter</span>
                            <span className="text-gray-300">•</span>
                            <span>LinkedIn</span>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold">
                            PRODUCT
                        </h3>

                        <ul className="text-xs text-gray-400 mt-3 space-y-2">
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold">
                            COMPANY
                        </h3>

                        <ul className="text-xs text-gray-400 mt-3 space-y-2">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    
                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold">
                            LEGAL
                        </h3>

                        <ul className="text-xs text-gray-400 mt-3 space-y-2">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-100 mt-8 pt-5 flex flex-wrap items-center justify-center md:justify-between gap-3 text-xs text-gray-400 text-center">

                    <span>
                        © 2026 Dev Stack. All rights reserved.
                    </span>

                    <div className="flex gap-5">
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer