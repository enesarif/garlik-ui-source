import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import { CHARTS, HOME } from "./constants/routes";
import { Page } from './templates/Page';
import { Home } from './pages/Home';
import { Charts } from "./pages/Charts";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
    return <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path={HOME} element={<Page />}>
                    <Route index element={<Home />} />
                    <Route path={CHARTS} element={<Charts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
}

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export default App;
