import { Header } from "./components/Header";
import "./index.css";
import {AppRoutes} from "./Routes";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Header></Header>
            <AppRoutes/>
        </BrowserRouter>
    );
}

export default App;
