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
            Passionate final-year B.Tech student in AI & ML with hands-on experience in Java, JavaScript, React, SQL, and modern web technologies. 
            Familiar with SDLC, Agile methodology, and Object-Oriented Programming. A self-starter with strong problem-solving skills, 
            eager to learn and contribute to innovative technology projects. Experienced in developing web applications, database analysis, and integrating APIs.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  B.Tech in Computer Science (AI & ML)
                  <br />
                  <span className="text-sm font-medium">Mohan Babu University</span>
                  <br />
                  <span className="text-sm">CGPA: 9.73 | Expected: July 2026</span>
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
                  Artificial Intelligence, Machine Learning, Frontend Development, API Integration, Database Analytics
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
                  Contribute to AI/ML innovations, build scalable web applications, and continuously enhance technical expertise
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
