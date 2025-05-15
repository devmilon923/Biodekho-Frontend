import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import ThemeContext from "@/context/ThemeContext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ViewBiodataPage = () => {
  const [biodata, setBiodata] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetchBiodata = async () => {
      if (!user?.email) return;

      try {
        const response = await axiosSecure.get(`/biodatas?email=${user.email}`);
        if (response.data.data.length > 0) {
          setBiodata(response.data.data[0]);
        } else {
          toast.error("No biodata found. Redirecting to create biodata...");
          navigate("/dashboard/editBiodata");
        }
      } catch (error) {
        toast.error("Failed to fetch biodata");
        console.error("Error:", error);
      }
    };

    fetchBiodata();
  }, [user?.email, axiosSecure, navigate]);

  const handleMakePremiumRequest = async () => {
    const result = await Swal.fire({
      title: "Make Premium?",
      text: "Submit your biodata for premium approval?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, submit",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const response = await axiosSecure.post("/users/premium-request", {
          id: biodata._id,
        });

        if (response.data.success) {
          toast.success("Premium request submitted!");
        }
      } catch (error) {
        toast.error("Failed to submit request");
      }
    }
  };

  if (!biodata) {
    return (
      <div className="p-8">
        <h2 className="text-2xl mb-4">Loading biodata...</h2>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen p-4 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`p-6 rounded-lg shadow-md ${
            isDarkMode ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-1/3">
              <img
                src={biodata.profileImageLink}
                alt={biodata.name}
                className="w-full h-auto rounded-lg shadow"
              />
              <div
                className={`mt-2 px-3 py-1 rounded-full text-sm font-medium inline-block ${
                  isDarkMode
                    ? "bg-purple-600 text-white"
                    : "bg-purple-100 text-purple-800"
                }`}
              >
                {biodata.type}
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">{biodata.name}</h2>
              <p className="text-gray-500 mb-4">
                Biodata ID: {biodata.biodataId}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <InfoField label="Age" value={biodata.age} />
                  <InfoField
                    label="Date of Birth"
                    value={biodata.dateOfBirth}
                  />
                  <InfoField label="Height" value={`${biodata.height} cm`} />
                  <InfoField label="Weight" value={`${biodata.weight} kg`} />
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Contact Details</h3>
                  <InfoField label="Email" value={biodata.contactEmail} />
                  <InfoField label="Mobile" value={biodata.mobileNumber} />
                  <InfoField label="Occupation" value={biodata.occupation} />
                  <InfoField label="Location" value={biodata.presentDivision} />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold mb-3">Family Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoField label="Father's Name" value={biodata.fathersName} />
              <InfoField label="Mother's Name" value={biodata.mothersName} />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold mb-3">Partner Expectations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InfoField label="Age" value={biodata.expectedPartnerAge} />
              <InfoField label="Height" value={biodata.expectedPartnerHeight} />
              <InfoField label="Weight" value={biodata.expectedPartnerWeight} />
            </div>
          </div>

          <button
            onClick={handleMakePremiumRequest}
            className={` px-6 py-2 rounded-md font-medium ${
              isDarkMode
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "bg-purple-500 hover:bg-purple-600 text-white"
            }`}
          >
            Make Premium
          </button>
        </div>
      </div>
    </div>
  );
};

// Simple reusable component for displaying info fields
const InfoField = ({ label, value }) => {
  return (
    <div className="mb-2">
      <span className="text-sm text-gray-500">{label}: </span>
      <span className="font-medium">{value || "N/A"}</span>
    </div>
  );
};

export default ViewBiodataPage;
