"use client";
import { useState, useEffect } from "react";
import { skills } from "../types/types";

export default function Skills() {
  const [skills, setSkills] = useState<skills>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch("/api/skills");
      const data = await res.json();
      setSkills(data);
    };
    fetchSkills();
  }, []);

  return (
    <>
      <div className="mt-30 justify-center items-center max-w-4xl w-full m-auto px-4">
        <a href="skills">
          <p className="text-4xl font-extrabold mb-2 text-black">Skills!</p>
          {/* Text Content */}
          <div className="text-black text-center md:text-left md:ml-6">
            <ul>
              {skills.map((skill) => (
                <li key={skill.name}>- {skill.name}</li>
              ))}
            </ul>
          </div>
        </a>
      </div>
    </>
  );
}
