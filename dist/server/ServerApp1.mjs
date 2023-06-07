import {runtimeFunctions} from './serverRuntime.cjs'

const ServerApp1 = (user) => {

function CurrentUser() { return runtimeFunctions.asCurrentUser(user) }

async function AddTwenty(abc) {
    return abc  + 20
}

async function SayHello(name) {
    return "Hello there - Dr " + name
}

return {
    AddTwenty: {func: AddTwenty, update: false, argNames: ['abc']},
    SayHello: {func: SayHello, update: false, argNames: ['name']}
}
}

export default ServerApp1
