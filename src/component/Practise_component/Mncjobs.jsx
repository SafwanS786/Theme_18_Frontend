import React, { useCallback, useEffect, useMemo, useState } from 'react'
import "./Mncjobs.css"

export default function Mncjobs() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    const [jobtype, setJobtype] = useState("all")
    const apidata = [
        {
            id: 1,
            company: "Microsoft",
            location: "Hyderabad",
            logo: "🟦",
            jobs: [
                {
                    id: 101,
                    title: "Software Engineer",
                    type: "full-time",
                    salary: "25-35 LPA",
                    requirements: ["JavaScript", "React", "Azure"],
                },
                {
                    id: 102,
                    title: "Cloud Engineer",
                    type: "full-time",
                    salary: "30-45 LPA",
                    requirements: ["AWS", "Docker", "Kubernetes"],
                },
            ],
        },

        {
            id: 2,
            company: "Netflix",
            location: "Remote",
            logo: "🎬",
            jobs: [
                {
                    id: 201,
                    title: "Frontend Engineer",
                    type: "contract",
                    salary: "40-55 LPA",
                    requirements: ["React", "Next.js", "Tailwind CSS"],
                },
                {
                    id: 202,
                    title: "Backend Developer",
                    type: "full-time",
                    salary: "38-50 LPA",
                    requirements: ["Node.js", "MongoDB", "Redis"],
                },
            ],
        },

        {
            id: 3,
            company: "Amazon",
            location: "Pune",
            logo: "🟠",
            jobs: [
                {
                    id: 301,
                    title: "SDE 1",
                    type: "full-time",
                    salary: "18-28 LPA",
                    requirements: ["Java", "Spring Boot", "SQL"],
                },
                {
                    id: 302,
                    title: "UI Developer",
                    type: "internship",
                    salary: "50k/month",
                    requirements: ["HTML", "CSS", "JavaScript"],
                },
            ],
        },

        {
            id: 4,
            company: "Swiggy",
            location: "Bangalore",
            logo: "🍔",
            jobs: [
                {
                    id: 401,
                    title: "React Native Developer",
                    type: "full-time",
                    salary: "15-22 LPA",
                    requirements: ["React Native", "Redux", "Firebase"],
                },
            ],
        },

        {
            id: 5,
            company: "Infosys",
            location: "Chennai",
            logo: "💼",
            jobs: [
                {
                    id: 501,
                    title: "QA Engineer",
                    type: "full-time",
                    salary: "8-12 LPA",
                    requirements: ["Selenium", "Manual Testing", "Jira"],
                },
                {
                    id: 502,
                    title: "Data Analyst",
                    type: "full-time",
                    salary: "10-16 LPA",
                    requirements: ["Python", "SQL", "Power BI"],
                },
            ],
        },
    ];

    useEffect(() => {
        const Mncdata = apidata.map((item) => {
            return {
                id: item.id,
                company: item.company,
                location: item.location,
                logo: item.logo,
                jobs: item.jobs,
            }
        })

        setData(Mncdata)

        console.log("MNC", Mncdata)
        const clearInterval = () => {
            console.log("Clearing interval")
        }
    }, []);

    const SearchData = useMemo(() => {
        const searching = search.toLowerCase();

        return data.filter((item) => {
            return item.company.toLowerCase().includes(searching) ||
                item.location.toLowerCase().includes(searching)
        })
    }, [search, data])

    const filterCompanies = useMemo(() => {
        if (jobtype === "all") return SearchData
        return SearchData.map((item) => {
            return {
                ...item,
                jobs: item.jobs.filter((job) => job.type === jobtype)
            }
        }).filter((item) => item.jobs.length > 0);
    }, [jobtype, SearchData])

    const handleSearch = useCallback((e) => {
        setSearch(e.target.value)
    }, [])


    const handleJobtype = (e) => {
        console.log("JobType")
        setJobtype(e.target.value)
    }
    return (
        <div className="mnc-container">

            <input type="text" placeholder='Search' value={search} onChange={handleSearch} />
            <select name="jobtype" id="job" onChange={handleJobtype}>
                <option value="all">All</option>
                <option value="full-time">Fulltime</option>
                <option value="contract">Contract</option>
                <option value="internship">internsship</option>

            </select>
            <div className="header">
                <h1 className="main-title">🚀 MNC Jobs Portal</h1>
                <p className="subtitle">Discover exciting opportunities at top companies</p>
            </div>

            <div className="companies-grid">

                {/* {console.log("Search,", SearchData)} */}
                {filterCompanies.map((item) => {
                    return (
                        <div key={item.id} className="company-card">
                            <div className="company-header">
                                <div className="company-logo">{item.logo}</div>
                                <div className="company-info">
                                    <h2 className="company-name">{item.company}</h2>
                                    <span className="company-location">📍 {item.location}</span>
                                </div>
                            </div>

                            <div className="jobs-list">
                                <h3 className="jobs-title">Open Positions</h3>
                                {item.jobs.map((jobs) => {
                                    return (
                                        <div key={jobs.id} className="job-card">
                                            <div className="job-header">
                                                <h4 className="job-title">{jobs.title}</h4>
                                                <span className={`job-type ${jobs.type === 'full-time' ? 'full-time' : jobs.type === 'contract' ? 'contract' : 'internship'}`}>
                                                    {jobs.type}
                                                </span>
                                            </div>

                                            <div className="job-salary">
                                                💰 {jobs.salary}
                                            </div>

                                            <div className="job-requirements">
                                                <span className="requirements-label">📋 Requirements:</span>
                                                <div className="requirements-tags">
                                                    {jobs.requirements.map((req, index) => (
                                                        <span key={index} className="requirement-tag">
                                                            {req}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <button className="apply-btn">Apply Now →</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
