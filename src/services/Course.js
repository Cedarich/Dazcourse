// course.js
const courses = [
  {
    id: 1,
    title: "Flutter Development",
    description: "20. Object-oriented Programming on Dart",
    progress: "20/50",
    progressPercentage: 50,
    imageUrl: require("../assests/images/Flutter.png"),
  },
  {
    id: 2,
    title: "iOS Development",
    description: "10. Working with loops on Swift",
    progress: "10/50",
    progressPercentage: 25,
    imageUrl: require("../assests/images/Ios.jpeg"),
  },
  {
    id: 3,
    title: "Andriod Development",
    description: "15. Advanced JavaScript",
    progress: "15/30",
    progressPercentage: 50,
    imageUrl: require("../assests/images/Web.png"),
  },
  {
    id: 4,
    title: "React Mastery",
    description: "Completed",
    progress: "70/70",
    progressPercentage: 70,
    imageUrl: require("../assests/images/React.jpg"),
  },
  {
    id: 5,
    title: "UI UX",
    description: "Completed",
    progress: "70/70",
    progressPercentage: 70,
    imageUrl: require("../assests/images/UIUx.jpg"),
  },
];

// Export the courses array
export default courses;
