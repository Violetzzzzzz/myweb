const AboutTitle = (
    <div className="texts" id="about-texts">
        <br></br>
        <h1 className="text3">Welcome to Get to Know Me! </h1>
        <br></br>
        <span className="img-container" >
            <img src="little-girl.jpg" alt="a little girl in classroom" />
            <p className="text4">
                Hi, my name is Chi Zhang, also known as Violet. I’m originally from China and a resident of NZ now. Since
                I was a little girl, I have always aspired to become a scientist. During my secondary school years, I began
                to focus on studying the sciences. With satisfactory grades in chemistry, I applied for the pharmacy major
                after the completion of the college entrance examination.
            </p>
        </span>

        <span className="img-container" >
            <p className="text4">
                During my undergraduate studies at West China School of Pharmacy, Sichuan University, I acquired fundamental
                medical and in-depth chemical knowledge and I engaged in practical work related to medicinal chemistry,
                pharmaceuticals, and pharmacology experiments. Although I later realized that drug development might not be
                the ideal path for me, the research-oriented mindset and the rigorous experimental practices I cultivated
                during my undergraduate years have laid a solid foundation for my subsequent studies.
            </p>
            <img src="lab-girl.jpg" alt="a girl in the lab" />
        </span>

        <span className="img-container" >
            <img src="teacher-girl.jpg" alt="a girl is teaching" />
            <p className="text4">
                After graduating from uni, I came to New Zealand for a vacation, hoping to take a breath from the busy
                schedule of study and experiments. At that time, my friend was working as a manager in a daycare center. I
                occasionally volunteered to help her with some Chinese cultural activities. I found the interactions with
                the children to be very enjoyable, sparking an interest in becoming a teacher. Upon my friend's suggestion,
                I completed the NZTC online Graduate Diploma in early childhood teaching, obtaining a registered teacher
                qualification. I worked as a teacher for three years. Over time, I felt that the job content seemed to become
                somewhat stagnant, and it had been a while since I learned new knowledge. After careful consideration, I
                decided to venture into software development.
            </p>
        </span>

        <span className="img-container" >
            <p className="text4">
                I am currently pursuing a Master's degree in Software Development at Victoria University of Wellington. Through
                the completion of various courses, I have acquired extensive proficiency in utilizing programming languages such
                as Java, PHP, HTML, CSS, and JavaScript, along with SQL for efficient database querying. Additionally, I have
                hands-on experience with Python and C# and have applied diverse frameworks including JavaFX, Android, .NET, Tkinter,
                and React. My primary focus lies in both Web and Mobile App development, driven by my involvement in related projects.
                Witnessing the tangible outcomes of these projects coming to fruition provides me with a profound sense of accomplishment.
                Recently, I have ventured into the realm of cloud services for server deployment, actively broadening my knowledge in
                these evolving domains. If your journey aligns with similar interests or experiences, I am eager to connect and learn
                more about your experiences and insights!
            </p>
            <img src="developer-girl.jpg" alt="a girl developer" />

        </span>
    </div>
)


ReactDOM.render(
    AboutTitle,
    document.getElementById("display-container1")
)