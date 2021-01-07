import React, { Fragment, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  function handleClick(e) {
    alert("O nome é " + name);
    e.preventDefault();
  }

  return (
    <Fragment>
      <form>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Enviar
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
