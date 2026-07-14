import ScoreCard from "./ScoreCard";
import SkillBadge from "./SkillBadge";
import RecommendationCard from "./RecommendationCard";
import ScoreChart from "./ScoreChart";
import DownloadReport from "./DownloadReport";

function Results({ result }) {
  if (!result) return null;

  return (
    <div className="mt-10">

      {/* Header */}
      <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8">

        <h1 className="text-4xl font-bold text-center text-blue-400">
          Resume Match Result
        </h1>

        <p className="text-center text-gray-400 mt-3">
          AI Powered Resume Analysis
        </p>

      </div>

      {/* Score Cards */}

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <ScoreCard
          title="ATS Score"
          score={88}
        />

        <ScoreCard
          title="Match Score"
          score={result.match_score}
        />

      </div>

      {/* Chart */}

      <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-xl mt-8 p-8">

        <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">
          Score Overview
        </h2>

        <ScoreChart
          atsScore={88}
          matchScore={result.match_score}
        />

      </div>

      {/* Skills */}

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {/* Matched */}

        <div className="bg-gray-800 rounded-2xl border border-green-500 shadow-xl p-8">

          <h2 className="text-2xl font-bold text-green-400 mb-6">
            ✅ Matched Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {result.matched_skills?.map((skill, index) => (

              <SkillBadge
                key={index}
                skill={skill}
                type="matched"
              />

            ))}

          </div>

        </div>

        {/* Missing */}

        <div className="bg-gray-800 rounded-2xl border border-red-500 shadow-xl p-8">

          <h2 className="text-2xl font-bold text-red-400 mb-6">
            ❌ Missing Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {result.missing_skills?.map((skill, index) => (

              <SkillBadge
                key={index}
                skill={skill}
                type="missing"
              />

            ))}

          </div>

        </div>

      </div>

      {/* Recommendations */}

      <div className="mt-8 space-y-8">

        <RecommendationCard
          title="✅ Strengths"
          items={result.strengths}
          color="#22c55e"
        />

        <RecommendationCard
          title="❌ Weaknesses"
          items={result.weaknesses}
          color="#ef4444"
        />

        <RecommendationCard
          title="💡 Recommendations"
          items={result.recommendations}
          color="#3b82f6"
        />
        <DownloadReport result={result} />

      </div>

    </div>
  );
}

export default Results;