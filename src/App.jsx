import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PdfDocument from "./components/PdfDocument";

const applicantData = {
  name: "John Doe",
  appliedDate: "March 19, 2025",
  email: "john.doe@example.com",
  phone: "+123 456 7890",
  location: "New York, USA",
  jobTitle: "Software Engineer",
  personalInfo: "Experienced full-stack developer...",
  aiSummary:
    "The candidate possesses a Bachelor of Science in Computer Science and has experience in project management and team leadership, but lacks direct UI design skills such as Figma, Sketch, and Adobe XD which are essential for the UI Designer role. They have demonstrated some level of design work through the development of a user interface for a database project, but overall, their experience does not closely align with the specific requirements of the UI Designer position.<br/>En resolución, él se enfrascó tanto en su lectura, que se le pasaban las noches leyendo delaro en claro, y los días de turbio en turbio, y así, del poco dormir y del mucho leer, se lesecó el cerebro, de manera que vino a perder el juicio. Llenósele la fantasía de todo aque-llo que leía en los libros, así de encantamientos, como de pendencias, batallas, desafíos,heridas, requiebros, amores, tormentas y disparates imposibles, y asentósele de tal modoen la imaginación que era verdad toda aquella máquina de aquellas soñadas invencionesque leía, que para él no había otra historia más cierta en el mundo.",
  recommendation:
    "Consider recommending this candidate for roles that utilize a Computer Science background but focus on a learning path toward UI design.",
  redFlags: "Lack of direct experience in UI design tools and methodologies. Entry-level project management experience may not meet expectations for a UI Designer position.",
  experience: 5,
  currentSalary: 80000,
  expectedSalary: 100000,
  workExperience: "Worked at XYZ Corp for 5 years as a Senior Developer...",
  scores: [
    {
      label: "Skill",
      value: 8,
      weightage: 10,
      summary: "Match",
      
    },
    {
      label: "Work Experience",
      value: 7,
      weightage: 10,
      summary: "Good",
     
    },
    {
      label: "Projects",
      value: 6,
      weightage: 10,
      summary: "Average",
      
    },
    {
      label: "Education",
      value: 5,
      weightage: 10,
      summary: "Below Average",
      
    },
    {
      label: "Certification",
      value: 9,
      weightage: 10,
      summary: "Excellent",
     
    },
    {
      label: "Total Score",
      value: 35,
      weightage: 50,
      summary: "Good",
      
    },
  ],
  skills: [
    { name: "React.js", relevance: 5 },
    { name: "Node.js", relevance: 4 },
    { name: "MongoDB", relevance: 3 },
  ],
};

const App = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <h1 style={styles.heading}>Applicant Report</h1>
        <PDFViewer style={styles.pdfViewer}>
          <PdfDocument applicant={applicantData} />
        </PDFViewer>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
  
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  pdfViewer: {
    width: "70%",
    height: "85vh",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  
};

export default App;
