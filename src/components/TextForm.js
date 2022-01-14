import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.alertDispaly("Converted to uppercase!","success")
  };
  const handleLoClick = () => {
    // console.log('Uppercase was clicked');
    let newText = text.toLowerCase();
    setText(newText);
    props.alertDispaly("Converted to lowercase!","success")
  };
  const handleClClick = () => {
    let newText = '';
    setText(newText);
    props.alertDispaly(" Text is cleared","success")
  };
  const handleOnChange = (event) => {
    // console.log('On Change');
    setText(event.target.value);
  };
  const [text, setText] = useState('');

  return (
    <>
      <div className="container"  style= {{color: props.mode==='light'?'black':'white'}}>
        <h5>{props.heading}</h5>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            style= {{backgroundColor: props.mode==='light'?'white':'#395e65', color: props.mode==='light'?'black':'white' }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          UpperCase Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          LowerCase text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3"  style= {{color: props.mode==='light'?'black':'white'}}>
        <h6> Your Text Summary</h6>
        <p>
          {text.length===0? text.length: text.split(' ').length} words and {text.length} charecters
        </p>
        <p>{0.008 * (text.split(' ').length)} Minutes Reading time</p>
        <h3> Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox abouve to preview it here"}</p>
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
