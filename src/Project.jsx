import myimg from './assets/portitem2.png';

const Project=()=>{
    return(
        <>
        <section>
            <div className="project">
                <div className="project-img">
                    <img src={myimg} alt="" />
                </div>
                <div className="project-detail">
                    <h6>Project 1</h6>
                    <h1>E-commerce Product Page</h1>
                    <p>
                        Develop a product page for an e-commerce
                        website. Design a layout displaying product
                        details, images, and the option to add items
                        to a cart. Focus on creating an intuitive and
                        user-friendly interface for online shoppers.
                        </p>
                    <a href="/product/index.html" >View Project</a>
                </div>
            </div>
            <div className="project">
                <div className="project-detail">
                    <h6>Project 2</h6>
                    <h1>E-commerce Product Page</h1>
                    <p>
                        Develop a product page for an e-commerce
                        website. Design a layout displaying product
                        details, images, and the option to add items
                        to a cart. Focus on creating an intuitive and
                        user-friendly interface for online shoppers.
                        </p>
                    <a href="" >View Project</a>
                </div>
                <div className="project-img">
                    <img src={myimg} alt="" />
                </div>
                
            </div>
        </section>
        </>
    )
}

export default Project;