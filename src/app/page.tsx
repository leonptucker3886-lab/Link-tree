import Image from "next/image";
import Link from "next/link";
import { profile } from "@/config/profile";
import { SocialBar } from "@/components/SocialBar";

function Orb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <div
      className={`${className} absolute rounded-full blur-3xl animate-pulse-ring pointer-events-none`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

function OrbitDot({ duration, radius, delay = 0 }: { duration: number; radius: number; delay?: number }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit pointer-events-none"
      style={{
        "--orbit-duration": `${duration}s`,
        "--orbit-radius": `${radius}px`,
        animationDelay: `${delay}s`,
      } as React.CSSProperties}
    >
      <div className="w-1 h-1 rounded-full bg-accent/30" />
    </div>
  );
}

function LinkCard({ title, url, icon: Icon, index }: {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-shimmer group block p-5 sm:p-6 animate-fade-up"
      style={{ animationDelay: `${0.15 + index * 0.07}s` }}
    >
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 border border-accent/10 transition-all duration-300 group-hover:bg-accent/15 group-hover:border-accent/20">
          <Icon className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="flex-1 text-[15px] font-medium text-text/90 tracking-tight transition-colors duration-300 group-hover:text-text">
          {title}
        </span>
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </Link>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx={12} cy={12} r={10} />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width={20} height={14} x={2} y={6} rx={2} />
    </svg>
  );
}

function PenIcon({ className }: { className?: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width={20} height={16} x={2} y={4} rx={2} />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function DocIcon({ className }: { className?: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function ContactIcon({ className }: { className?: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
    </svg>
  );
}

const linkIcons = [GlobeIcon, BriefcaseIcon, PenIcon, PlayIcon, MailIcon, DocIcon, ContactIcon] as const;

export default function Home() {
  return (
    <main className="min-h-screen relative mesh-bg noise">
      {/* Ambient orbs */}
      <Orb className="top-[5%] left-[8%] w-[500px] h-[500px] bg-accent/8" delay={0} />
      <Orb className="bottom-[10%] right-[5%] w-[400px] h-[400px] bg-blue-500/6" delay={2} />
      <Orb className="top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/4" delay={1} />

      {/* Orbital dots */}
      <OrbitDot duration={30} radius={200} />
      <OrbitDot duration={45} radius={280} delay={5} />
      <OrbitDot duration={60} radius={350} delay={10} />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16 sm:px-6">
        <div className="w-full max-w-md">
          {/* Avatar */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl animate-pulse-ring" />
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={112}
                height={112}
                className="relative rounded-full avatar-glow"
                unoptimized
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text mb-2">
              {profile.name}
            </h1>
            <p className="text-base text-text-secondary font-medium tracking-wide">
              {profile.bio}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 mb-10">
            {profile.links.map((link, index) => {
              const Icon = linkIcons[index] || GlobeIcon;
              return (
                <LinkCard
                  key={link.title}
                  title={link.title}
                  url={link.url}
                  icon={Icon}
                  index={index}
                />
              );
            })}
          </div>

          {/* Social */}
          <div className="flex justify-center mb-10 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <SocialBar socials={profile.socials} />
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-text-muted/60 tracking-widest uppercase animate-fade-in" style={{ animationDelay: "1s" }}>
            Built with Next.js
          </p>
        </div>
      </div>
    </main>
  );
}
