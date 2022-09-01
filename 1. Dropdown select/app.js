let mobiles = {
    iPhone: {
        vx: {
            Ram: '16GB',
            Price: 30000
        },
        v12Pro: {
            Ram: '16GB',
            Price: 20000
        },
        v13Pro: {
            Ram: '16GB',
            Price: 20000
        }
    },
    infinix: {
        hot10: {
            Ram: '16GB',
            Price: 20000
        },
        hot11s: {
            Ram: '16GB',
            Price: 20000
        },
        hot12: {
            Ram: '16GB',
            Price: 20000
        }
    },
    samsung: {
        s10: {
            Ram: '16GB',
            Price: 20000
        },
        s11: {
            Ram: '16GB',
            Price: 20000
        },
        s12: {
            Ram: '16GB',
            Price: 20000
        }
    }
}

var mobileName = document.getElementById('mobileName')
var mobileModel = document.getElementById('mobileModel')
var para = document.getElementById('para')

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

function check() {
    para.innerHTML = `Mobile Name: ${mobileName.value} <br> Mobile Model: ${mobileModel.value}`
}