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
          width={400}
          height={100}
          className="h-14 md:h-20"
          alt="logo"
        />
      )}
      <div className="absolute bottom-0 left-0 text-base md:text-xl font-semibold text-green-dark border-l-4 border-green-dark px-2 md:px-4 py-0.5 md:py-2">
        {label}
      </div>
    </div>
  )
}
