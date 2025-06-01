import { useState } from "react";

import interface1 from "../../images/interface-1.png";
import interface3 from "../../images/interface-3.png";
import resumeprinter from "../../images/resume-printer.gif";
import "../Interface/interface.css";

const Interface = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What does CareerSync AI do?",
      answer:
        "CareerSync AI analyzes your LinkedIn profile and resume using AI to match job descriptions. It highlights missing keywords, suggests improvements, and increases your chances of getting shortlisted.",
    },
    {
      question: "How does the resume scoring system work?",
      answer:
        "We use AI models like Google Gemini to compare your resume with job descriptions and assign a relevance score based on skills, experience, and keywords.",
    },
    {
      question:
        "Is my data secure when I upload my resume or LinkedIn profile?",
      answer:
        "Yes, your data is encrypted and processed securely. We do not store any personal information without your consent.",
    },
    {
      question: "Can CareerSync AI suggest job-specific improvements?",
      answer:
        "Absolutely. Once you upload a job description, CareerSync AI identifies skill gaps and recommends tailored changes to both your resume and LinkedIn profile.",
    },
    {
      question: "Do I need a LinkedIn profile to use CareerSync AI?",
      answer:
        "While it's not mandatory, having a LinkedIn profile helps you get better insights since CareerSync AI can optimize both resume and LinkedIn content together.",
    },
    {
      question: "Can it detect ATS compatibility issues in my resume?",
      answer:
        "Yes. CareerSync AI evaluates your resume against Applicant Tracking System (ATS) standards and alerts you about format or keyword issues.",
    },
    {
      question: "What formats are supported for resume uploads?",
      answer:
        "We currently support PDF and DOCX formats for accurate parsing and analysis.",
    },
    {
      question: "Can I use CareerSync AI for multiple job roles?",
      answer:
        "Yes, you can upload different job descriptions, and CareerSync AI will adapt its suggestions accordingly for each role.",
    },
  ];

  return (
    <section className="interface-section">
      <div className="interface-container">
        <div className="interface-content1">
          <div className="block-1">
            <div className="part1">
              <img src={interface1} alt="Resume Analyzer UI" />
            </div>
            <div className="part2">
              <h1>
                LinkedIn Profile & <span>Resume Analyser</span>
              </h1>
              <h3>
                CareerSync <span>AI</span> is a smart tool that optimizes your
                resume and LinkedIn profile for any job. It analyzes your
                experience, highlights missing skills, suggests
                recruiter-focused keywords, and scores your resume’s relevance
                to job descriptions—all powered by{" "}
                <strong>ChatGpt</strong>.
              </h3>
            </div>
          </div>
        </div>
        <br/>

        <div className="interface-content2">
          <div className="block-2">
            <div className="part1">
              <h1>Crack Your Dream Company.</h1>
              <p>
                With CareerSync <span>AI</span>
              </p>
            </div>
            <div className="part2">
              <img src={interface3} alt="Dream company UI" />
            </div>
          </div>
        </div>
  <br/>
        <div className="interface-content3">
          <div className="block-3">
            <div className="part1">
              <div className="printer-image">
                <img src={resumeprinter} alt="Resume printing" />
              </div>
            </div>
            <div className="part2">
              <h3>
                Many job seekers don’t get enough interviews even after applying
                for dozens of jobs. Why? Companies use Applicant Tracking
                Systems (ATS) to search and filter resumes by keywords.
                <br />
                <br />
                The CareerSync AI resume scanner helps you optimize your resume
                keywords for each job listing so that your application gets
                found by recruiters. <strong>CareerSync AI</strong> can increase
                your interview chances by <strong>50%</strong>.
              </h3>
            </div>
          </div>
        </div>
  <br/>
        <div className="interface-content4">
          <div className="block-4">
            <div className="part-single">
              <h1>
                Get Started With CareerSync <span>AI</span>
              </h1>
              <p>
                A simple but powerful AI to create quality content on LinkedIn
              </p>
            </div>
          </div>
        </div>
  <br/>
        <div className="interface-content5">
          <div className="block-5">
            <div className="freq-questions">
              
              <h2>Frequently Asked Questions</h2>
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="faq-item"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="faq-question">
                    <h4>{item.question}</h4>
                    <span>{openIndex === index ? "-" : "+"}</span>
                  </div>
                  {openIndex === index && (
                    <div className="faq-answer">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
          <br/>
      </div>

    </section>
  );
};

export default Interface;
