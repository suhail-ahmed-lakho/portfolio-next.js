import Image from "next/image";
import bannerModel from "/public/images/banner-modal.png";
import upRightArrow from "/public/images/up-right.svg";
import servicesBg from "/public/images/services-bg.png";
import aboutMe from "/public/images/about-me.png";
import helloTop from "/public/images/hello-top.svg";
import nameBottom from "/public/images/name-bottom.svg";
import { FaGithub } from 'react-icons/fa';
import { FaDownload } from "react-icons/fa6";
import { HiAcademicCap, HiBriefcase, HiBookOpen, HiPhone, HiMail } from 'react-icons/hi';
import ResponsiveGrid from "./components/ResponsiveGrid";
import SectionHeadings from "./components/SectionHeadings";
import ServicesCards from "./components/ServicesCards";
import ProgressBar from "./components/ProgressBar";
import SoftSkillsSlide from "./components/SoftSkillsSlide";
import Projects from "./components/Projects";
import Button from "./components/Button";
import ContactForm from "./components/ContactForm";


export default function Home() {
  return (
   <>
        <section className="banner relative overflow-hidden">
        <ResponsiveGrid itemCount={128}/>
            <div className="relative">
                <div className="flex flex-col items-center pt-40">
                    <div className="relative">
                        <h4 className="animate-fade-left text-xl font-semibold border border-black px-6 py-1 rounded-full">Hello</h4>
                        <Image className="animate-fade-left absolute -top-6 -right-6" src={helloTop} alt=""/>
                    </div>
                    <div className="relative">
                        <h1 className="animate-fade-right cursor-scale text-2xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-center tracking-wide word leading-tight">I'm <span className="underline stroke-orange-500">Suhail Ahmed Lakho,</span> <br/>
                            Frontend Web Developer
                        </h1>
                        <Image className="animate-fade-right absolute -bottom-12 -left-4 xs:left-0 sm:left-3 lg:left-4 w-[55px] sm:w-[60px] lg:w-auto" src={nameBottom} alt=""/>
                    </div>
                </div>
                <div className="flex flex-col items-center relative -mt-10 sm:-mt-16 mb-0">
                    <div className="image relative flex justify-center">
                        <Image className="animate-fade-up" src={bannerModel} alt="Model"/>
                    </div>
    
                    <div className="absolute z-[2] bottom-10">
                        <div className="slide-button-wrapper relative bg-white bg-opacity-25 rounded-full w-auto p-3">
                            <input className="hidden" type="radio" name="slide" id="button-one"/>
                            <input className="hidden" type="radio" name="slide" id="button-two"/>

                            <div className="cursor-scale button-container flex">
                                <label className="z-[2] text-md sm:text-xl cursor-pointer text-white flex justify-center items-center w-32 sm:w-40 h-14" htmlFor="button-one">
                                    <a href="#projects" className="flex items-center">
                                        Portfolio
                                        <Image src={upRightArrow} alt="Arrow"/>
                                    </a>
                                </label>

                                <label className="z-[2] text-md sm:text-xl cursor-pointer text-white flex justify-center items-center w-32 sm:w-40 h-14" htmlFor="button-two">
                                    <a href="#contact" className="flex items-center">
                                        Hire Me
                                        <Image src={upRightArrow} alt="Arrow"/>
                                    </a>
                                </label>
                            </div>

                            <div className="slide-buttons z-[1] absolute top-3 bg-orange-500 w-32 sm:w-40 h-14 transition-transform duration-300 rounded-full"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section id="service" className="service relative px-4 md:px-20">
            <Image className="absolute w-full rounded-[45px] bottom-0 left-0" src={servicesBg} alt=""/>
            <div data-aos="fade-up">
                <div className="relative py-20">
                    <SectionHeadings heading="My Services"/>
                    <ServicesCards/>
                </div>
            </div>
        </section>
        <section id="about-me" className="relative py-20">
            <div className="container mx-auto px-4 sm:px-10">
                <div className="grid grid-cols-12 gap-6 mt-10">
                    <div data-aos="fade-right" className="col-span-12 lg:col-span-6 flex justify-center">
                        <Image className="  object-cover rounded-full" src={aboutMe} alt=""/>
                    </div>
                    <div data-aos="fade-left" className="col-span-12 lg:col-span-6 flex flex-col relative items-start justify-center">
                        <h1 className="relative text-black text-4xl sm:text-5xl">About Me</h1>
                        <div className="flex mt-2">
                            <div className="relative ms-24 w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
                        </div>
                        <p className="text-black mt-5 text-sm sm:text-base">Passionate Front-End and Back-End Developer with over 1+ years of experience in web development. Proficient in creating custom, SEO-friendly websites, Currently advancing my skills in the MERN stack and AI to deliver cutting-edge solutions. Committed to providing high-quality, user-focused digital experiences.</p>
        
                        <div className="mt-3 w-full">
                            <label className="text-black inline-block mb-1">Figma to HTML Conversion</label>
                            <ProgressBar percentage={'100%'} width="w-full"/>
                        </div>
                        
                        <div className="mt-3 w-full">
                            <label className="text-black inline-block mb-1">Frontend Web Development</label>
                            <ProgressBar percentage={'95%'} width="w-[95%]"/>
                        </div>
        
                       
        
                        <div className="relative block mt-8 line">
                        <Button
                            classes="border-orange-500 bg-transparent stroke-orange-500 hover:text-white"
                            title="Download Resume"
                            icon={<FaDownload className="ml-1 inline-block text-sm font-bold" width={24} height={24} />}
                            link="/resume/frontend-developement-resume.pdf"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <SoftSkillsSlide/>
      
        <section id="skills" className="skills py-20">
            <div>
                <div data-aos="fade-up">
                <h1 className="relative text-5xl text-center">My Skills</h1>
                <div className="flex justify-center mt-2">
                    <div className="relative w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
                </div>
                </div>
                
                <div className="flex flex-col md:flex-row px-0 md:px-10 py-10">
                    <div data-aos="fade-right" className="w-full md:w-2/4 px-5 md:px-10 mb-10 md:mb-0">
                        <h2 className="text-2xl underline">Languages:</h2>
                        <div>
                            <label className="inline-block mt-3 mb-1">HTML</label>
                            <ProgressBar percentage={'98%'} width="w-[98%]"/>
                        </div>
                        <div>
                            <label className="inline-block mt-3 mb-1">CSS</label>
                            <ProgressBar percentage={'94%'} width="w-[94%]"/>
                        </div>
                        <div>
                            <label className="inline-block mt-3 mb-1">JavaScript</label>
                            <ProgressBar percentage={'86%'} width="w-[86%]"/>
                        </div>
                        <div>
                            <label className="inline-block mt-3 mb-1">TypeScript</label>
                            <ProgressBar percentage={'80%'} width="w-[80%]"/>
                        </div>
                      
        
                        <h2 className="text-2xl underline mt-10">Version Control:</h2>
        
                        <div>
                            <label className="inline-block mt-3 mb-1">Git</label>
                            <ProgressBar percentage={'80%'} width="w-[80%]"/>
                            <label className="inline-block mt-3 mb-1">Github</label>
                            <ProgressBar percentage={'80%'} width="w-[80%]"/>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="w-full md:w-2/4 px-5 md:px-10">
                        <h2 className="text-2xl underline">Frameworks:</h2>
                        <div>
                            <label className="inline-block mt-3 mb-1">Bootstrap 5</label>
                            <ProgressBar percentage={'98%'} width="w-[98%]"/>
                        </div>
                        <div>
                            <label className="inline-block mt-3 mb-1">Tailwind CSS</label>
                            <ProgressBar percentage={'80%'} width="w-[80%]"/>
                        </div>
                       
        
                    
                       
        
                        
        
                    </div>
                </div>
            </div>
        </section>

        <SoftSkillsSlide/>

        <section className="my-journey py-20">
            <div data-aos="fade-up">
                <h1 className="relative text-5xl text-center">My Journey</h1>
                <div className="flex justify-center mt-2 mb-14">
                    <div className="relative w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
                </div>
            </div>        
            <div className="grid grid-rows-1 grid-cols-12 gap-6 mx-4 md:mx-20">
                <div data-aos="fade-right" className="col-span-12 lg:col-span-6">
                        <div className="card rounded-lg border-gray-300 shadow-2xl bg-gray-100 p-6">
                            <div className="border-b-2 flex items-center pb-4 gap-4">
                                <HiAcademicCap className="bg-orange-400 text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                                <h2 className="text-3xl">Certificates</h2>
                            </div>
                            <div className="card-body py-4">
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">XWAVE</h2>
                                        <p className="text-sm text-gray-500">Front-End Web Development Course - Building websites and landing pages using HTML5, CSS3, Bootstrap 5, and Javascript</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Jan 2024 - Present</p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">FreeCodeCamp</h2>
                                        <p className="text-sm text-gray-500">Responsive Web Design Certification - HTML, CSS, and Bootstrap</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">June 2024 - Aug 2024</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">CodeAlpha</h2>
                                        <p className="text-sm text-gray-500">Front-End Web Development Program - HTML, CSS, JavaScript, Calculator and Portfolio Projects</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">June 2024 - July 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div data-aos="fade-left" className="col-span-12 lg:col-span-6">
                        <div className="card rounded-lg border-gray-300 shadow-2xl bg-gray-100 p-6 mb-6">
                            <div className="border-b-2 flex items-center pb-4 gap-4">
                                <HiBriefcase className="bg-orange-400 text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                                <h2 className="text-3xl">Work Experience</h2>
                            </div>
                            <div className="card-body py-4">
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">XWAVE</h2>
                                        <p className="text-sm text-gray-500">Frontend Web Developer</p>
                                        <ul className="list-disc ml-4 mt-2 text-sm text-gray-500">
                                            <li>Developing responsive websites and landing pages</li>
                                            <li>Working with HTML5, CSS3, Bootstrap 5, and Javascript</li>
                                            <li>Collaborating on multiple client projects</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">Jan 2024 - 2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card rounded-lg border-gray-300 shadow-2xl bg-gray-100 p-6">
                            <div className="border-b-2 flex items-center pb-4 gap-4">
                                <HiBookOpen className="bg-orange-400 text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                                <h2 className="text-3xl">Education</h2>
                            </div>
                            <div className="card-body py-4">
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h2 className="text-xl font-medium">Shah Abdul Latif University Khairpur</h2>
                                        <p className="text-sm text-gray-500">Bachelor of Science</p>
                                        <p className="text-sm text-gray-500">Khairpur, Pakistan</p>
                                    </div>
                                    <div>
                                        <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">2021 - Present</p>
                                    </div>
                                </div>                                                           
                            </div>
                        </div>
                </div>
            </div>
        </section>

        <section id="projects" className="projects relative p-5 md:p-20 bg-black">
            <Image className="absolute w-full rounded-[45px] bottom-0 left-0" src={servicesBg} alt=""/>
            <div data-aos="fade-up" className="mb-14">
                <h1 className="relative text-white text-3xl md:text-5xl text-center">My Projects</h1>
                <div className="flex justify-center mt-2">
                    <div className="relative w-3 h-3 border border-white rounded-full before:absolute before:h-0.5 before:top-1 before:bg-white before:w-24 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-white after:w-24 after:left-5"></div>
                </div>
            </div>
            <Projects/>
        </section>
        
        <section id="contact" className="contact py-20 px-4 md:px-20">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                    <h2 data-aos="fade-up" className="text-5xl font-">Let's <span className="stroke-orange-500">Connect</span> & 
                        <br/> <span className="stroke-orange-500">Collaborate</span>
                    </h2>
                    <p data-aos="fade-up" className="my-6">Thank you for visiting my portfolio! If you have any questions, inquiries, or collaboration opportunities, I’d love to hear from you. Please fill out the contact form or reach out through the provided social media links, and I’ll get back to you as soon as possible.</p>

                    <ul data-aos="fade-up">
                        <li className="my-2"><a className="flex gap-4 items-center" href="tel:+923078235747"><HiPhone className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center"/>  +92 3078235747</a></li>
                        <li className="my-2"><a className="flex gap-4 items-center" href="mailto:suhaillakho.xwave@gmail.com"><HiMail className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center"/> suhaillakho.xwave@gmail.com</a></li>
                        <li className="my-2"><a className="flex gap-4 items-center" target="_blank" href="https://github.com/suhail-ahmed-lakho"> <FaGithub className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center"/> codewithsuhail</a></li>
                    </ul>
                </div>
                <div className="col-span-12 md:col-span-6 flex justify-center">
                    <div data-aos="fade-left" className="bg-orange-500 p-8 rounded-lg w-full max-w-xl">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
   </>
  );
}
