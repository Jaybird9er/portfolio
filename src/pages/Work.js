import data from '../assets/data'
import Cards from '../components/Cards';

const Work = function () {
    return (
        <div className="work">
            <Cards array={data} />
        </div>
    );
}

export default Work;