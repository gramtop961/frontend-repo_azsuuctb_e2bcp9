import { Briefcase, Shield, Settings, Bug } from 'lucide-react';

const timeline = [
  {
    company: 'Nasari Digital – Financial Services',
    role: 'SMKI Implementation Lead & IT Manager',
    period: '2025–Present',
    points: [
      'Led the implementation of the Information Security Management System (ISMS), achieving ISO 27001 certification.',
      'Managed company-wide security controls, risk assessments, and internal audits.',
    ],
    icon: Shield,
  },
  {
    company: 'Nasari Digital – Financial Services',
    role: 'Technical Coordinator',
    period: '2024–Present',
    points: [
      'Coordinated communication between internal developers and vendors.',
      'Supervised system performance, integrations, and issue resolution.',
    ],
    icon: Settings,
  },
  {
    company: 'Nasari Digital – Financial Services',
    role: 'Web Developer',
    period: '2023–Present',
    points: [
      'Developed and maintained interactive website and web apps.',
      'Collaborated to enhance UX and optimize code efficiency.',
    ],
    icon: Briefcase,
  },
  {
    company: 'Nasari Digital – Financial Services',
    role: 'Intern Backend Engineer',
    period: '2023',
    points: [
      'Improved dashboard performance and debugged legacy issues.',
    ],
    icon: Bug,
  },
];

export default function Experience() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-blue-950/40 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
        <p className="text-blue-200/80 mt-1">A timeline of roles and responsibilities</p>

        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-400/30 to-transparent" />
          <ol className="space-y-8">
            {timeline.map((item, idx) => (
              <li key={idx} className="relative pl-14 sm:pl-20">
                <div className="absolute left-0 sm:left-2 top-1.5 size-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                  <item.icon className="size-4 text-white" />
                </div>
                <div className="rounded-xl border border-blue-500/20 bg-black/40 backdrop-blur-sm p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <span className="text-xs text-blue-200/70">{item.period}</span>
                  </div>
                  <div className="text-sm text-blue-200/90 mt-1">{item.company}</div>
                  <ul className="mt-3 list-disc list-inside text-sm text-blue-100/90 space-y-1">
                    {item.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
