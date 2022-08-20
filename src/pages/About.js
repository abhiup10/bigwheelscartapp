import React from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/icons'
import styles from './about.css'
const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5 pogo ">
                <h1>About</h1>
                <p><strong>All rights reserved! </strong> by &copy;abhishek upadhyay.</p>

                <a className="btn btn-primary button " href="https://github.com/abhiup10">
                    <GitHubIcon width={"18px"}/> <span className="ml-2 mr-4">Visit Repo</span></a>
            </div>
        </Layout>
     );
}
 
export default About;