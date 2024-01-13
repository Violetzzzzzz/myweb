const Card = (props) => {
    const [hovered, setHovered] = React.useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };

    const cardStyle = {
        backgroundColor: hovered ? "#a56fc9" : "transparent",
        color: hovered ? "white" : "#a56fc9",
        fontSize: hovered ? "25px" : "45px",
        transition: hovered ? "background-color 0.5s ease, color 0.5s ease" : "background-color 1s ease-out, color 1s ease-out",
    };

    return (
        <label className="card" style={cardStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            {hovered ? props.text : "?"}
        </label>
    );
};


const GridPic = () => {
    const [hovered, setHovered] = React.useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };

    const gridStyle = {
        opacity: hovered ? "1" : "0",
        transition: hovered ? "opacity 0.2s ease" : "opacity 7s ease-out",
    };

    return (
        <span className="grid-bg" style={gridStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <img src="bg.png" alt="background-pic" />
        </span>
    );
};


const BackgroundPics = ({ elementID }) => {
    const containerRef1 = React.useRef(null);
    const containerRef2 = React.useRef(null);
    const containerRef3 = React.useRef(null);
    const [gridPics, setGridPics] = React.useState([]);

    const handleContainerResize = () => {
        const element2 = document.getElementById("myMain");
        if (element2) {
            containerRef2.current = element2;
        }
        const element3 = document.getElementById(elementID);
        if (element3) {
            containerRef3.current = element3;
        }
        if (containerRef1.current && containerRef2.current && containerRef3.current) {
            const containerWidth = containerRef2.current.offsetWidth;
            const containerHeight = containerRef3.current.offsetHeight;
            containerRef1.current.style.width = `${containerWidth}px`;
            containerRef1.current.style.height = `${containerHeight}px`;
            containerRef1.current.style.marginTop = `${-containerHeight}px`;
            const columns = Math.floor(containerWidth / 25);
            const rows = Math.floor(containerHeight / 25);
            const newGridPics = Array.from({ length: columns * rows }, (_, index) => <GridPic key={index} id={index} />);
            setGridPics(newGridPics);
        }
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleContainerResize);
        handleContainerResize();
        return () => {
            window.removeEventListener('resize', handleContainerResize);
        };
    }, []);

    return (
        <div className="grid-container" ref={containerRef1}>
            {gridPics.map((gridPic, index) => React.cloneElement(gridPic, { key: index }))}
        </div>
    );
};



const HomeTitle = (
    <div>
        <div className="titles" id="home-titles">
            <h1 className="title1">Kia Ora, </h1>
            <h1 className="title2">I am Chi(Violet) Zhang,</h1>
        </div>
        <BackgroundPics elementID="home-titles" />
    </div>
)

const HomeCards = (
    <div id="cards">
        <Card text="a Pharmaceutical Researcher" />
        <Card text="a Registered Teacher" />
        <Card text="a Software Developer" />
        <Card text="a Continuous Learner" />
    </div>
)

const HomeText = (
    <div id="home-texts-container">
        <div className="texts" id="home-texts">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="text1">Let me introduce myself... </h1>
            <br></br>
            <br></br>
            <p className="text2">Hi, my name is Chi Zhang, as known as Violet too.
                I’m currently a student of Master of Software Development at Victoria University of
                Wellington. I have a diverse academic background, which has honed my ability to adapt
                quickly, communicate effectively, and collaborate with diverse teams.</p>
            <br></br>
            <p className="text2">My passion for the field of software development stems from a deep
                fascination with technology and its potential to drive innovation and transform industries.
                I'm really excited to explore the possibility of shifting from my previous role to this
                challenging industry.</p>

            <br></br>
            <p className="text2">After completing several courses, I gained lots of experience in using
                programming languages such as Java, PHP, HTML, CSS and JavaScript, as well as SQL for database
                querying. I also have some practical experience in using Python and C# and applying various
                frameworks such as JavaFX, Android, .NET, Tkinter and React.</p>

            <br></br>
            <p className="text2">I have a keen interest in both Web and Mobile App development, fueled by
                my experience in related projects. Witnessing the end products come to life gives me a great
                sense of accomplishment. Recently, I've started using cloud services for server deployment and
                continue to expand my knowledge in these areas. If you share similar interests or experiences,
                I'd love to connect and hear about your journey!</p>
            <br></br>
        </div>
        <BackgroundPics elementID="home-texts" />
    </div>
)


ReactDOM.render(
    HomeTitle,
    document.getElementById("display-container1")
)


ReactDOM.render(
    HomeCards,
    document.getElementById("display-container2")
)

ReactDOM.render(
    HomeText,
    document.getElementById("display-container3")
)


