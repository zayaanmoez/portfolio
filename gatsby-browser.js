/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
}

exports.onInitialClientRender = () => {
    addScript("https://kit.fontawesome.com/f8242dd8cc.js")
}