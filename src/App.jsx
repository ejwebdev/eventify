import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header.jsx";
import Default from "./pages/Default.jsx";
import Service from "./pages/Service.jsx";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Default />} />
                    <Route path="service-details" element={<Service />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
