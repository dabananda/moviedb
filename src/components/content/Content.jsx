import React from 'react';
import './content.scss';

const Content = props => {
  const {
    Poster,
    Title,
    Released,
    Runtime,
    Actors,
    Country,
    Director,
    Genre,
    Writer,
    imdbRating,
  } = props.movie;
  return (
    <div className="d-flex justify-content-center">
      <div className="card mb-3" style={{ maxWidth: '550px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Poster} className="img-fluid rounded-start" alt={Title} />
          </div>
          <div className="col-md-8">
            <div className="card-body py-0 ps-3 pe-2">
              <h3 className="card-title">{Title}</h3>
              <p className="card-text mb-0">
                <span className="fw-bold">IMDB Rating:</span> {imdbRating}
              </p>
              <p className="card-text mb-0">
                <span className="fw-bold">Genre:</span> {Genre}
              </p>
              <p className="card-text mb-0">
                <span className="fw-bold">Runtime:</span> {Runtime}
              </p>
              <p className="card-text mb-0">
                <span className="fw-bold">Actors:</span> {Actors}
              </p>
              <p className="card-text mb-0">
                <span className="fw-bold">Director:</span> {Director}
              </p>
              <p className="card-text mb-0">
                <span className="fw-bold">Writer:</span> {Writer}
              </p>
              <p className="card-text mb-0">
                <span className="fw-bold">Released:</span> {Released}
              </p>
              <p className="card-text mb-0">
                <span className="fw-bold">Country:</span> {Country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
