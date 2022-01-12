import React, { useState } from 'react';

export default function TextForm2() {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState();
  return (
    <>
      <div className="container mb-3">
        <label htmlFor="inputBox2" className="form-label my-3">
          Type your text here!
        </label>
        <textarea
          className="form-control"
          id="inputBox2"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <div className=" container d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          className="btn btn-primary me-md-2"
          type="button"
          onClick={handleUpClick}
        >
          UpperCase
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleLoClick}
        >
          LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h6>total charecters {text.length}</h6>
      </div>
    </>
  );
}
