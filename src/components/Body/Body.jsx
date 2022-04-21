import React,{ useState } from 'react'
import "./body.css"
import memesData from "../../memesData"

const Body = () => {
    const[memeData, setMemeData]= useState(memesData.data.memes)
    const[meme, setMeme]= useState({topText:"",bottomText:"", randomImg:""});

  function imgRandomer(){
        
        const randomNumber = Math.floor(Math.random()* memeData.length)
        const url = memeData[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            randomImg:url
        }))
  }


  const[imageDisplay, setImageDisplay]= useState(true);
   const toggle=()=>{
      setImageDisplay((prevState)=> !prevState)
  } 
  const firstColumn = Math.floor((memeData.length)/3)
  const secondColumn = Math.floor((memeData.length)/3)+firstColumn
  const thirdColumn = Math.floor((memeData.length)/3)+secondColumn+1
  console.log(thirdColumn)
  return (
    <main>
         <h2>Crea tu Meme </h2>
         <button onClick={toggle} >Ver imagenes </button>
         <div className={imageDisplay ? "images-display" : "image-display-none"}>
            <div className="column-image">
                 {memeData.slice(0,firstColumn).map(image=> {
                    return(<img src={image.url} />)})}
            </div>
            <div className="column-image">
                 {memeData.slice((firstColumn+1),secondColumn).map(image=> {
                    return(<img src={image.url} />)})}
            </div>
            <div className="column-image">
                 {memeData.slice((secondColumn+1),thirdColumn).map(image=> {
                    return(<img src={image.url} />)})}
            </div>
            <button className='button-close-images' onClick={toggle} >Cerrar</button>
        </div>
        <div className="form-meme">
               
                <input className='up-text-input' 
                 type="text"
                 placeholder="Top text"
                 name="topText"
                 value={meme.topText}
                 
                 />
                <input className='down-text-input'
                 type="text"
                 placeholder="Bottom text"
                 name="bottomText"
                 value={meme.bottomText}
                 
                 />
                <button className='form--button'
               
                
                onClick={imgRandomer}
                >Dame mi meme</button>
            
            </div>
        <div className="meme">
            <img src={meme.randomImg} className="meme--image" alt="" />
            <h3 className="meme--text top">Hola</h3>
            <h3 className='meme--text bottom'>Chau </h3>
        </div>
        
    </main>
  )
}

export default Body