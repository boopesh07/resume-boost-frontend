interface CircularProgressBarProps {
  score: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ score }) => {
  const radius = 150 / 2;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
  const offset = circumference - (score / 100) * circumference;

  const getColor = (score: number) => {
    if (score > 75) {
      return 'text-green-600';
    } else if (score >= 50) {
      return 'text-yellow-600';
    } else {
      return 'text-red-600';
    }
  };

  const strokeColorClass = getColor(score);

  return (
    <div className="relative flex items-center justify-center">
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
          className={strokeColorClass}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.35s" }}
        />
      </svg>
      <span className="absolute text-center text-4xl font-semibold">
        {score} <br /> <span className="uppercase text-sm">overall</span>
      </span>
    </div>
  );
};

export default CircularProgressBar;
