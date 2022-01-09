import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-2">
          <div className="row ">

            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase text-dark">Aplicación Preguntas y respuestas</h5>

              <p className="text-dark ">
                Esta aplicación hace parte de un reto de sofka U y consiste en tener una cuenta para poder
                crear preguntas, administrarlas y darle respuestas a las mismas, como si de una comunidad se tratara.
              </p>
            </div>
          </div>
        </div>

        <div
          className="text-center bg-dark"
        >
          <p className="text-light">© 2022 Copyright: Antonio Alzate Naranjo</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
