import { makeInstaller } from '@breeze-ui/utils'
import components from './components'
import '@breeze-ui/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import printLogo from './printLogo.ts'

printLogo()

library.add(fas)
const installer = makeInstaller(components)

export * from '@breeze-ui/components'
export default installer
