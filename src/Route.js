import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Componets/Main";
import Home from "./Componets/Home";
import Footer from "./Componets/Footer";
import AboutPage from "./Componets/AboutPage";
import ASPNetPage from "./SoftwareDevelopment/AspNet";
import ScrollToTop from "./Componets/ScrollToTop"; // ⬅️ Import the new component
import PythonPage from "./SoftwareDevelopment/Python";
import JavaProgramming from "./SoftwareDevelopment/JavaProgramming";
import J2EEProgramming from "./SoftwareDevelopment/J2EEProgramming";
import J2MEProgramming from "./SoftwareDevelopment/J2MEProgramming";
import VBScriptProgramming from "./SoftwareDevelopment/VBScriptProgramming";
import FoxproProgramming from "./SoftwareDevelopment/FoxproProgramming";
import CProgramming from "./Programming/CProgramming";
import CPlusPlusProgramming from "./Programming/CPlusPlusProgramming";
import JavaProgrammin from "./Programming/JavaProgramming";
import SQLProgramming from "./Programming/SQLProgramming";
import WebTechEcommerce from "./WebTech/WebTechEcommerce";
import WebDesignCourse from "./WebTech/WebDesignCourse";
import HtmlCourse from "./WebTech/HtmlCourse";
import XMLCourse from "./WebTech/XMLCourse";
import InternetCourse from "./WebTech/Internet";
import AccountingCourse from "./Non-IT Courses/Accounting";
import CADCourse from "./Non-IT Courses/CAD";
import MechanicalCadCourse from "./Non-IT Courses/Mechanical Cad";
import TallyCourse from "./Non-IT Courses/Tally";
import Typing from "./Non-IT Courses/Typing";
import Accounting from "./Non-IT Courses/Accounting";
import WebDesignCoursePage from "./WebTech/WebDesignCourse";

export default function AppRoutes() {
  return (
    <div className="route-container">
      <BrowserRouter>
        <ScrollToTop /> {/* ⬅️ Add here */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Main />
                <AboutPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/AspDotNet"
            element={
              <>
                <Main />
                <ASPNetPage />
                <Footer />
              </>
            }
          />

          <Route
            path="/JavaProgramming"
            element={<>
              <Main />
              <JavaProgramming/>
              <Footer />
            </>}
          />

          <Route
            path="/Sql"
            element={
              <>
                <Main />
               <SQLProgramming/>
                <Footer />
              </>
            }
          />

          <Route
            path="/E-commerce"
            element={
              <>
                <Main />
               <WebTechEcommerce/>
                <Footer />
              </>
            }
          />

            
            
            



           <Route
            path="/Python"
            element={
              <>
                <Main />
               <PythonPage/>
                <Footer />
              </>
            }
          />
          <Route
            path="/J2EE"
            element={
              <>
                <Main />
               <J2EEProgramming/>
                <Footer />
              </>
            }
          />
          <Route
            path="/J2ME"
            element={
              <>
                <Main />
               <J2MEProgramming/>
                <Footer />
              </>
            }
          />  

          <Route
            path="/VBScript"
            element={
              <>
                <Main />
              <VBScriptProgramming/>
                <Footer />
              </>
            }
          />

          <Route
            path="/FoxPro"
            element={
              <>
                <Main />
                <FoxproProgramming/>
                <Footer />
              </>
            }
          />


          {/* Programing */}

          <Route
            path="/CProgramming"
            element={
              <>
                <Main />
              <CProgramming/>
                <Footer />
              </>
            } 
          />

          <Route
            path="/CPlusPlus"
            element={
              <>
                <Main />
              <CPlusPlusProgramming/>
                <Footer />
              </>
            }
          />  
     

     <Route
            path="/Java"
            element={
              <>
                <Main />
               <JavaProgrammin/>
                <Footer />
              </>
            }
          />

         <Route
            path="/Design"
            element={
              <>
                <Main />
           <WebDesignCoursePage/>
                <Footer />
              </>
            }
          />

          <Route
            path="/Html"
            element={
              <>
                <Main />
            <HtmlCourse/>
                <Footer />
              </>
            }
          />

          <Route
            path="/Xml"
            element={
              <>
                <Main />
               <XMLCourse/>
                <Footer />
              </>
            }
          />
          <Route
            path="/internet"
            element={
              <>
                <Main />
               <InternetCourse></InternetCourse>
                <Footer />
              </>
            }
          />

          <Route
            path="/Accounting"
            element={
              <>
                <Main />
              <Accounting/>
                <Footer />
              </>
            }
          />

            <Route
            path="/CAD"
            element={
              <>
                <Main />
             <CADCourse></CADCourse>
                <Footer />
              </>
            }
          />

            <Route
            path="/MechanicalCad"
            element={
              <>
                <Main />
               <MechanicalCadCourse></MechanicalCadCourse>
                <Footer />
              </>
            }
          />

              <Route
            path="/Tally"
            element={
              <>
                <Main />
               <TallyCourse></TallyCourse>
                <Footer />
              </>
            }
          />

           <Route
            path="/Typing"
            element={
              <>
                <Main />
              <Typing/>
                <Footer />
              </>
            }
          />











          
        </Routes>


        
      </BrowserRouter>
    </div>
  );
}
