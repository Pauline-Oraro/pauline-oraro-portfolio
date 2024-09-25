import {FaDev} from 'react-icons/fa6'

const BlogsPage = () => {
    return (
        <div className="w-full container mx-auto my-32 flex flex-col justify-center">
            <h1 className="text-center mb-10 mt-10"><span style={{"backgroundColor":"#d60b5c", "boxShadow": "5px 5px 0px black"}}>Web</span> Development Blogs</h1>
            <div className="card">
                <div className="card-body">
                    <span className="tag tag-pink">Typescript</span>
                    <h4>Getting started with Typescript.</h4>
                    <p>Typescript is a syntactic superset of Javascript which adds static typing. It shares the same base syntax(the way we write text to form a program) as Javascript but adds something to it. It is developed and maintained by Microsoft.</p>
                    <div className="card-footer">
                        <p>
                            <a href="https://dev.to/paulineoraro/getting-started-with-typescript-334l">Read More...</a>
                        </p>
                    </div>

                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <span className="tag tag-pink">Nextjs</span>
                    <h4>Understanding Nextjs Rendering methods: CSR, SSR, SSG, ISR.</h4>
                    <p>Nextjs is a popular framework that offers several rendering methods. In this article we will delve into the concepts of client side rendering, server side rendering, static site generation and incremental static regeneration.</p>
                    <div className="card-footer">
                        <p>
                            <a href="https://dev.to/paulineoraro/understanding-nextjs-rendering-methods-csr-ssr-ssg-isr-5fki">Read More...</a>
                        </p>
                    </div>

                </div>
            </div>


            

            
            <div className="socials flex flex-col justify-center mt-6">
                <p className="text-center">Follow me so as to read my blogs.</p>
                <button onClick={() => {window.open("https://dev.to/paulineoraro");}}className='socailmediabtn'>
                <FaDev className='icon' />
                </button>
            </div>
        </div>
    )
}

export default BlogsPage;