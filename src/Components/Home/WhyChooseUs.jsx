import BannerImg from "@/assets/Home/banner.png";
import ThemeContext from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const { isDarkMode } = useContext(ThemeContext);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setVideoUrl(
      "https://www.youtube.com/embed/IuV80wYRld0?si=8haZiRCfEbowJOSd"
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  return (
    <section
      className={`py-16 ${
        isDarkMode ? "bg-BgDarkPrimary text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-6">
            Why choose{" "}
            <span
              className={`${
                isDarkMode ? "text-BgDarkAccent" : "text-BgPrimary"
              }`}
            >
              Your Perfect Match
            </span>
          </h2>
          <ul
            className={`space-y-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <li className="flex items-center">
              <FaCheckCircle
                className={`${
                  isDarkMode ? "text-BgDarkAccent" : "text-red-500"
                } mr-2`}
              />
              Sign up at no cost and get started easily
            </li>
            <li className="flex items-center">
              <FaCheckCircle
                className={`${
                  isDarkMode ? "text-BgDarkAccent" : "text-red-500"
                } mr-2`}
              />
              Profiles verified for authenticity
            </li>
            <li className="flex items-center">
              <FaCheckCircle
                className={`${
                  isDarkMode ? "text-BgDarkAccent" : "text-red-500"
                } mr-2`}
              />
              Seamless communication via chat and video calls
            </li>
            <li className="flex items-center">
              <FaCheckCircle
                className={`${
                  isDarkMode ? "text-BgDarkAccent" : "text-red-500"
                } mr-2`}
              />
              Personalized, private, and confidential matchmaking
            </li>
            <li className="flex items-center">
              <FaCheckCircle
                className={`${
                  isDarkMode ? "text-BgDarkAccent" : "text-red-500"
                } mr-2`}
              />
              Safe, secure, and culturally aligned platform
            </li>
          </ul>
          <Link to="/biodatas">
            <button className="mt-6 px-6 py-3 text-white bg-custom-gradient rounded-lg  transition">
              Discover Your Match
            </button>
          </Link>
        </div>

        {/* Video/Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center relative">
          <img src={BannerImg} alt="Couple" className="rounded-lg shadow-lg" />
          <button
            onClick={handleOpenModal}
            className="absolute bg-white rounded-full p-4 shadow-md hover:shadow-lg transform hover:scale-105 transition"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <FaPlay className="text-red-600 text-3xl" />
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="relative bg-white p-4 rounded-lg">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-0 right-0 text-black text-2xl p-2 bg-white rounded-full hover:bg-gray-100 transition"
                >
                  <IoMdClose />
                </button>
                <iframe
                  width="560"
                  height="315"
                  src={videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
