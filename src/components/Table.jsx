import React from "react";
import './Table.css'
import { useState, useEffect } from "react"


// const fetchResult = () => {
//   const query = q.trim().replace("+", " ")
//   fetch(`postgres://bjzizkoh:b4kfJAYFq59yYelVoMRfoAvIxEppJaeG@heffalump.db.elephantsql.com/bjzizkoh`)
//     .then((res) => res.json())
//     .then(
//       (result) => {
//         setIsLoaded(true);
//         setItems(result.docs);
//       },
//       (error) => {
//         setIsLoaded(true);
//         setError(error);
//       }
//     );
//     useEffect(() => {
//       fetchResult()
//     }, []);
// }

// componentDidMount(){
//   fetch('/app')
// 
// }

// const booksList = () => {
//   
//   return (
//   <tr key={index}>
//     <container>
//       <text>{item["title"]}</text>
//       {/* <text>{item["author"]}</text> */}
//     </container>
//   </tr>
//   )
// }



export default function Table () {
  // const getBooks = () => {
  //   fetch('http://localhost:8080/api/app', {
  //     method: 'GET',
  //     headers: {'Content-Type': 'application/json'},
  //    })
  //    .then(data => data.json())
  //   return (
  //     <tr>
  //       <td>{data}</td>
  //     </tr>
  //   )
  // }
  // componentDidMount() {
  //   getBooks();
  // }
    return (
      <div>
        <h1 id="title">My List</h1>
        <table>
          <tbody>
            <tr>
              <td>Book 1</td>
            </tr>
            <tr>
              <td>Book 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
