import { Award, Rocket } from 'lucide-react';

const achievements = [
  'Successfully managed and led ISMS implementation, achieving ISO 27001 Certification.',
  'Improved system performance and reduced security vulnerabilities.',
  'Coordinated multiple cross-functional teams for faster project delivery.',
  'Built scalable web solutions used by thousands of users.',
];

export default function Achievements() {
  return (
    <section className="relative py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Award className="size-6 text-blue-400" />
          <h2 className="text-2xl sm:text-3xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {achievements.map((text, idx) => (
            <div key={idx} className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-950/60 to-black/40 p-5">
              <div className="flex items-start gap-3">
                <Rocket className="size-5 text-blue-300 mt-0.5" />
                <p className="text-sm text-blue-100/90">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
