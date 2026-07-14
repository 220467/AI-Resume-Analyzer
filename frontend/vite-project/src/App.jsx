import { useState } from "react";
import api from "./services/api";

import Navbar from "./components/Navbar";
import ResumeUpload from "./components/ResumeUpload";
import JobUpload from "./components/JobUpload";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  const [resume, setResume] = useState(null);
  const [job, setJob] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const compareResume = async () => {
    try {
      setLoading(true);

      const response = await api.post("/match/");

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Comparison failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Navbar */}
        <Navbar />

        {/* Welcome Section */}
        <div className="text-center mt-10">

          <h1 className="text-5xl font-extrabold text-blue-400">

            AI Resume Analyzer

          </h1>

          <p className="text-gray-400 text-lg mt-4">

            Upload your Resume and Job Description to receive
            an AI-powered ATS compatibility report.

          </p>

        </div>

        {/* Upload Section */}

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <ResumeUpload onUpload={setResume} />

          <JobUpload onUpload={setJob} />

        </div>

        {/* Compare Section */}

        <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-xl p-8 mt-10">

          <h2 className="text-2xl font-bold text-center text-white">

            Ready to Compare?

          </h2>

          <p className="text-center text-gray-400 mt-3">

            Upload both files before starting the AI analysis.

          </p>

          <div className="flex justify-center mt-8">

            <button
              onClick={compareResume}
              disabled={loading || !resume || !job}
              className={`px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300
              ${
                loading || !resume || !job
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
              }`}
            >
              {loading ? "🤖 Analyzing..." : "🚀 Compare Resume"}
            </button>

          </div>

        </div>

        {/* Upload Status */}

        {(resume || job) && (

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {resume && (

              <div className="bg-gray-800 rounded-2xl border border-green-600 shadow-xl p-6">

                <h2 className="text-2xl font-bold text-green-400 mb-4">

                  ✅ Resume Uploaded

                </h2>

                <p>

                  <strong>Filename:</strong> {resume.filename}

                </p>

                <p className="mt-2">

                  <strong>Characters:</strong> {resume.characters}

                </p>

              </div>

            )}

            {job && (

              <div className="bg-gray-800 rounded-2xl border border-blue-600 shadow-xl p-6">

                <h2 className="text-2xl font-bold text-blue-400 mb-4">

                  📄 Job Description Uploaded

                </h2>

                <p>

                  <strong>Filename:</strong> {job.filename}

                </p>

              </div>

            )}

          </div>

        )}

        {/* Results */}

        {result && (

          <div className="mt-12">

            <Results result={result} />

          </div>

        )}

        {/* Footer */}

        <Footer />

      </div>

    </div>
  );
}

export default App;