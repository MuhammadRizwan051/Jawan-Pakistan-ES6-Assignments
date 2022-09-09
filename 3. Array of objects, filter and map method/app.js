
let mobiles = {
    iphone: {
        v14pro: {
            Ram: '4GB',
            Rom: "64GB",
            Price: "140,000",

        },
        v13: {
            Ram: '3GB',
            Rom: "64GB",
            Price: "120,000",
        },
        v12: {
            Ram: '3GB',
            Rom: "32GB",
            Price: "100,000",
        }
    },
    Realme: {
        c11: {
            Ram: '2GB',
            Rom: "32GB",
            Price: "15000",
        },
        c15: {
            Ram: '3GB',
            Rom: "32GB",
            Price: "18000",
        },
        c35: {
            Ram: '4GB',
            Rom: "64GB",
            Price: "30000",
        }
    },
    samsung: {
        s11: {
            Ram: '4GB',
            Rom: "32GB",
            Price: "70,000",
        },
        s12: {
            Ram: '4GB',
            Rom: "64GB",
            Price: "80,000",
        },
        s13: {
            Ram: '6GB',
            Rom: "64GB",
            Price: "90,000",
        }
    }
}


let keys = Object.keys(mobiles);

let mobileName = document.getElementById('mobileName')
let mobileModel = document.getElementById('mobileModel')
let list = document.getElementById('list')

function display(mobileData) {
    mobileData.map(function(value) {
        mobileName.innerHTML += `<option>${value}</option>`
    });
}
display(keys)


function clickItem() {
    mobileModel.disabled = false
    let mobileModelData = Object.keys(mobiles[mobileName.value])
    mobileModel.innerHTML = ''

    mobileModelData.map(function(value) {
        mobileModel.innerHTML += `<option>${value}</option>`
    });
}


function search() {
    let details = Object.values(mobiles[mobileName.value][mobileModel.value])
    list.innerHTML = ''

    details.filter(function (e) {
        list.innerHTML += `<li>${e}</li>`
    })
}