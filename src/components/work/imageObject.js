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
    // {
    //     id : 1,
    //     imgSrc : require('../../assets/artwork/ven/Beliau.png'),
    //     artist:vndttasProfile.name,
    //     pageLink:vndttasProfile.page,
    //     size :'large'
    // },
    // {
    //     id : 2,
    //     imgSrc : require('../../assets/artwork/ven/Nissan 1 ig2.png'),
    //     artist:vndttasProfile.name,
    //     pageLink:vndttasProfile.page,
    //     size :'medium'
    // },
    // {
    //     id : 3,
    //     imgSrc : require('../../assets/artwork/ven/Nissan 2 ig2.png'),
    //     artist:vndttasProfile.name,
    //     pageLink:vndttasProfile.page,
    //     size :'large'
    // },
    // {
    //     id : 4,
    //     imgSrc : require('../../assets/artwork/ven/Nissan 3 ig 2.png'),
    //     artist:vndttasProfile.name,
    //     pageLink:vndttasProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 5,
    //     imgSrc : require('../../assets/artwork/ven/Saint.jpg'),
    //     artist:vndttasProfile.name,
    //     pageLink:vndttasProfile.page,
    //     size :'large'
    // },
    // {
    //     id : 6,
    //     imgSrc : require('../../assets/artwork/ven/Shattering 2.jpg'),
    //     artist:vndttasProfile.name,
    //     pageLink:vndttasProfile.page,
    //     size :'large'
    // },
    // {
    //     id : 7,
    //     imgSrc : require('../../assets/artwork/ven/peler.png'),
    //     artist:vndttasProfile.name,
    //     pageLink:vndttasProfile.page,
    //     size :'large'
    // },
    // {
    //     id : 8,
    //     imgSrc : require('../../assets/artwork/RYZEN/boollls.0001.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 9,
    //     imgSrc : require('../../assets/artwork/RYZEN/chrome1.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 10,
    //     imgSrc : require('../../assets/artwork/RYZEN/cirno.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 11,
    //     imgSrc : require('../../assets/artwork/RYZEN/devilfinal1.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 12,
    //     imgSrc : require('../../assets/artwork/RYZEN/dissfin.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 13,
    //     imgSrc : require('../../assets/artwork/RYZEN/evils.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 14,
    //     imgSrc : require('../../assets/artwork/RYZEN/fincirno.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 15,
    //     imgSrc : require('../../assets/artwork/RYZEN/helpfin1.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 16,
    //     imgSrc : require('../../assets/artwork/RYZEN/huafinal.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 17,
    //     imgSrc : require('../../assets/artwork/RYZEN/meryzennn.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 18,
    //     imgSrc : require('../../assets/artwork/RYZEN/mocikns1.0001.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },
    // {
    //     id : 19,
    //     imgSrc : require('../../assets/artwork/RYZEN/spideer.png'),
    //     artist:meryzenProfile.name,
    //     pageLink:meryzenProfile.page,
    //     size :'small'
    // },

]

export default data