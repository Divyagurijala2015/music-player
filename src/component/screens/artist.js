import React from "react"
import Carousel from "./carousel";
import {NavLink} from "react-router-dom"



function Artist(props) {
    const {id,name,images,genres,followers,popularity} = props;
    
    return(
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                    <h4 className="text-secondary"></h4>
                </div>
                <div className="card-body">
                <div className="carousel slide " id="demo" data-bs-ride = "carousel">
                <div className="carousel-inner">{
                    images.map((item,key) =>{
                        return <Carousel key={key} {...item}/>
                    })
                }
                

            </div>
                    <p>
                        <strong>genres</strong>
                        <span className="float-end">{genres}</span>
                    </p>
                    <p>
                        <strong>followers</strong>
                        <span className="float-end">{followers.total}</span>
                    </p>
                    <p>
                        <strong>popularity</strong>
                        <span className="float-end">{popularity}</span>
                    </p>
                    

                
                </div>
                </div>
                <div className="card-footer"></div>
                <NavLink to={`/track/${id}`}  className="btn btn-dark float-end"> tracks</NavLink>

            </div>

        </div>

    )
}
export default Artist