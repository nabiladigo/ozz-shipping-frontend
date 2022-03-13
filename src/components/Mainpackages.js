// import { useEffect, useState } from "react"
// import { Route, Routes } from "react-router-dom";
// import Packages from "../packages/Packages";
// import PacakageList from "../packages/PackageList";

// function Main(props) {
//     const [packages, setPackages] = useState(null)

//     const URL = "http://localhost:4000/packages/"

//     const getPackages = async () => {
//         const response = await fetch(URL)
//         const data = await response.json()
//         setPackages(data)
//         console.log(data)
//     }

//     const createPackage = async  => {
//         // make post request to create people
//         await fetch(URL, {
//             method: "post",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(package),
//         })
//         // update list of people
//         getPackages()
//     }

//     const updatePackage = async (packages, id) => {
//         // make put request to create people
//         await fetch(URL + id, {
//             method: "put",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(packages),
//         })
//         // update list of people
//         getPackages()
//     }

//     const deletePackage = async id => {
//         // make delete request to create Package
//         await fetch(URL + id, {
//             method: "delete",
//             })
//         // update list of Package
//         getPackages()
//     }

//     useEffect(() => getPackages(), [])

//     return (
//         <main>
//             <Routes>
//                 <Route exact path="/">
//                     <Packages packages={packages} createPackage={createPackage} />
//                 </Route>
//                 <Route
//                     path="/packages/:id"
//                     render={rp => (
//                         <PacakageList
//                             pacakages={packages}
//                             updatePackage={updatePackage}
//                             deletePackage={deletePackage}
//                             {...rp}
//                         />
//                     )}
//                 />
//             </Routes>
//         </main>
//     )
// }

// export default Main