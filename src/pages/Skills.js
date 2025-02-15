const skills = ['Java', 'Python'];

const Skills = () => {
  return (
    <section id="skills" style={{ height: '100vh', padding: '50px' }}>
      <h2>My Skills</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              margin: '10px',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              transition: 'transform 0.2s',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
