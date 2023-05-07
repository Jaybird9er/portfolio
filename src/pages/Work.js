import projects from '../assets/webDev'
import Cards from '../components/Cards';

const Work = function () {
    return (
        <div className="work">
            <Cards array={projects} />
        </div>
    );
}

export default Work;