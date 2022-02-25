import "./styles.css";
import Navbar from "./navbar/navbar.js";
import Homepage from "./homepage/homepage.js";
import TransferPage from "./TransferPage/Transfer";
import Background from "./Assets/bg.png";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflowX: "hidden",
        overflowY: "auto",
        height: "100vh",
        zIndex: 5
      }}
    >
      <Navbar />
      <Homepage />
    </div>
  );
}
