import Image from "next/image";
import Link from "next/link";
import { profile } from "@/config/profile";
import { SocialBar } from "@/components/SocialBar";

function TreeOfLifeSVG() {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
      aria-hidden
    >
      {/* Trunk */}
      <path
        d="M200 500 C200 500 185 420 180 360 C175 300 170 260 175 220 C180 180 190 150 200 120 C210 150 220 180 225 220 C230 260 225 300 220 360 C215 420 200 500 200 500Z"
        fill="#785e3a"
      />
      {/* Roots */}
      <path
        d="M200 500 C180 490 140 485 100 495 C130 480 160 475 180 480"
        stroke="#5c4033"
        strokeWidth={3}
        fill="none"
      />
      <path
        d="M200 500 C220 490 260 485 300 495 C270 480 240 475 220 480"
        stroke="#5c4033"
        strokeWidth={3}
        fill="none"
      />
      <path
        d="M200 500 C190 495 160 500 130 510"
        stroke="#5c4033"
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M200 500 C210 495 240 500 270 510"
        stroke="#5c4033"
        strokeWidth={2}
        fill="none"
      />
      {/* Main branches */}
      <path
        d="M190 240 C160 210 110 190 60 170"
        stroke="#5c4033"
        strokeWidth={4}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M210 240 C240 210 290 190 340 170"
        stroke="#5c4033"
        strokeWidth={4}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M185 280 C150 260 90 250 40 260"
        stroke="#5c4033"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M215 280 C250 260 310 250 360 260"
        stroke="#5c4033"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M180 310 C145 295 85 290 30 310"
        stroke="#5c4033"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M220 310 C255 295 315 290 370 310"
        stroke="#5c4033"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
      />
      {/* Sub-branches */}
      <path d="M120 195 C100 170 70 155 40 140" stroke="#5c4033" strokeWidth={2} strokeLinecap="round" fill="none" />
      <path d="M280 195 C300 170 330 155 360 140" stroke="#5c4033" strokeWidth={2} strokeLinecap="round" fill="none" />
      <path d="M100 255 C80 235 50 220 20 200" stroke="#5c4033" strokeWidth={2} strokeLinecap="round" fill="none" />
      <path d="M300 255 C320 235 350 220 380 200" stroke="#5c4033" strokeWidth={2} strokeLinecap="round" fill="none" />
      {/* Canopy - leaf clusters */}
      <circle cx={60} cy={165} r={30} fill="#4a7c59" opacity={0.3} />
      <circle cx={340} cy={165} r={30} fill="#4a7c59" opacity={0.3} />
      <circle cx={40} cy={255} r={28} fill="#4a7c59" opacity={0.25} />
      <circle cx={360} cy={255} r={28} fill="#4a7c59" opacity={0.25} />
      <circle cx={30} cy={310} r={25} fill="#4a7c59" opacity={0.2} />
      <circle cx={370} cy={310} r={25} fill="#4a7c59" opacity={0.2} />
      <circle cx={40} cy={140} r={20} fill="#6b9b5e" opacity={0.2} />
      <circle cx={360} cy={140} r={20} fill="#6b9b5e" opacity={0.2} />
      <circle cx={20} cy={200} r={18} fill="#6b9b5e" opacity={0.2} />
      <circle cx={380} cy={200} r={18} fill="#6b9b5e" opacity={0.2} />
      {/* Top canopy */}
      <circle cx={200} cy={100} r={50} fill="#4a7c59" opacity={0.25} />
      <circle cx={170} cy={110} r={35} fill="#6b9b5e" opacity={0.2} />
      <circle cx={230} cy={110} r={35} fill="#6b9b5e" opacity={0.2} />
      <circle cx={150} cy={130} r={25} fill="#4a7c59" opacity={0.15} />
      <circle cx={250} cy={130} r={25} fill="#4a7c59" opacity={0.15} />
    </svg>
  );
}

function FallingLeaves() {
  const leaves = [
    { left: "5%", delay: "0s", duration: "14s", driftX: "30px", rot: "320deg", size: 12 },
    { left: "15%", delay: "3s", duration: "11s", driftX: "-20px", rot: "400deg", size: 10 },
    { left: "30%", delay: "7s", duration: "16s", driftX: "50px", rot: "280deg", size: 14 },
    { left: "55%", delay: "2s", duration: "13s", driftX: "-40px", rot: "350deg", size: 11 },
    { left: "70%", delay: "5s", duration: "15s", driftX: "25px", rot: "300deg", size: 13 },
    { left: "85%", delay: "9s", duration: "12s", driftX: "-35px", rot: "380deg", size: 10 },
    { left: "95%", delay: "4s", duration: "17s", driftX: "15px", rot: "290deg", size: 9 },
    { left: "42%", delay: "11s", duration: "14s", driftX: "-25px", rot: "340deg", size: 11 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {leaves.map((leaf, i) => (
        <svg
          key={i}
          width={leaf.size}
          height={leaf.size}
          viewBox="0 0 20 20"
          className="absolute falling-leaf text-leaf/40"
          style={{
            left: leaf.left,
            top: "-20px",
            "--delay": leaf.delay,
            "--duration": leaf.duration,
            "--drift-x": leaf.driftX,
            "--drift-rot": leaf.rot,
          } as React.CSSProperties}
        >
          <path
            d="M10 0 C15 5 18 10 10 20 C2 10 5 5 10 0Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}

function LeafIcon({ index }: { index: number }) {
  const rotations = [
    "rotate-[-20deg]",
    "rotate-[15deg]",
    "rotate-[-10deg]",
    "rotate-[25deg]",
    "rotate-[-15deg]",
    "rotate-[10deg]",
    "rotate-[-25deg]",
  ];
  const rotation = rotations[index % rotations.length];

  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 20 20"
      className={`text-gold/70 shrink-0 ${rotation}`}
    >
      <path
        d="M10 0 C15 5 18 10 10 20 C2 10 5 5 10 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center px-4 py-16 overflow-hidden">
      <TreeOfLifeSVG />
      <FallingLeaves />

      <div className="w-full max-w-md flex flex-col items-center relative z-10">
        {/* Avatar */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-gold/30 ring-offset-2 ring-offset-soil mb-5 animate-grow-in shadow-[0_0_30px_rgba(201,168,76,0.15)]">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Name & Bio */}
        <h1 className="text-2xl font-bold text-cream tracking-wide animate-grow-in" style={{ animationDelay: "0.1s" }}>
          {profile.name}
        </h1>
        <p className="text-sm text-gold/60 mt-1 mb-10 tracking-wider uppercase animate-grow-in" style={{ animationDelay: "0.2s" }}>
          {profile.bio}
        </p>

        {/* Links as leaves on branches */}
        <div className="w-full flex flex-col gap-4">
          {profile.links.map((link, index) => (
            <Link
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group link-card flex items-center gap-3 w-full rounded-2xl bg-bark/40 border border-gold/10 px-5 py-4 text-cream transition-all duration-300 hover:bg-bark-light/50 hover:border-gold/25 hover:shadow-[0_0_20px_rgba(201,168,76,0.1)] hover:scale-[1.02] active:scale-[0.98] animate-grow-in"
              style={{ animationDelay: `${0.3 + index * 0.08}s` }}
            >
              <LeafIcon index={index} />
              <span className="flex-1 font-medium text-sm tracking-wide">
                {link.title}
              </span>
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold/30 transition-all duration-300 group-hover:text-gold/70 group-hover:translate-x-1"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <SocialBar socials={profile.socials} />

        {/* Footer vine */}
        <div className="mt-10 flex flex-col items-center gap-2 opacity-40">
          <svg width={2} height={40} viewBox="0 0 2 40" className="text-leaf">
            <line x1={1} y1={0} x2={1} y2={40} stroke="currentColor" strokeWidth={1} strokeDasharray="3 3" />
          </svg>
          <svg width={12} height={12} viewBox="0 0 20 20" className="text-leaf">
            <path d="M10 0 C15 5 18 10 10 20 C2 10 5 5 10 0Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </main>
  );
}
