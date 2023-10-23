const runtimeUrl = `${window.location.origin}/lib/runtime.js`
const Elemento = await import(runtimeUrl)
const {React} = Elemento

// MainPage.js
function MainPage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, TextInput, Image} = Elemento.components
    const ServerApp1 = Elemento.useGetObjectState('app.ServerApp1')
    const Yourname = Elemento.useObjectState(pathWith('Yourname'), new TextInput.State({}))

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Title'), fontSize: 24}, 'The New New App'),
        React.createElement(TextInput, {path: pathWith('Yourname'), label: 'Your name'}),
        React.createElement(TextElement, {path: pathWith('HelloText')}, ServerApp1.SayHello(Yourname)),
        React.createElement(Image, {path: pathWith('Beetlepic'), source: 'Tansy_Beetle.jpg', width: 200, height: 200}),
        React.createElement(TextElement, {path: pathWith('AddTentext')}, "Twenty plus ten is " + ServerApp1.AddTen(20)),
    )
}

// appMain.js
function configServerApp1() {
    return {
        appName: 'Server App 1',
        url: '/capi/ServerApp1',

        functions: {
            AddTen: {
                params: ['abc']
            },

            SayHello: {
                params: ['name']
            }
        }
    };
}

export default function NewApp(props) {
    const pathWith = name => 'NewApp' + '.' + name
    const {App, ServerAppConnector} = Elemento.components
    const pages = {MainPage}
    const {appContext} = props
    const app = Elemento.useObjectState('app', new App.State({pages, appContext}))
    const ServerApp1 = Elemento.useObjectState('app.ServerApp1', new ServerAppConnector.State({configuration: configServerApp1()}))

    return React.createElement(App, {path: 'NewApp', },)
}
