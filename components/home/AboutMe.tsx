import Link from "next/link";


const About = () => {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid-container">
        <div className='grid-item'>
            <h3>Tech-stack</h3>
            <ul>
                <li>HMTL</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>
            </div>
          <div className='grid-item'>
            <h3>About Me</h3>
            <p>
                Hello! I'm Nicolas Edeni, a passionate web developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code. When I'm not coding, you can find me exploring the latest tech trends or working on personal projects to further hone my skills.
            </p>
            <p>
              I have a strong foundation in both front-end and back-end technologies, and I enjoy bringing ideas to life through code.
            </p>

          </div>
          <div className='grid-item'>
            <img src="" alt="Profile Picture" />
          </div>
        </div>
    </main>
  );
}

export default About;   