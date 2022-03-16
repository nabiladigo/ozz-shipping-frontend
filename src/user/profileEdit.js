// import React from 'react'

// const profileEdit = () => {
//   return (
//     <div>profileEdit</div>
//   )
// }

// export default profileEdit

import 
// React, 
{ useState, useEffect } from "react";
import { 
    // useLocation,
    useParams, 
    useNavigate } from "react-router";
// import axios from "axios";
import { Link } from "react-router-dom";

const Edit = (id)=> {

    
        const [form, setForm] = useState({
            title: "",
            image: "",       
            weight: "",
            packages:[],
        });
    
        const params = useParams();
        const navigate = useNavigate();
    
        const fetchData = async() =>{
            //  do I have to change it to a string
            const id = params.id.toString();
            console.log(id)

            const res = await fetch(`http://localhost:4000/packages/${id}`);
            console.log(res)

            if(!res.ok){ 
                const message = `An error has occurred: ${res.statusText}`;
                window.alert(message);
                return;
            }

            const newPackage = await res.json();
                console.log(newPackage);

            if(!newPackage) {
                window.alert(`Package with id ${id} not found`);
                navigate("/");
                return;
            }
            console.log(newPackage);

            setForm(newPackage);
        }
        useEffect(() =>{
    
            fetchData();
        }, []);
    


        const updateForm = (value) =>{
            return setForm((prev) =>{
                return { ...prev, ...value};
            });
        }
        const onSubmit= async (e) =>{
            e.preventDefault();
            console.log(form)

            const editPackage ={
                title: form.title,
                image: form.image,
                weight: form.weight,
            };
                 
            //  verify the path
    
            await fetch (`http://localhost:4000/packages/edit/${params.id}`, {
                method: "PUT",
                // body: JSON.stringify(editPackge)
                body: JSON.stringify(editPackage),
                headers: {
                    "access-control-allow-origin" : "*",
                     'Content-Type': 'application/json'
                },
            })
            .then((response) => {
                console.log(response.json());
            })

            //  verify the path
            navigate("/")
        }
        return(
            <div>
                <h3>Update Profile</h3>
                <form onSubmit={(form) => onSubmit(form)}>
                     <div>
                    <label htmlFor="title">
                        username
                    </label>
                    <input type="title" 
                       className="form-control" 
                       id="title" 
                       aria-describedby="newFormnameHelp" 
                       placeholder="Enter username"
                       value={form.username}
                       onChange={(e) => updateForm({weight: e.target.value})}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputimage">
                        Image 
                    </label>

                    <input type="text" 
                       className="form-control" 
                       id="image" 
                    //    aria-describedby="newFormnameHelp" 
                       placeholder="Enter image"
                       alt={form.username}
                       value={form.image}
                       onChange={(e) => updateForm({weight: e.target.value})}
                    />
                 </div>
                    {/* <div className="form-group">
                        <label htmlFor="weight">Weight</label>
                        <input type="number"
                            className="form-control"
                            id= "weight"
                            value={form.weight}
                            onChange={(e) => updateForm({weight: e.target.value})}
                        />           
                    </div>  */}
                    <div className="form-group">
                        <Link  to={"/user"}>
                            <input
                                type="submit"
                                value="Update"
                                className="btn btn-primary"
                            />
                        </Link>
                    </div>
                    {/* <input type="submit" value="Update package" /> */}
                </form>
            </div>
        )
    
    }
    
    export default Edit;

