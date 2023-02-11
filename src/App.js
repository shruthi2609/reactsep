import DashBoardComponent from "./Router Components/DashBoard"
import HomeComponent from "./Router Components/HomeComponent"
import LoginPage from "./Router Components/LoginPage"
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import BaseComponent from "./Router Components/BaseComponent"
function App(){
    return(
        <div>
            <BrowserRouter>
          <Link to="/home">Home Page</Link>
            <Link to="/login">Login Page</Link>
   {/** <Link to="/dashboard">DashBoard</Link> */}

            <Routes>
            {  /*  <Route path="/" element={<BaseComponent></BaseComponent>}></Route>*/}
                <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
                <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                <Route path="/dashboard" element={<DashBoardComponent></DashBoardComponent>}></Route>
            </Routes>

            </BrowserRouter>
           
        </div>
    )
}
export default App