import React from 'react'
const Home = props => {
    return (
  <section className="bloco-inicial">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="titulo-inicial">Hey, meu nome é Gabriel Sicuro, <br />designer de produto e ciclista nas horas vagas.</h1> 
        </div>
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12 portfolio-menu">
              <span className="mais-artigos-link "><b>Projetos em destaque</b></span>
            </div>
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-12 ">
                  <div className="col-sm-12 bloco-portfolio fundo-01 text-center">Baco Exú Do Blues</div>
                </div>
                <div className="col-sm-6 margin-top-30">
                  <div className="col-sm-12 bloco-portfolio fundo-02 text-center">Livraria Cultura</div>
                </div>
                <div className="col-sm-6 margin-top-30">
                  <div className="col-sm-12 bloco-portfolio fundo-03 text-center">SolarGrid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Home