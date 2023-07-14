import VkIcon from "./assests/VK"
import DsIcon from "./assests/ds"
import TgIcon from "./assests/tg"


export function Head() {
    return (
        <header className="flex  h-16 justify-between items-center mt-5 mb-5 text-teal-300 font-semibold text-4xl">
            <div className="flex w-[200px] justify-between">
            <div><a className="" href="https://vk.com/justzero09"><VkIcon/></a></div>
            <div ><a href="#"><TgIcon/></a></div>
            <div><a className="" href="#"><DsIcon/></a></div>
            </div>
            <div></div>
            <div><button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>



                </button>
            </div>
        </header>
    )
}