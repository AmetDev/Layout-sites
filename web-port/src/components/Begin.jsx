export function Begin() {
    return (
        <div className="mt-[230px] bg-slate-600 flex justify-center flex-col">
            <div>
                <h1 className="text-white font-semibold text-6xl ml-[32px]">Lorem ipsum dolor sit amet</h1>
            </div>
            <div>
                <p className="text-xl font-semibold ml-[92px] max-w-screen-sm mt-[52px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <button className="transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 hover:transition-colors delay-300 hover:bg-gradient-to-l from-midindigo from-10% via-midcyan via-30% to-midblue to-90% duration-300 ml-[139px] w-[250px] h-[60px] bg-gradient-to-r from-midindigo from-10% via-midcyan via-30% to-midblue to-90% text-white  rounded-full font-semibold m-4 text-xl hover:transition-colors">Let's begin</button>
        </div>
    )
}