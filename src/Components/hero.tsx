import banner from '../assets/banner-stack.png'

const Hero=()=>{
    return <div className="flex justify-between items-center h-screen bg-white text-black relative  font-mono container mx-auto px-4 border-b border-gray-100"  >
        <div>
            <h1 className='font-extrabold text-5xl'>Build Your Idea</h1>
        <h1 className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-bold text-5xl'>Development Stack</h1>
        <p>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
    <button className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white py-2 px-4 rounded-2xl">Explore Technologies</button>
    <button>Learn More</button>

        </div>
        <div>
            <img src={banner} alt="" />
        </div>
    </div>
    
}
export default Hero