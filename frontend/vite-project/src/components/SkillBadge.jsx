import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function SkillBadge({ skill, type }) {
  const matched = type === "matched";

  return (
    <div
      className={`
        flex items-center gap-3
        px-5 py-3
        rounded-full
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        ${
          matched
            ? "bg-green-600 hover:bg-green-500"
            : "bg-red-600 hover:bg-red-500"
        }
      `}
    >
      {matched ? (
        <FaCheckCircle className="text-white text-lg" />
      ) : (
        <FaTimesCircle className="text-white text-lg" />
      )}

      <span>{skill}</span>
    </div>
  );
}

export default SkillBadge;