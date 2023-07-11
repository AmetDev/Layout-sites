export function Technologies() {
    const arr = [{id: 1, name: 'Html', level: 'Advanced'}, {id: 2, name: 'CSS, Sass & TailwindCSS', level: 'Advanced'}, {id: 3, name: 'JavaScript', level: 'Advanced'}, 
{id: 4, name:'UI design in Figma', level: 'Beginner'}, {id: 5, name: 'React', level: 'Beginner'}, {id: 6, name: 'React Native', level: 'Beginner'}]
    return (
        arr.map((element) => {
        return (
            <div>
                <ul className="flex flex-col">
                    {element.level === 'Advanced'? 
                        <li key={element.id}>
                            <div className="text-white">
                                <div className="mt-[50px]">
                                    <div className="flex justify-between">
                                        <p className="text-[24px] font-semibold">{element.name}</p>
                                        <p className="text-[24px] font-semibold">{element.level}</p>
                                    </div>
                                    <div className="w-[1320px] h-[32px] bg-[#162950] rounded-full">
                                        <div className="w-[990px] h-[32px] bg-gradient-to-r from-midindigo from-10% via-midcyan via-30% to-midblue to-90% rounded-full"></div>
                                    </div>
                                </div>
                            </div>                           
                        </li>:
                        <li key={element.id}>
                            <div className="text-white">
                            <div className="mt-[50px]">
                                    <div className="flex justify-between">
                                        <p className="text-[24px] font-semibold">{element.name}</p>
                                        <p className="text-[24px] font-semibold">{element.level}</p>
                                    </div>
                                    <div className="w-[1320px] h-[32px] bg-[#162950] rounded-full">
                                        <div className="w-[330px] h-[32px] bg-gradient-to-r from-midindigo from-10% via-midcyan via-30% to-midblue to-90% rounded-full"></div>
                                    </div>
                                </div>
                            </div>                           
                        </li>
                    }
                </ul>
            </div>
        )
    }     
  )
)}