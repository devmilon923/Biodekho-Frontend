import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { AuthContext } from "@/context/AuthProvider";
import ThemeContext from "@/context/ThemeContext";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";

const PaysDashboard = () => {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(ThemeContext);
  const axiosPublic = useAxiosPublic();
  const axiosPrivate = useAxiosSecure();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosPrivate.get(`/users`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchUserData();
    }
  }, [user, axiosPrivate]);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (!userData) {
    return <div className="p-6 text-center">User data not found.</div>;
  }

  const fakeImpactData = {
    connectionsMade: 45,
    matchesFound: 12,
    profileViews: 340,
    messagesExchanged: 158,
  };
  console.log(userData);
  return (
    <div
      className={`p-6 min-h-screen ${
        isDarkMode ? "bg-[#1e1e2f]" : "bg-gray-50"
      }`}
    >
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <div
            className="h-64 bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                userData.photoUrl ||
                user.photoURL ||
                "https://img.freepik.com/premium-vector/flat-businessman-character_33040-132.jpg"
              })`,
            }}
          >
            <div
              className={`absolute inset-0 ${
                isDarkMode ? "bg-black/60" : "bg-black/40"
              }`}
            />
          </div>

          {/* Profile Header */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative -mt-16">
                <div
                  className={`w-32 h-32 rounded-full border-4 ${
                    userData.premium ? "border-yellow-500" : "border-white"
                  } bg-gray-200 shadow-lg`}
                >
                  <img
                    src={userData?.photoUrl || user.photoURL}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://img.freepik.com/premium-vector/flat-businessman-character_33040-132.jpg";
                    }}
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-white"
                  }`}
                >
                  {userData?.displayName || userData?.name || "Guest User"}
                </h1>
                <p
                  className={`mt-2 ${
                    userData.premium
                      ? "text-yellow-500"
                      : isDarkMode
                      ? "text-gray-400"
                      : "text-gray-400"
                  }`}
                >
                  {userData.premium ? "Premium Member" : "Free Member"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className={`${isDarkMode ? "bg-[#2a2a40]" : ""} md:col-span-1`}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={userData.photoURL} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h2
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {userData?.displayName || userData?.name || "Guest User"}
                  </h2>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {userData?.email}
                  </p>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  ></p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className={`${isDarkMode ? "bg-[#2a2a40]" : ""} md:col-span-2`}>
            <CardHeader>
              <CardTitle className={isDarkMode ? "text-white" : ""}>
                Activity & Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(fakeImpactData).map(([key, value]) => (
                  <div key={key} className="text-center p-4">
                    <p
                      className={`text-2xl font-bold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {value}
                    </p>
                    <p
                      className={`text-sm capitalize ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Grid Sections Can Be Added Here */}
      </div>
    </div>
  );
};

export default PaysDashboard;
