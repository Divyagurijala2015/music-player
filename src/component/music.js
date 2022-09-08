import React,{ useEffect,useState } from 'react' 
import token from '../util/token' 
import Artist from './screens/artist';
import Search from './screens/search';


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

function Music(props) {
    const [artists,setArtists] = useState([]);
    const searchHandler = (artistName) => {
        fetch(`${URL}/v1/search?q=${artistName}&type=artist`,reqOptions)
        .then(res => res.json())
        .then(out => {
            console.log('output = ', out);
            setArtists(out.artists.items);
        })
        .catch(err => console.log(err.message))
    };

    useEffect(() => {
        //call function
        searchHandler("SPB");
    },[]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-secondary">Music</h3>
                </div>
            </div>
            <Search search={searchHandler}/>

            <div className="row">
                {
                    artists.map((item,key) => {
                        return <Artist key={key} {...item}/>
                    })
                }
            </div>
        </div>
    )
}

export default Music