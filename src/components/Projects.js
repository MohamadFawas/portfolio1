import websiteimg1 from '../assets/im3.jpg';
import websiteimg2 from '../assets/im4.jpg';
import websiteimg3 from '../assets/im5.jpg';
export default function Projects () {
    const Config ={
        Projects : [
            {
                image : websiteimg1,
                description : 'A E-comerce website. built with MERN stuck.1478',
                link: 'https://github.com/MohamadFawas/Defect-tracker-system.git'
            },
            {
                image : websiteimg2,
                description : 'Food Ecommerce website like Swiggi, with Agguler & .Net',
                link: 'https://github.com/MohamadFawas/Library-Management-System'
            },
            {
                image : websiteimg3,
                description : 'Basic blog website. Built with NextJS and MongoDb',
                link: 'https://github.com/MohamadFawas/CampusProjectCode.git'
            }
        ]
    }

    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
            <p>These are some of my best projects. Ihave built these with react, MERN and vennilaCSS. Check them out.</p>
            </div>
            
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {Config.Projects.map((project) => ( 
                    
                        <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                        
                ))}
                {/* <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteimg1} />
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>A E-comerce website. built with MERN stuck.</p>
                    </div>
                </div>
                
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteimg2} />
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>Food Ecommerce website like Swiggi, with Agguler & .Net</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={websiteimg3} />
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>Basic blog website. Built with NextJS and MongoDb</p>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
}
