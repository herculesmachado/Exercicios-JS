const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 3.48

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    function1: function (){
        //... Com era feito antes do ECMA6
    },

    function2 (){
        //Como é feito agora depois do ECMA6 com umas melhorias
    }
}
console.log(obj5)