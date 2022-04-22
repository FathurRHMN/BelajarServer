const http = require("http");

const system= require("os");
// console.log("my Server is : ",system.cpus());
console.log("frame : ",system.freemem());
console.log("aristektur : ",system.arch());

const myNamee = "Fathur Rahman";
// console.log("nama saya ",myNamee);

// let myName ="Fathur Rahman";
// console.log("nama saya ",myName);

function ambilNama (){
    return myNamee;
};
// console.log("nama saya ", ambilNama());

const namaAmbil = () => {
    return ambilNama();
};
// console.log("nama saya ",namaAmbil());

const player = {
    // key:value
    id_player : 01,
    nama_player : namaAmbil(),
    win_player : 80,
    lose_player : 20,
    Total_match : 220,
    age_player : 61,
};
// console.log("pemain ",player);

const items = [
    {
    id: 111,
    nama_items: "Pisau",
    damage_items: "700",
    drop_items: false,
    },
    {
    id: 112,
    nama_items: "Kris",
    damage_items: "1200",
    drop_items: true,
    },
    {
    id: 113,
    nama_items: "Palu",
    damage_items: "750",
    drop_items: false,
    },
    {
    id: 114,
    nama_items: "AK47",
    damage_items: "1300",
    drop_items: true,
    },
];
const playerItems = Object.assign(player , items[0]);

// console.log(playerItems);
// console.log(items[items.length -4]);
// 
function generateAge(){
     if (player.age_player >= 6 && player.age_player <= 10) {
         return "anak-anak";
     } else if (player.age_player >= 11 && player.age_player <= 17) {
         return "Remaja";
     } else if (player.age_player >= 18 && player.age_player <= 30) {
         return "Dewasa";
     } else if (player.age_player >=31 && player.age_player <= 60) {
         return "Orang Tua";
     } else {
         return "DEWA MAHA BENARR";
     }
}
// console.log("Saya Golongan ", generateAge());




function generateWinRate(){
    const win_rate = (player.win_player/player.Total_match) * 100
    return win_rate;
};
// console.log(`WinRate ${player.nama_player} adalah ${generateWinRate()} % dan usianya ${player.age_player}`)

function pahlawan (id, nama, ras, gender){
    return { id, nama, ras, gender };
}
// console.log("buat hero untuk saya ",pahlawan(01, "Mikasa", "Manusia", "Wanita" ));


function interaction (request, response){
    console.log("url yang di akses: ",request.url)
    response.writeHeader(200,{"Content-Type" : "text/html"});
    response.write(`<html><head><title> Fathur Rahman Web</title></head><body><h1><marquee>I'm ${myNamee} </marquee> </h1></body></html>`);
    
    return response.end();
}


const port = 3000;
const server = http.createServer(interaction);

server.listen(port, function(error){
    if (error) {
        return console.log("Error nih bro servernya ;) ");
    }
    console.log("serverBelajar nyala bro")
});




