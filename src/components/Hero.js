import logo from "../images/logo.png"
 export default function Hero (){
    return(
        <section class="hero">
  <div class="px-4 py-5 text-center">
    <img
      class="d-block mx-auto mb-4 hero__logo"
      src={logo}
      alt="logo"
    ></img>
    <h1 class="display-5 fw-bold text-light hero__heading">Hi Im Banqueta</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 text-light hero__text">
      Hi there! My name is Felipe and I am a blockchain developer with experience in React, Solidity, Hardhat, JavaScript, HTML
      , CSS, and NextJs. I have a strong passion for using these technologies to build decentralized applications.
       In my previous projects, I have utilized my
        skills in React and Solidity to develop front-end and smart contract components of blockchain-based applications.
         I also have experience with Hardhat, a popular toolkit for Ethereum development,
          and am proficient in JavaScript, HTML, and CSS for building intuitive and visually appealing user interfaces.
           I am always eager to learn new technologies and approaches in the blockchain space,
            and I am excited to continue growing as a developer.
      </p>
    </div>
  </div>
</section>
    )
}