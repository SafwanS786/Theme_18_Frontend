import React from 'react'
import AboutPage from '../../src/Pages/AboutPage';
import AdminAbout from '../AdminComponent/AdminAbout';

export default function About() {
    let word = "I love js I love React";

    const count = (str) => {
        let freq = {}
        let ch;
        let spl = str.split(" ")
        for (ch of spl) {
            freq[ch] = (freq[ch] || 0) + 1
        }
        return freq
    }

    console.log(count(word))
    return (
        <div>
            <h1>About</h1>
            <span>About page to know us</span>
            <AdminAbout />
        </div>
    )
}
