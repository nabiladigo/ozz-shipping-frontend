import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Package = (props) =>(
    <div>
        <Link to= {`/packages/${props.package._id}`}>
            <img style={{ width:"160px", height:"160px", borderRadius:"80px"}} src={props.package.image} alt={props.package.title}/>
            <h2>{props.package.title}</h2>
        </Link>
    </div>
);

function PackageList() {
    const [ packages, setPackages] = useState([]);
    const URL = "https://ozzshipping.herokuapp.com/packages";

    const getPackages = async() => {
        const response = await fetch(URL);
        if(!response.ok){
            const message = `An error occurded: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const packages = await response.json();
        setPackages(packages);
    }

    // const updatePackage = async (ele, id) => {
       
    //     await fetch(URL + id, {
    //         method: "put",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(ele),
    //     })
       
    //     getPackages()
    // }

    // const deletePackage = async id => {
        
    //     await fetch(URL + id, {
    //         method: "delete",
    //     })
       
    //     getPackages()
    // }


    useEffect(()=> getPackages(), []);

    const packageList = () =>{
       return packages.map((ele) => {
            return (
                <Package
                    package={ele}
                    // updatePackage={updatePackage(ele._id)}
                    // deletePackage={() => deletePackage(ele._id)}
                    key={ele._id}
                />
            );
        });
    }

    return (
        <div>
            <h3>Orders</h3>
            <div>{packageList()}</div>
        </div>
    )
};

export default PackageList;
