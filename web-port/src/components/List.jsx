export function List() {
    const arr = [{id: 1, name:'Git'}, {id: 2, name:'Linux'}, {id: 3, name:'Nginx'}, {id: 4, name:'Figma'}, {id:5, name:'Docker'}, {id: 6, name:'B1 english'}]
        return(
        <div>
            <h1 className="text-white text-[48px] font-semibold mt-[287px] mb-[100px]">Additional technologies and skills</h1>
            <div className="flex flex-row flex-wrap justify-between">
                {arr.map((element) => {
                    return (
                        <li key={element.id}  className="basis-1/4 text-[36px] m-12 font-semibold  text-white">{element.name}</li>
                    )
                })}
            </div>
           
        </div>
        )
}