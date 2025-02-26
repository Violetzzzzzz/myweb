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
                I am a graduate of the Master of Software Development program at Victoria University of Wellington. Throughout
                my studies, I developed extensive proficiency in programming languages such as Java, PHP, HTML, CSS, and
                JavaScript, alongside SQL for efficient database querying. I also gained hands-on experience with Python
                and C#, working with frameworks including JavaFX, Android, .NET, Tkinter, and React. My primary focus is
                Web and Mobile App development, and I find great satisfaction in seeing the tangible results of the projects
                I’ve worked on. Recently, I’ve expanded my skills into cloud services for server deployment, further broadening
                my knowledge in this evolving field. If your journey aligns with similar interests or experiences, I’d be
                excited to connect and share insights!
            </p>
            <img src="developer-girl.jpg" alt="a girl developer" />

        </span>
    </div>
)


ReactDOM.render(
    AboutTitle,
    document.getElementById("display-container1")
)