import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Componets/Main";
import Home from "./Componets/Home";
import Footer from "./Componets/Footer";
import AboutPage from "./Componets/AboutPage";
import ASPNetPage from "./SoftwareDevelopment/AspNet";
import ScrollToTop from "./Componets/ScrollToTop";
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
import Animation from "./Componets/Multimedia&Design/Animation";
import Adobe from "./Componets/Multimedia&Design/Adobe";
import CorelDRAW from "./Componets/Multimedia&Design/CorelDRAW";
import DTP from "./Componets/Multimedia&Design/Dtp";
import GraphicDesign from "./Componets/Multimedia&Design/GraphicDesign";
import MultiMedia from "./Componets/Multimedia&Design/Multimedia";
export default function AppRoutes() {
  return (
    <div className="route-container">
      <BrowserRouter>
        <ScrollToTop />
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
            element={
              <>
                <Main />
                <JavaProgramming />
                <Footer />
              </>
            }
          />

          <Route
            path="/Sql"
            element={
              <>
                <Main />
                <SQLProgramming />
                <Footer />
              </>
            }
          />

          <Route
            path="/E-commerce"
            element={
              <>
                <Main />
                <WebTechEcommerce />
                <Footer />
              </>
            }
          />

          <Route
            path="/Python"
            element={
              <>
                <Main />
                <PythonPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/J2EE"
            element={
              <>
                <Main />
                <J2EEProgramming />
                <Footer />
              </>
            }
          />
          <Route
            path="/J2ME"
            element={
              <>
                <Main />
                <J2MEProgramming />
                <Footer />
              </>
            }
          />

          <Route
            path="/VBScript"
            element={
              <>
                <Main />
                <VBScriptProgramming />
                <Footer />
              </>
            }
          />

          <Route
            path="/FoxPro"
            element={
              <>
                <Main />
                <FoxproProgramming />
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
                <CProgramming />
                <Footer />
              </>
            }
          />

          <Route
            path="/CPlusPlus"
            element={
              <>
                <Main />
                <CPlusPlusProgramming />
                <Footer />
              </>
            }
          />

          <Route
            path="/Java"
            element={
              <>
                <Main />
                <JavaProgrammin />
                <Footer />
              </>
            }
          />

          <Route
            path="/Design"
            element={
              <>
                <Main />
                <WebDesignCourse />
                <Footer />
              </>
            }
          />

          <Route
            path="/Html"
            element={
              <>
                <Main />
                <HtmlCourse />
                <Footer />
              </>
            }
          />

          <Route
            path="/Xml"
            element={
              <>
                <Main />
                <XMLCourse />
                <Footer />
              </>
            }
          />
            <Route 
            path="/Animation"
             element={
             <><Main />
             <Animation />
             <Footer />
             </>
            }
             />

             <Route 
            path="/Adobe"
             element={
             <><Main />
             <Adobe />
             <Footer />
             </>
            }
             />

          
  

               <Route 
            path="/CorelDRAW"
             element={
             <><Main />
             <CorelDRAW/>
             <Footer />
             </>
            }
             />

               <Route 
            path="/DTP"
             element={
             <><Main />
             <DTP />
             <Footer />
             </>
            }
             />

               <Route 
            path="/ Graphic Designing"
             element={
             <><Main />
             <GraphicDesign />
             <Footer />
             </>
            }
             />

               <Route 
            path="/ Multimedia"
             element={
             <><Main />
             <MultiMedia />
             <Footer />
             </>
            }
             />

          {/* 🔗 3D Animation Route */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
