const courses = [
  {
    id: 1,
    title: "Flutter Development",
    description: "20. Object-oriented Programming on Dart",
    progress: "20/50",
    progressPercentage: 40, // Updated to match progress
    imageUrl: require("../assests/images/Flutter.png"),
    videoUrl: "https://www.youtube.com/embed/VPvVD8t02U8?si=zCtxgPKFMsCVbVUJ",
    status: "inProgress", // Add status
  },
  {
    id: 2,
    title: "iOS Development",
    description: "10. Working with loops on Swift",
    progress: "10/50",
    progressPercentage: 20, // Updated to match progress
    imageUrl: require("../assests/images/Ios.jpeg"),
    videoUrl: "https://www.youtube.com/embed/KCgYDCKqato?si=WBdUggjdeHS3R-ZU",
    status: "inProgress", // Add status
  },
  {
    id: 3,
    title: "Android Development",
    description: "15. Advanced JavaScript",
    progress: "15/30",
    progressPercentage: 50, // This is already accurate
    imageUrl: require("../assests/images/Web.png"),
    videoUrl: "https://www.youtube.com/embed/fis26HvvDII?si=sIiYuaFJfaGfHDAn",
    status: "inProgress", // Add status
  },
  {
    id: 4,
    title: "React Mastery",
    description: "Completed",
    progress: "70/70",
    progressPercentage: 100, // Set to 100% for completed
    imageUrl: require("../assests/images/React.jpg"),
    videoUrl: "https://www.youtube.com/embed/u6gSSpfsoOQ?si=2vHcqbl2pUcJsTiw",
    status: "completed", // Add status
  },
  {
    id: 5,
    title: "UI UX",
    description: "Completed",
    progress: "70/70",
    progressPercentage: 100, // Set to 100% for completed
    imageUrl: require("../assests/images/UIUx.jpg"),
    videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU?si=0ABrc7lNTMbqBrZx",
    status: "completed", // Add status
  },
];

// Export the courses array
export default courses;
