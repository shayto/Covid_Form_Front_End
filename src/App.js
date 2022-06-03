import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import RegistrationForm from './components/RegistrationForm'
import CitizenData from "./components/CitizenData";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<RegistrationForm />}/>
            <Route path="addCitizen" element={<RegistrationForm />}/>
            <Route path="showInfo" element={<CitizenData />}/>
            <Route path="registrationForm" element={<RegistrationForm/>}/>
            {}
        </Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;