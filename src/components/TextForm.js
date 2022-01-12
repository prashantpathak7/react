import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log('Uppercase was clicked');
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log('On Change');
    setText(event.target.value);
  };
  const [text, setText] = useState('');

  return (
    <>
      <div clsaaName="container">
        <h5>{props.heading}</h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-3">
        <h6> Your Text Summary</h6>
        <p>
          {text.split(' ').length - 1} words and {text.length} charecters
        </p>
        <p>{0.008 * (text.split(' ').length - 1)} Minutes Reading time</p>
        <h3> Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.protoTypes = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: 'type heading here',
};
