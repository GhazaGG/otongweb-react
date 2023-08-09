const profiles = [
    { name: 'Vndttas', page: '/pageVndttas' },
    { name: 'MeRyzen', page: '/pageRyzen' },
    { name: 'Satrio Aji', page: '/pageRio' },
    { name: 'Niozzin', page: '/pageNiozzin' },
    { name: 'Adam', page: '/pageAdam' },
    { name: 'Islan', page: '/PageIslan' },
    { name: 'Exhozt', page: '/pageExhozt' },
    { name: 'HolikPC', page: '/pageHolikPC' },
    { name: 'Ghaza', page: '/pageGhaza' },
    { name: 'Yopan', page: '/pageYopan' },
    { name: 'Doni', page: '/pageDoni' },
    { name: 'Depoal', page: '/pageDepol' }
];

function getProfileByName(profileName) {
    return profiles.find(profile => profile.name === profileName);
}

const vndttasProfile = getProfileByName('Vndttas')
const meryzenProfile = getProfileByName('MeRyzen')
const satrioProfile = getProfileByName("Satrio Aji")
const niozzinProfile = getProfileByName('Niozzin')
const adamProfile = getProfileByName('Adam')
const islanProfile = getProfileByName('Islan')
const exhoztProfile = getProfileByName('Exhozt')
const ghazaProfile = getProfileByName('Ghaza')
const yopanProfile = getProfileByName('Yopan')
const doniProfile = getProfileByName('Doni')
const depolProfile = getProfileByName('Depoal')


const data = [
    {
        id : 1,
        imgSrc : require('../../assets/artwork/ven/Beliau.png'),
        artist:vndttasProfile.name,
        pageLink:vndttasProfile.page,
        size :'large'
    },
    {
        id : 2,
        imgSrc : require('../../assets/artwork/ven/Nissan 1 ig2.png'),
        artist:vndttasProfile.name,
        pageLink:vndttasProfile.page,
        size :'small'
    },
    {
        id : 3,
        imgSrc : require('../../assets/artwork/ven/Nissan 2 ig2.png'),
        artist:vndttasProfile.name,
        pageLink:vndttasProfile.page,
        size :'small'
    },
    // {
    //     id : 4,
    //     imgSrc : require(''),
    //     artist:vndttasProfile.name,
    //     pageLink:vndttasProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 5,
    //     imgSrc : require(''),
    //     artist:vndttasProfile.name,
    //     pageLink:vndttasProfile.page,
    //     size :'small'
    // },

]

export default data