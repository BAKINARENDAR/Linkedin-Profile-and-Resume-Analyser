import interface1 from "../../images/interface-1.png";
import interface3 from "../../images/interface-3.png";
import "../Interface/interface.css";
const Interface = () => {
  return (
    <>
      <section className="interface-section">
        <div className="interface-container">
          <div className="interface-content1">
            <div className="block-1">
              <div className="part1">
                <img src={interface1} alt="" />
              </div>
              <div className="part2">
                <h1>
                  Linkedin Profile & <span> Resume Analyser</span>
                </h1>
                <h3>
                  {" "}
                  CareerSync <span>AI </span>
                  is a smart tool that optimizes your resume and LinkedIn
                  profile for any job. It analyzes your experience, highlights
                  missing skills, suggests recruiter-focused keywords, and
                  scores your resume’s relevance to job descriptions—all powered
                  by Google Gemini AI.
                </h3>
              </div>
             
             
            </div>
          </div>

          <div className="interface-content2">
             <div className="block-2">
                <div className="part1">
                  <h1>Crack Your Dream Company.</h1>
                  <p> With CareerSync <span>AI</span></p>
                </div>
                <div className="part2">
                    <img  src={interface3} alt=""/>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Interface;
