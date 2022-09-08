import React,{useEffect,useState} from 'react' 
import  { useParams } from 'react-router-dom'
import TrackItem from './screens/trackitem';
import token from '../util/token'

//api url
const URL = `https://api.spotify.com`;

//api headers
const apiHeaders = new Headers();
apiHeaders.append("Authorization", `${token.id}`);

const reqOptions = {
    method: "GET",
    headers: apiHeaders,
    
    redirect: 'follow'
};


function Track(props) {
    const[audio,setAudio] = useState(null);
    const[preUrl,setpreUrl] = useState(false);
    const[playing,setPlaying]= useState(false);

    const playAudio = (url) =>{
        const myAudio = new Audio(url);
        if(!playing) {
            myAudio.play();
            setPlaying(true);
            setAudio(myAudio);
            setpreUrl(url);
            
        }
        else{
            audio.pause();
            if(preUrl === url){
                setPlaying(false);
            }else{
                myAudio.play();
                setAudio(myAudio);
                setpreUrl(url);
            }
        }
    };

    const trackIcon = (url) =>{
        if(!url)   return <span className="text-danger">no track</span>;

        if(playing && preUrl === url)
        return  <button className="btn btn-warning">pause</button>;
        return  <button className="btn btn-success">play</button>;

        
    };

    
    const [tracks,setTracks] = useState([]);
    const params = useParams();
    const getTracks = () => {
        fetch(`${URL}/v1/artists/${params.id}/top-tracks?market=IN`,reqOptions)
        .then(res => res.json())
        .then(out => {
            console.log('output =', out);
            setTracks(out.tracks);
        })
        .catch(err => console.log(err.message));
    }



    useEffect(() => {
        getTracks()
    },[]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-secondary">Tracks</h3>
                </div>
            </div>
            <div className="row">
                {
                    tracks.map((item,key) => {
                        return <TrackItem key={key} {...item}  icon={trackIcon} playCtrl={playAudio}/>
                    })
                }
            </div>
        </div>
    )
}

export default Track;