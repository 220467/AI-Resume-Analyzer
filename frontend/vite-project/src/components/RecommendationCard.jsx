import { FaCheckCircle } from "react-icons/fa";

function RecommendationCard({ title, items, color }) {
  return (
    <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-xl p-8">

      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">

        <FaCheckCircle
          className="text-3xl"
          style={{ color }}
        />

        <h2
          className="text-3xl font-bold"
          style={{ color }}
        >
          {title}
        </h2>

      </div>

      {/* List */}

      <div className="space-y-4">

        {items?.length > 0 ? (
          items.map((item, index) => (

            <div
              key={index}
              className="bg-gray-700 hover:bg-gray-600 transition duration-300 rounded-xl p-5 flex items-start gap-4 shadow-md"
            >

              <div
                className="w-3 h-3 rounded-full mt-2"
                style={{ backgroundColor: color }}
              />

              <p className="text-gray-200 leading-7 text-lg">

                {item}

              </p>

            </div>

          ))
        ) : (

          <div className="text-gray-400 italic">

            No data available.

          </div>

        )}

      </div>

    </div>
  );
}

export default RecommendationCard;