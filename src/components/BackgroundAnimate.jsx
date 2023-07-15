import "../App.css";

const BackgroundAnimate = () => {
  let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <ul className="background">
      {count.map((x) => (
        <li key={x}></li>
      ))}
    </ul>
  );
};

export default BackgroundAnimate;
