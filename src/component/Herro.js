import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaRegImages } from "react-icons/fa6";
import { FaAngellist } from "react-icons/fa6";
const Herro = () => {
  return (
    <div>
      <section className="herro">
        <div className="container">
          <h4 className="title">Herro section</h4>
          <div>
            <p className="text-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
          <div className="icon">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaRegImages />
            </span>
            <span>
              <FaAngellist />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herro;
