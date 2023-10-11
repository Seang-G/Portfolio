import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

import "../styles/dist/intro.css"
import Head from "../components/Head.jsx"
import Projects from "../components/Projects";
import axios from "axios";


const Intro = () => {
  const currentDOM = useRef(0)
  
  const lastPage = 2;
  const [height, setHeight] = useState(720)
  
  const [page, setPage] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [projects, setProjects] = useState([])
  const screens= [<Head />, <Projects projects={projects}/>, <h1>3페이지</h1>]
  
  const changePage = e => {
    setScrollY(window.scrollY)
  }

  const getProjects = async() => {
    const res = await axios.get("/api/projects")
    setProjects(res.data)
  }

  const postProject = async(e) => {
    e.preventDefault()

    const res = await axios.post("/api/projects", {title:e.target.title.value, description:e.target.description.value})
    console.log(res)
  }

  useEffect(()=>{
    // getProjects()
  }, [])

  useEffect(()=>{
    setPage(Math.floor(scrollY/height))
  }, [scrollY])

  useEffect(()=>{setHeight(currentDOM.current.clientHeight/(lastPage+1))}, [currentDOM])

  // useEffect(()=>console.log(page), [page])

  return (
    <div id="intro" onWheel={changePage} ref={currentDOM}>
      {/* <form onSubmit={postProject} style={{position:"absolute", zIndex:3}}> */}
        {/* <textarea name="title" id="title" cols="30" rows="10"></textarea>
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
        <button>입력</button> */}
      {/* </form> */}
      {screens.map((screen, idx)=>{
        return (
          <AnimatePresence key={idx}>
            {page===idx&&
            <motion.div
              initial={{
                opacity:0,
                scale:0
              }}
              animate={{
                opacity:1,
                scale:1
              }}
              exit={{
                opacity:0,
                scale:0
              }}
            >
              {screen}
            </motion.div>}
          </AnimatePresence>
        )
      })}
    </div>
  );
}

export default Intro