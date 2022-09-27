import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarsRating = () => {
    const [ rating, setRating ] = useState(0);
    const [ starsHovered, setStarsHovered ] = useState(0);
    return (
        <div>
            {[...Array(5)].map((star, idx) => {
                const ratingValue = idx + 1;
                return (
                    <label key={idx}>
                        <input
                            type='radio'
                            name='rating'
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            className='star'
                            size={50}
                            color={ratingValue <= (starsHovered || rating) ? '#ffc107' : '#e4e5e9'}
                            onMouseOver={() => setStarsHovered(ratingValue)}
                            onMouseOut={() => setStarsHovered(0)}
                        />
                    </label>
                )
            })}
            the rating is {rating}. and start hovered is {starsHovered}.
        </div>
    )
}

export default StarsRating;