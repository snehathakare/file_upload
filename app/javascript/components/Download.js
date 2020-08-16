import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class Download extends React.Component {
  constructor(props) {
    super(props);
  }
  
  downloadCsv = () => {
    axios({
      url: 'http://localhost:3000/image_attribs/20',
      method: 'PUT',
      responseType: 'blob', // important
      headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data', }
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.csv');
      document.body.appendChild(link);
      link.click();
    });
  }
  
  render() {
    return (
      <div id="container">
        <h1>Download File using React App</h1>
        <h3>Download Employee Data using Button</h3>
        <button onClick={this.downloadCsv}>Download</button>
        <p/>
      </div>
    )
  }

}

export default Download