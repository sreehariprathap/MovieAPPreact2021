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

//? custom hook
import { useHomeFetch } from "../hooks/useHomeFetch"
//? HERO IMAGE
import { HeroImage } from "./HeroImage"

export const Home = () => {
  const { state, loading, error } = useHomeFetch()

  console.log(state)

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
    </>
  )
}
