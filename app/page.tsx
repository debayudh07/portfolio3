"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Calendar,
  FileText,
  Braces,
  Smartphone,
  Zap,
  Code,
  Database,
  Server,
} from "lucide-react"

import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import LightningEffect from "@/components/lightning-effect"
import CardLightning from "@/components/card-lightning"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can add a console.log here if you want to verify it's working
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />
      <LightningEffect />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 lightning-text"
              data-text="Hey! I&apos;m Debayudh Basu"
              animate={{
                textShadow: [
                  "0 0 4px rgba(56, 189, 248, 0.3)",
                  "0 0 15px rgba(56, 189, 248, 0.7)",
                  "0 0 4px rgba(56, 189, 248, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              Hey! I&apos;m Debayudh Basu
            </motion.h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              <Zap className="inline-block mr-2 text-sky-400" size={20} />
              Full-Stack Developer | Web3 Developer | Tech Explorer
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#work" onClick={(e) => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}>
              <Button className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white">
                View Projects
              </Button>
              </a>
              <a href="#contact" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-blue-500 text-white hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Contact Me
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
              My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CardLightning>
              <ServiceCard
                icon={<Code className="w-10 h-10 text-blue-500" />}
                title="Full Stack Development"
                description="End-to-end web application development with modern frameworks and best practices."
              />
              </CardLightning>

              <CardLightning>
              <ServiceCard
                icon={<Database className="w-10 h-10 text-sky-500" />}
                title="Database Architecture"
                description="Design and implementation of efficient database solutions for scalable applications."
              />
              </CardLightning>

              <CardLightning>
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-blue-500" />}
                title="Frontend Development"
                description="Creating responsive, accessible, and performant user interfaces with modern frameworks."
              />
              </CardLightning>

              <CardLightning>
              <ServiceCard
                icon={<Server className="w-10 h-10 text-sky-500" />}
                title="Backend Development"
                description="Building robust server-side applications with Node.js, Express, and other technologies."
              />
              </CardLightning>

              <CardLightning>
              <ServiceCard
                icon={<Github className="w-10 h-10 text-blue-500" />}
                title="Version Control & CI/CD"
                description="Setting up efficient workflows with Git, GitHub Actions, and deployment pipelines."
              />
              </CardLightning>

              <CardLightning>
              <ServiceCard
                icon={<Code className="w-10 h-10 text-sky-500" />}
                title="Smart Contract & dApp Development"
                description="Writing secure smart contracts and building decentralized applications on various blockchain platforms."
              />
              </CardLightning>
            </div>
            </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                What I&apos;ve Built
              </span>
              <span className="ml-2 text-white">
                <Zap className="inline-block ml-2 text-sky-400" size={24} />
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CardLightning>
                <ProjectCard
                  title="NF2Z - NFT Marketplace"
                  description="A decentralized NFT marketplace with features like minting, trading, and auctions built on blockchain technology."
                  tags={["Solidity", "Web3.js", "React", "IPFS", "Ethereum"]}
                  image="/nf2z.png"
                  githubLink="https://github.com/debayudh07/nf2z"
                  liveLink="https://nf-2-z.vercel.app/"
                />
                </CardLightning>

                <CardLightning>
                <ProjectCard
                  title="Docease - AI Medical Platform"
                  description="Medical platform combining blockchain for data security and AI for diagnosis assistance."
                  tags={["TensorFlow", "Blockchain", "Python", "React", "AI"]}
                  image="/docease.png"
                  githubLink="https://github.com/debayudh07/DocEase-KGEC.git"
                />
                </CardLightning>

                <CardLightning>
                <ProjectCard
                  title="MediYaga - Telehealth Platform"
                  description="SAAS video consultation platform with AI prescription analysis for medical vending machines."
                  tags={["Daily.js", "Groq", "AI", "Next.js", "Node.js"]}
                  image="/mediyaga.png"
                  githubLink="https://github.com/debayudh07/mediyaga-frontend.git"
                  liveLink="https://mediyaga-frontend.vercel.app/"
                />
                </CardLightning>

                <CardLightning>
                <ProjectCard
                  title="NFTix - Blockchain Ticketing"
                  description="A decentralized ticketing platform that converts event tickets into NFTs, ensuring authenticity and enabling secure resale."
                  tags={["Solidity", "Ethereum", "Next.js", "TypeScript", "Smart Contracts"]}
                  image="/nftix.png"
                  githubLink="https://github.com/debayudh07/nftix"
                />
                </CardLightning>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">Ping Me</span>
              <span className="ml-2 text-white">
                <Zap className="inline-block ml-2 text-sky-400" size={24} />
              </span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <CardLightning className="w-full">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-200"
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600"
                    >
                      Send Message
                    </Button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-gray-400 mb-2">Prefer to schedule a meeting?</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                        href="https://calendly.com/debayudh-basu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                        >
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule a Meeting
                        </a>
                        <a
                        href="/deba.pdf"
                        download
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-all duration-200"
                        >
                        <FileText className="mr-2 h-4 w-4" />
                        Download CV
                        </a>
                    </div>
                  </div>
                </div>
              </CardLightning>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/debayudh07" label="GitHub" />
            <SocialIcon
              icon={<Linkedin />}
              href="https://www.linkedin.com/in/debayudh-basu-5280562b2/"
              label="LinkedIn"
            />
            <SocialIcon icon={<Twitter />} href="https://twitter.com/BasuDebayudh" label="Twitter" />
            <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault()
                console.log("Mobile icon click prevented")
              }}
            />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Debayudh Basu. All rights reserved.</p>
            <div className="mt-2">
              <a
                href="mailto:debayudh.basu@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                debayudh.basu@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 text-center md:text-left h-full">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
}

function ProjectCard({ title, description, tags, image, githubLink, liveLink }: ProjectCardProps) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 h-full shadow-lg transform hover:scale-[1.02]">
      {/* Image Container with better display */}
      <div className="w-full h-56 relative mb-6 overflow-hidden rounded-lg">
        <img 
          src={image || '/placeholder.jpg'} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.jpg';
          }}
          loading="lazy"
        />
      </div>

      {/* 3D Title with shadow effect */}
      <h3 className="text-xl font-bold mb-4 text-white text-center md:text-left 
                     drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] 
                     transform hover:-translate-y-0.5 transition-transform">
        {title}
      </h3>
      
      <p className="text-gray-400 mb-4 text-center md:text-left">{description}</p>
      
      {/* Tags with 3D hover effect */}
      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1.5 rounded-full 
                      bg-gradient-to-r from-blue-500/20 to-sky-500/20 text-blue-300
                      hover:from-blue-500/30 hover:to-sky-500/30 
                      transform hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(56,189,248,0.25)]
                      transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links with 3D button effects */}
      <div className="flex justify-center md:justify-start gap-4 mt-auto">
        {githubLink && (
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg 
                      hover:bg-blue-700 transition-colors
                      shadow-md hover:shadow-[0_5px_15px_rgba(37,99,235,0.5)]
                      transform hover:-translate-y-1 transition-transform"
          >
            <Github size={20} />
            Code
          </a>
        )}
        {liveLink && (
          <a 
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-sky-600 rounded-lg 
                      hover:bg-sky-700 transition-colors
                      shadow-md hover:shadow-[0_5px_15px_rgba(56,189,248,0.5)]
                      transform hover:-translate-y-1 transition-transform"
          >
            <Zap size={20} />
            Live
          </a>
        )}
      </div>
    </div>
  )
}
