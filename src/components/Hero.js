import HeroImg from '../assets/im1.jpg'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){
    const Config = {
        subtitle: 'Im a Fullstack developer and Designer',
        social: {
            twitter: 'https://twitter.com',
            facebook : 'https://facebook.com',
            linkdin : 'https://linkdin.com'
        }
    }

    return <section className='flex flex-col md:flex-row px-5 py-6 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className='w-1/2 text-white text-6xl font-hero-font'> Hi, <br/> Im <span className='text-black'> JV </span>   Logesh
                <p className='text-2xl'>{Config.subtitle} </p>
            </h1>
        
            <div className='flex py-10' >
                <a href={Config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
                <a href={Config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={Config.social.linkdin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
        
        </div>
        <img className='md:w-1/3' src={HeroImg}/>
    </section>

}
