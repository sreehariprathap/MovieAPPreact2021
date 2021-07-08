import React from "react"
//?API
import API from "../API"

//?config (importing from movieDB api)
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config"
//?COMPONENTS

//?HOOK
import { useState, useEffect } from "react"

//?IMAGE
import NoImage from "../images/no_image.jpg"

export const Home = () => {
  const [state, setState] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false)
      setLoading(true)

      const movies = await API.fetchMovies(searchTerm, page)
      // console.log(movies)
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }))
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  //? initial render
  useEffect(() => {
    fetchMovies(1)
  }, [])

  console.log(state)

  return <div>Home page</div>
}
