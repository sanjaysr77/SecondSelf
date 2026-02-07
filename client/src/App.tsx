import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App () {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/signup" element={<Signup />}/>
                    <Route path="/signin" element={<Signin />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;