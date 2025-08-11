import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Componets/Main";
import Home from "./Componets/Home";
import Footer from "./Componets/Footer";
import AboutPage from "./Componets/AboutPage";
import ASPNetPage from "./SoftwareDevelopment/AspNet";
<<<<<<< HEAD
import ScrollToTop from "./Componets/ScrollToTop"; // ⬅️ Import the new component
=======
import ScrollToTop from "./Componets/ScrollToTop";
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
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
<<<<<<< HEAD
import InternetCourse from "./WebTech/Internet";
import AccountingCourse from "./Non-IT Courses/Accounting";
import CADCourse from "./Non-IT Courses/CAD";
import MechanicalCadCourse from "./Non-IT Courses/Mechanical Cad";
import TallyCourse from "./Non-IT Courses/Tally";
import Typing from "./Non-IT Courses/Typing";
import Accounting from "./Non-IT Courses/Accounting";
import WebDesignCoursePage from "./WebTech/WebDesignCourse";

=======
import Animation from "./Componets/Multimedia&Design/Animation";
import Adobe from "./Componets/Multimedia&Design/Adobe";
import CorelDRAW from "./Componets/Multimedia&Design/CorelDRAW";
import DTP from "./Componets/Multimedia&Design/Dtp";
import GraphicDesign from "./Componets/Multimedia&Design/GraphicDesign";
import MultiMedia from "./Componets/Multimedia&Design/Multimedia";
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
export default function AppRoutes() {
  return (
    <div className="route-container">
      <BrowserRouter>
<<<<<<< HEAD
        <ScrollToTop /> {/* ⬅️ Add here */}
=======
        <ScrollToTop />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
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
<<<<<<< HEAD
            element={<>
              <Main />
              <JavaProgramming/>
              <Footer />
            </>}
=======
            element={
              <>
                <Main />
                <JavaProgramming />
                <Footer />
              </>
            }
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
          />

          <Route
            path="/Sql"
            element={
              <>
                <Main />
<<<<<<< HEAD
               <SQLProgramming/>
=======
                <SQLProgramming />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                <Footer />
              </>
            }
          />

          <Route
            path="/E-commerce"
            element={
              <>
                <Main />
<<<<<<< HEAD
               <WebTechEcommerce/>
=======
                <WebTechEcommerce />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                <Footer />
              </>
            }
          />

<<<<<<< HEAD
            
            
            



           <Route
=======
          <Route
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
            path="/Python"
            element={
              <>
                <Main />
<<<<<<< HEAD
               <PythonPage/>
=======
                <PythonPage />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                <Footer />
              </>
            }
          />
          <Route
            path="/J2EE"
            element={
              <>
                <Main />
<<<<<<< HEAD
               <J2EEProgramming/>
=======
                <J2EEProgramming />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                <Footer />
              </>
            }
          />
          <Route
            path="/J2ME"
            element={
              <>
                <Main />
<<<<<<< HEAD
               <J2MEProgramming/>
                <Footer />
              </>
            }
          />  
=======
                <J2MEProgramming />
                <Footer />
              </>
            }
          />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712

          <Route
            path="/VBScript"
            element={
              <>
                <Main />
<<<<<<< HEAD
              <VBScriptProgramming/>
=======
                <VBScriptProgramming />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                <Footer />
              </>
            }
          />

          <Route
            path="/FoxPro"
            element={
              <>
                <Main />
<<<<<<< HEAD
                <FoxproProgramming/>
=======
                <FoxproProgramming />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                <Footer />
              </>
            }
          />

<<<<<<< HEAD

          {/* Programing */}

=======
          {/* Programing */}
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
          <Route
            path="/CProgramming"
            element={
              <>
                <Main />
<<<<<<< HEAD
              <CProgramming/>
                <Footer />
              </>
            } 
=======
                <CProgramming />
                <Footer />
              </>
            }
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
          />

          <Route
            path="/CPlusPlus"
            element={
              <>
                <Main />
<<<<<<< HEAD
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
=======
                <CPlusPlusProgramming />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                <Footer />
              </>
            }
          />

<<<<<<< HEAD
         <Route
=======
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
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
            path="/Design"
            element={
              <>
                <Main />
<<<<<<< HEAD
           <WebDesignCoursePage/>
=======
                <WebDesignCourse />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                <Footer />
              </>
            }
          />

          <Route
            path="/Html"
            element={
              <>
                <Main />
<<<<<<< HEAD
            <HtmlCourse/>
=======
                <HtmlCourse />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                <Footer />
              </>
            }
          />

          <Route
            path="/Xml"
            element={
              <>
                <Main />
<<<<<<< HEAD
               <XMLCourse/>
=======
                <XMLCourse />
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
                <Footer />
              </>
            }
          />
<<<<<<< HEAD
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


        
=======
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
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
      </BrowserRouter>
    </div>
  );
}
