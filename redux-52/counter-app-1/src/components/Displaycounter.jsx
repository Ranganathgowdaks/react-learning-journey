import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return <p>counter current:{counter} </p>;
};
export default DisplayCounter;
