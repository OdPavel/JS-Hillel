'use script';


const person = {
    name: 'Garry'
}

function info( phone, email) {
    console.log(`Имя: ${this.name}, Тел: ${phone}, Email: ${email}`)
}

function bind(fn, context, ...rest){
    return function (args){
        const uniqId = Date.now().toString();
        context[uniqId] = fn;
        const result = context[uniqId](...rest.concat(args));

        delete context[uniqId]
        return result;
    }
}

bind(info, person)('095 111 11 00', 'u@ukr.net')
bind(info, person, '095 111 11 00')('u@ukr.net')
bind(info, person,'095 111 11 00', 'u@ukr.net')()
console.log(person);