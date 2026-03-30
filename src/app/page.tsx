import Image from "next/image";
import Link from "next/link";
import { profile } from "@/config/profile";
import { SocialBar } from "@/components/SocialBar";

function FloatingShape({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <div
      className={`${className} absolute opacity-10 animate-float`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

function GradientOrb({ position, size = 200 }: { position: string; size?: number }) {
  return (
    <div
      className={`absolute ${position} rounded-full animate-gradient`}
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)',
        filter: 'blur(40px)',
        opacity: 0.1
      }}
    />
  );
}

function ModernCard({ title, url, icon: Icon }: { title: string; url: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="modern-card group block p-6 rounded-xl"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-accent/20 to-accent-secondary/20 group-hover:from-accent/30 group-hover:to-accent-secondary/30 transition-all duration-300">
          <Icon className="w-6 h-6 text-accent group-hover:text-accent-secondary transition-colors" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mt-2 group-hover:via-accent/50 transition-all duration-300" />
        </div>
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-secondary group-hover:text-accent transition-colors"
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
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx={12} cy={12} r={10} />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width={20} height={14} x={2} y={6} rx={2} />
    </svg>
  );
}

function PenIcon({ className }: { className?: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect width={20} height={16} x={2} y={4} rx={2} />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ResumeIcon({ className }: { className?: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.59 0 1.11.27 1.46.72.35.45.57 1.05.57 1.71s-.23 1.27-.57 1.72c-.35.45-.87.72-1.46.72-.59 0-1.11-.27-1.46-.72-.35-.45-.57-1.05-.57-1.71s.23-1.27.57-1.72c.35-.45.87-.72 1.46-.72z" />
    </svg>
  );
}

function ContactIcon({ className }: { className?: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 12H4V6h16v10z" />
    </svg>
  );
}

const linkIcons = {
  0: GlobeIcon,
  1: BriefcaseIcon,
  2: PenIcon,
  3: PlayIcon,
  4: MailIcon,
  5: ResumeIcon,
  6: ContactIcon,
} as const;

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden geo-bg">
      {/* Floating geometric shapes */}
      <FloatingShape
        className="top-20 left-20 w-32 h-32 bg-accent/10 rounded-full"
        delay={0}
      />
      <FloatingShape
        className="top-40 right-32 w-24 h-24 bg-accent-secondary/10 rotate-45"
        delay={2}
      />
      <FloatingShape
        className="bottom-32 left-32 w-28 h-28 bg-accent-tertiary/10 rounded-lg"
        delay={4}
      />

      {/* Gradient orbs */}
      <GradientOrb position="top-1/4 left-1/4" size={300} />
      <GradientOrb position="bottom-1/4 right-1/4" size={250} />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-in">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary opacity-20 blur-xl animate-pulse-glow"></div>
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={140}
                height={140}
                className="relative rounded-2xl border-2 border-accent/30 shadow-2xl glow-effect"
                unoptimized
              />
            </div>

            <h1 className="text-5xl font-bold mb-4 gradient-text">
              {profile.name}
            </h1>
            <p className="text-xl text-text-secondary font-light tracking-wide">
              {profile.bio}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {profile.links.map((link, index) => {
              const Icon = linkIcons[index as keyof typeof linkIcons] || GlobeIcon;
              return (
                <div key={link.title} className="animate-slide-in" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <ModernCard title={link.title} url={link.url} icon={Icon} />
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex justify-center animate-slide-in" style={{ animationDelay: '0.8s' }}>
            <SocialBar socials={profile.socials} />
          </div>

          {/* Footer */}
          <div className="text-center mt-12 text-text-muted text-sm animate-slide-in" style={{ animationDelay: '1s' }}>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Forged with Next.js</span>
              <div className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
