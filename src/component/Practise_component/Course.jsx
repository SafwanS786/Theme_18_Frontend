import React, { useEffect, useState } from "react";

export default function Course() {
  const [coursedata, setCourseData] = useState([]);
  const apidata = [
    {
      id: 1,
      title: "React for Beginners",
      duration: "8 hours",
      isPaid: false,
      rating: 4.8,
      tags: ["react", "javascript", "frontend"],
      instructor: { name: "Hitesh Choudhary", platform: "YouTube" },
    },
    {
      id: 2,
      title: "Node.js Crash Course",
      duration: "6 hours",
      isPaid: true,
      rating: 4.5,
      tags: ["node", "backend", "api"],
      instructor: { name: "Traversy Media", platform: "Udemy" },
    },
    {
      id: 3,
      title: "CSS Mastery",
      duration: "5 hours",
      isPaid: false,
      rating: 4.2,
      tags: ["css", "design", "frontend"],
      instructor: { name: "Kevin Powell", platform: "YouTube" },
    },
    {
      id: 4,
      title: "TypeScript Deep Dive",
      duration: "10 hours",
      isPaid: true,
      rating: 4.9,
      tags: ["typescript", "javascript"],
      instructor: { name: "Basarat Ali", platform: "Udemy" },
    },
  ];
  useEffect(() => {
    const CourseData = apidata.map((value, idx) => ({
      title: value.title,
      duration: value.duration,
      rate: value.rating,
      tags: value.tags,
      instructor: value.instructor,
      //   tags: tags.map((item) => item.name),
      //   instructor: instructor.map((item) => ({
      //     name: item.name,
      //     platform: item.platform,
      //   })),
    }));

    setCourseData(CourseData);
  }, []);
  return (
    <div>
      <h1>Course</h1>
      {coursedata.map((val, idx) => {
        return (
          <div key={idx} className="">
            <h1>{val.title}</h1>
            <span>{val.duration}</span>
            <span>{val.rate}</span>
            <span>{val.tags}</span>
            <span>{val.instructor.name}</span>
            <span>{val.instructor.platform}</span>
          </div>
        );
      })}
    </div>
  );
}
