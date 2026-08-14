interface DownloadButtonsProps {
  iosUrl: string;
  androidUrl: string;
}

export default function DownloadButtons({
  iosUrl,
  androidUrl,
}: DownloadButtonsProps) {
  return (
    <div className="flex w-full max-w-lg flex-col gap-2 sm:flex-row sm:gap-3">
      {/* Apple App Store */}
      <a
        href={iosUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 flex-1 items-center gap-2 rounded-[7px] border border-black bg-white px-2.5 py-1.5 text-black transition-transform duration-200 hover:scale-105 sm:h-12 sm:px-3 sm:py-2 lg:h-14"
      >
        <img
          src="/apple.png"
          alt="Apple"
          className="h-5 w-5 object-contain sm:h-6 sm:w-6 lg:h-8 lg:w-8"
        />

        <div className="flex flex-col justify-center leading-none">
          <span className="text-[8px] font-medium sm:text-[9px] lg:text-[10px]">
            Download on the
          </span>

          <span className="mt-0.5 text-[13px] font-semibold tracking-tight sm:text-[15px] lg:text-[18px]">
            App Store
          </span>
        </div>
      </a>

      {/* Google Play */}
      <a
        href={androidUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 flex items-center gap-2 rounded-[7px] border bg-black px-2.5 py-1.5 text-white transition-transform duration-200 hover:scale-105 sm:h-12 sm:px-3 sm:py-2 lg:h-14"
      >
        <img
          src="/googleplay-img.png"
          alt="Google Play"
          className="h-5 w-5 object-contain sm:h-6 sm:w-6 lg:h-8 lg:w-8"
        />

        <div className="flex flex-col justify-center leading-none">
          <span className="text-[7px] font-medium uppercase tracking-wide sm:text-[8px] lg:text-[9px]">
            Get it on
          </span>

          <span className="mt-0.5 text-[13px] font-medium tracking-tight sm:text-[15px] lg:text-[18px]">
            Google Play
          </span>
        </div>
      </a>
    </div>
  );
}