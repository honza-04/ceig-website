import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/ceig-logo.png"
        alt="CEIG — Central European Investment Group"
        width={800}
        height={200}
        className="h-10 w-auto"
        priority
      />
    </span>
  );
}
