import axios from 'axios'


//class containing one static function for getting data from the github API

//Change Username and Token for authentication. Github deletes tokens in public repos.
export default class GithubUsers {

  static getUsers(request) {
    const url = 'https://api.github.com/search/users'
    const params = {
      access_token: "68a43988c1a3e560880ecc08622f5902ccc317f4",
      q: request + "in:login",
      type: "Users"
    }
    return axios.get(url, {params: params})
  }
}
