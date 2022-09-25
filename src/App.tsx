import 'App.css';
import {
    NavBar,
    Home,
    Resume,
    Coupon
} from 'components';
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/about" element={<About />} />*/}
                    <Route path="/projects" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/easter-egg" element={<Coupon />} />
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
