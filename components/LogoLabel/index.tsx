import Image from 'next/image'

export default function LogoLabel({ label }: { label: string }) {
  return (
    <div className="relative">
      <Image
        src="/img/ec-tech-transparent.svg"
        width={700}
        height={136}
        alt="logo"
      />
      <div className="absolute bottom-3 left-0 text-2xl font-semibold text-[#006838] border-l-4 border-[#006838] px-4 py-2">
        {label}
      </div>
    </div>
  )
}
