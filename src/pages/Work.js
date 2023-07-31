import projects from '../assets/webDev'
import Cards from '../components/Cards';
import Card from '../components/Card';

const Work = function () {

    return (
        <div className="work">
            <Cards array={projects}>
                <Card >

                </Card>
            </Cards>
        </div>
    );
}

export default Work;