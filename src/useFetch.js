import { useState, useEffect } from 'react';

const useFecth = (url) => {
        
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch Data');
                }
                return res.json();
            })
            .then((data) => {
                setIsLoading(false);
                setBlogs(data);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
        }, 1000);
        
    }, [url]);
    
    return { blogs, isLoading, error };

}

export default useFecth;