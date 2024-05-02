import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { searchQuery } from '../features/common/commonSlice';
import netflix from '../assets/netflix.png';

function Navbar(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) =>{
           let { value } = e.target;
           dispatch(searchQuery(value));
           if(value.length > 2){
               navigate('/search');
           }
  }
    
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
  <NavLink className="navbar-brand text-white" to="/">
    <img src={netflix} alt="Netflix" style={{ width: "5rem"}} />
  </NavLink>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/browse/tv">TV Shows</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/browse/movie">Movies</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/browsebygenre/movie/28">Browse By Genre</NavLink>
      </li>
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
    </form>
  </div>
</div>
</nav>
    );
}

export default Navbar;