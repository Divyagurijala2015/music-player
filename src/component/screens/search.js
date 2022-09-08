import React,{useState} from "react"
function Search(props){
    const[person,setPerson]= useState("");
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log('person=',person);
        props.search(person);
    }
    return(
        <div  className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={(e) => submitHandler(e)}>
                            <div className="input-group">
                                <input type="search" name="person" value={person} onChange={(e)=>setPerson(e.target.value)} id="person" className="form-control" placeholder="enter artist name" required />
                                <input type="submit" value="search" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Search