import { FaChartLine } from "react-icons/fa";

function ScoreCard({ title, score }) {

  let color = "text-green-400";

  if (score < 70) color = "text-yellow-400";

  if (score < 50) color = "text-red-400";

  return (

    <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8 hover:scale-105 transition duration-300">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold text-white">

          {title}

        </h2>

        <FaChartLine className="text-blue-400 text-3xl" />

      </div>

      <h1 className={`text-7xl font-bold mt-8 text-center ${color}`}>

        {score}%

      </h1>

    </div>

  );

}

export default ScoreCard;