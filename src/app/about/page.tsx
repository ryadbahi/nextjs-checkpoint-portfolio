function About() {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg mb-4">
          Hello! I'm a software developer with a passion for creating beautiful,
          functional, and user-centric web applications.
        </p>
        <p className="text-lg mb-4">
          I have experience working with a variety of technologies, including
          JavaScript, React, Node.js, and more.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript & TypeScript</li>
            <li>React & Next.js</li>
            <li>Node.js & Express</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default About;
