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
    <div className="flex justify-start mt-10">
      <p className="text-teal-300 text-4xl font-bold">How to customize NVIM</p>
    </div>
  );
}
export default Articles;
