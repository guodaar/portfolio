import coffee1 from "../../assets/coffee1.jpeg";
import coffee2 from "../../assets/coffee2.jpeg";
import coffee3 from "../../assets/coffee3.jpeg";
import coffee4 from "../../assets/coffee4.jpeg";
import spark1 from "../../assets/spark1.jpeg";
import spark2 from "../../assets/spark2.jpeg";
import spark3 from "../../assets/spark3.jpeg";

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  built_using: string[];
  photos: string[];
  demo_link: string;
  github_link: string;
};

export const projects: Project[] = [
  {
    title: "Vilnius Coffee Guide",
    subtitle: "Find and rate your favorite coffee shops in Vilnius",
    description:
      "This is a web app for discovering coffee shops in Vilnius. You can also leave star reviews on each coffee shop. The app allows you to sort coffee shops by name and rating.",
    built_using: ["javascript", "react", "nodejs", "mongodb"],
    photos: [coffee1, coffee2, coffee3, coffee4],
    demo_link: "https://vilnius-coffee-guide.onrender.com",
    github_link: "https://github.com/guodaar/vilnius-coffee-guide",
  },
  {
    title: "Spark App",
    subtitle: "Igniting your curiosity with every spark",
    description:
      "This is a web app for sparking conversations, posting questions and answers.",
    built_using: ["typescript", "react", "nodejs", "mongodb"],
    photos: [spark1, spark2, spark3],
    demo_link: "https://spark-app-sdsp.onrender.com",
    github_link: "https://github.com/guodaar/cafe3-final-project",
  },
];
