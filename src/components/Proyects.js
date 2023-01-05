import chairlendlogo from "../images/ChairLendLogo.png"
export default function Proyects(){
    return(<section class="proyects">
    <header
      class="proyects__header display-6 fw-bold d-flex flex-wrap justify-content-center"
    >
      My proyects
    </header>
    <div class="d-flex flex-wrap justify-content-center">
  
      <div class="card card__proyect">
        <img src={chairlendlogo} class="card-img-top" alt="ChairLend logo" />
        <div class="card-body">
          <h5 class="card-title fs-3">ChairLend</h5>
          <p class="card-text fs-4">
            Get borrows of my ERC20 token $ChairCoin
          </p>
          <div class="card__footer">
            <a href="https://chairlend.on.fleek.co/" target="_blank" class="btn btn-lg btn-primary" >Site</a>
            <a href="https://github.com/BANQUETOX/ChairLendApp" target="_blank" class="btn btn-lg btn-primary">Code</a>
          </div>
        </div>
      </div>
  
      
  
      
      </div>
  </section>
  )
}