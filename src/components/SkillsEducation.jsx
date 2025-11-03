import { Code2, Database, Cpu, GitBranch, Figma, Mail, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

const skills = [
  {
    group: 'Languages & Frameworks',
    items: ['PHP (Laravel)', 'Java', 'JavaScript'],
    icon: Code2,
  },
  {
    group: 'Databases',
    items: ['MySQL', 'MongoDB'],
    icon: Database,
  },
  {
    group: 'Tools',
    items: ['GitHub', 'GitLab', 'Postman', 'Jira', 'Trello', 'Notion'],
    icon: GitBranch,
  },
  {
    group: 'Others',
    items: ['Node.js', 'C#', 'Unity', 'Visual Studio'],
    icon: Cpu,
  },
  {
    group: 'Design Tools',
    items: ['Canva', 'Filmora', 'Vegas Pro'],
    icon: Figma,
  },
];

const educationSlides = [
  {
    title: 'Gunadarma University (2018–2022)',
    subtitle: "Bachelor’s Degree in Information Systems",
    url: 'https://gunadarma.ac.id',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Genesha Flight Academy (2017)',
    subtitle: 'CPL–IR License Conversion',
    url: 'https://genesaacademy.com',
    image: 'https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'All Asia Aviation Academy (2015–2016)',
    subtitle: 'PPL–CPL–IR License Training and Certification',
    url: 'https://aaa-central.com',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SMAT Krida Nusantara (2012–2015)',
    subtitle: 'High School',
    url: 'https://kridanusantara.com',
    image: 'https://images.unsplash.com/photo-1629131973019-56596eb9975a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTTUFUJTIwS3JpZGElMjBOdXNhbnRhcmElMjAlMjgyMDEyJUUyJTgwJTkzMjAxNSUyOXxlbnwwfDB8fHwxNzYyMTc4NjQxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function SkillsEducation() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-950/40 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Technical Skills</h2>
        <p className="text-blue-200/80 mt-1">A snapshot of tools and technologies</p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, idx) => (
            <div key={idx} className="rounded-xl border border-blue-500/20 bg-black/40 backdrop-blur-sm p-5">
              <div className="flex items-center gap-3">
                <s.icon className="size-5 text-blue-300" />
                <h3 className="font-semibold">{s.group}</h3>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((it, i) => (
                  <li key={i} className="text-xs bg-blue-900/30 border border-blue-500/30 rounded-md px-2 py-1">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mt-14">Education</h2>
        <p className="text-blue-200/80 mt-1">Key milestones and certifications</p>
        <EducationCarousel />

        <AboutAndContact />
      </div>
    </section>
  );
}

function EducationCarousel() {
  const [index, setIndex] = useState(0);
  const len = educationSlides.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % len), 4500);
    return () => clearInterval(id);
  }, [len]);

  const slide = educationSlides[index];

  return (
    <div className="mt-6 relative">
      <div className="rounded-2xl overflow-hidden border border-blue-500/20 bg-black/40">
        <div className="grid md:grid-cols-2">
          <div className="relative h-56 md:h-72">
            <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold">{slide.title}</h3>
            <p className="text-blue-200/90 mt-1">{slide.subtitle}</p>
            <a href={slide.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-blue-300 hover:text-blue-200 underline">
              {slide.url.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <button onClick={() => setIndex((i) => (i - 1 + len) % len)} className="px-3 py-1.5 rounded-lg border border-blue-500/30 bg-black/40">Prev</button>
        <div className="flex gap-1">
          {educationSlides.map((_, i) => (
            <span key={i} className={`size-2 rounded-full ${i === index ? 'bg-blue-400' : 'bg-blue-400/30'}`} />
          ))}
        </div>
        <button onClick={() => setIndex((i) => (i + 1) % len)} className="px-3 py-1.5 rounded-lg border border-blue-500/30 bg-black/40">Next</button>
      </div>
    </div>
  );
}

function AboutAndContact() {
  return (
    <div className="mt-16 grid lg:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-blue-500/20 bg-black/40 p-6">
        <h3 className="text-xl font-semibold">About Me</h3>
        <p className="text-blue-100/90 mt-3 text-sm">
          I’m passionate about building technology that makes a difference. My approach combines structure, creativity, and
          adaptability — qualities that help me lead teams, manage risks, and deliver results under pressure.
        </p>
      </div>
      <div className="rounded-2xl border border-blue-500/20 bg-black/40 p-6">
        <h3 className="text-xl font-semibold">Contact</h3>
        <div className="mt-3 space-y-2 text-sm text-blue-100/90">
          <p className="flex items-center gap-2"><Mail className="size-4 text-blue-300" /> work.kalvinvalentino@gmail.com</p>
          <p className="flex items-center gap-2"><MapPin className="size-4 text-blue-300" /> South Jakarta, Indonesia</p>
          <div className="flex items-center gap-3 mt-3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200"><Linkedin className="size-5" /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200"><Github className="size-5" /></a>
            <a href="https://kalvinvalentino.com" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200"><Globe className="size-5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
