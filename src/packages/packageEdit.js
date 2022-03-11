import 
// React, 
{ useState
    // , useEffect 
} from "react";
import { 
    useLocation,
    // useParams, 
    useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Edit = ()=> {
    const navigate = useNavigate();

    // not sure for what this state
    // const { state } =  useLocation();

    // console.log(state);

    const cancel = () => navigate("/packages");
    const  [form, setForm] = useState({
        weight: ""
    });

    const  { weight } = form;
    const onChange =(e) => {
        setForm({ ...form, [e.target.id]: e.target.value})
    }
        const update = (id) => {

            useEffect(() => {
              await axios.get("http://localhost:4000/packages")
              .then((response) =>{
                  setForm(responce.data);
              })
              .catch((err) =>{
                  console.log(err.message)
              });
            }, [])
            
        }
    // const onSubmit = async(e) =>{
    //     e.preventDefault();
    //      console.log("SUCCESS!");
    //      navigate("/packages")
    // }
    // console.log(weight)
    return(
        <div>
            <form onSubmit={(e) => (onSubmit(e))}>
                <div>
                    <input
                    // type="number"
                        type="text"
                        id= "weight"
                        value={weight}
                        placeholder="weight"
                        onChange= {(e) => onChange(e)}
                    />            
                </div>
                <button type="submit">Submit</button>
                <button onClick={cancel}>Cancel</button>
            </form>
        </div>
    )

    // const update =async() =>{
    // //    await axios.put(`http://localhost:4000/package/${state._id}`, form)
    //     .then(res=>{alert(res.data.message)
    
    //     navigate.push("/")})
    //     .catch(err => console.log(err));
    // }


}

export default Edit;




    // const id = props.match.params.id;
    // const packages = props.packages;
    // const order = packages.find(p => p._id === id);

    // const [editForm, setEditForm] = useState(order);

    // const onChange = e => {
    //     setEditForm({ ...editForm, [e.target.id]: e.target.value});
    // }

    // // const navigate = useNavigate();

    // const onSubmit = e => {
    //     e.preventDefault();
    //     props.updatePackage(editForm)
    //     props.navigate.push("/packages");
    // };

    // return(
    //     <div>
    //         <form onSubmit={onSubmit}>
    //             <input
    //             type="text"
    //             value={editForm.weight}
    //             id="weight"
    //             placeholder="weight"
    //             onChange={onChange}
    //             />
    //             <input type="submit" value="Update Package" />
    //         </form>
    //     </div>
    // )





//     const [form, setForm] = useState({       
//         weight: "",
//         packages:[],
//     });

//     const params = useParams();
//     const navigate = useNavigate();

//     useEffect(() =>{

//         const fetchData = async() =>{
//             //  do I have to change it to a string
//             const id = params.id.toString();
//             console.log(id)

//             const res = await fetch(`http://localhost:4000/packages/${id}`);
//             console.log(res)

//             if(!res.ok){ 
//                 const message = `An error has occurred: ${res.statusText}`;
//                 window.alert(message);
//                 return;
//             }

//             const newPackage = await res.json();
//                 console.log(newPackage);

//             if(!newPackage) {
//                 window.alert(`Package with id ${id} not found`);
//                 navigate("/");
//                 return;
//             }
//             console.log(newPackage);

//             setForm(newPackage);
//         }
//         fetchData();

//         return;
//     }, [params.id, navigate]);

//     const updateForm = (value) =>{
//         return setForm((prev) =>{
//             return { ...prev, ...value};
//         });
//     }
//     const onSubmit= async (e) =>{
//         e.preventDefault();

//         const editPackage ={
//             weight: form.weight,
//         };
             
//         //  verify the path

//         await fetch (`http://localhost:4000/packages/edit/${params.id}`, {
//             method: "PUT",
//             // body: JSON.stringify(editPackge)
//             body: JSON.stringify(editPackage),
//             headers: {
//                  'Content-Type': 'application/json'
//             },
//         });

//         console.log(editPackage);
//         //  verify the path
//         navigate("/")
//     }
//     return(
//         <div>
//             <h3>Update Package</h3>
//             <form onSubmit={onSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="weight">Weight</label>
//                     <input type="number"
//                         className="form-control"
//                         id= "weight"
//                         value={form.weight}
//                         onChange={(e) => updateForm({weight: e.target.value})}
//                     />           
//                 </div>
//                 <div className="form-group">
//                     <Link  to={"/packages"}>
//                         <input
//                             type="submit"
//                             value="Update"
//                             className="btn btn-primary"
//                         />
//                     </Link>
//                 </div>
//                 <input type="submit" value="Update package" />
//             </form>
//         </div>
//     )

// }

// export default Edit;