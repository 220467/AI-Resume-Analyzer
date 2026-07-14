import { useState } from "react";
import { FaFilePdf, FaCloudUploadAlt } from "react-icons/fa";
import api from "../services/api";

function ResumeUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadResume = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await api.post("/resume/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (onUpload) {
        onUpload(response.data);
      }

      alert("Resume uploaded successfully!");

    } catch (error) {
      console.error(error);
      alert("Resume upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8">

      <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
        📄 Upload Resume
      </h2>

      <div className="border-2 border-dashed border-blue-500 rounded-xl p-8 text-center hover:border-blue-400 transition duration-300">

        <FaCloudUploadAlt
          className="mx-auto text-6xl text-blue-400 mb-4"
        />

        <p className="text-xl font-semibold text-white">
          Drag & Drop Resume
        </p>

        <p className="text-gray-400 mt-2">
          or choose a PDF file
        </p>

        <input
          className="mt-6 block w-full text-sm text-gray-300
          file:mr-4
          file:py-3
          file:px-5
          file:rounded-lg
          file:border-0
          file:bg-blue-600
          file:text-white
          hover:file:bg-blue-700"
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

      </div>

      {file && (
        <div className="mt-6 bg-gray-700 rounded-xl p-4 flex items-center gap-4">

          <FaFilePdf className="text-red-500 text-3xl" />

          <div>
            <p className="font-semibold text-white">
              {file.name}
            </p>

            <p className="text-gray-300 text-sm">
              Ready to upload
            </p>
          </div>

        </div>
      )}

      <button
        onClick={uploadResume}
        disabled={loading}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-4 text-lg font-bold transition duration-300 disabled:bg-gray-600"
      >
        {loading ? "Uploading..." : "Upload Resume"}
      </button>

    </div>
  );
}

export default ResumeUpload;