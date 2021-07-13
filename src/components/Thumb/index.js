import React from "react"
import { Image } from "./Thumb.styles"

export const Thumb = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
  </div>
)
