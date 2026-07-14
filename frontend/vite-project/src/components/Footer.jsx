import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-16 bg-gray-800 border-t border-gray-700 rounded-2xl shadow-lg p-8">

      <div className="flex flex-col md:flex-row justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-blue-400">
            AI Resume Analyzer
          </h2>

          <p className="text-gray-400 mt-2">
            AI Powered ATS Resume Screening System
          </p>

        </div>

        <div className="flex gap-6 text-2xl mt-6 md:mt-0">

          <FaGithub className="hover:text-white cursor-pointer transition" />

          <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />

          <FaEnvelope className="hover:text-green-400 cursor-pointer transition" />

        </div>

      </div>

      <hr className="my-6 border-gray-700" />

      <p className="text-center text-gray-500">
        © 2026 AI Resume Analyzer | Built with React, FastAPI & Gemini AI
      </p>

    </footer>
  );
}

export default Footer;