
let models = [
    iPhone = [
        vx = [
            ("Ram", "4gb"), ("Price", 50000)
        ],
        v12Promax = [
            ("Ram", "6gb"), ("Price", 60000)
        ],
        v13 = [
            ("Ram", "8gb"), ("Price", 70000)
        ],
    ],
    infinix = [
        hot10 = [
            ("Ram", "8gb"), ("Price", 25000)
        ],
        hot11 = [
            ("Ram", "16gb"), ("Price", 35000)
        ],
        hot12 = [
            ("Ram", "32gb"), ("Price", 45000)
        ],
    ],
    samsung = [
        s10 = [
            ("Ram", "2gb"), ("Price", 20000)
        ],
        s11 = [
            ("Ram", "3gb"), ("Price", 30000)
        ],
        s12 = [
            ("Ram", "4gb"), ("Price", 40000)
        ],
    ]
];


let keys1 = models[0][1];
let spread_1 = [...keys1, v13Promax = [   // also add another array
    ("Ram", "8gb"), ("Price", 80000)
]];
console.log(spread_1);


let keys2 = models[1][0];
let spread_2 = [...keys2];
console.log(spread_2);


let keys3 = models[2][1];
let spread_3 = [...keys3];
console.log(spread_3);
