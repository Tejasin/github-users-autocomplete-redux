import React from "react";
import ResultList from './ResultList'
import {FormGroup, FormControl, Glyphicon} from 'react-bootstrap'
import {connect} from "react-redux";

import {getUsers} from '../actions/githubUsersActions'

export class Searchbar extends React.Component {

  constructor(props) {
    super(props)

    //this.onChangeHandle = this.props.onChangeHandle.bind(this)
  }

  render() {

    /*const users_mock = [{name:"john",image:"https://dizivizi.com/mbb/imgs/site/default_user.png"},
    {name:"mark",image:"https://dizivizi.com/mbb/imgs/site/default_user.png"},
    {name:"robert",image:"https://dizivizi.com/mbb/imgs/site/default_user.png"}]
*/

    return (
      <div className="SearchbarComponent">
        <FormGroup >
          <FormControl type="text" placeholder="type a github username" ref="user_input" onChange={(e)=>{this.props.onChangeHandle(e)}}/>
          <FormControl.Feedback>
            <Glyphicon glyph="search"/>
          </FormControl.Feedback>
        </FormGroup>
        <ResultList githubUsers={this.props.users.users} cursor={0}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {users: state.githubUsersThunkReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeHandle: (event) => {
      dispatch(getUsers(event.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
