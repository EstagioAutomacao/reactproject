import React, { Fragment, useState } from "react";

const Header = (props) => {
  const [input, setinput] = useState("Olá");
  const [inputSub, setinputSub] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    /**
     * componentDidMount
     *
     * Executa ao ser criado
     */
  });

  useEffect(() => {
    /**
     * componentDidUpdate
     *
     * Executa ao ser alterado
     */
  }, [input]);

  useEffect(() => {
    return () => {
      /**
       * componentWillUnMount
       *
       * Executa ao ser destruido
       */
    };
  });

  return (
    <Fragment>
      <h1>{input}</h1>
      <input
        type="text"
        value={input}
        onChange={(event) => setinput(event.target.value)}
      />
      <form>
        <h2>{title}</h2>
        <input
          type="text"
          value={inputSub}
          onChange={(event) => setinputSub(event.target.value)}
        />
        <button type="button" onClick={() => setTitle(inputSub)}>
          Enviar
        </button>
      </form>
    </Fragment>
  );
};

export default Header;
