import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({id, year, title, summary, poster, genres}){
    return (
        <Link className="detail_btn" to ={{
            pathname: `/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            
            <h3>왜 안나와11111?</h3>
            <div className="movie">
                <img src={poster} alt={title} title={title}/>
                <div>아이고 안녕하세요</div>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    {/* <h5 className="movie__year">{year}</h5> */}
                    <ul className="genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres__genre">{genre}</li>
                        ))}    
                    </ul>    
                    <p className="movie__summary">{summary.slice(0,120)}...</p>
                </div>    
            </div>
    </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie; 