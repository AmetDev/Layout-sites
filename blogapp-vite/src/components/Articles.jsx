import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Articles() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const data2 = await axios.get("http://localhost:4200/posts");
      setArr(data2.data);
    }
    getPosts();
  }, []);
  return (
    <div>
      {arr.map((element) => {
        console.log(element.id);
        console.log("articles")
        return (
          <div
            key={element.id}
            className="flex justify-start mt-10  flex-col"
          >
            <Link
              to={`/menu/${element.id}`}
              className="text-teal-300 text-2xl font-black"
            >
              {element.title}
            </Link>
            <div>
              <p className="text-white font-semibold flex ">
                <p className="mr-2">{element.data}</p>
                <p>{element.timeforread} read</p>
              </p>
              <p className="text-white text-xl font-semibold">
                {element.introduction.slice(0, 50)}...
              </p>
            </div>
          </div>
        );
      })}
    </div>
  )

}

export default Articles;
