// pages/cover.tsx
"use client"; // Ensure this component is treated as a client component

import React, { useState } from 'react';
import CoverLetter from '../../components/CoverLetter';

const mockData = {
  cover_letter: `Boopesh Shanmugam  
San Francisco, CA 94132  
+1 6284682302  
s.boopesh@gmail.com  
[LinkedIn Profile](https://www.linkedin.com/in/boopesh-shanmugam/)

[Date]

Hiring Manager  
The Aspen Group (TAG)  
Chicago, IL  

Dear Hiring Manager,

I am writing to express my interest in the Software Developer - Front End position at The Aspen Group (TAG). With over three years of hands-on experience in software development at Harness, I am confident in my ability to contribute effectively to your team’s ongoing success and help modernize TAG's tech stack. I am particularly excited about the opportunity to work with NextJS/React, headless CMS, and modern CI/CD pipelines to enhance the consumer healthcare experiences provided by your brands.

At Harness, I spearheaded the architectural design and development of microservices using technologies such as Spring Boot Java, Redis for messaging, and Docker for containerization, streamlining deployments through CI/CD workflows. This experience is directly aligned with TAG's emphasis on ensuring quality through automation tests such as Cypress and Playwright. My robust background in developing RESTful APIs and working with both Redis and GraphQL services will allow me to seamlessly integrate and contribute to your efforts in moving to a common platform.

Key achievements from my tenure at Harness include:

- Developing a Favorites Framework, significantly reducing user navigation efforts by 80%, enhancing the user experience, and contributing to customer retention.
- Engineering sophisticated integrations with Google Cloud Build, leveraging Kubernetes for optimal performance and achieving substantial deal value.
- Leading a comprehensive security overhaul, addressing over 30+ vulnerable libraries and thereby reinforcing product security and SOC2 compliance.

Furthermore, my project experience, such as solo developing a full stack application to identify performance bottlenecks using React and integrating monitoring tools, has honed my ability to translate designs and wireframes into high-quality code, optimize component performance, and submit thorough peer code reviews.

In pursuing my MBA with a focus on Business Analytics, I have further refined my capacity to contribute to data-driven decision-making processes, which aligns well with TAG's focus on A/B testing and rapid experimentation.

I am highly enthusiastic about bringing my skill set to TAG, a leader in retail healthcare, and contributing to your mission of making healthcare smarter and better for everyone. I am eager to be part of a team that leverages cutting-edge technology to provide high-quality consumer healthcare experiences at scale.

Thank you for considering my application. I look forward to the opportunity to discuss how my background, skills, and aspirations align with the needs of your development team.

Sincerely,  
Boopesh Shanmugam`
};

const CoverPage: React.FC = () => {
  const [parsedData, setParsedData] = useState(mockData);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Generated Cover Letter</h1>
      <CoverLetter content={parsedData.cover_letter} />
    </div>
  );
};

export default CoverPage;
