// pages/resume.tsx
"use client"; // Ensure this component is treated as a client component

import React, { useState } from 'react';
import TailoredResume from '../../components/TailoredResume';
import KeywordsInserted from '../../components/KeywordsInserted';
import ScoreImprovement from '../../components/ScoreImprovement';
import ProjectSuggestions from '../../components/ProjectSuggestions';

const mockData = {
  tailored_resume: `Boopesh Shanmugam
+1 6284682302 | s.boopesh@gmail.com | https://www.linkedin.com/in/boopesh-shanmugam/San Francisco, CA 94132

Software Engineer II
With over three years of experience at Silicon Valley's DevOps Unicorn startup, Harness, I have spearheaded the architectural design and development of microservices using Spring Boot Java, integrating Redis for messaging, and crafting Restful APIs. My work also involved containerizing these services into Docker images and streamlining deployment with Harness's CI/CD workflows. This has led to significant product enhancements, improving user experience and bolstering customer retention. My profound expertise in DevOps and software development, alongside my enthusiasm for exploring new technologies, empowers me to generate meaningful impacts in cutting-edge software engineering roles.
WORK EXPERIENCE

Software Engineer II,
Harness | San Francisco
July 2020 - Aug 2023
• Developed the Favorites Framework, which significantly reduced user navigation efforts by 80%, thereby elevating the user experience. This framework was built using MongoDB and Spring Boot JPA, supported with Redis Cache for optimal performance.
• Engineered a sophisticated integration of the Harness platform with Google Cloud Build via the gRPC framework, achieving a deal value exceeding $1M, leveraged Harness delegates that operate within the customer's cloud via Kubernetes pods, facilitating GCP API calls for build triggers, log streaming, and build cancellations.
• Spearheaded a security overhaul by updating over 30+ vulnerable libraries, implementing a comprehensive migration roadmap of java libraries in the pom file, and reinforcing product security and SOC2 compliance.
• Architected robust distributed systems and advanced authentication frameworks, integrating essential security protocols (LDAP, SAML, SCIM, OAuth, SSO) and enabling seamless third-party logins (OKTA, OneLogin, Azure AD, Google), thus boosting user trust and platform integrity.
• Improved the Community version's performance of Harness by 20% through a dedicated focus on adding MongoDB indexes by monitoring MongoDB Atlas.

PROJECTS
Performance Bottleneck Identifier
Tech-Stack: Flask, Python, React, Redis, Docker, Google Build, Kubernetes, AppDynamics, Locust
Solo development of a Full Stack Application that was used to identify performance bottlenecks in the SDLC cycles by integrating with monitoring tools and alarms the Engineering.

Awards
Winner of companywide hackathon, Harness
Won the companywide Hackathon for developing a gamified new user activation flow to build their first CI CD pipeline. It had better user engagement and increased the user activation rate for Harness. Received special mention from the CEO, Jyoti Bansal.

KEY SKILLS
• Proficient in Java, Python, Spring Boot, GCP, AWS, Kubernetes, Redis, Kafka, SQL, MongoDB, Git, OpenAI, AI, Flask, Django, System Design, Automation, Data Structures, Algorithms, Microservices, GraphQL, Postgres, Multi-threading, Unix, Parallel Processing, Data Engineering, Batch Processing, Serverless, Docker, Change Data Capture, Cloud infrastructure services, and serverless architecture.
• Professional in Test Driven Development, Agile Methodologies, continuous integration/continuous deployment (CI/CD), JUnit, DevOps, Rest Assured, and Selenium.

Publications
Elsevier
Credit Risk Predictor that can predict the eligible customers for further credit. Analyze the transaction data of the customers using the credit cards, Implement clustering algorithms such as Gaussian mixture models (GMM), Self-organizing maps.

EDUCATION
Golden Gate University, San Francisco | 2022-2024
Master of Business Administration, Business Analytics

VIT University | 2016-2020
Bachelor of Technology, Computer Science`,

  keywords_inserted: [
    'JavaScript', 'React.js', 'GraphQL', 'CI/CD', 'Cypress', 'Playwright', 'RESTful APIs', 'Docker', 'Kubernetes', 'Redis', 'MongoDB', 'GCP', 'AWS', 'Agile Methodologies', 'TDD', 'System Design', 'Automation', 'Data Structures', 'Algorithms', 'Microservices'
  ],

  score_improvement: 'Initial score: 60%, Final score: 95%',

  project_suggestions: [
    'Website Redesign using NextJS/React', 'Real-time Chat Application with WebSockets and React', 'E-commerce Platform with Headless CMS'
  ]
};

const ResumePage: React.FC = () => {
  const [parsedData, setParsedData] = useState(mockData);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Resume Analysis</h1>
      <TailoredResume content={parsedData.tailored_resume} />
      <KeywordsInserted keywords={parsedData.keywords_inserted} />
      <ScoreImprovement score={parsedData.score_improvement} />
      <ProjectSuggestions projects={parsedData.project_suggestions} />
    </div>
  );
};

export default ResumePage;
