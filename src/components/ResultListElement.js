import React from 'react'

export default class ResultListElement extends React.Component {

  constructor(props) {
    super(props);

    this.focus = this.focus.bind(this)
  }

  focus(){
    if (this.props.highlighted) {
      this.textInput.focus();
    } else {
      this.textInput.blur()
    }
  }

  componentDidMount() {
    this.focus()
  }

  componentDidUpdate() {
    this.focus()
  }

  render() {

    return (
      <a href={this.props.user.html_url} ref={(input) => {
        this.textInput = input;
      }}>
        <div className={"ElementWrapper " + (this.props.highlighted
          ? 'Highlighted'
          : '')}>

          <figure><img src={this.props.user.avatar_url} alt={this.props.user.login} width="50" height="50"/></figure>
          <div className="userNameText">
            <p>{this.props.user.login}</p>

          </div>

        </div>
      </a>
    )
  }
}
