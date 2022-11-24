import React from "react";

const Menu = () => {
    return (
    <div className="container mt-5">
            <img src="./public/img/menu.png" alt="Menú" className="img-fluid" width="1920"/>
            <div className="row p-3">
                <h2 className="col-md-12 text-center">Carta</h2>
                <h3 className="col-md-12 text-center" >Muy wow, muy sabrosa, muy brutal</h3>
            </div>
            <div className="d-flex justify-content-center">
            <a href="https://www.hamburguesanostra.com/carta" target="_blank" rel="noopener noreferrer" className="btn btn-dark col-1 d-flex justify-content-center">Ver más</a>
            </div>
    </div>
    )
}

export default Menu;