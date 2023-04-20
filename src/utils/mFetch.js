let productos = [
    {
        id: '0',
        stock:10,
        category: 'emotes',
        name: 'Playfull Baimo',
        price: 'U$D 120',
        img: '../../public/baimos/playfull.gif'

    },

    {
        id: '1',
        stock:10,
        category: 'emotes',
        name: 'Sad Baimo',
        price: 'U$D 120',
        img: '../../public/baimos/sad.gif'

    },
    
    {
        id: '2',
        stock:10,
        category: 'emotes',
        name: 'Sleepy Baimo',
        price: 'U$D 120',
        img: '../../public/baimos/sleepy.gif'

    },

    {
        id: '3',
        stock:10,
        category: 'emotes',
        name: 'Cool Baimo',
        price: 'U$D 120',
        img: '../../public/baimos/cool.gif'

    },

    {
        id: '4',
        stock:10,
        category: 'emotes',
        name: 'Jokes Baimo',
        price: 'U$D 120',
        img: '../../public/baimos/jokes.gif'

    },

    {
        id: '5',
        stock:10,
        category: 'emotes',
        name: 'Kamina Baimo',
        price: 'U$D 120',
        img: '../../public/baimos/kamina.gif'

    },

    {
        id: '6',
        stock:10,
        category: 'kitten',
        name: 'Garfield Baimo',
        price: 'U$D 150',
        img: '../../public/baimos/garfield.gif'

    },

    {
        id: '7',
        stock:10,
        category: 'kitten',
        name: 'Fluffy Baimo',
        price: 'U$D 150',
        img: '../../public/baimos/kitten_b.gif'

    },

    {
        id: '8',
        stock:10,
        category: 'kitten',
        name: 'Michi Baimo',
        price: 'U$D 150',
        img: '../../public/baimos/kitten_a.gif'

    },

    {
        id: '9',
        stock:10,
        category: 'pirate',
        name: 'Captain Baimo',
        price: 'U$D 150',
        img: '../../public/baimos/captain.gif'

    },

    {
        id: '10',
        stock:10,
        category: 'pirate',
        name: 'Sailor Baimo',
        price: 'U$D 150',
        img: '../../public/baimos/sailor.gif'

    },

    {
        id: '11',
        stock:10,
        category: 'pirate',
        name: 'Jones Baimo',
        price: 'U$D 150',
        img: '../../public/baimos/jones.gif'

    },

    {
        id: '12',
        stock:5,
        category: 'divine',
        name: 'Celestial Baimo',
        price: 'U$D 200',
        img: '../../public/baimos/celestial.gif'

    },

    {
        id: '13',
        stock:5,
        category: 'divine',
        name: 'Demonic Baimo',
        price: 'U$D 200',
        img: '../../public/baimos/demonic.gif'

    },

    {
        id: '14',
        stock:5,
        category: 'divine',
        name: 'Parca Baimo',
        price: 'U$D 200',
        img: '../../public/baimos/parca.gif'

    },
];


 export const mFetch = () => {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(productos)
        })
    }, 10000)
}