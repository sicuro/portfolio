import React from 'react'

const Site = props => {
   return (
<div>
  <section className="artigos">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Últimos artigos</h2>
        </div>
        <div className="col-sm-12">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 tiutlo-artigo">30 de maio de 2018</div>  
            <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 conteudo-artigo"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></div>   
            <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 tiutlo-artigo">30 de maio de 2018</div>  
            <div className="col-xl-10 col-lg-9 col-md-12 col-sm-12 conteudo-artigo"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></div>  
            <div className="col-sm-12 mais-artigos"><span className="mais-artigos-link"><b>Ver mais artigos</b></span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

   ) 
}

export default Site 