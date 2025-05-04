import styles from "./Buttons.module.css";
const Buttonscontainer = ({ onButtonClick }) => {
  const ButtonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.Buttonscontainer}>
      {ButtonsNames.map((Buttonname) => (
        <button
          className={styles.ButtonsStyle}
          onClick={() => onButtonClick(Buttonname)}
        >
          {Buttonname}
        </button>
      ))}
    </div>
  );
};
export default Buttonscontainer;
