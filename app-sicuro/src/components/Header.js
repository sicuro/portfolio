import React from 'react'
const Header = props => {
    return (
    <div>
    <header>
      <div className="container">
        <div className="row">
          <div className="col-6"><a href="index.html">Sicuro </a></div>
          <div className="col-6 text-right"><img src="images/menu.svg" className="acao-menu" /></div>
        </div>
      </div>
    </header>
    {/* menu fixo */}
    <div className="menu-fixo">
      <div className="container">
        <div className="row">
          <div className="col-12 text-right">
            <span className="bg-logo-negativo acao-menu">
              <img src="images/menu-negativo.svg" />
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Header