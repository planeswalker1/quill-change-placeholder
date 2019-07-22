import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class App extends Component {
  state = {
    quillText: '',
    updatedQuillPlaceholder: 'hi'
  }
  
  quillRef = null;      // Quill instance
  reactQuillRef = null; // ReactQuill component

  componentDidMount() {
    this.attachQuillRefs()
  }

  componentDidUpdate() {
    this.attachQuillRefs()
  }
  
  attachQuillRefs = () => {
    if (typeof this.reactQuillRef.getEditor !== 'function') {
      return;
    }
    this.quillRef = this.reactQuillRef.getEditor();
  }

  handleInputChange = (e) => {
    this.setState({
      updatedQuillPlaceholder: e.target.value 
    }, () => {
        console.log(this.quillRef.root.dataset.placeholder);
        this.quillRef.root.dataset.placeholder = this.state.updatedQuillPlaceholder;
    });
  }

  handleQuillChange = (e) => {
    this.setState({
      quillText: e
    });
  }
  
  modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean'],
      ['code-block']
    ]
  }

  formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'code-block'
  ]
  
  render() {
    return (
      <div>
        <label htmlFor="quillPlaceholderChanger">Change React Quill Placeholder: </label>
        <input
          id="quillPlaceholderChanger"
          type="text"
          value={this.state.updatedQuillPlaceholder}
          onChange={this.handleInputChange} />

        <ReactQuill
          ref={(el) => { this.reactQuillRef = el }}
          value={this.state.quillText}
          onChange={this.handleQuillChange}
          data-placeholder='hi'
          placeholder='hi' />
      </div>
    );
  }
}

export default App;
