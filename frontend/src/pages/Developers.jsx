import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Github, Mail, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const developers = [
  {
    name: "Sudarshan",
    role: "Frontend Developer",
    photo: "/images/sudarshan.jpeg", // ensure image is in public/images
    bio: "Focused on building impactful solutions for rural youth.",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    email: "sudarshanchimma465@gmail.com",
    linkedin: "https://www.linkedin.com/in/sudarshan-chimma-bb0255381",
    github: "https://github.com/Sudarshanss07"
  },
   {
    name: "Mahesh",
    role: "Frontend Developer",
    photo: "/images/mahesh.jpeg", // ensure image is in public/images
    bio: "Focused on building impactful solutions for rural youth.",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    email: "maheshanjanappa501@gmail.com",
    linkedin: "https://www.linkedin.com/in/mahesh-mahi-055854279",
    github: "https://github.com/MaheshBabu0303"
  },
   {
    name: "Virupaksha",
    role: "Full Stack Developer",
    photo: "/images/virupaksha.jpeg", // ensure image is in public/images
    bio: "Focused on building impactful solutions for rural youth.",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    email: "virupaksha755@gmail.com",
    linkedin: "https://www.linkedin.com/in/virupaksha-901734362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Virupaksha18"
  },
   
];

const Developers = () => {
  const { t } = useTranslation();

  // Track which card is flipped
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <Navbar />

      <div className="container py-12 min-h-[calc(100vh-4rem-10rem)]">
        <h1 className="text-3xl font-bold text-center mb-4">
          {t("developers.title")}
        </h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {t("developers.subtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {developers.map((dev, i) => (
            <div
              key={i}
              className="flip-card h-80 cursor-pointer neon-glow"
              onClick={() => toggleFlip(i)}
            >
              <div
                className="flip-card-inner"
                style={{
                  transform: flipped[i] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* FRONT */}
                <div className="flip-card-front">
                  <img
                    src={dev.photo}
                    alt={dev.name}
                    className="w-36 h-36 rounded-full object-cover border-4 border-primary shadow-md mb-3"
                  />
                  <h3 className="text-xl font-semibold">{dev.name}</h3>
                  <p className="text-sm text-muted-foreground">{dev.role}</p>
                </div>

                {/* BACK */}
                <div className="flip-card-back p-5 text-center">
                  <p className="text-sm text-muted-foreground mb-3">{dev.bio}</p>

                  <h4 className="text-sm font-medium mb-2">{t("developers.skills")}</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {dev.skills.map((skill, j) => (
                      <span key={j} className="px-2 py-1 text-xs bg-primary/30 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-6 mt-4">
                    <a href={`mailto:${dev.email}`}><Mail className="w-6 hover:text-primary" /></a>
                    <a href={dev.github} target="_blank"><Github className="w-6 hover:text-primary" /></a>
                    <a href={dev.linkedin} target="_blank"><Linkedin className="w-6 hover:text-primary" /></a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Developers;
