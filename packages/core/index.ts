import { makeInstaller } from "@breeze-ui/utils";
import components from "./components";
import '@breeze-ui/theme/index.css'

const installer = makeInstaller(components);

export * from "@breeze-ui/components";
export default installer;