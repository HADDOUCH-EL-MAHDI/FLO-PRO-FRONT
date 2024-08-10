
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import './App.css';
import LandingPage from "./pages/LandingPage";
import NextSignUp from "./pages/NextSignUp";
import TrancheAge from "./pages/TrancheAge";
import FormPatient from "./pages/FormPatient";
import Prediagnostique from "./pages/Prediagnostique";
import Questionnaire1 from "./pages/Questionnaire1";
import Questionnaire2 from "./pages/Questionnaire2";
import QuestionSupplementaire from "./pages/QuestionSupplementaire";
import Conseils from "./pages/Conseils";
import ConseilsAlimentaire from "./pages/ConseilsAlimentaire";
import DiagMedicament from "./pages/DiagMedicament";
import OrdonnanceMedicale from "./pages/OrdonnanceMedicale";
import Bilan from "./pages/Bilan";
import PharmacieLocateur from "./pages/PharmacieLocateur";
import Laboratoirlocator from "./pages/Laboratoirlocator";
import Prescription from "./pages/Prescription"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="landingpage" element={<LandingPage/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp/>} />  
          <Route path="/nextsignup" element={<NextSignUp/>} />
          <Route path="/trancheage" element={<TrancheAge/>} /> 
          <Route path="/formpatient" element={<FormPatient/>} />
          <Route path="/prediagnostique" element={<Prediagnostique/>} /> 
          <Route path="/questionnaire1" element={<Questionnaire1/>} />     
          <Route path="/questionnaire2" element={<Questionnaire2/>} /> 
          <Route path="/questionsupplementaire" element={<QuestionSupplementaire/>} />
          <Route path="/conseils" element={<Conseils/>} /> 
          <Route path="/conseilsalimentaire" element={<ConseilsAlimentaire/>} />  
          <Route path="/diagmedicament" element={<DiagMedicament/>} /> 
          <Route path="/ordonnancemedicale" element={<OrdonnanceMedicale/>} />
          <Route path="/bilan" element={<Bilan/>} /> 
          <Route path="/pharmacielocateur" element={<PharmacieLocateur/>} /> 
          <Route path="/laboratoirlocator" element={<Laboratoirlocator/>} />   
          <Route path="/prescription" element={<Prescription/>} />   
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}



export default App;
