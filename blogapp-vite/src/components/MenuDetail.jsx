import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function MenuDetail() {
  const [arr, setArr] = useState({});
  const [arrReal, setRealArr] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log("hello world");
    const funcAsync = async () => {
      const data = await axios.get(`http://localhost:4200/posts/${id}`);
      setArr(data.data);
      setRealArr([...data.data.sections]);
    };
    funcAsync();
  }, [id]);

  return (
    <div>
      <div className="flex jusfify-between flex-col w-max-[1200px] ml-[20%] mr-[20%]">
        <p className="text-white mb-10 font-semibold text-[24px]">
          {arr.introduction}
        </p>
        <img className="" src={arr.image} />
        {arrReal.map((el) => {
          return (
            <div key={el.title} className="text-white mt-[20px] mb-[20px]">
              <h1 className="text-2xl font-bold">{el.title}</h1>
              <div className="text-xl font-medium">{el.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MenuDetail;
