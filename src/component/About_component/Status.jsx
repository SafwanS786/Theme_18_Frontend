import React, { useState, useEffect } from "react";
import "../../Styles/About_Style/Status.css";
import { motion } from "framer-motion";
export default function Status() {
  const [complete, setComplete] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 110;
    const duration = 2000;
    const Increment = Math.floor(duration / end);
    let counter = setInterval(() => {
      start += 1;
      setComplete(start);
      if (start === end) {
        clearInterval(counter);
      }
    }, Increment);
    return () => clearInterval(counter);
  }, []);
  const [Team, setTeam] = useState(0);
  useEffect(() => {
    let start = 0;
    let end = 280;
    let duration = 2000;
    let Increment = Math.floor(duration / end);
    let counter = setInterval(() => {
      start += 1;
      setTeam(start);
      if (start === end) {
        clearInterval(counter);
      }
    }, Increment);
    return () => clearInterval(counter);
  }, []);
  const [client, setClient] = useState(0);
  useEffect(() => {
    let start = 0;
    let end = 100;
    let duration = 2000;
    let Increment = Math.floor(duration / end);
    let counter = setInterval(() => {
      start += 1;
      setClient(start);
      if (start === end) {
        clearInterval(counter);
      }
    }, Increment);
    return () => clearInterval(counter);
  }, []);
  const [run, setRun] = useState(0);
  useEffect(() => {
    let start = 0;
    let end = 30;
    let duration = 4000;
    let Increment = Math.floor(duration / end);
    let counter = setInterval(() => {
      start += 1;
      setRun(start);
      if (start === end) {
        clearInterval(counter);
      }
    }, Increment);
    return () => clearInterval(counter);
  }, []);
  return (
    <motion.div className="container Status_Main">
      <p id="cmp_lbl">Our company status</p>
      <h1 id="cmp_head">Trusted & Reliable</h1>
      <div className="counter_div">
        <div>
          <h1>{complete}+</h1>
          <p>Completed Projects</p>
        </div>
        <div className="Team">
          <h1>{Team}+</h1>
          <p>Team Member</p>
        </div>
        <div className="client">
          <h1>{client}%</h1>
          <p>Client Satisfaction</p>
        </div>
        <div className="Running">
          <h1>{run}+</h1>
          <p>Running Project</p>
        </div>
      </div>
    </motion.div>
  );
}
