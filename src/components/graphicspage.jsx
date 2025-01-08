import campTrip from '../assets/images/Camp trip.jpg'
import movieNight from '../assets/images/Movie Night.jpg'
import funday from '../assets/images/youth fun day.jpg'
import service from '../assets/images/Youth Sunday Service.jpg'
import mission from '../assets/images/mission outreach.jpg'
import utamaduni from '../assets/images/Utamaduni day.jpg'
import dinner from '../assets/images/dinner party.jpg'
import picnic from '../assets/images/picnic and prayer breakfast.jpg'
import model from '../assets/images/model casting call.jpg'

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
                <img src={utamaduni} alt='utamaduni day poster' />
                <img src={dinner} alt='dinner party'/>
                <img src={picnic} alt="prayer breakfast and picnic"/>
                <img src={model} alt="model casting call"/>
            </div>
        </div>
        
    )
}

export default GraphicsPage;