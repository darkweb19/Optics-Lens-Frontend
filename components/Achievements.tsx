import { Award, RefreshCcw, Glasses } from 'lucide-react';

const achievements = [
  {
    icon: <Glasses className="h-8 w-8" />,
    title: '100M+ Units Sold',
    description: 'Trusted by millions worldwide',
  },
  {
    icon: <RefreshCcw className="h-8 w-8" />,
    title: '30 Days Return',
    description: 'Hassle-free returns',
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: '100% Accurate Lenses',
    description: 'Precision guaranteed',
  },
];

export default function Achievements() {
  return (
    <div className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 bg-primary rounded-full text-primary-foreground">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}