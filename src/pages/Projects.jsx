import ProjectCard from "../components/ProjectCard";

function Projects(){

  const projects = [

    {
      title: "Weather App",
      description: "React weather application using API",
      link: "#"
    },

    {
      title: "Data Dashboard",
      description: "Interactive analytics dashboard",
      link: "#"
    }

  ]

  return(

    <section id="projects">

      <h2>Projects</h2>

      <div className="projects-grid">

        {projects.map((p,i)=>(
          <ProjectCard
            key={i}
            title={p.title}
            description={p.description}
            link={p.link}
          />
        ))}

      </div>

    </section>

  )

}

export default Projects;