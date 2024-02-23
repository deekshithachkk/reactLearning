import Home from "../components/Auth/Home";
import { Route, Routes } from "react-router-dom"
import Authorization from "./Authorization";
import PERMISSIONS from "permissions/Permission";
import About from "../components/Auth/About";
import Authentication from "./Authentication";
import Profile from "../components/Auth/Profile";
import Extra from "../components/Auth/Extra";
import Login from "../components/Auth/Login";

const RoutePath=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_ABOUT]}/>}>
                <Route path="about" element={<About />}></Route>
            </Route>
            <Route path="profile" element={<Authentication>
                <Profile />
            </Authentication>} />
            <Route element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_EXTRA]}/>}>
                <Route path="extra" element={<Extra/>}></Route>
            </Route>
            <Route path="login" element={<Login />}/>
        </Routes>
    )
}
export default RoutePath;