import React,{ useState } from 'react'
import "./body.css"
import memesData from "../../memesData"
import dragAnimation from "../../dragAnimation"

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

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}
 
    
  

  const[imageDisplay, setImageDisplay]= useState(true);
   const toggle=()=>{
      setImageDisplay((prevState)=> !prevState)
  } 
  const firstColumn = Math.floor((memeData.length)/3)
  const secondColumn = Math.floor((memeData.length)/3)+firstColumn
  const thirdColumn = Math.floor((memeData.length)/3)+secondColumn+1
  
  dragAnimation()



  return (
    <main>
         <h2></h2>
         {/*======IMAGE GALLERY*======*/}
         
            <div className={imageDisplay ? "image-gallery" : "image-gallery-none"}>
                <div className={"images-display" }>
                    <div className="column-image">
                        {memeData.slice(0,firstColumn).map(image=> {
                            const selectImg=()=>{
                                setMeme(prevState => ({
                                ...prevState,
                                randomImg:image.url }))}
                            return(<img
                                key={memeData.id}
                                onClick={()=>{toggle(); selectImg()}}
                                src={image.url}
                                alt={image.name} />)})}
                    </div>
                    <div className="column-image">
                        {memeData.slice((firstColumn+1),secondColumn).map(image=> {
                            const selectImg=()=>{
                                setMeme(prevState => ({
                                ...prevState,
                                randomImg:image.url }))}
                            return(<img
                                key={memeData.id}
                                onClick={()=>{toggle(); selectImg()}}
                                src={image.url}
                                alt={image.name} />)})}
                    </div>
                    <div className="column-image">
                        {memeData.slice((secondColumn+1),thirdColumn).map(image=> { const selectImg=()=>{
                                setMeme(prevState => ({
                                ...prevState,
                                randomImg:image.url }))}
                            return(<img
                                key={memeData.id}
                                onClick={()=>{toggle(); selectImg()}}
                                src={image.url}
                                alt={image.name} />)})}
                    </div>
            </div>
                <button className='button-close-images' onClick={toggle} >Cerrar</button>

            </div>
            
           {/*=====TEXT FORM AND BUTTONS=====*/}
        <section>
            <div className="form-meme">
                
                <input className='up-text-input' 
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />
                <input className='down-text-input'
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    
                    />
                    <button className='form--button' onClick={imgRandomer}>Next meme</button>
                    <button className='select-image-button'onClick={toggle} >meme gallery </button>
                </div>
                {/*=====THE MEME====*/}
                <div className="meme">
                <img src={meme.randomImg} className="meme--image" alt=""/>
                <h3 className="meme--text top">{meme.topText}</h3>
                <h3 className='meme--text bottom'>{meme.bottomText}</h3>
                </div>
        </section>
    </main>
  )
}

export default Body