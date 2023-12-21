import React from "react";

const ExperienceCard = ({ item ,index}) => {
  return (
    <div
      className={`flex flex-col  w-full  ${
        index % 2 == 0 ? "lg:items-start " : "lg:items-end "
      }   mb-1 `}
    >
      <div className="font-bold text-slate-900">{item.title}</div>
      <div className="text-black text-md ">{item.location}</div>
      <div className="text-slate-500 max-w-[1300px] text-sm pt-1 text-justify whitespace-pre-line">
        {item.description}
      </div>
      <div>
    
        {
          item.experienceType ==="education" ? (
            <div className="flex flex-row flex-wrap mt-2 gap-3">
            {
                item.skilledLearned.map((skill) => (
                  <div key={skill} className="bg-blue-400 text-white text-xs borderBlack rounded-xl px-2 py-.5 dark:bg-white/10 dark:text-white/80">
                    {skill}
                  </div>
                ))
              }
            </div>
          ) : item.experienceType === "job" ? (
            <div>
              
            </div>
          ):(
            <div>
            
            </div>
          )
        } 

     
      </div>
    </div>
  );
};

export default ExperienceCard;
