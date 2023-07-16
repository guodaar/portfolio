import coffee1 from "../../assets/coffee1.jpeg";
import coffee2 from "../../assets/coffee2.jpeg";
import coffee3 from "../../assets/coffee3.jpeg";
import coffee4 from "../../assets/coffee4.jpeg";
import spark1 from "../../assets/spark1.jpeg";
import spark2 from "../../assets/spark2.jpeg";
import spark3 from "../../assets/spark3.jpeg";

export type Project = {
  name: string;
  description: string;
  built_using: string[];
  photos: string[];
};

export const projects: Project[] = [
  {
    name: "Vilnius Coffee Guide",
    description:
      "This is a web app for discovering coffee shops in Vilnius. You can also leave star reviews on each coffee shop. The app allows you to sort coffee shops by name and rating.",
    built_using: ["javascript", "react", "nodejs", "mongodb"],
    photos: [spark1, spark2, spark3],
  },
  {
    name: "Spark",
    description:
      "This is a web app for sparking conversations, posting questions and answers.",
    built_using: ["typescript", "react", "nodejs", "mongodb"],
    photos: [coffee1, coffee2, coffee3, coffee4],
  },
];
