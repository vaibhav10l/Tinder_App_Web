import Login from "../components/Login";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

const authRoutes = [
  {
    path:"/profile",
    component:<Profile/>
  },
  {
    path:"/main",
    component:<Main/>
  },
  {
    path:"/navbar",
    component:<Navbar/>
  }
]
const commonRoutes = [
  {
    path:"/login",
    component: <Login/>
  }
]

export {authRoutes , commonRoutes};