import projects from "../assets/webDev"


// parent - props
    // child - props
        //child

function ParentComponent(props) {
    const style = {
        backgroundColor: "red",
        width: "300px",
        align: "center",
    }
    return (
        <div style={style}>
            <p>title</p>
            {props.children}
        </div>
    )
}

function ChildComponent(props) {
    const style = {
        backgroundColor: "blue",
        height: "auto",
        width: "250px",
        overflow: "hidden",
    }
    return (
        <div style={style}>
            <p>test</p>
            <img src={require("../images/Test_Img.png")} alt="a pic"></img>
            {props.children}
        </div>
    )
}

function ChildComponent2() {
    let title = projects[0].title
    const style = {
        backgroundColor: "green",
        // height: "100%",
        width: "200px",
        overflow: "hidden",
    }
    return (
        <div style={style}>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>{title}</p>
            <p>{title}</p>
            <p>{title}</p>
            <p>{title}</p>
            <p>{title}</p>
        </div>
    )
}

const Home = function () {
    
    return (
        <div className="about">
            <p>blurb goes here</p>
        <ParentComponent>
            <ChildComponent>
                <ChildComponent2 />
            </ChildComponent>
            <p>test</p>
        </ParentComponent>
        </div>
    );
}

export default Home;