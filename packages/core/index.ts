import { makeInstaller } from "@breeze-ui/utils";
import components from "./components";
import "@breeze-ui/theme";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)
const installer = makeInstaller(components);

export * from "../components";
export default installer;