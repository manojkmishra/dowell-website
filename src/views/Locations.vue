<template>
<div class="about container animated fadeIn">
<h1 class="blue animated fadeInLeft text-center">Our Locations</h1>
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../assets/images/Locations/photo1.jpg" alt="Dowell Windows and Doors Locations">
        </div>
    </div>
  <!-- <div class="row map">
            <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :key="index" v-for="(brew,index) in brews"
                :lat-lng="latLng(brew.latitude,brew.longitude)"
                >
                <div v-if="brew.type=='hoffice'">
                    <l-icon :icon-url="icon" ></l-icon>  
                    <l-popup ><div class="font-weight-bold"> Dowell Windows – {{brew.name}}</div>{{brew.street}},{{brew.suburb}}
                        <br> {{brew.state}}, {{brew.postal_code}} <br>
                            Phone: {{brew.phone}}, Fax: {{brew.fax}}<br>
                            Email: <a class="email" v-bind:href="mailto(brew.email)">{{brew.email}}@dowell.com.au</a>

                    </l-popup>
              </div>
              <div v-else>
                   <l-icon :icon-url="icon1" ></l-icon>  
                    <l-popup ><div class="font-weight-bold"> Dowell Windows – {{brew.name}}</div>{{brew.street}},{{brew.suburb}}
                        <br> {{brew.state}}, {{brew.postal_code}} <br>
                            Phone: {{brew.phone}}, Fax: {{brew.fax}}<br>
                            Email: <a class="email" v-bind:href="mailto(brew.email)">{{brew.email}}@dowell.com.au</a>

                    </l-popup>
              </div>
        </l-marker>
         

    </l-map>
    </div>  -->

    <div class="row mt-3">
        <div class="col-md-12">
            <div class="card border-0">
                <div class="grey card-header p-2 border-0 rounded-0 ">
                    <ul class="nav nav-pills">
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0 active" href="#all" data-toggle="tab">ALL</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#vic" data-toggle="tab">VIC</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#qld" data-toggle="tab">QLD</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#nsw" data-toggle="tab">NSW</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#tas" data-toggle="tab">TAS</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#act" data-toggle="tab">ACT</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#wa" data-toggle="tab">WA</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#sa" data-toggle="tab">SA</a></li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="tab-content">
                        <TAS />
                        <VIC />
                        <WA />
                        <NSW />
                        <ACT />
                        <QLD />
                        <SA />
                        <TAS />
                         <ALL/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import {LMap, LTileLayer, LMarker,LPopup,LIcon } from 'vue2-leaflet'
import ALL from '../components/Locations/ALL'
import VIC from '../components/Locations/VIC'
import TAS from '../components/Locations/TAS'
import WA from '../components/Locations/WA'
import NSW from '../components/Locations/NSW'
import ACT from '../components/Locations/ACT'
import QLD from '../components/Locations/QLD'
import SA from '../components/Locations/SA'
import { Icon } from 'leaflet';
//import beer from '../../../assets/images/About/favicon.ico'
import beer from '../assets/images/About/icons83.png'
import beer1 from '../assets/images/About/icons82.png'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=")marker-icon-2x.png',
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
    name: "home",
    components: { ALL,VIC, TAS,  WA,  NSW, ACT, QLD, SA ,LMap, LTileLayer, LMarker, LPopup, LIcon},
     
    data: function () {
        return {
            infoPage: {
                title: 'Locations'
            },
            email: "mailto:vic.enquiries@dowell.com.au",
            zoom:4,
            icon:beer,  icon1:beer1,
            //iconSize:[200,200],
            //center:  L.latLng(-23.698042,133.880753), //map center on page center-alice springs
            center:  L.latLng(-28.1411207,135.5331245), //map center on page center-alice springs
            url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
           // marker: L.latLng(-33.8688, 151.2093), //marker location
            brews:[{"id":1,"name":"Head Office (Melbourne)","street":"188 Canterbury Road","suburb":"Bayswater","state":"VIC","postal_code":"3153","phone":"03 9721 0700","fax":"03 9721 0720","email":"vic.enquiries","type":"hoffice","longitude":"145.2826993","latitude":"-37.82699"},
{"id":2,"name":"Albury/Wodonga","street":"50A Wigg Street","suburb":"Wodonga","state":"VIC","postal_code":"3690","phone":"02 6056 8211","fax":"02 6056 8255","email":"vic.enquiries","type":"noffice","longitude":"143.7933413","latitude":"-36.1223334"},
{"id":3,"name":"Ballarat","street":"31 Production Drive","suburb":"Alfredton","state":"VIC","postal_code":"3350","phone":"03 5342 9586","fax":"03 5342 9612","email":"vic.enquiries","type":"noffice","longitude":"146.896403","latitude":"-37.543983"},
{"id":4,"name":"Bendigo","street":"50A Wigg Street","suburb":"Bendigo","state":"VIC","postal_code":"3550","phone":"03 5444 1178","fax":"03 5444 1792","email":"vic.enquiries","type":"noffice","longitude":"144.2891934","latitude":"-36.7561752"},
{"id":5,"name":"Epping","street":"Unit 1, 59 Willandra Drive","suburb":"Epping","state":"VIC","postal_code":"3076","phone":"03 9305 5034","fax":"03 9303 8093","email":"vic.enquiries","type":"noffice","longitude":"145.0090032","latitude":"-37.6450275"},
{"id":6,"name":"Geelong","street":"19 Essington Street","suburb":"Grovedale","state":"VIC","postal_code":"3216","phone":"03 5243 5822","fax":"03 5243 5866","email":"vic.enquiries","type":"noffice","longitude":"144.342605","latitude":"-38.1983135"},
{"id":7,"name":"Shepparton","street":"225 Benalla Road","suburb":"Shepparton","state":"VIC","postal_code":"3603","phone":"03 5821 2665","fax":"03 5821 8925","email":"vic.enquiries","type":"noffice","longitude":"145.4275559","latitude":"-36.3873982"},
{"id":8,"name":"Traralgon","street":"152 Argyle Street","suburb":"Wodonga","state":"VIC","postal_code":"3844","phone":"03 5176 5799","fax":"03 5176 5788","email":"vic.enquiries","type":"noffice","longitude":"146.896403","latitude":"-36.1223334"},
{"id":9,"name":"Warrnambool","street":"9 Cooper Street","suburb":"Warrnambool","state":"VIC","postal_code":"3280","phone":"03 5561 2555","fax":"03 5562 1460","email":"vic.enquiries","type":"noffice","longitude":"146.5531017","latitude":"-38.191261"},
//tas
{"id":10,"name":"Hobart","street":"99 Albert Road","suburb":"Moonah ","state":"TAS","postal_code":"7009","phone":"03 9721 0700","fax":"03 6228 2980","email":"tas.enquiries","type":"hoffice","longitude":"147.3040328","latitude":"-42.8492708"},
//qld
{"id":11,"name":"Head Office (Brisbane)","street":"67 Robinson Road","suburb":"Geebung ","state":"QLD","postal_code":"4034","phone":"1300 882 188","fax":"07 3265 2657","email":"qld.enquiries","type":"hoffice","longitude":"153.0568035","latitude":"-27.3695279"},
{"id":12,"name":"Sunshine Coast","street":"3/33 Premier Circuit","suburb":"Warana ","state":"QLD","postal_code":"4575","phone":"03 9721 0700","fax":"07 3265 2657","email":"qld.enquiries","type":"noffice","longitude":"153.1207228","latitude":"-26.7269514"},
//wa
{"id":13,"name":"Head Office (Perth)","street":"10 Jackson Street","suburb":"Bassendean","state":"WA","postal_code":"6054","phone":"08 9476 8100","fax":"03 9721 0720","email":"wa.enquiries","type":"hoffice","longitude":"115.9304117","latitude":"-31.9126911"},
//nsw
{"id":14,"name":"Head Office (Sydney)","street":"312 Woodpark Road","suburb":"Smithfield","state":"NSW","postal_code":"2164","phone":"02 9757 0555","fax":"02 9604 9440","email":"nsw.enquiries","type":"hoffice","longitude":"150.939451","latitude":"-33.8384563"},
{"id":15,"name":"Nowra","street":"14 Bellevue Street ","suburb":"South Nowra","state":"NSW","postal_code":"2540","phone":"02 4421 7277","fax":"02 4421 7329","email":"nsw.enquiries","type":"noffice","longitude":"150.5973148","latitude":"-34.9116242"},
{"id":16,"name":"Beresfield (Newcastle)","street":"Unit 2, 4 Birraba Avenue","suburb":"Beresfield","state":"NSW","postal_code":"2322","phone":"03 5342 9586","fax":"03 5342 9612","email":"nsw.enquiries","type":"noffice","longitude":"151.6307344","latitude":"-32.8103779"},
//sa
{"id":17,"name":"Head Office (Adelaide)","street":"17-21 Woomera Avenue","suburb":"Edinburgh Parks","state":"SA","postal_code":"5111","phone":"08 8282 4200","fax":"08 8287 6056","email":"sa.enquiries","type":"hoffice","longitude":"138.6447862","latitude":"-34.7412899"},
{"id":18,"name":"Lonsdale","street":"Unit 10/4 Aldenhoven Road","suburb":"Lonsdale","state":"SA","postal_code":"5160","phone":"08 8326 6781","fax":"08 8384 6271","email":"sa.enquiries","type":"noffice","longitude":"138.4915246","latitude":"-35.1115657"},
//act
{"id":19,"name":"Queanbeyan ","street":"16 Barber Street","suburb":"Queanbeyan ","state":"TAS","postal_code":"7009","phone":"03 9721 0700","fax":"03 6228 2980","email":"act.enquiries","type":"noffice","longitude":"149.2421935","latitude":"-35.3362651"},

],

        }
    },
    head: {
        // To use "this" in the component, it is necessary to return the object through a function
        title: function () {
            return {
                inner: this.infoPage.title,
                separator: '|'
            }
        },
        meta: [{
            name: 'description',
            c: 'Dowell Windows and Doors Office and Factory Locations and Contact Information',
            id: 'desc'
        }],
    },
      methods:{   latLng(lat,lng){  console.log('method-latlng',lat,lng);
                                    return L.latLng(lat,lng)    } ,
              centerUpdate(c){return this.currentCenter=c;},
              zoomUpdate(c){return this.currentZoom=c;} ,
              mailto(c){ 
                  return this.email=`mailto:${c}@dowell.com.au`;
              } 
          }
};
</script>

<style scoped>
.map{height:70vh; margin: 0 auto;   }
.nav-text { font-size: 14px;}
.grey { background-color: #EBEBEB;}
.black { color: black;}
.tab-pane.active {
    animation: fadeIn ease 3s;
    -webkit-animation: fadeIn ease 3s;
    -moz-animation: fadeIn ease 3s;
    -o-animation: fadeIn ease 3s;
    -ms-animation: fadeIn ease 3s;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
@-moz-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1;  }
}
@-webkit-keyframes fadeIn {
    0% { opacity: 0;  }
    100% { opacity: 1;  }
}
@-o-keyframes fadeIn {
    0% { opacity: 0;  }
    100% {opacity: 1; }
}
@-ms-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
</style>
