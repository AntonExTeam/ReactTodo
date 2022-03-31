import React, { useState } from 'react';
import './styles.scss';

export default function TodoTextInput ({ txt, onSave, newTodo, placeholder } ) {
  const [text, setText] = useState(txt || '');

  let handleSubmit = e => {
    const text = e.target.value;
    if (e.key === 'Enter') {
      onSave(text)
      if (newTodo) {
        setText('' )
      }
    }
  };

  let handleChange = e => {
    setText(e.target.value);
  };

  return (
    <input className="text-input"
           type="text"
           placeholder={placeholder}
           value={text}
           onChange={handleChange}
           onKeyDown={handleSubmit} />
  )
};


/*
export default class TodoTextInput extends Component {
    state = {
        text: this.props.text || ''
    };

    handleSubmit = e => {
        const text = e.target.value;
        if (e.key === 'Enter') {
            this.props.onSave(text)
            if (this.props.newTodo) {
                this.setState({ text: '' })
            }
        }
    };

    handleChange = e => {
        this.setState({ text: e.target.value })
    };

    render() {
        return (
            <input className="text-input"
                   type="text"
                   placeholder={this.props.placeholder}
                   value={this.state.text}
                   onChange={this.handleChange}
                   onKeyDown={this.handleSubmit} />
        )
    }
};
*/
