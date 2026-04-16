function Home() {
  return (
    <section id="home">
      <h2>Hi, I'm Baidaho Zanre</h2>
      <p>IT Graduate | Desktop Publisher | Aspiring IT Support & Systems Professional</p>
      
   <div className="hero-buttons">
          <a href="#projects" className="primary-btn">View My Work</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img
          src={profilePhoto}
          alt="Professional portrait of Baidaho"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Home;
