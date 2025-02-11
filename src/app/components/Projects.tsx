import React from "react";
import { FaChevronRight } from "react-icons/fa";
import project1 from "../../../public/images/projects/Restoran.png";
import project2 from "../../../public/images/projects/ecomerce.png";
import project3 from "../../../public/images/projects/fooddeleiver.png";
import project4 from "../../../public/images/projects/furniture.png";
import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface Project {
    title: string;
    description: string;
    image: StaticImageData;
    liveLink: string;
    tags: string[];
}

const projectsData: Project[] = [
  {
    title: "PICKBAZAR - E-commerce Platform",
    description:
      "A comprehensive e-commerce platform built over 15 days using MUI React and Redux Toolkit. Features include product catalog, cart management, user authentication (login/signup), and payment processing. This capstone project demonstrates modern state management and API integration skills.",
    image: project1,
    liveLink: "https://capstone-project-doak.vercel.app/",
    tags: ["React.js", "Material UI", "Redux Toolkit", "REST API", "TypeScript"],
  },
  {
    title: "E-commerce Website",
    description:
      "A responsive e-commerce website developed in 7 days using modern web technologies. Implemented Bootstrap's grid system for perfect responsiveness across all devices (desktop, tablet, mobile). Features clean design and intuitive navigation for optimal user experience.",
    image: project2,
    liveLink: "https://capstone-2-seven.vercel.app/index.html",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "Responsive Design"],
  },
  {
    title: "Pizza Delivery Landing Page",
    description:
      "A visually appealing landing page for a pizza delivery service, crafted from a Figma design. Incorporated modern CSS features including flexbox layouts, engaging animations, shadow effects, and interactive hover states to create an immersive user experience.",
    image: project3,
    liveLink: "https://food-deleivery-website.vercel.app/",
    tags: ["HTML5", "CSS3", "Animations", "Figma"],
  },
  {
    title: "Furniture Website Landing Page",
    description:
      "My first capstone project - a furniture website landing page designed in Figma and implemented using core web technologies. Utilized CSS flexbox and positioning for precise layout control, completed in 4 days.",
    image: project4, // You'll need to import and use the correct image
    liveLink: "https://food-deleivery-1.vercel.app/",
    tags: ["HTML5", "CSS3", "Figma", "Web Design"],
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      {projectsData.map((project, index) => (
        <div key={index} data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-12 projects-wrapper gap-6 my-4 p-5 rounded-3xl">
          <div className="md:col-span-4">
            <Image
              className="rounded-3xl w-full" layout="responsive"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="md:col-span-8 flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm mt-2 text-gray-200 mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tags, index) => (
                <span key={index} className="bg-orange-400 text-white rounded-xl px-3 py-[0.5px]">
                  {tags}
                </span>
              ))}
            </div>
            <div className="relative block mt-8 line">
            <Button
                classes="border-white bg-transparent text-white hover:text-white"
                title="Live Preview"
                icon={<FaChevronRight className="ml-1 inline-block text-sm font-bold w-6" />}
                link={project.liveLink}
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
