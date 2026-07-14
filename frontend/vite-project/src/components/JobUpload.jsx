import { useState } from "react";
import { FaBriefcase, FaCloudUploadAlt } from "react-icons/fa";
import api from "../services/api";

function JobUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadJob = async () => {
    if (!file) {
      alert("Please select a Job Description.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await api.post("/job/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (onUpload) {
        onUpload(response.data);
      }

      alert("Job Description uploaded successfully!");

    } catch (error) {
      console.error(error);
      alert("Job upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8">

      <h2 className="text-3xl font-bold text-center text-green-400 mb-6">
        💼 Upload Job Description
      </h2>

      <div className="border-2 border-dashed border-green-500 rounded-xl p-8 text-center hover:border-green-400 transition duration-300">

        <FaCloudUploadAlt
          className="mx-auto text-6xl text-green-400 mb-4"
        />

        <p className="text-xl font-semibold text-white">
          Drag & Drop Job Description
        </p>

        <p className="text-gray-400 mt-2">
          TXT or PDF file
        </p>

        <input
          className="mt-6 block w-full text-sm text-gray-300
          file:mr-4
          file:py-3
          file:px-5
          file:rounded-lg
          file:border-0
          file:bg-green-600
          file:text-white
          hover:file:bg-green-700"
          type="file"
          accept=".txt,.pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

      </div>

      {file && (
        <div className="mt-6 bg-gray-700 rounded-xl p-4 flex items-center gap-4">

          <FaBriefcase className="text-green-400 text-3xl" />

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
        onClick={uploadJob}
        disabled={loading}
        className="mt-8 w-full bg-green-600 hover:bg-green-700 rounded-xl py-4 text-lg font-bold transition duration-300 disabled:bg-gray-600"
      >
        {loading ? "Uploading..." : "Upload Job"}
      </button>

    </div>
  );
}

export default JobUpload;