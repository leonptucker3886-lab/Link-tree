import Image from "next/image";
import Link from "next/link";
import { profile } from "@/config/profile";
import { SocialBar } from "@/components/SocialBar";

function CyberpunkGrid() {
  const dataStreams = [
    { left: '20%', top: '30%', delay: 0, duration: 4 },
    { left: '60%', top: '70%', delay: 1.2, duration: 3.5 },
    { left: '80%', top: '20%', delay: 2.4, duration: 4.2 },
    { left: '10%', top: '60%', delay: 0.8, duration: 3.8 },
    { left: '70%', top: '40%', delay: 1.6, duration: 4.5 },
  ];

  const circuitNodes = [
    { left: '25%', top: '35%', delay: 0 },
    { left: '45%', top: '65%', delay: 0.3 },
    { left: '75%', top: '25%', delay: 0.6 },
    { left: '15%', top: '75%', delay: 0.9 },
    { left: '85%', top: '45%', delay: 1.2 },
    { left: '35%', top: '15%', delay: 1.5 },
    { left: '65%', top: '85%', delay: 1.8 },
    { left: '55%', top: '55%', delay: 0.2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated scanlines */}
      <div className="absolute inset-0">
        <div className="animate-scanline absolute w-full h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-30"></div>
      </div>

      {/* Floating data streams */}
      {dataStreams.map((stream, i) => (
        <div
          key={i}
          className="absolute animate-data-flow opacity-20"
          style={{
            left: stream.left,
            top: stream.top,
            animationDelay: `${stream.delay}s`,
            animationDuration: `${stream.duration}s`
          }}
        >
          <svg width={200} height={2} viewBox="0 0 200 2">
            <line x1="0" y1="1" x2="200" y2="1" stroke="var(--color-neon)" strokeWidth="1" strokeDasharray="5 3" />
          </svg>
        </div>
      ))}

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-neon/20 rotate-45 animate-neon-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border border-purple/20 rotate-12 animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 border border-pink/20 -rotate-30 animate-neon-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 border border-neon/20 rotate-67 animate-neon-pulse" style={{ animationDelay: '0.5s' }}></div>

      {/* Circuit nodes */}
      {circuitNodes.map((node, i) => (
        <div
          key={`node-${i}`}
          className="absolute w-2 h-2 bg-neon rounded-full animate-neon-pulse opacity-40"
          style={{
            left: node.left,
            top: node.top,
            animationDelay: `${node.delay}s`
          }}
        ></div>
      ))}
    </div>
  );
}

function DataStream({ delay = 0, top = '50%' }: { delay?: number; top?: string }) {
  return (
    <div
      className="absolute animate-data-flow opacity-10"
      style={{
        left: '-100px',
        top,
        animationDelay: `${delay}s`,
        animationDuration: '4s'
      }}
    >
      <div className="flex items-center gap-2 text-neon text-xs font-mono">
        <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
        <span className="opacity-60">01010110 01100001 01101110 01110100 01100001</span>
        <div className="w-1 h-4 bg-purple animate-pulse"></div>
      </div>
    </div>
  );
}

function NeonIcon({ type }: { type: 'terminal' | 'code' | 'link' | 'user' | 'mail' | 'play' | 'briefcase' | 'star' }) {
  const icons = {
    terminal: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    code: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    link: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    user: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    mail: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect width={20} height={16} x={2} y={4} rx={2} />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    play: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
    ),
    briefcase: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    star: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  };

  return <div className="text-neon">{icons[type]}</div>;
}

const linkIcons = {
  0: 'terminal',
  1: 'code',
  2: 'briefcase',
  3: 'play',
  4: 'mail',
  5: 'user',
  6: 'link',
} as const;

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden circuit-pattern grid-bg">
      <CyberpunkGrid />

      {/* Data streams */}
      <DataStream delay={0} top="20%" />
      <DataStream delay={1.5} top="60%" />
      <DataStream delay={3} top="80%" />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-neon via-purple to-pink opacity-20 blur-lg"></div>
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={120}
                height={120}
                className="relative rounded-lg border-2 border-neon/50 shadow-2xl"
                unoptimized
              />
            </div>

            <h1 className="text-4xl font-bold mb-2 glitch-text" data-text={profile.name}>
              {profile.name}
            </h1>
            <p className="text-lg text-text-secondary font-mono tracking-wider">
              {profile.bio}
            </p>
          </div>

          {/* Links - Chaotic grid layout */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {profile.links.map((link, index) => (
              <Link
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group sharp-card neon-border p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon/20"
                style={{
                  gridColumn: index % 3 === 0 ? 'span 2' : 'span 1',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex items-start gap-3">
                  <NeonIcon type={linkIcons[index as keyof typeof linkIcons] || 'link'} />
                  <div className="flex-1">
                    <h3 className="font-bold text-sm mb-1 group-hover:text-neon transition-colors">
                      {link.title}
                    </h3>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent group-hover:via-neon transition-all duration-300"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center">
            <SocialBar socials={profile.socials} />
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-text-secondary text-xs font-mono">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-neon animate-pulse"></div>
              <span>SYSTEM ONLINE</span>
              <div className="w-2 h-2 bg-purple animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
