import React, {useEffect, useState} from 'react'

import "./card.css"

{
    return <>
    {
               
                <div className='cards'  onClick={() => window.location.href = `/movie/${movie.id}`}>
                    <img className='cards_img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} width={200} height={300}/>
                    <div className='cards_overlay'>
                        <div className='cards_title'>{movie?movie.orignal_title:""}</div>
                        <div className='cards_runtime'>
                            {movie?movie.release_date:""}
                            <span className='card_rating'>{movie?movie.vote_average:""} <i className="fas fa-star" />{" "}</span>
                        </div>
                        <div className='cards_discription'>{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                    </div>
                </div>
    }
    </>
}
export default Cards
