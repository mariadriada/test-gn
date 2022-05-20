import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Test = () => {
  const [data, setData] = useState("")
  const fetchData = async () => {
    const result = await axios.get("../api/hello-world")
    console.log(result.data.hello)
    setData(result.data.hello)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <div>{data}</div>
}

export default Test
