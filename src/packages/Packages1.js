import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Package = (props) =>(
    <div>
        <Link to= "/packages/:id">
            <img style={{ width:"160px", height:"160px", borderRadius:"80px"}} src={props.package.image} alt={props.package.title}/>
            <h2>{props.package.title}</h2>
        </Link>
        {/* <Link className="btn btn-link" to={`/packages/edit/${props.package._id}`}>Edit</Link> */}
        {/* <button className="btn btn-link"
            onClick={()=> {
                props.deletePackage(props.package._id);
            }}>
            Cancel
        </button> */}
    </div>
);

function PackageList() {
    const [ packages, setPackages] = useState([]);

    useEffect(()=>{
        const getPackages = async() => {
            const response = await fetch("http://localhost:4000/packages/");
            if(!response.ok){
                const message = `An error occurded: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const packages = await response.json();
            setPackages(packages);
        }

        getPackages();

        return;
    }, []);

    async function deletePackage(id) {
        await fetch(`http://localhost:4000/packages/${id}`, {
            method: "DELETE"
        });

        // adding new package

        const newPackages = packages.filter((ele)=> ele._id !== id);
            setPackages(newPackages)
            return;
    }

    const packageList = () =>{
       return packages.map((ele) => {
            return (
                <Package
                    package={ele}
                    deletePackage={() => deletePackage(ele._id)}
                    key={ele._id}
                />
            );
        });
    }

    return (
        <div>
            <h3>Orders</h3>
            {/* <div>
                <img src=""/>
                <h2>title</h2>
                <div>
                   <h1> price</h1>
                    <span>status</span>
                </div>
            </div> */}
            <div>{packageList()}</div>
        </div>
    )
};

export default PackageList;
