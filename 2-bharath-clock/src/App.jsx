import ClockSlogan from "./components/Clock-slogan";
import CurrentTime from "./components/Current-time";
import Title from "./components/Title";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <Title></Title>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}
export default App;
