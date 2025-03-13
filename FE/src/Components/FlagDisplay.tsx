import Flag from "react-world-flags";

const FlagDisplay = () => {
  const countries = [
    "AU",
    "CA",
    "GB",
    "FR",
    "DE",
    "FI",
    "SE",
    "NO",
    "NZ",
    "IE",
    "GR",
    "IT",
    "PT",
    "ES",
    "AT",
    "UKR",
    "DK",
    "LT",
    "EST", 
    "BEL"
  ];

  const numFlags = countries.length;
  const angleStep = (2 * Math.PI) / numFlags;
  return (
    <div className="relative w-full h-75 flex justify-center items-center mt-0">
      <div className="absolute w-80 h-80 flex justify-center items-center">
        {countries.map((countryCode, index) => {
          const angle = angleStep * index;
          const x = Math.cos(angle) * 120;
          const y = Math.sin(angle) * 120;

          return (
            <div
              key={countryCode}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <Flag code={countryCode} style={{ width: 32, height: 22, borderRadius: '5px' }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlagDisplay;
