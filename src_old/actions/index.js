import AccountActions from './AccountActions'
import { url } from '../../app.config'

module.exports = {
  accountActions: new AccountActions({ url })
}
