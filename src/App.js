import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import { Page } from './templates/Page';
import { Home } from './pages/Home';
import { AddChart } from "./pages/AddChart";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Page />}>
                <Route index element={<Home />} />
                <Route path="add-chart" element={<AddChart />} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App;
