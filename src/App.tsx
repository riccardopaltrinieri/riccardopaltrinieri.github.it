import 'App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import { NavBar } from './components/header/NavBar';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { ProjectBoard } from './components/projects/ProjectBoard';
import { Resume } from './components/resume/Resume';
import { ContactForm } from './components/contact/ContactForm';
import { Coupon } from './components/coupon/Coupon';
import { Footer } from './components/footer/Footer';

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<ProjectBoard />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/easter-egg" element={<Coupon />} />
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}
