import projects from '../assets/webDev'
import Cards from '../components/Cards';

const Work = function () {
    return (
        <div className="work">
            <Cards array={projects} />
            <img src={require('../images/ProResume_Img.png')} alt='a pic'/>
        </div>
    );
}

export default Work;