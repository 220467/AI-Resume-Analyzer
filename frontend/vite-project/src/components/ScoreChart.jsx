import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ScoreChart({ atsScore, matchScore }) {
  const data = [
    {
      name: "ATS Score",
      value: atsScore,
      fill: "#22c55e",
    },
    {
      name: "Match Score",
      value: matchScore,
      fill: "#3b82f6",
    },
  ];

  return (
    <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-xl p-8">

      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
        📊 Score Analysis
      </h2>

      <div className="flex justify-center">

        <ResponsiveContainer width="100%" height={350}>

          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="25%"
            outerRadius="90%"
            barSize={22}
            data={data}
          >

            <RadialBar
              minAngle={15}
              background
              clockWise
              dataKey="value"
              cornerRadius={12}
            />

            <Legend
              iconSize={16}
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                color: "#fff",
                fontSize: "16px",
              }}
            />

          </RadialBarChart>

        </ResponsiveContainer>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">

        <div className="bg-green-600 rounded-xl p-5 text-center">

          <h3 className="text-white text-lg font-bold">
            ATS Score
          </h3>

          <p className="text-4xl font-bold text-white mt-2">
            {atsScore}%
          </p>

        </div>

        <div className="bg-blue-600 rounded-xl p-5 text-center">

          <h3 className="text-white text-lg font-bold">
            Match Score
          </h3>

          <p className="text-4xl font-bold text-white mt-2">
            {matchScore}%
          </p>

        </div>

      </div>

    </div>
  );
}

export default ScoreChart;