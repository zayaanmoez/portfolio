const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
}

exports.onInitialClientRender = () => {
    addScript("https://kit.fontawesome.com/f8242dd8cc.js")
}