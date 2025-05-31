"use client"
import React from "react";
import Link from "next/link";
import { useState } from "react";
const Shortern = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const generate=()=>{
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    seturl("")
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    setshorturl("")
    console.log(result)
  alert(result.message)

}
    
)
  .catch((error) => console.error(error));
  }
  const handleChange=()=>{

  }

  return (
    <div className="mx-auto max-w-lg bg-pink-200 my-16 p-8 rounded-lg flex flex-col gap-4" >
      <h1 className="font-bold text-2xl ">Generate your short URLs</h1>

      <div className="flex flex-col gap-2">
        <input className="px-4  bg-pink-100 focus:outline-pink-600 py-2 rounded-md " value={url} type="text" placeholder="Enter your URL" onChange={e=>{seturl(e.target.value)}} />
        <input
         value={shorturl} type="text" className="p-4  bg-pink-100 focus:outline-pink-600"
          placeholder="Enter your preffered short URL text  "
          onChange={e=>{setshorturl(e.target.value)}}

        />
     <button onClick={generate} className="bg-pink-500 rounded-lg p-3 py-1 font-bold text-white shadow-lg my-3   ">
        Generate
     </button>
      </div>

{generated && <>
<span className="font-bold text-lg ">
  Your Link:
</span>
<code>
  <Link target="_blank" href={generated}>{generated}
  
  </Link>
</code>
</>}

    </div>
  );
};

export default Shortern;
