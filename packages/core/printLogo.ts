export default function () {
  if (PROD) {
    const logo = `
_____________________________________________________________________
    __________                                      ____ ___.__ 
    \\______   \\_______   ____   ____ ________ ____ |    |   \\__|
     |    |  _/\\_  __ \\_/ __ \\_/ __ \\\\___   // __ \\|    |   /  |
     |    |   \\ |  | \\/\\  ___/\\  ___/ /    /\\  ___/|    |  /|  |
     |______  / |__|    \\___  >\\___  >_____ \\\\___  >______/ |__|
            \\/              \\/     \\/      \\/    \\/                                                 
_____________________________________________________________________
`

    const rainbowGradient = `
            background: linear-gradient(135deg, orange 60%, cyan);
            background-clip: text;
            color: transparent;
            font-size: 16px; 
            line-height: 1;
            font-family: monospace;
            font-weight: 600;
`

    console.info(`%c${logo}`, rainbowGradient)
  } else if (DEV) {
    console.log('[EricUI]:dev mode...')
  }
}
