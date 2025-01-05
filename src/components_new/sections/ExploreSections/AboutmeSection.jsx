import React from 'react'

export default function AboutmeSection({showmore=false}) {
  return (
    <section className='text-black dark:text-white p-4 border-b-[1px] border-gray-800'>
      <h1 className='mb-7 font-semibold text-2xl lin'>About Me</h1>

      <p className={`${showmore?'line-clamp-none':'line-clamp-4'} leading-7`}>
        I’m a passionate software developer with a strong foundation in web development, specializing in Laravel, HTML, CSS, JavaScript, and TailwindCSS. Over the years, I’ve honed my skills in creating both dynamic and scalable web applications that are not only functional but also user-friendly.
        My journey as a developer has allowed me to work on various projects, building clean and maintainable code, optimizing performance, and crafting responsive designs that adapt seamlessly across devices. I have a deep understanding of Laravel for backend development, as well as front-end technologies like HTML, CSS, and JavaScript, which allow me to build comprehensive and efficient solutions. TailwindCSS has been a key tool in my development process, helping me create beautiful, responsive designs with ease.
        I am continuously improving my skill set, staying updated with industry trends, and striving to deliver high-quality code. I am always excited to take on new challenges and contribute to projects that make a real impact.
      </p>
      {
        !showmore && (<button className='text-blue-800'>Learn more about me</button>)

      }
      
    </section>
  )
}
