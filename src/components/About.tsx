import { GraduationCap, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed animate-slide-in-left">
            I'm a passionate aspiring software developer with a strong foundation in computer science 
            and a drive to create innovative solutions. Currently pursuing my degree, I'm constantly 
            learning and expanding my skillset to stay at the forefront of technology.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Bachelor's in Computer Science
                  <br />
                  <span className="text-sm">Expected Graduation: 2025</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interests</h3>
                <p className="text-muted-foreground">
                  Web Development, AI/ML, Open Source, Problem Solving
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Goals</h3>
                <p className="text-muted-foreground">
                  Build impactful software, contribute to innovative projects, continuous growth
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
