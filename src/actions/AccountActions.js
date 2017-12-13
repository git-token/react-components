import Promise, { promisifyAll } from 'bluebird'
import GitHubAPI from 'github-api'
import AccountWorker from 'gittoken-web-workers/dist/Account.worker.js'


export default class GitTokenAccountWorker {
  constructor({ url }) {

    this.profileApiUrl = url

    this.worker = new AccountWorker()
    this.worker.addEventListener('message', (msg) => {
      console.log('Received Message from Account Worker', msg)
    })

    this.worker.onerror = this.handleError
    this.worker.onmessage = this.handleMsg

  }

  getProfile() {
    return (dispatch) => {
      console.log('Get Profile!')
      this.worker.postMessage({
        event: 'GET_PROFILE',
        payload: this.profileApiUrl
      })
    }
  }

  handleError(error) {
    console.log('error', error)
  }

  handleMsg(msg) {
    console.log('msg', msg)
  }

}
