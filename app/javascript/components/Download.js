import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class Download extends React.Component {
  constructor(props) {
    super(props);

  }
  
  downloadCsv = () => {
    axios({
      url: 'https://json2csv-upload.herokuapp.com/image_attribs/latest',
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
        <h3>Download File using Button</h3>
        <button onClick={this.downloadCsv}>Download</button>
        <p/>
      </div>
    )
  }

}

export default Download