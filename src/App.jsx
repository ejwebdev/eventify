import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./pages/Default.jsx";
import Details from "./pages/Details.jsx";

function App() {
    return (
        <BrowserRouter basename="/eventify/">
            <Routes>
                <Route index element={<Default />} />
                <Route path="details" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
