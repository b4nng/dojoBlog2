import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title: 'Novo blog', body: 'Lorem Ipsm', author: 'ze', id: 1},
        {title: 'TesteGalrera', body: 'Lorem Ipsm', author: 'jao', id: 2},
        {title: 'IUurimartins uooou', body: 'Lorem Ipsm', author: 'ze', id: 3},
    ]);
    
    return ( 
        <div className="Home">
            <BlogList blogs={blogs} title="Os blog td"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'ze')} title="Blogs do ze"/>
        </div>
     );
}
 
export default Home;