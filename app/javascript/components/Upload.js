import React from "react"
import axios from 'axios'
import Download from './Download'
import history from './history';
import Routes from './Routes';
import CSVReader from 'react-csv-reader'

class Upload extends React.Component {
  state = { 
      // Initially, no file is selected
      selectedFile: null
    }; 
     
    // On file select (from the pop up)
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "image_attrib[file]", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 

      // Request made to the backend api 
      // Send formData object 
      axios({ 
        method: 'post',
        url: "https://json2csv-upload.herokuapp.com/image_attribs",
        data: formData,
        headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data', },
      }).then(res => {
        //console.log(res);
        //console.log(res.data.id);
      }); 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => {
      if (this.state.selectedFile) {  
        return (
          <div>
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div> 
        ); 
      } 
    }; 

    render() { 
      return ( 
        <div>  
            <h3> 
              File Upload using React!
            </h3>
            <div>
                <input type="file" name="image_attrib[file]" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
                <h2>Render csv here</h2>
                <Download dataObject={this.state.fileId} />
            </div> 
          {this.fileData()}
        </div> 
      );
    }
}

export default Upload
