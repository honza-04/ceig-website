import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/CEIG_Logo.png"
        alt="CEIG — Central Europe Investment Group"
        width={610}
        height={120}
        className="h-12 w-auto"
        priority
      />
    </span>
  );
}
