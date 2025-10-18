import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'AI Image Generator',
      description: 'A single-page web application that generates AI images from text prompts using external APIs. Features include prompt history tracking and image download functionality for enhanced user experience.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'API Integration'],
      github: 'https://github.com/yourusername/ai-image-generator',
      demo: '#',
    },
    {
      title: 'Music Store Analysis',
      description: 'Comprehensive database analytics project featuring normalized relational database design and advanced SQL queries to identify customer behavior patterns, top genres, and high-revenue regions.',
      technologies: ['SQL', 'MySQL', 'Database Design', 'Query Optimization'],
      github: 'https://github.com/yourusername/music-store-analysis',
      demo: '#',
    },
    {
      title: 'Responsive Web Development',
      description: 'Frontend development project at ApexPlanet involving responsive web pages with dynamic elements, DOM manipulation, and cross-browser compatibility. Optimized layouts for various screen sizes.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className="border-none hover:shadow-[var(--project-card-shadow)] transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
