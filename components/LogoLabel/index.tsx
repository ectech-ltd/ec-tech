import Image from 'next/image'

export default function LogoLabel({
  label,
  noLogo = false,
}: {
  label: string
  noLogo?: boolean
}) {
  return (
    <div className="relative">
      {!noLogo && (
        <Image
          src="/img/ec-tech-transparent.svg"
          width={700}
          height={136}
          className="h-14 md:h-32"
          alt="logo"
        />
      )}
      <div className="absolute bottom-0 md:bottom-3 left-0 text-xl md:text-2xl font-semibold text-green-dark border-l-4 border-green-dark px-2 md:px-4 py-0.5 md:py-2">
        {label}
      </div>
    </div>
  )
}
