const footerBar = (
    <div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <span className="text5">Developed by Chi(Violet) Zhang</span>
            <span className="text5">@2024</span>
            <span>
                <a href="https://www.linkedin.com/in/chi-zhang-7b16b9284">
                    <img width="20" src="linkedin-logo.png" alt="This is a link to Violet's LinkedIn " /></a>
                <span>&nbsp;</span>
                <a href="https://github.com/Violetzzzzzz">
                    <img width="20" src="github-logo.png" alt="This is a link to Violet's GitHub " /></a>
                <span>&nbsp;</span>
                <a href="https://www.instagram.com/violetzzzzzchi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img width="20" src="instagram.png" alt="This is a link to Violet's GitHub " /></a>
            </span>
        </div>
    </div>
)

ReactDOM.render(
    footerBar,
    document.getElementById("myFooter")
)