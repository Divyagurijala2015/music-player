import React,{useState} from "react"

function TrackItem(props){
    const {name,album,preview_url} = props;
  
    return(
        <div className="col-md-4 mt-2 mb-2" onClick={()=>props.playCtrl(preview_url)}>
            <div className="card">
                <img src={album.images[1].url} alt={name} className="card-img-top" />
                
                <div className="card-body">
                <h5 className="text-secondary text-center">{name}</h5>
                </div>
               
                <div className="card-footer">
                    {props.icon(preview_url)}
                </div>

            </div>

        </div>
    )
}
export default TrackItem