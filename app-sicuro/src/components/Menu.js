import React from 'react'
const Menu = props => {

    constructor(props){
    super(props);
}

getInitialState(){
  return {"showHideSidenav":"hidden"};
}
    return(
        <div>
    {/* menu */}
    <div className="menu fechar-menu-acao abrir-menu">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-6 ajuste-altura-menu-top">
                <div className="row">
                  <div className="col-12 logo">Menu</div>
                  <a href="sobre.html">
                    <div className="col-12 ajuste-altura-menu ani-1">
                      <h2 className="menu-h2">Sobre mim</h2>
                      <p className="menu-p">Aqui é a parte que eu tento ser interessante.</p>
                    </div> 
                  </a>
                  <div className="col-12 ajuste-altura-menu ani-2">
                    <h2 className="menu-h2">Trabalhos</h2>
                    <p className="menu-p">Outros trabalhos realizados por mim</p>
                  </div>                                
                  <div className="col-12 ajuste-altura-menu ani-3">
                    <h2 className="menu-h2">Contato</h2>
                    <p className="menu-p">Goustou? Pode entrar em contato</p>
                  </div>
                </div>
              </div>
              <div className="col-6 text-right">
                <img src="images/fechar.svg" className="acao-menu fechar-menu" />
                <p className="alinhar-texto-menu">Me encontre também no <b>LinkedIn</b> ou no <b>Twitter</b>.</p>
              </div>
            </div>
          </div>
        </div>    
      </div>
    </div>
        </div>
    )
}

export default Menu