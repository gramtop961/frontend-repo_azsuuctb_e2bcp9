import { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Github, Linkedin, Instagram, Globe, Shield, Code, Award, Briefcase } from 'lucide-react';

const countersConfig = [
  { label: 'Software Projects', value: 30, icon: Code },
  { label: 'Major Applications', value: 5, icon: Briefcase },
  { label: 'Years of Experience', value: 3, icon: Award },
  { label: 'Compliance Rate', value: 100, suffix: '%', icon: Shield },
  { label: 'Critical Security Incidents', value: 0, icon: Shield },
];

function useAnimatedCounter(target, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (target - start) * ease);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return value;
}

export default function Hero() {
  const [openContacts, setOpenContacts] = useState(false);

  const heroImg = useMemo(
    () => (
      <div className="relative size-28 sm:size-32 md:size-36 rounded-full overflow-hidden ring-2 ring-blue-400/60 shadow-xl">
        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white text-3xl sm:text-4xl font-extrabold">
          KMV
        </div>
      </div>
    ),
    []
  );

  return (
    <section className="relative min-h-[90vh] w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {heroImg}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Kalvin Marpaho Valentino
            </h1>
            <p className="mt-2 text-blue-300 text-lg sm:text-xl font-medium">
              Software Developer & IT Manager
            </p>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-blue-100/90">
              I’m a software developer passionate about building reliable, secure, and user-centered digital solutions. With
              experience leading information security initiatives and managing development teams, I aim to create technology
              that drives business growth and compliance.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="/kalvin-valentino-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors px-4 py-2 text-sm font-semibold shadow"
              >
                <Download className="size-4" /> Download CV
              </a>
              <button
                onClick={() => setOpenContacts(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-blue-400/50 hover:border-blue-300 bg-black/40 backdrop-blur-sm px-4 py-2 text-sm font-semibold"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {countersConfig.map((c, idx) => (
            <CounterCard key={idx} {...c} />
          ))}
        </div>
      </div>

      {openContacts && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-md rounded-2xl bg-neutral-900 border border-blue-500/20 shadow-xl overflow-hidden">
            <div className="p-5 border-b border-white/5">
              <h3 className="text-lg font-semibold">Connect with Kalvin</h3>
              <p className="text-sm text-blue-200/80">Pick a platform below to get in touch.</p>
            </div>
            <div className="p-5 grid grid-cols-2 gap-3">
              <a href="mailto:work.kalvinvalentino@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400/30 bg-black/40 hover:bg-blue-950/40 transition-colors px-3 py-2 text-sm font-medium">
                <Mail className="size-4" /> Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400/30 bg-black/40 hover:bg-blue-950/40 transition-colors px-3 py-2 text-sm font-medium">
                <Linkedin className="size-4" /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400/30 bg-black/40 hover:bg-blue-950/40 transition-colors px-3 py-2 text-sm font-medium">
                <Github className="size-4" /> GitHub
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400/30 bg-black/40 hover:bg-blue-950/40 transition-colors px-3 py-2 text-sm font-medium">
                <Instagram className="size-4" /> Instagram
              </a>
              <a href="https://kalvinvalentino.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400/30 bg-black/40 hover:bg-blue-950/40 transition-colors px-3 py-2 text-sm font-medium col-span-2">
                <Globe className="size-4" /> Portfolio Website
              </a>
            </div>
            <div className="p-4 border-t border-white/5 text-right">
              <button onClick={() => setOpenContacts(false)} className="rounded-lg px-3 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CounterCard({ label, value, icon: Icon, suffix = '' }) {
  const animated = useAnimatedCounter(value);
  return (
    <div className="rounded-xl border border-blue-500/20 bg-black/40 backdrop-blur-sm p-4 flex items-center gap-3">
      <div className="rounded-lg bg-blue-600/20 text-blue-300 p-2">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xl font-extrabold text-white">
          {animated}
          {suffix}
          {value === 0 ? '' : '+'}
        </div>
        <div className="text-xs text-blue-200/80">{label}</div>
      </div>
    </div>
  );
}
