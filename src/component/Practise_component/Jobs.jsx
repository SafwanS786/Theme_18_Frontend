import React, { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const apidata = [
    {
      id: 1,
      company: "Google",
      location: "Bangalore",
      logo: "🔵",
      jobs: [
        {
          id: 101,
          title: "Frontend Developer",
          type: "full-time",
          salary: "30-40 LPA",
          requirements: ["React", "TypeScript", "CSS"],
        },
        {
          id: 102,
          title: "Backend Engineer",
          type: "full-time",
          salary: "35-50 LPA",
          requirements: ["Node.js", "PostgreSQL", "Docker"],
        },
      ],
    },
    {
      id: 2,
      company: "Razorpay",
      location: "Remote",
      logo: "💙",
      jobs: [
        {
          id: 201,
          title: "React Developer",
          type: "contract",
          salary: "20-28 LPA",
          requirements: ["React", "Redux", "REST APIs"],
        },
      ],
    },
    {
      id: 3,
      company: "Zerodha",
      location: "Bangalore",
      logo: "📈",
      jobs: [
        {
          id: 301,
          title: "UI Engineer",
          type: "full-time",
          salary: "18-25 LPA",
          requirements: ["JavaScript", "React", "Figma"],
        },
        {
          id: 302,
          title: "DevOps Engineer",
          type: "full-time",
          salary: "25-35 LPA",
          requirements: ["AWS", "Kubernetes", "CI/CD"],
        },
      ],
    },
  ];
  useEffect(() => {
    const JobsData = apidata.map((item, index) => ({
      company: item.company,
      location: item.location,
      logo: item.logo,
      jobs: item.jobs.map((jobs) => ({
        title: jobs.title,
        type: jobs.type,
        salary: jobs.salary,
        requirements: jobs.requirements,
      })),
    }));
    setJobs(JobsData);
  }, []);
  return (
    <div>
      <h1>Jobs</h1>
      {jobs.map((value, idx) => {
        return (
          <div key={idx}>
            <h1>{value.company}</h1>
            <span>{value.location}</span>
            <span>{value.logo}</span>
            <>
              {value.jobs.map((item, idx) => {
                return (
                  <div key={idx}>
                    <h1>{item.title}</h1>
                    <span>{item.type}</span>
                    <span>{item.salary}</span>
                    <span>{item.requirements}</span>
                  </div>
                );
              })}
            </>
          </div>
        );
      })}
    </div>
  );
}
