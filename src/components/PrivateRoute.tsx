import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";


export const PrivateRoute = () => {
const userInfo = useSelector((state: RootState)  => state.auth.userInfo)
  return (
    <>
    {userInfo ? <Outlet/> : <Navigate to='/login' replace />}
    </>
  )
}
