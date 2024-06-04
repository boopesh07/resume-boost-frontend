const CircularProgressBar: React.FC = () => {
    const radius = 150 / 2;
    const strokeWidth = 5;
    const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
    const offset = circumference - (15 / 100) * circumference;
    return (
      <>
        <nav className="flex-grow mt-7">
          <div className="flex items-center justify-center">
            <svg
              width={150}
              height={150}
              className="transform -rotate-90"
              style={{ transformOrigin: "center" }}
            >
              <circle
                cx={radius}
                cy={radius}
                r={radius - strokeWidth / 2}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className="text-gray-600"
                fill="none"
              />
              <circle
                cx={radius}
                cy={radius}
                r={radius - strokeWidth / 2}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className="text-red-600"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                style={{ transition: "stroke-dashoffset 0.35s" }}
              />
            </svg>
            <span className="absolute text-center text-4xl font-semibold">
              15 <br /> <span className="uppercase text-sm">overall</span>
            </span>
            
          </div>
        </nav>
      </>
    );
  };
  
  export default CircularProgressBar;