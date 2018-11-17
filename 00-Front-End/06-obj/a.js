const asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

let one = asia.countries.India.Mumbai.population
let two = asia.countries.China.Beijing.population
let three = asia.countries.China["Hong Kong"].population

