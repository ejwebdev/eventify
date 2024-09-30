import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Default from "./pages/Default.jsx";
import Details from "./pages/Details.jsx";

function App() {
    return (
        <BrowserRouter basename="/eventify/">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Default />} />
                    <Route path="details" element={<Details />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
