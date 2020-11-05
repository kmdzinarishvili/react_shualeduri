import React, { useEffect } from 'react';
import axios from 'axios';

function Home(){
    //https://github.com/typicode/demo/blob/master/db.json
    console.log('running');
    axios.get("https://github.com/typicode/kmdzinarishvili/for_midterm")
    .then(res=>res.json())
    .then(result => {console.log(result)
        result['posts'].map((data, key)=>{
            return <div id="posts">
                {result.id +
                "," +
                result.title}
            </div>
        })
    
    }



    )
    .catch(error => console.log('error', error));

    return (<div>
            <h1>Home</h1>
            <h2>Using Rest Server</h2>

        </div>
        );

}
export default Home;