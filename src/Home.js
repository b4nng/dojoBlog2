import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="Home">
            {error && <div>{ error }</div>  }
            {isLoading && <h1>Loading data...</h1>}
            {blogs && <BlogList blogs={blogs} title="Os blog td"/>}
        </div>
     );
}
 
export default Home;