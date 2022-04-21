import React from 'react'
import  "./header.css"
import ImgHeader from "../../assets/meme-header.png"

const Header = () => {
  return (
    <header>
    <img 
        src={ImgHeader}
        className="header--image"
    />
    <h1 className="header--title">Meme Generator</h1>
    
    </header>
  )
}

export default Header