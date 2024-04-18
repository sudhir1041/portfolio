import React from 'react';
import myimg from './assets/person.jpg';



const Home = () => {
    return (
        <>
           <section className='about-section'>
            <div className="about">
                <div className="about-image"><img src={myimg} alt="" /></div>
                <div className="about-content">
                    <div className="about-intro">
                        <div className="inner-text">
                        <h2> Hi! I am Sudhir Kumar.</h2>
                        <br/>
                        <p> I'm learning full-stack development from Cybrom Technology, and I have completed some technologies like HTML, CSS,
                                JavaScript, jQuery, Bootstrap, and React.js for the frontend. In the backend, I prefer Python with the Django framework,
                                and I use the MySQL database..</p>
                        
                        </div>
                        <a href="">Check Out My Resume</a>
                    </div>
                </div>
            </div>
        </section>
                
        </>
    )
}

export default Home;
