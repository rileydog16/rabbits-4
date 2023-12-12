const runtimeUrl = window.elementoRuntimeUrl || 'https://elemento.online/lib/runtime.js'
const Elemento = await import(runtimeUrl)
const {React} = Elemento

// Page2.js
function Page2(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement} = Elemento.components
    const {Editor, Preview} = Elemento

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Text4')}, 'This is whizzy!'),
    )
}

// WhizzyTool.js
export default function WhizzyTool(props) {
    const pathWith = name => 'WhizzyTool' + '.' + name
    const {App} = Elemento.components
    const {Editor, Preview} = Elemento
    const pages = {Page2}
    const {appContext} = props
    const app = Elemento.useObjectState('app', new App.State({pages, appContext}))

    return React.createElement(App, {path: 'WhizzyTool', },)
}
