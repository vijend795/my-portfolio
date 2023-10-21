import React from 'react'

const ExperienceCard = ({item}) => {
  return (
    <div> 
    
    <h3 className="font-semibold capitalize">{item.title}</h3>

    <p className="font-normal !mt-0">{item.location}</p>
    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
      {item.description}
    </p>
    </div>
  )
}

export default ExperienceCard