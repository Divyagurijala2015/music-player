import React from "react"
function Carousel(props){
    return(
        
                <div className="carousel-item active">
                    <img src={props.url} alt="" className="d-block" height={300} />
                </div>
    )
}
export default Carousel