import AuthPage from "./pages/AuthPage";
import {Route, Routes} from "react-router-dom";
import HotelSearchPage from "./pages/HotelSearchPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loginAc} from "./redux/reducers/authReducer";

const App = () => {

    const dispatch = useDispatch()
    const {auth} = useSelector(state => state.auth)
    useEffect(() => {
        if (window.localStorage.getItem('auth')) dispatch(loginAc())
    }, [])

    return (
        <div className="App">
            {auth
                ? <Routes>
                    <Route path={''} element={<HotelSearchPage/>}/>
                </Routes>
                : <Routes>
                    <Route path={''} element={<AuthPage/>}/>
                </Routes>}
        </div>
    );
}

export default App;
