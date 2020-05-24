const mongoose = require('mongoose')
const {deleteAllActivity, createActivity} = require('./services/activityService')

const dburl = process.env.APP_STATE === 'dev' ? 'mongodb://localhost/mc2' : 'mongodb+srv://userMC2:mc2vovey@cluster0-ndxfv.mongodb.net/test?retryWrites=true&w=majority'

console.log(dburl)
mongoose.connect(dburl, 
{useNewUrlParser: true, useCreateIndex: true, 
    useUnifiedTopology: true }).then(() => {console.log("connect to db!!")}).catch( err => {console.log(`error: ${err}`)})


const activitySeed = [
    {
        title: "Aksi buka bersama lansia",
        image: "https://indorelawan.org/uploads/gallery/2020-4-8/5eb4b0f4dac5b1cf9d3a7716_thumbnail370x250.png",
        description: `Pada proses penuaan terjadi perubahan jaringan ikat paru, kapasitas total paru tetap tetapi volume cadangan paru bertambah untuk mengkonvensasi kenaikan ruang paru, udara yang mengalir ke paru berkurang. Perubahan pada otot, kartilago dan sendi torak mengakibatkan gerakan pernapasan terganggu dan kemampuan perenggangan torak berkurang. `,
        additional_information: [
            {
                type: "text",
                content: `Lansia (lanjut usia) adalah seseorang yang telah memasuki tahapan akhir dari fase kehidupan. Kelompok yang dikategorikan lansia ini akan mengalami suatu proses yang disebut Aging Process atau proses penuaaan`
            }, {
                type: "list",
                content: [
                    `lansia dini`,
                    'lansia resiko tinggi',
                    'lansia muda'
                ]
            } 
        ],
        registration_deadline: new Date("2020-06-12T17:00:00.000Z"),
        schedule: {
            start_date: new Date("Sat Jun 13 2020 00:00:00 GMT+0700 (WIB)"),
            end_date: new Date("Tue May 12 2020 13:00:00 GMT+0700 (WIB)")
        },
        website_link: "https://indorelawan.org/activity/5eb4b12843b4b4cf5cc36a34",
        activity_category: [
            "writer",
            "social"
        ],
        englishNeeded: true
    },{
        title: "Aksi buka bersama Anak",
        image: "https://indorelawan.org/uploads/gallery/2020-4-8/5eb4b0f4dac5b1cf9d3a7716_thumbnail370x250.png",
        description: `Anak proses kartilago dan sendi torak mengakibatkan gerakan bernapas terganggu dan kemampuan perenggangan torak berkurang. runtuh `,
        additional_information: [
            {
                type: "text",
                content: `Anak (lanjut usia) adalah seseorang yang telah memasuki tahapan akhir dari fase kehidupan.Lorem an ajal ayak`
            }, {
                type: "list",
                content: [
                    `Anak dini`,
                    'Anak resiko tinggi',
                    'Anak Hits muda'
                ]
            } 
        ],
        registration_deadline: new Date("2020-06-12T17:00:00.000Z"),
        schedule: {
            start_date: new Date("Sat Jun 13 2020 00:00:00 GMT+0700 (WIB)"),
            end_date: new Date("Tue May 12 2020 13:00:00 GMT+0700 (WIB)")
        },
        website_link: "https://indorelawan.org/activity/5eb4b12843b4b4cf5cc36a34",
        activity_category: [
            "design",
            "social"
        ],
        englishNeeded: false
    }
]


const seedActivity = (async () => {
    try{
        await deleteAllActivity()
        await createActivity(activitySeed)
    } catch(err) {
        console.log(err)
    }
})()