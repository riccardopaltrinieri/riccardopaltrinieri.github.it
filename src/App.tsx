import 'App.css';
import {
    NavBar,
    Intro,
    Resume,
    Work,
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
                    <Route path="/" element={<Intro />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/easter-egg" element={<Coupon />} />
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
