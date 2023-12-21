import React from 'react'
import { skillsData } from '../data/data_cv'
import Heading from './subComponent/heading'

const Skills = () => {
  return (
    <section 
    id ='skills' 
    // className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    className='mb-28 p-6 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 flex flex-col justify-start items-center'
    
    >
      <Heading>My Skills</Heading>
       <ul className="flex flex-wrap justify-center gap-4 px-3 text-lg text-gray-800">

      {
        skillsData.map((skill,index)=>(
          <div key={index} className=''>
          {skill.status==="Active" ?(
            <div key={skill.name} className="bg-white borderBlack rounded-xl px-5 py-1 dark:bg-white/10 dark:text-white/80 hover:bg-blue-400">
            
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