import campTrip from '../assets/images/Camp trip.jpg'
import movieNight from '../assets/images/Movie Night.jpg'
import funday from '../assets/images/youth fun day.jpg'
import service from '../assets/images/Youth Sunday Service.jpg'
import mission from '../assets/images/mission outreach.jpg'


const GraphicsPage = () => {
    return (
        <div className="w-full container mx-auto my-32 flex flex-col justify-center">
        <h1 className='text-center mb-10 mt-10'>MY <span style={{"backgroundColor":"#d60b5c", "boxShadow": "5px 5px 0px black"}}>DESIGNS</span></h1>
            <div className="graphicsContainer">
                <img src={campTrip} alt='camp trip poster' />
                <img src={movieNight} alt='movie night poster' />
                <img src={funday} alt='funday poster' />
                <img src={service} alt='church service poster' />
                <img src={mission} alt='mission poster' />
            </div>
        </div>
        
    )
}

export default GraphicsPage;