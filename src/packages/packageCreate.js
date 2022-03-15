import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Create = () =>{
    const [newForm, setNewForm] = useState({
        title:"",
        image:"",
        weight:""
    })

    
    const onChange = (e) =>{
        setNewForm({ ...newForm, [e.target.id]: e.target.value})
    }

     const create = async() => {
        const { title,  weight} = newForm;

        if ( title  && weight){
             await axios.post(
                "http://localhost:4000/packages", 
                newForm
            )
            .then(res => alert(res))
        }else{
            alert("Invaled input")
        };
    }

    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div>
                    <label htmlFor="title">
                        Title
                    </label>
                    <input type="title" 
                       className="form-control" 
                       id="title" 
                       aria-describedby="newFormnameHelp" 
                       placeholder="Enter title"
                       value={newForm.title}
                       onChange={onChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputimage">
                        Image 
                    </label>

                    <input type="text" 
                       className="form-control" 
                       id="image" 
                       aria-describedby="newFormnameHelp" 
                       placeholder="Enter image"
                       alt={newForm.title}
                       value={newForm.image}
                       onChange={onChange}
                    />
                 </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputweight">
                        Weight
                    </label>
                    <input type="weight" 
                        className="form-control" 
                        id="weight" 
                        placeholder="weight"
                        value={newForm.weight}
                        onChange={onChange} 
                    />
                </div>
                {/* forward it to an item only  */}
                <Link to={""} >
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={() => create()}
                    >
                        Add package
                    </button>
                </Link>
            </form>
        </div>
    )
    // const onSubmit = async(e) =>{
    //     e.preventDefault();
    // }
}

export default Create;