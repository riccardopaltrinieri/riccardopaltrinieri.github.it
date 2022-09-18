import 'App.css';
import {
    NavBar,
    Intro,
    Resume,
    Work,
    Coupon
} from 'components';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/home" element={<Intro />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/resume" element={<Resume />} />
                    {/*<Route path="/contact" element={<Contact />} />*/}
                    <Route path="/easter-egg" element={<Coupon />} />
                    <Route path="*" element={<Navigate to="/home"/>} />
                </Routes>
            </div>
        </Router>
    );
}
