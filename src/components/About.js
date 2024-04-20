import AboutImg from '../src/assets/im2.jpg'
export default function About () {
const Config = {
    line1 : 'Some Information about myself. I am fullstack developers. I built butifull wesite with reactJS and Tailwin CSS. ',
    line2 : 'I am proficiant in frontend skill like reactJS , redux, redux Tool Kit ,Axios,Tailwind CSS, SaCSS, CSS and many more ',
    line3 : 'In backend I know Node.js, Express.js, MongoDB , and Mngoes ',
}

    return <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='md:w-1/2 py-5'>
            <img  src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About me </h1>
                <p className='pb-5'>{Config.line1}</p>
                <p className='pb-5'>{Config.line2}</p>
                <p className='pb-5'>{Config.line3}</p>
            
            </div>
        </div>
    </section>
}