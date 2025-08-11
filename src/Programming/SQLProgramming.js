import React from "react";
import { CheckCircle } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

const SQLProgramming = () => {
  return (
    <div className="bg-light text-dark py-5">
      {/* Hero Section */}
      <section className="bg-dark text-white py-5 mb-5" data-aos="fade-down">
        <div className="container text-center">
          <h1 className="fw-bold">SQL Programming</h1>
          <p className="lead">Master the language of databases with SQL – Structure, Query, and Control</p>
        </div>
      </section>

      {/* Course Overview */}
      <div className="container mb-5">
        <h2 className="fw-bold text-center mb-4" data-aos="fade-up">Course Overview</h2>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-right">
            <img
<<<<<<< HEAD
              src="https://img.freepik.com/free-vector/gradient-sql-illustration_23-2149247491.jpg"
=======
              src="https://img.freepik.com/free-photo/computer-software-coding-programming_53876-125114.jpg"
>>>>>>> 82e58eaae33b21f108ab9e81c7ffbb6e6bfec712
              alt="SQL Programming"
              className="img-fluid shadow"
              style={{ borderRadius: "25px" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card p-4 border-0 shadow hover-card">
              <ul className="list-unstyled fs-5 mb-0">
                <li className="mb-2"><CheckCircle className="text-success me-2" /> Introduction to SQL & RDBMS</li>
                <li className="mb-2"><CheckCircle className="text-success me-2" /> DDL, DML, DCL, and TCL Commands</li>
                <li className="mb-2"><CheckCircle className="text-success me-2" /> Complex Queries, Joins & Subqueries</li>
                <li className="mb-2"><CheckCircle className="text-success me-2" /> Stored Procedures, Views & Triggers</li>
                <li className="mb-2"><CheckCircle className="text-success me-2" /> Real-time Project: Inventory Database</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Section */}
      <div className="container mb-5">
        <h3 className="fw-bold mb-3" data-aos="fade-up">What You'll Learn</h3>

        <div className="mb-4" data-aos="fade-right">
          <h5 className="fw-bold text-primary">🧱 DDL - Data Definition Language</h5>
          <ul>
            <li><strong>CREATE</strong>: To create new tables or databases</li>
            <li><strong>ALTER</strong>: To modify existing table structure</li>
            <li><strong>DROP</strong>: To delete tables or databases</li>
            <li><strong>TRUNCATE</strong>: To delete all records but keep structure</li>
          </ul>
          <pre className="bg-dark text-white p-3 rounded">
{`CREATE TABLE Students (
  ID INT PRIMARY KEY,
  Name VARCHAR(100),
  Age INT
);`}
          </pre>
        </div>

        <div className="mb-4" data-aos="fade-left">
          <h5 className="fw-bold text-primary">✏️ DML - Data Manipulation Language</h5>
          <ul>
            <li><strong>INSERT</strong>: To add new records</li>
            <li><strong>UPDATE</strong>: To modify existing records</li>
            <li><strong>DELETE</strong>: To remove records</li>
            <li><strong>SELECT</strong>: To retrieve data from database</li>
          </ul>
          <pre className="bg-dark text-white p-3 rounded">
{`INSERT INTO Students (ID, Name, Age) VALUES (1, 'John Doe', 22);

SELECT * FROM Students WHERE Age > 20;`}
          </pre>
        </div>

        <div className="mb-4" data-aos="fade-right">
          <h5 className="fw-bold text-primary">🔐 DCL - Data Control Language</h5>
          <ul>
            <li><strong>GRANT</strong>: Gives access privileges to users</li>
            <li><strong>REVOKE</strong>: Removes access privileges</li>
          </ul>
          <pre className="bg-dark text-white p-3 rounded">
{`GRANT SELECT, INSERT ON Students TO user1;
REVOKE INSERT ON Students FROM user1;`}
          </pre>
        </div>

        <div className="mb-4" data-aos="fade-left">
          <h5 className="fw-bold text-primary">🔁 TCL - Transaction Control Language</h5>
          <ul>
            <li><strong>COMMIT</strong>: Saves the changes</li>
            <li><strong>ROLLBACK</strong>: Undoes changes</li>
            <li><strong>SAVEPOINT</strong>: Sets a save point</li>
          </ul>
          <pre className="bg-dark text-white p-3 rounded">
{`BEGIN;
UPDATE Students SET Age = 23 WHERE ID = 1;
SAVEPOINT update1;
ROLLBACK TO update1;
COMMIT;`}
          </pre>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white py-5 text-center">
        <h4 className="fw-bold mb-3" data-aos="zoom-in">Ready to master databases with SQL?</h4>
        <p className="fs-5">Join our hands-on training and build real-world database projects with confidence!</p>
      </div>
    </div>
  );
};

export default SQLProgramming;
