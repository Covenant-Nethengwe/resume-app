import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    //TODO: A call to the google cloud run function for number of vistor counter
    
return (
    <>
      <header>
          <p>You are the: <span id="visitor-count">0</span> person to visit this site. Thank you!!</p>
      </header>
    
      <main>
        <section id="main">
            <section id="left">
                <h2>Profession</h2>
                <p>Software Engineer/Architect</p>
                <aside>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: Pretoria, Gauteng, 0183</li>
                        <li>Phone: 067 415 9778</li>
                        <li>Email: covenantn9@gmail.com</li>
                    </ul>
                </aside>
                <aside>
                    <h3>Links</h3>
                    <ul>
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                    </ul>
                </aside>
                <aside>
                    <h3>Skills</h3>
                    <ul>
                        <li>C#</li>
                        <li>ASP.NET</li>
                        <li>ADO.NET</li>
                        <li>NodeJs</li>
                        <li>SQL</li>
                        <li>T-SQL</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>GoLang</li>
                        <li>JSON</li>
                        <li>XML</li>
                        <li>CSS3</li>
                        <li>React.js</li>
                        <li>Razor Pages</li>
                        <li>Angular</li>
                        <li>JQuery</li>
                        <li>Ajax</li>
                        <li>Bootstrap</li>
                        <li>MongoDB</li>
                        <li>Oracle</li>
                        <li>Linux</li>
                        <li>Postgres</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
                        <li>BitBucket</li>
                        <li>Azure/DevOps</li>
                        <li>Discord</li>
                        <li>Slack</li>
                        <li>Jira</li>
                        <li>Kubernetes</li>
                        <li>Grafana</li>
                        <li>PUML</li>
                        <li>Figma</li>
                        <li>Draw.io</li>
                    </ul>
                </aside>
            </section>
            <section id="right">
                <aside>
                    <h2>Bio</h2>
                    <p>
                        Results-driven and highly motivated Software Engineer with 2 years of experience in with both front-end and back-end development within IoT, telecommunication and financial service industry. Proven track record of working with minimum to complex monolithic and microservice architecture software applications. Proficient in Nodejs, Java, C#, React and React Native. I am immensely passionate about problem solving and making life easy for the ordinary South African and beyond.
                    </p>
                </aside>
                <aside>
                    <h2>
                        Work Experience
                    </h2>
                    <details>
                        <summary>Cloud, Hosting, Application & Security: Solution Architect</summary>
                        <p>
                            2024-05 — Current
                        </p>
                        <ul>
                            <li><b>Company:</b> Vodacom</li>
                            <li>
                                <b>Responsibilities:</b>
                                <ul>
                                    <li>Documenting RFI cloud solutions for potential customers.</li>
                                    <li>Researching cloud services, documenting capabilities, and performing competitor analysis.</li>
                                </ul>
                            </li>
                        </ul>
                    </details>
                    <details>
                        <summary>Software Engineer</summary>
                        <p>
                            2023-02 — 2024-04
                        </p>
                        <ul>
                            <li><b>Company:</b> Vodacom</li>
                            <li>
                                <b>Responsibilities:</b>
                                <ul>
                                    <li>Conduct unit testing to ensure code reliability. Debug and troubleshoot issues during testing.</li>
                                    <li>Ensuring that code test coverage is over 80% using SonarQube.</li>
                                    <li>Work closely with other team members. Participate in code reviews and provide feedback.</li>
                                    <li>Use version control systems (e.g., Git) to manage source code. Collaborate with team members using code repositories.</li>
                                    <li>Integrate software components with third-party services or systems. Ensure seamless interoperability between different modules.</li>
                                    <li>Create and maintain technical documentation for code, APIs, and processes. Document software architecture and design decisions.</li>
                                    <li>Agile development sprint planning.</li>
                                    <li>Implementing new system requirements.</li>
                                    <li>Interact with cross-functional (experienced software and QA engineers) team members on delivery processes.</li>
                                    <li>Learning about the infrastructure and engineering processes of the domain and apply in my daily tasks.</li>
                                    <li>Writing efficient, maintainable, and scalable code.</li>
                                    <li>Implement software solutions according to design specifications.</li>
                                    <li>Developed, maintain, and support MyVodacomApp, Vodapay, TOBI, and web applications.</li>
                                </ul>
                            </li>
                        </ul>
                    </details>
                    <details>
                        <summary>Software Developer</summary>
                        <p>
                            2022-09 — 2023-01
                        </p>
                        <ul>
                            <li><b>Company:</b> Polar Monitoring</li>
                            <li>
                                <b>Responsibilities:</b>
                                <ul>
                                    <li>Migrating legacy system&#39;s frontend from Razor Pages to MudBlazor UI framework.</li>
                                    <li>Implement CRUD (Create, Read, Update, Delete) operations for new system requirement using ASP.NET.</li>
                                    <li>Implementing software new requirements while following SOLID principles.</li>
                                    <li>Writing C# code to automate testing Fieldbus digital input/output for product quality assurance.</li>
                                    <li>Follow and improve business practices at every stage of development.</li>
                                </ul>
                            </li>
                        </ul>
                    </details>
                    <details>
                        <summary>Turner</summary>
                        <p>
                            2017-01 — 2018-08
                        </p>
                        <ul>
                            <li><b>Company:</b> Knorr Bremse</li>
                            <li>
                                <b>Responsibilities:</b>
                                <ul>
                                    <li>Adhering to health and safety acts.</li>
                                    <li>Machining components for locomotive braking systems using CNC lathe and milling machines.</li>
                                    <li>Assembling locomotive braking systems.</li>
                                    <li>Performing various other machining tasks as required.</li>
                                </ul>
                            </li>
                        </ul>
                    </details>
                </aside>
                <aside>
                    <h2>
                        Personal Projects
                    </h2>
                    <details>
                        <summary>Learnsign</summary>
                        <ul>
                            <li><b>Project Name:</b> Learnsign</li>
                            <li><b>Description:</b> The AR/VR Africa Hackathon is a Meta sponsored program. My team and I developed a software solution to help teach sign language on the following social media platforms, Snapchat and Facebook, and Instagram using SparkAR.</li>
                            <li><b>Responsibilities:</b> Pair-programming and learning SparkAR functionality for implementing the project.</li>
                            <li><b>Achievements:</b> Won 3rd place.</li>
                        </ul>
                    </details>
                    <details>
                        <summary>Bookworm</summary>
                        <ul>
                            <li><b>Project Name:</b> Bookworm</li>
                            <li><b>Description:</b> A web game designed for children aged 3+ to learn how to spell words, by use of controlling a snake, the objective being to spell a given word.</li>
                            <li><b>Responsibilities:</b> My role was to develop the frontend of the game using HTML and CSS and did a bit of logic to control the snake using P5js.</li>
                            <li><b>Achievements:</b> The game was developed while participating in the MTN ayoba gaming hackathon competition.</li>
                        </ul>
                    </details>
                </aside>
                <aside>
                    <h2>
                        Education
                    </h2>
                    <details>
                        <summary>Belgium Campus ITVersity</summary>
                        <p>
                            2019-02 — 2024-05
                        </p>
                        <ul>
                            <li>
                                Honours Degree in Computer Science
                            </li>
                        </ul>
                    </details>
                    <details>
                        <summary>Northwest University Business School</summary>
                        <p>
                            2023-02 — 2023-12
                        </p>
                        <ul>
                            <li>
                                Programme in Enterprise and Technology Management
                            </li>
                        </ul>
                    </details>
                    <details>
                        <summary>Pretoria Technical High School</summary>
                        <p>
                            2012-01 — 2016-01
                        </p>
                        <ul>
                            <li>
                                Matric Certification
                            </li>
                        </ul>
                    </details>
                </aside>
                <aside>
                    <h2>
                        Certifications
                    </h2>
                    <details>
                        <summary>AWS</summary>
                        <p>2022-02</p>
                        <p>AWS Cloud Practitioner</p>
                    </details>
                    <details>
                        <summary>Apollo</summary>
                        <p>2024-03</p>
                        <p>Apollo GraphQL</p>
                    </details>
                    <details>
                        <summary>GCP</summary>
                        <p>2024-10</p>
                        <p>GCP Professional Solution Architect</p>
                    </details>
                </aside>
            </section>
        </section>
    </main>
    <footer>
        
    </footer>
    </>
  );
}
