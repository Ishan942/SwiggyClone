const Shimmer = () => {
  const shimmerCards = [];

  for (let index = 0; index < 10; index++) {
    shimmerCards.push(
      <div
        key={index}
        className=" w-56 h-80 m-5 p-5 border-2 border-slate-500 rounded-lg hover:border-slate-500 hover:rounded-lg "
      ></div>
    );
  }

  return <div className="flex flex-wrap">{shimmerCards}</div>;
};

export default Shimmer;
