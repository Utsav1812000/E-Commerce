import { Route, Routes } from "react-router-dom"
import { routerConstant } from "./routerConstant";

export default function MyRoutes() {
    return (
        <Routes>
            {routerConstant.map((routes) => {
                return (
                    <Route
                        key={routes.path}
                        path={routes.path}
                        exact={routes.exact}
                        // Component={routes.component}
                        element={<routes.component />}
                    // element= {routes.isAuthenticated ? <Protected Component={routes.component} /> : <routes.component/>} 
                    />
                )
            })}

        </Routes>
    );
}