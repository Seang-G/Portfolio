import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Projects({projects}) {

  return(
    <div id="projects">
      <motion.h1
        initial={{opacity:0.4}}
        whileHover={{
          opacity:1,
          textShadow: "0px 0px 10px rgb(19, 188, 255)"
        }}
      >
        Projects
      </motion.h1>
      <div id="projects-grid">
        {projects.map((project, idx)=>{
          return(
            <div key={idx}>
              <motion.h4 
                initial={{opaciy: 0}}
                whileHover={{
                  opacity:1,
                  textShadow: "0px 0px 10px rgb(11, 139, 230)"
                }}
              >{project.title}</motion.h4>
              <h6>{project.description}</h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}