import { Link, useParams } from "react-router-dom";
function MenuDetail({ info }) {
  console.log(info);
  const { id } = useParams();
  return (
    <div>
      {info.map((el) => {
        return (
          <div className="text-white" key={el.id}>
            {el.id}
          </div>
        );
      })}
    </div>
  );
}
export default MenuDetail;
