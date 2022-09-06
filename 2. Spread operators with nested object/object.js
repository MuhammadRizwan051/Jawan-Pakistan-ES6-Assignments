let mobiles = {
    iPhone: {
        vx: {
            Ram: '4GB',
            Price: 1000
        },
        v12Pro: {
            Ram: '6GB',
            Price: 2000
        },
        v13Pro: {
            Ram: '8GB',
            Price: 3000
        }
    },
    infinix: {
        hot10: {
            Ram: '2GB',
            Price: 3000
        },
        hot11s: {
            Ram: '3GB',
            Price: 5000
        },
        hot12: {
            Ram: '4GB',
            Price: 6000
        }
    },
    samsung: {
        s10: {
            Ram: '8GB',
            Price: 6000
        },
        s11: {
            Ram: '10GB',
            Price: 7000
        },
        s12: {
            Ram: '12GB',
            Price: 8000
        }
    }
}

var mobileName = document.getElementById('mobileName')
var mobileModel = document.getElementById('mobileModel')
var para1 = document.getElementById('para1')
var para2 = document.getElementById('para2')

function fillMainKeys() {
    let mainKeys = Object.keys(mobiles)

    for (var i = 0; i < mainKeys.length; i++) {
        mobileName.innerHTML += `<option>${mainKeys[i]}</option>`
    }
}
fillMainKeys()

function nestedDropDown() {
    mobileModel.disabled = false

    let nestedKeys = Object.keys(mobiles[mobileName.value])
    mobileModel.innerHTML = ' '

    for (var i = 0; i < nestedKeys.length; i++) {
        mobileModel.innerHTML += `<option>${nestedKeys[i]}</option>`
    }
}

function details() {
    let a = mobiles[mobileName.value][mobileModel.value]
    let b = {...a}
    para2.innerHTML = ''
    para1.innerHTML = `Mobile Name: ${mobileName.value} <br> Mobile Model: ${mobileModel.value}`
    for (const key in b) {
        para2.innerHTML += key + " : " + b[key] + "<br>"
    }
}