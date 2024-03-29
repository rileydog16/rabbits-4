import * as serverRuntime from './serverRuntime.cjs'
const {runtimeFunctions} = serverRuntime

const ServerApp1 = (user) => {

function CurrentUser() { return runtimeFunctions.asCurrentUser(user) }

async function AddTen(abc) {
    return abc  + 1031
}

async function SayHello(name) {
    return "Hi there - Ms " + name
}

return {
    AddTen: {func: AddTen, update: false, argNames: ['abc']},
    SayHello: {func: SayHello, update: false, argNames: ['name']}
}
}

export default ServerApp1