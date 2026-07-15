import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'
import './styles.css'

const TechStack = () => {
  return (
  <section
  id="skills"
  className="relative py-28 scroll-mt-24 lab-section"
>
        <ScrollReveal stagger={0.08} className='text-center'>
           <p className="text-white/70 text-lg mb-5">
  Technologies I use to build modern, scalable, and high-performance web applications.
</p>

<p className="text-white/50 max-w-2xl mx-auto">
  My core expertise includes the MERN Stack, Next.js, TypeScript, REST APIs, database design, and modern frontend development.
</p>
            <div className='relative max-w-4xl mx-auto w-full'>
                <Image
                src='/images/skills-section.png'
                alt='tech stack'
                width={1280}
                height={920}
                className='w-full h-auto'
                priority
                />
            </div>
        </ScrollReveal>
    </section>
  )
}

export default TechStack