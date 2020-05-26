const axios = require('axios')
const {INDORELAWAN_API} = require('../../constants/api')
const CATEGORY = require('../../constants/activityCategory')
const {INDORELAWAN_ORGANIZATION} = require('../../constants/organization')

const fetchApi = async () => await axios.get(INDORELAWAN_API+'?typesLocation=flexible')

const sanitizeHTMLToArray = (data) => {
    const dataString = data
    const tagRegexPattern = /<[^>]*>/g
    const result =  dataString.replace(tagRegexPattern,"").replace(/\n/g,",").trim()
    return sanitizeComaFromString(result)
}

const sanitizeComaFromString = (string) => {
    return string.split(',').filter( data => {
        return data.trim().length > 0 ? true : false 
    }).join(',').trim()
}

const convertCategory = (categories) => {
    return categories.map(convertFocusIdToCategory)
}

const convertFocusIdToCategory = (category) => { // not yet real category
    switch(category) {
        case '549789127e6a6e2c691a1fbf' /* bantuan hukum */ : return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fc0' /* difabilitas */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fc1' /* hak-asasi-manusia */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fc2' /* kepemimpinan-dan-organisasi */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fc3' /* kesehatan */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fc4' /* kesejahteraan-hewan */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fc5' /* Kesetaraan Gender */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fc6' /* ketenagakerjaan */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fc7' /* lingkungan */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fc8' /* olahraga */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fc9' /* penanggulangan-bencana */:return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fca' /* pendidikan */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fcd' /* pengembangan-anak-muda */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fcb' /* pengembangan-masyarakat */: return CATEGORY.ADMIN
        case '5d4bbbe0288586f07259ce92' /* perdamaian-dan-toleransi */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fce' /* pertanian */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fcc' /* pusat-informasi-dan-kajian */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fcf' /* sains-dan-teknologi */: return CATEGORY.ADMIN
        case '549789127e6a6e2c691a1fd0' /* seni-dan-budaya */: return CATEGORY.ADMIN
        default: return 'not defined'
    }
}

const mappingDataToActivityObjectFormat = ({n_title, additional_information, plain_description, media, registration_deadline, regular_end_date, regular_start_date, focuses, _id}) => {
    return {
        title: n_title,
        image: `https://indorelawan.org/${media.access_path}`,
        description: plain_description,
        additional_information: sanitizeHTMLToArray(additional_information),
        registration_deadline: registration_deadline,
        schedule: {
            start_date: regular_start_date,
            end_date: regular_end_date
        },
        website_link: `https://indorelawan.org/activity/${_id}`,
        activity_category: convertCategory(focuses),
        englishNeeded: false,
        source: INDORELAWAN_ORGANIZATION
    }
}

const getSanitizeData = async () => {
    const {status, data} = await fetchApi()
    if (status === 200) {
        return [...data.results.map(mappingDataToActivityObjectFormat)]
    } else {
        return null
    }
}


module.exports = getSanitizeData