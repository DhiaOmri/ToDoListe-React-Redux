import { MDBContainer, MDBFooter, MDBRow } from "mdb-react-ui-kit";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Addtask from "./Components/Addtask";
import ListTask from "./Components/ListTask";
import Navbar from "./Components/Navbar";
import logo from './logo.png'
const App = () => {
  const toast=()=>("Custom style",{
    className: 'black-background',
    bodyClassName: "grow-font-size",
    progressClassName: 'fancy-progress-bar'
  });
  return (
    <div className="App">
      <ToastContainer 

      />
      <Navbar />
      <MDBContainer>
        <MDBRow className="m-auto justify-content-center">
          <Addtask />
          <ListTask />
        </MDBRow>
      </MDBContainer>

      <MDBFooter backgroundColor="light" className="text-center text-lg-left">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()}
          powred By Dhia Omri <img src={logo} alt="" style={{maxWidth:"80px"}}/>
        </div>
      </MDBFooter>
    </div>
  );
};

export default App;
