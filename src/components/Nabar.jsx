import peerlist from "../assets/peerlist-logo-full-light.svg"

export const Navbar = () => {
    return <div className="flex items-center justify-between h-13 gap-2">
    <div>
    <div> <img className="cursor-pointer" src={peerlist} alt="peerlist-logo" 
    height={120}
    width={120}
    /> </div>
    </div>
    <div className= "flex justify-around gap-4 font-semibold ml-10 pr-1">
        <div className=" text-[#000000] text-sm hover:underline cursor-pointer font-display">Scroll</div>
        <div className="text-[#000000] text-sm hover:underline cursor-pointer font-display">Jobs</div>
        <div className="text-[#000000] text-sm hover:underline cursor-pointer font-display">Launchpad</div>
    </div>
    <div className="flex justify justify-between gap-2 ">
        <div>
           <button className="bg-white  text-black font-semibold px-4 py-1 rounded-xl border text-sm border-[#E4E3E9] cursor-pointer">Log in</button>
        </div>
        <div>
        <button className="bg-[#00AA45] px-4 py-1 rounded-xl text-white font-semibold border text-sm border-[#006F00] cursor-pointer"> Create Profile</button>
        </div>
    </div>
    </div>
}
