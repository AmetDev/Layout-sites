import { Link } from "react-router-dom";
function Articles() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const clock = new Date(2023, 7, 20);

  const numMonth = clock.getDate();
  const currentMonth = months.filter(
    (month) => months.indexOf(month) + 1 == clock.getMonth()
  );

  const curDate = {
    curMonth: currentMonth.join(),
    curYear: clock.getFullYear(),
    curDateDay: clock.getDate(),
  };
  console.log(curDate);
  return (
    <div>
      <div className="flex justify-start mt-10 flex flex-col">
        <Link to={`/menu/1`} className="text-teal-300 text-2xl font-black">
          How to customize NVIM
        </Link>
        <div>
          <p className="text-white font-semibold">
            {curDate.curDateDay}
            {curDate.curMonth}
            {curDate.curYear}
            &nbsp;10 min read
          </p>
          <p className="text-white text-xl font-semibold">
            It's very hard bacause they need....
          </p>
        </div>
      </div>
      <div className="flex justify-start mt-10 flex flex-col">
        <p className="text-teal-300 text-2xl font-black">
          how to declareted array in C#
        </p>
        <div>
          <p className="text-white font-semibold">
            {curDate.curDateDay}
            {curDate.curMonth}
            {curDate.curYear}
            &nbsp;10 min read
          </p>
          <p className="text-white text-xl font-semibold">
            It's very hard bacause they need....
          </p>
        </div>
      </div>
    </div>
  );
}
export default Articles;
