export type Project = {
  name: string;
  description: string;
  built_using: string[];
};

export const projects: Project[] = [
  {
    name: "Vilnius Coffee Guide",
    description:
      "This is a web app for discovering coffee shops in Vilnius. You can also leave star reviews on each coffee shop. The app allows you to sort coffee shops by name and rating.",
    built_using: ["javascript", "react", "nodejs", "mongodb"],
  },
  {
    name: "Spark",
    description:
      "This is a web app for sparking conversations, posting questions and answers.",
    built_using: ["typescript", "react", "nodejs", "mongodb"],
  },
];
