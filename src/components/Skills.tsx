import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React', 'Tailwind CSS', 'Node.js'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'MySQL', 'REST APIs', 'API Integration'],
    },
    {
      category: 'Methodologies',
      skills: ['SDLC', 'Agile', 'OOP', 'Data Structures & Algorithms'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.category}
              className="animate-slide-in-left"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-base font-medium bg-[hsl(var(--skill-card))] hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
