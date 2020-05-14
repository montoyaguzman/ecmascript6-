const data = {
    id: 1,
    type: 'credit',
    periodicity: 'daily',
    amount: 100.00,
}

const entries = Object.entries(data)
console.log('entries:', entries)
console.log('entries:', entries.length)
console.log('values from data:', Object.values(data))

// trailing commma
const obj = {
    el: 'un dato',
}