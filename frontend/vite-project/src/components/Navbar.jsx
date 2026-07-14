import { FaRobot, FaUserCheck } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-8 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-5">

          <div className="bg-white p-4 rounded-full shadow-lg">
            <FaRobot className="text-blue-700 text-4xl" />
          </div>

          <div>
            <h1 className="text-4xl font-extrabold text-white">
              AI Resume Analyzer
            </h1>

            <p className="text-blue-100 mt-2 text-lg">
              Upload • Analyze • Compare • Improve
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="mt-6 md:mt-0 flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl border border-white/20">

          <FaUserCheck className="text-green-300 text-2xl" />

          <div>
            <h3 className="text-white font-bold">
              ATS Resume Checker
            </h3>

            <p className="text-blue-100 text-sm">
              AI Powered Analysis
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;