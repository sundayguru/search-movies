import React from 'react';
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';


class AutoCompleteInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      labelField: props.labelField ? props.labelField : 'title', 
      trigger: props.trigger ? props.trigger : '',
      options: []
    }
    this.onRequestOptions = this.onRequestOptions.bind(this)
  }

  onRequestOptions() {
    this.setState({options: this.props.items.map((item) => item[this.state.labelField].toLowerCase())})
  }

  render() {
    const { options, trigger } = this.state;

    return (
      <TextInput 
        trigger={trigger}
        onRequestOptions={this.onRequestOptions}
        requestOnlyIfNoOptions={true} 
        options={options}
        onChange={this.props.onChange}
        className={this.props.className}
        placeholder={this.props.placeholder}
        Component="input"
      />
    )
  }
}

export default AutoCompleteInput;