export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Review</h1>
        <h2>Phase 1: FE</h2>
        <ul>
          <li>
            <strong>React Advanced Concepts</strong>
            <ul>
              <li>Custom hooks creation and implementation</li>
              <li>Context API and state management patterns</li>
              <li>
                Memoization (useMemo, useCallback) and performance optimization
              </li>
              <li>Error boundaries and suspense</li>
              <li>Server components in React 18+</li>
            </ul>
          </li>
          <li>
            <strong>TypeScript Mastery</strong>
            <ul>
              <li>Advanced type definitions and utility types</li>
              <li>Generics and conditional types</li>
              <li>Type guards and narrowing</li>
              <li>Declaration merging</li>
              <li>Module augmentation</li>
            </ul>
          </li>
        </ul>

        <h2>Phase 2: Expand Full-Stack Capabilities</h2>
        <ul>
          <li>
            <strong>Node.js and API Development</strong>
            <ul>
              <li>RESTful API best practices</li>
              <li>GraphQL schema design and resolvers</li>
              <li>Authentication and authorization patterns</li>
              <li>Middleware implementation</li>
              <li>API security best practices</li>
            </ul>
          </li>
          <li>
            <strong>AWS Cloud Proficiency</strong>
            <ul>
              <li>Serverless architecture with AWS Lambda</li>
              <li>API Gateway configuration and management</li>
              <li>DynamoDB and data persistence</li>
              <li>S3 for storage solutions</li>
              <li>CloudFormation or CDK for infrastructure as code</li>
              <li>CI/CD pipelines with AWS CodePipeline</li>
            </ul>
          </li>
          <li>
            <strong>Next.js Advanced Topics</strong>
            <ul>
              <li>Server-side rendering strategies</li>
              <li>Static site generation optimization</li>
              <li>API routes implementation</li>
              <li>Next.js middleware</li>
              <li>Image optimization</li>
              <li>New App Router architecture</li>
            </ul>
          </li>
        </ul>

        <h2>Phase 3: Technical Interview Preparation (Ongoing)</h2>
        <ul>
          <li>
            <strong>Data Structures & Algorithms</strong>
            <ul>
              <li>Arrays and strings manipulation</li>
              <li>Hash tables and sets</li>
              <li>Trees and graphs</li>
              <li>Dynamic programming</li>
              <li>Time and space complexity analysis</li>
              <li>2-3 LeetCode problems daily (focus on medium difficulty)</li>
            </ul>
          </li>
          <li>
            <strong>System Design</strong>
            <ul>
              <li>Frontend architecture patterns</li>
              <li>Microservices vs. monoliths</li>
              <li>Database design</li>
              <li>Caching strategies</li>
              <li>API design considerations</li>
              <li>Scalability patterns</li>
            </ul>
          </li>
          <li>
            <strong>Testing Expertise</strong>
            <ul>
              <li>Unit testing with Jest</li>
              <li>Component testing with React Testing Library</li>
              <li>End-to-end testing with Cypress</li>
              <li>Test-driven development practice</li>
              <li>Mock and stub implementation</li>
            </ul>
          </li>
        </ul>

        <h2>Phase 4: Portfolio Enhancement (2-4 weeks)</h2>
        <ul>
          <li>
            <strong>Project 1: Full-Stack Application</strong>
            <ul>
              <li>
                Implement a complete web application using React, TypeScript,
                and Next.js
              </li>
              <li>
                Include authentication, API integration, and complex state
                management
              </li>
              <li>Deploy using AWS services (Lambda, API Gateway, S3)</li>
              <li>Implement CI/CD pipeline</li>
              <li>Include comprehensive testing</li>
            </ul>
          </li>
          <li>
            <strong>Project 2: Specialized Application</strong>
            <ul>
              <li>
                Create a real-time application (chat, collaboration tool, etc.)
              </li>
              <li>Implement serverless architecture</li>
              <li>Use WebSockets or similar technology</li>
              <li>Focus on performance optimization</li>
              <li>Document architecture decisions</li>
            </ul>
          </li>
        </ul>

        <h2>Phase 5: Remote Job Interview Skills (Ongoing)</h2>
        <ul>
          <li>
            <strong>Communication Skills</strong>
            <ul>
              <li>Practice explaining complex technical concepts clearly</li>
              <li>Improve written documentation skills</li>
              <li>Prepare stories about past projects using the STAR method</li>
              <li>Practice async communication through technical writing</li>
            </ul>
          </li>
          <li>
            <strong>Mock Interviews</strong>
            <ul>
              <li>Schedule 1-2 mock interviews weekly</li>
              <li>Record and review your performance</li>
              <li>Practice whiteboarding solutions</li>
              <li>Get comfortable explaining your thought process aloud</li>
            </ul>
          </li>
          <li>
            <strong>Remote Collaboration Tools</strong>
            <ul>
              <li>Git workflow mastery</li>
              <li>Documentation best practices</li>
              <li>Project management tools (Jira, Asana, etc.)</li>
              <li>Asynchronous communication tools</li>
            </ul>
          </li>
        </ul>

        <h2>Phase 6: Job Search Strategy (Parallel to other phases)</h2>
        <ul>
          <li>
            <strong>Resume and LinkedIn Optimization</strong>
            <ul>
              <li>Update with latest skills and projects</li>
              <li>Highlight remote work capabilities</li>
              <li>Add metrics and accomplishments</li>
              <li>Optimize for ATS systems</li>
            </ul>
          </li>
          <li>
            <strong>Portfolio Website</strong>
            <ul>
              <li>Create a personal website showcasing your projects</li>
              <li>Include a technical blog if possible</li>
              <li>Make it accessible and responsive</li>
            </ul>
          </li>
          <li>
            <strong>Job Application Strategy</strong>
            <ul>
              <li>Set daily/weekly application goals</li>
              <li>Research companies with strong remote cultures</li>
              <li>Customize applications for each role</li>
              <li>Focus on platforms specializing in remote tech jobs</li>
            </ul>
          </li>
        </ul>

        <h2>Resources for Each Phase</h2>
        <p>For each area, I recommend the following types of resources:</p>
        <ul>
          <li>Online courses (Udemy, Frontend Masters, etc.)</li>
          <li>Documentation (React, TypeScript, AWS)</li>
          <li>GitHub repositories with example projects</li>
          <li>Technical books for deeper understanding</li>
          <li>YouTube tutorials for visual learners</li>
          <li>Coding challenge websites (LeetCode, HackerRank)</li>
          <li>Tech blogs and newsletters</li>
        </ul>
      </main>
    </div>
  );
}
