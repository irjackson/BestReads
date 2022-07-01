import React, { Component } from "react";
import Navbar from '../../components/Navbar.jsx'
import { useState, useEffect } from "react"
import './Explore.css'

const Explore = () => {
    // declare your states
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // SEARCH BAR STATE
    //set search query to empty string
    //setQ binds value from search form 
    const [q, setQ] = useState("");

    const fetchResult = () => {
      const query = q.trim().replace(" ", "+")
      fetch(`http://openlibrary.org/search.json?title=${q}&limit=20`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.docs);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }

    useEffect(() => {
      fetchResult()
    }, []);






    const data = items.map((item, index) => {
      let title = item["title"]
      const submit = () => {
        fetch('http://localhost:8080/api/explore', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({title: title})
         })

      }
      return <tr key={index}>
        <container>
          <text>{item["title"]}</text>
          {/* <text>{item["author"]}</text> */}
          <button type="submit" id='add' onClick={() => submit(title)}>Add To My List</button>
        </container>
      </tr>
})


    if (error) {
      return <>{error.message}</>;
    } else if (!isLoaded) {
      return <>loading...</>;
    } else {
      return (
        <div id="App">
        <Navbar />
        <div id="search">
          <input
            type="search"
            name="search-form"
            id='search-form'
            placeholder="Search for..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          ></input>
          <button type="submit" id='SearchButton'onClick={fetchResult}>Search</button>
        </div>
        <div id="tableDiv">
          <center>
            <table>
              <tbody>
                {data}
              </tbody>
            </table>
          </center>
        </div>
      </div>
      );
    }
}


export default Explore;