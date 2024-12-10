const projects = [
  { title: 'J', description: 'A platform', img: 'path-to-image' },
  { title: 'P', description: 'My personal portfolio built with ReactJS.', img: 'path-to-image' },
];

const Projects = () => {
  return (
    <section id="projects" style={{ height: '100vh', padding: '50px' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {projects.map((project) => (
          <div key={project.title} style={{ margin: '20px', textAlign: 'center' }}>
            <img src={project.img} alt={project.title} style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


// import React from 'react';

// const Projects = () => {
//   return (
//     <div>
//       <div className="home-header">
//         <h1>Projects!</h1>
//         <p>My name is PLAY PPLAY and I am a [UNFINISHED] based in London.</p>
//       </div>

//       <div className="home-content">
//         <p>
//           Explore my projects, learn more about me, or get in touch with me through the links below.
//         </p>
//       </div>

//       <div className="social-links">
//         <a href="https://link" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-linkedin"></i> LinkedIn
//         </a>
//         <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-github"></i> GitHub
//         </a>
//         <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-twitter"></i> Twitter
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Projects;
