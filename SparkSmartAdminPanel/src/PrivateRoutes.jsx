import {Outlet , Navigate } from "react-router-dom"

const PrivateRoutes = ({userToken})=>{

            return (
                  !userToken ? <Outlet/> : <Navigate to="/signin" />
            )
}


export default PrivateRoutes;