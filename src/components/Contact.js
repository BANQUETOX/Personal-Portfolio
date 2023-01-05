import discord from "../images/discord.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
export default function Contact(){
    return(<section>
        <div class="container px-4 py-5" id="icon-grid">
          <h2 class="pb-2 border-bottom">Contact me</h2>
          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
          >
            <div class="col d-flex align-items-start">
              
                <img
                  class="bi text-muted flex-shrink-0 me-3 contact__image"
                  src={discord}
                  alt="Discord logo"
                />
              <div>
                <h3 class="fw-bold mb-0 fs-4">Discord</h3>
                <p class="fs-5">Send me a DM: BΛПQЦΣƬΛ#5439.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <a href="https://www.linkedin.com/in/felipe-mena-b26a3724a/">
                <img
                  class="bi text-muted flex-shrink-0 me-3 contact__image"
                  src={linkedin}
                  alt="Linkedin link"
                />
              </a>
              <div>
                <h3 class="fw-bold mb-0 fs-4">Linkedin</h3>
                <p class="fs-5">Check my Linkedin page.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <a href="https://github.com/BANQUETOX">
                <img
                  class="bi text-muted flex-shrink-0 me-3 contact__image"
                  src={github}
                  alt="Github link"
                />
              </a>
              <div>
                <h3 class="fw-bold mb-0 fs-4">Github</h3>
                <p class="fs-5">Take a look to the repository of my proyects.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <a href="https://twitter.com/BANQUETOX">
                <img
                  class="bi text-muted flex-shrink-0 me-3 contact__image"
                  src={twitter}
                  alt="twitter link"
                />
              </a>
              <div>
                <h3 class="fw-bold mb-0 fs-4">Twitter</h3>
                <p class="fs-5">Get direct contact media my twiter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
}