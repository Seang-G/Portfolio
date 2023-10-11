import axios from "axios";
import { useState } from "react";

export default function Admin(){

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [stackName, setStackName] = useState("")
  const [stackURL, setStackURL] = useState("")

  const [stackURLs, setStackURLs] = useState([])
  const [projects, setProjects] = useState([])

  const postProject = async() => {

  }

  const postStackURL = async(e) => {
    e.preventDefault()
    const res = await axios.post("/api/imageurl", {
      name: stackName,
      url: stackURL,
    })
    console.log(res.data)
  }

  const getStackURL = async(e) => {
    e.preventDefault()
    const res = await axios.get("/api/imageurl")
    // console.log(res.data)
    setStackURLs(res.data)
  }

  const getProject = async() => {
    const res = await axios.get("/api/project")
    setProjects(res.data)
  }

  return (
    <div>
      <form onSubmit={postProject}>
        <input placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input placeholder="description" value={desc} onChange={(e)=>setDesc(e.target.value)} />
        <button>submit</button>
      </form>

      <form onSubmit={postStackURL}>
        <input placeholder="stack name" value={stackName} onChange={(e)=>setStackName(e.target.value)} />
        <input placeholder="stack URL" value={stackURL} onChange={(e)=>setStackURL(e.target.value)} />
        <button>submit</button>
      </form>
      <button onClick={getProject}>프로젝트 갱신</button>
      {projects}
      <button onClick={getStackURL}>스택이미지 갱신</button>
      {stackURLs.map(stack=>{
        return(
          <div id={stack.id}>
            <img alt={stack.name} src={stack.url} width="100px"/>
          </div>
        )
      })}
    </div>
  );
}