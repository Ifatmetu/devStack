
import logo from '../assets/logo-text.png'
const Nav=()=>{
    return <nav className="flex justify-between items-center h-16 bg-white text-black relative  font-mono container mx-auto px-4 border-b border-gray-100"  >
        <img src={logo} alt="" />
        <ul className="flex justify-between items-center gap-4">
            <li className="text-pink-700">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <ul className="flex justify-between items-center gap-4">
            <li>Sign In</li>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-3xl">
                Sign Up
            </button>
        </ul>
    </nav>
}
export default Nav;