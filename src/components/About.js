import logo from "../images/logo.png"
import aboutImage from "../images/AboutImage.jpg"
export default function About(){
    return(<section>
        <div class="container my-5">
          <div
            class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
          >
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-4 fw-bold lh-1">About Me</h1>
              <p class="lead about__text">
              I am a passionate individual who enjoys working in groups, learning about science and technology, and playing video games.
               I believe that teamwork and collaboration are key to achieving success, and I am always looking for ways to contribute my skills and knowledge to a team environment.
                In my spare time,
                I love to stay up-to-date with the latest developments in science and technology,
               and I enjoy exploring new technologies and learning about how they work.
              </p>
            </div>
            <div class="col-lg-4 p-0 overflow-hidden about__image-container">
              <img
                class="rounded-lg-3 about__image"
                src={aboutImage}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
      )
}