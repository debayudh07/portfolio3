"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2, Zap } from "lucide-react"
import CardLightning from "@/components/card-lightning"

const timelineData = [
  {
    id: 1,
    company: "LogicLens Technologies",
    role: "Backend Development Intern",
    period: "Aug 2023 - Jan 2024",
    location: "Remote",
    type: "Internship",
    logo: "/logiclens.png",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    id: 2,
    company: "Google Developer Groups",
    role: "Associate Web & Web3 Developer",
    period: "Oct 2023 - Present",
    location: "Kolkata, India",
    type: "Part-time",
    logo: "/gdg.png",
    skills: ["React", "Next.js", "Solidity", "Web3.js"],
  },
  {
    id: 3,
    company: "Unstop Igniters",
    role: "Blockchain & Cloud Igniter",
    period: "Dec 2023 - Present",
    location: "Remote",
    type: "Part-time",
    logo: "/unstop.png",
    skills: ["Blockchain", "AWS", "Cloud Computing", "Smart Contracts"],
  },
]

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", proficiency: 90 },
    { name: "TypeScript", proficiency: 85 },
    { name: "Solidity", proficiency: 80 },
    { name: "Python", proficiency: 80 },
    { name: "Move", proficiency: 65 },
    { name: "Java", proficiency: 80 },
    { name: "C", proficiency: 79 },
  ],
  "Frameworks/Libraries": [
    { name: "React", proficiency: 95 },
    { name: "Next.js", proficiency: 85 },
    { name: "Node.js", proficiency: 80 },
    { name: "Nest.js", proficiency: 80 },
    { name: "Express.js", proficiency: 79 },
  ],
  "Web3 & Tools": [
    { name: "Web3.js", proficiency: 85 },
    { name: "Ethers.js", proficiency: 80 },
    { name: "Hardhat", proficiency: 75 },
    { name: "Wagmi", proficiency: 65 },
    { name: "Git", proficiency: 90 },
  ],
  "Databases": [
    { name: "MongoDB", proficiency: 85 },
    { name: "PostgreSQL", proficiency: 75 },
  ]
}

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
              Code, Chai & Me
            </span>
            <span className="ml-2">☕💻</span>
          </h2>
          {/* Profile Section */}
          <CardLightning className="mb-16">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative w-64 h-64 mx-auto">
                  <Image
                    src="/debayudh.jpg"
                    alt="Debayudh Basu"
                    fill
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="prose prose-invert max-w-none text-center md:text-left">
                  {/* Mobile description */}
                  <p className="text-lg leading-relaxed md:hidden">
                    Full Stack Developer 💻 and Web3 Enthusiast ⚡. Building modern, responsive web applications with
                    cutting-edge technologies. From frontend to backend, creating seamless digital experiences. 🚀
                  </p>
                  {/* Desktop description */}
                  <div className="hidden md:block">
                    <p className="text-xl mb-4">
                      <Zap className="inline-block mr-2 text-sky-400" size={20} />
                      <strong>Hey, I&apos;m Debayudh Basu!</strong>
                    </p>
                    <p className="mb-4">
                      A <strong>Full Stack Developer 💻</strong> with a passion for creating{" "}
                      <strong>elegant solutions</strong> to complex problems. I specialize in building{" "}
                      <strong>responsive web applications</strong> using modern JavaScript frameworks and libraries.
                    </p>
                    <p className="mb-4">
                      I spend my days <strong>crafting clean code in JavaScript, TypeScript, and Python</strong>—and my
                      nights exploring emerging technologies and contributing to open-source projects. When I&apos;m not
                      coding, I&apos;m probably reading tech blogs, participating in hackathons, or learning about the latest
                      web development trends.
                    </p>
                    <p>
                      Let&apos;s <strong>connect and build something amazing together</strong>—because the{" "}
                      <strong>future is digital, and I&apos;m excited to be part of it!</strong> ⚡🚀
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardLightning>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                The Road So Far
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-sky-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <CardLightning className="md:w-1/2">
                      <div className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                          <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                            <Image
                              src={item.logo || "/placeholder.svg?height=56&width=56"}
                              alt={item.company}
                              width={56}
                              height={56}
                              className="rounded-full"
                            />
                          </div>
                          <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-white">{item.role}</h3>
                            <h4 className="text-lg text-blue-400">{item.company}</h4>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{item.period}</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{item.location}</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                              <Building2 className="w-4 h-4" />
                              <span className="text-sm">{item.type}</span>
                            </div>
                          </div>
                        </div>
                        {item.skills.length > 0 && (
                          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                            {item.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500/10 to-sky-500/10 text-blue-300 border border-blue-500/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardLightning>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 to-sky-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                Code Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <CardLightning key={category}>
                  <div className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800 h-full">
                    <h4 className="text-xl font-bold mb-4 text-blue-400 text-center md:text-left">{category}</h4>
                    {skills.map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                    ))}
                  </div>
                </CardLightning>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface SkillBarProps {
  name: string;
  proficiency: number;
}

function SkillBar({ name, proficiency }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-sky-500"
        />
      </div>
    </div>
  )
}
