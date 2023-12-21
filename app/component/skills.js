import React from 'react'
import { skillsData } from '../data/data_cv'
import Heading from './subComponent/heading'

const Skills = () => {
  return (
    <section id ='skills' className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
      <Heading>My Skills</Heading>
       <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">

      {
        skillsData.map((skill,index)=>(
          <div key={index}>
          {skill.status==="Active" ?(
            <div key={skill.name} className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            
            {skill.name}
            
            </div>
            ):null}
            </div>
          
        ))
      }
      </ul>

    </section>
  )
}

export default Skills