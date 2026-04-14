"use client";
import { useState, useEffect } from "react";
import { projects } from "../types/types";

export default function Projects() {
  const [projects, setProjects] = useState<projects>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <>
      <div className="mt-30 justify-center items-center max-w-4xl w-full m-auto px-4">
        <a href="projects">
          <p className="text-4xl font-extrabold mb-2 text-black">Projects</p>
          {/* Text Content */}
          <div className="text-black text-center md:text-left md:ml-6">
            <p className="text-lg md:text-xl mb-4">-</p>
          </div>
        </a>
      </div>
    </>
  );
}
