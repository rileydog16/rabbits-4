import {runtimeFunctions} from './serverRuntime.cjs'

const ServerApp1 = (user) => {

function CurrentUser() { return runtimeFunctions.asCurrentUser(user) }

async function AddTen(abc) {
    return abc  + 10
}

async function SayHello(name) {
    return "Hello there - Dr " + name
}

return {
    AddTen: {func: AddTen, update: false, argNames: ['abc']},
    SayHello: {func: SayHello, update: false, argNames: ['name']}
}
}

export default ServerApp1