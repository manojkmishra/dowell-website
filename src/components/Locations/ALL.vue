<template>
<div class="tab-pane active" id="all">
    <div class="row ml-1 state"><h3>Victoria</h3></div>
    <div class="row">
        <div class="col-xl-3 col-md-6 col-s-12 offset-xl-1" :key="index" v-for="(brew,index) in vic">
            <div class="table-responsive">                 
                <table class="table-borderless">                 
                    <thead class="officename"><tr><th>{{brew.name}}</th></tr></thead>
                    <tbody>
                        <tr><td>{{brew.street}} </td></tr>
                        <tr><td> {{brew.suburb}},{{brew.state}}, {{brew.postal_code}} </td></tr>
                        <tr><td>Phone: {{brew.phone}}</td></tr>
                        <tr><td>Fax: {{brew.fax}} </td></tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">{{brew.email}}<code>@</code>dowell.com.au</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="row ml-1 mt-2 state"><h3>Queensland</h3></div>
    <div class="row">
        <div class="col-xl-3 col-md-6 col-s-12 offset-xl-1 animated fadeInRight" :key="index" v-for="(brew,index) in qld">
            <div class="table-responsive">                 
                <table class="table-borderless">                 
                    <thead><tr><th>{{brew.name}}</th></tr></thead>
                    <tbody>
                        <tr><td>{{brew.street}} </td></tr>
                        <tr><td> {{brew.suburb}},{{brew.state}}, {{brew.postal_code}} </td></tr>
                        <tr><td>Phone: {{brew.phone}}</td></tr>
                        <tr><td>Fax: {{brew.fax}} </td></tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">{{brew.email}}<code>@</code>dowell.com.au</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="row ml-1 state"><h3>New South Wales</h3></div>
    <div class="row ">
        <div class="col-xl-3 col-md-6 col-s-12 offset-xl-1 animated fadeInRight " :key="index" v-for="(brew,index) in nsw">
            <div class="table-responsive ">                 
                <table class="table-borderless">                 
                    <thead class="officename pt-10"><tr><th>{{brew.name}}</th></tr></thead>
                    <tbody>
                        <tr><td>{{brew.street}} </td></tr>
                        <tr><td> {{brew.suburb}},{{brew.state}}, {{brew.postal_code}} </td></tr>
                        <tr><td>Phone: {{brew.phone}}</td></tr>
                        <tr><td>Fax: {{brew.fax}} </td></tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">{{brew.email}}<code>@</code>dowell.com.au</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
         <div class="row ml-1 state"><h3>Tasmania</h3></div>
    <div class="row ">
        <div class="col-xl-3 col-md-6 col-s-12 offset-xl-1 animated fadeInRight " :key="index" v-for="(brew,index) in tas">
            <div class="table-responsive ">                 
                <table class="table-borderless">                 
                    <thead class="officename pt-10"><tr><th>{{brew.name}}</th></tr></thead>
                    <tbody>
                        <tr><td>{{brew.street}} </td></tr>
                        <tr><td> {{brew.suburb}},{{brew.state}}, {{brew.postal_code}} </td></tr>
                        <tr><td>Phone: {{brew.phone}}</td></tr>
                        <tr><td>Fax: {{brew.fax}} </td></tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">{{brew.email}}<code>@</code>dowell.com.au</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
     <div class="row ml-1 state"><h3>Australian Capital Territory</h3></div>
    <div class="row ">
        <div class="col-xl-3 col-md-6 col-s-12 offset-xl-1 animated fadeInRight " :key="index" v-for="(brew,index) in act">
            <div class="table-responsive ">                 
                <table class="table-borderless">                 
                    <thead class="officename pt-10"><tr><th>{{brew.name}}</th></tr></thead>
                    <tbody>
                        <tr><td>{{brew.street}} </td></tr>
                        <tr><td> {{brew.suburb}},{{brew.state}}, {{brew.postal_code}} </td></tr>
                        <tr><td>Phone: {{brew.phone}}</td></tr>
                        <tr><td>Fax: {{brew.fax}} </td></tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">{{brew.email}}<code>@</code>dowell.com.au</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
         <div class="row ml-1 state"><h3>South Australia</h3></div>
    <div class="row ">
        <div class="col-xl-3 col-md-6 col-s-12 offset-xl-1 animated fadeInRight" :key="index" v-for="(brew,index) in sa">
            <div class="table-responsive ">                 
                <table class="table-borderless">                 
                    <thead class="officename"><tr><th>{{brew.name}}</th></tr></thead>
                    <tbody>
                        <tr><td>{{brew.street}} </td></tr>
                        <tr><td> {{brew.suburb}},{{brew.state}}, {{brew.postal_code}} </td></tr>
                        <tr><td>Phone: {{brew.phone}}</td></tr>
                        <tr><td>Fax: {{brew.fax}} </td></tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">{{brew.email}}<code>@</code>dowell.com.au</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
             <div class="row ml-1 state"><h3>Western Australia</h3></div>
    <div class="row ">
        <div class="col-xl-3 col-md-6 col-s-12 offset-xl-1 animated fadeInRight " :key="index" v-for="(brew,index) in wa">
            <div class="table-responsive ">                 
                <table class="table-borderless">                 
                    <thead class="officename pt-10"><tr><th>{{brew.name}}</th></tr></thead>
                    <tbody>
                        <tr><td>{{brew.street}} </td></tr>
                        <tr><td> {{brew.suburb}},{{brew.state}}, {{brew.postal_code}} </td></tr>
                        <tr><td>Phone: {{brew.phone}}</td></tr>
                        <tr><td>Fax: {{brew.fax}} </td></tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">{{brew.email}}<code>@</code>dowell.com.au</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            email: "mailto:vic.enquiries@dowell.com.au",
vic:[{"id":1,"name":"Head Office (Melbourne)","street":"188 Canterbury Road","suburb":"Bayswater","state":"VIC","postal_code":"3153","phone":"03 9721 0700","fax":"03 9721 0720","email":"vic.enquiries","type":"hoffice","longitude":"145.2826993","latitude":"-37.82699"},
{"id":2,"name":"Albury/Wodonga","street":"50A Wigg Street","suburb":"Wodonga","state":"VIC","postal_code":"3690","phone":"02 6056 8211","fax":"02 6056 8255","email":"vic.enquiries","type":"noffice","longitude":"143.7933413","latitude":"-36.1223334"},
{"id":3,"name":"Ballarat","street":"31 Production Drive","suburb":"Alfredton","state":"VIC","postal_code":"3350","phone":"03 5342 9586","fax":"03 5342 9612","email":"vic.enquiries","type":"noffice","longitude":"146.896403","latitude":"-37.543983"},
{"id":4,"name":"Bendigo","street":"50A Wigg Street","suburb":"Bendigo","state":"VIC","postal_code":"3550","phone":"03 5444 1178","fax":"03 5444 1792","email":"vic.enquiries","type":"noffice","longitude":"144.2891934","latitude":"-36.7561752"},
{"id":5,"name":"Epping","street":"Unit 1, 59 Willandra Drive","suburb":"Epping","state":"VIC","postal_code":"3076","phone":"03 9305 5034","fax":"03 9303 8093","email":"vic.enquiries","type":"noffice","longitude":"145.0090032","latitude":"-37.6450275"},
{"id":6,"name":"Geelong","street":"19 Essington Street","suburb":"Grovedale","state":"VIC","postal_code":"3216","phone":"03 5243 5822","fax":"03 5243 5866","email":"vic.enquiries","type":"noffice","longitude":"144.342605","latitude":"-38.1983135"},
{"id":7,"name":"Shepparton","street":"225 Benalla Road","suburb":"Shepparton","state":"VIC","postal_code":"3603","phone":"03 5821 2665","fax":"03 5821 8925","email":"vic.enquiries","type":"noffice","longitude":"145.4275559","latitude":"36.3873982"},
{"id":8,"name":"Traralgon","street":"152 Argyle Street","suburb":"Wodonga","state":"VIC","postal_code":"3844","phone":"03 5176 5799","fax":"03 5176 5788","email":"vic.enquiries","type":"noffice","longitude":"146.896403","latitude":"-36.1223334"},
{"id":9,"name":"Warrnambool","street":"9 Cooper Street","suburb":"Warrnambool","state":"VIC","postal_code":"3280","phone":"03 5561 2555","fax":"03 5562 1460","email":"vic.enquiries","type":"noffice","longitude":"146.5531017","latitude":"-38.191261"},
],
tas:[{"id":10,"name":"Hobart","street":"99 Albert Road","suburb":"Moonah ","state":"TAS","postal_code":"7009","phone":"03 9721 0700","fax":"03 6228 2980","email":"tas.enquiries","type":"hoffice","longitude":"147.3040328","latitude":"-42.8492708"}],
   wa:[{"id":13,"name":"Head Office (Perth)","street":"10 Jackson Street","suburb":"Bassendean","state":"WA","postal_code":"6054","phone":"08 9476 8100","fax":"03 9721 0720","email":"wa.enquiries","type":"hoffice","longitude":"115.9304117","latitude":"-31.9126911"},
],
qld:[{"id":11,"name":"Head Office (Brisbane)","street":"67 Robinson Road","suburb":"Geebung ","state":"QLD","postal_code":"4034","phone":"1300 882 188","fax":"07 3265 2657","email":"qld.enquiries","type":"hoffice","longitude":"153.0568035","latitude":"-27.3695279"},
{"id":12,"name":"Sunshine Coast","street":"3/33 Premier Circuit","suburb":"Warana ","state":"QLD","postal_code":"4575","phone":"03 9721 0700","fax":"07 3265 2657","email":"qld.enquiries","type":"noffice","longitude":"153.1207228","latitude":"-26.7269514"},
],
nsw:[
{"id":14,"name":"Head Office (Sydney)","street":"312 Woodpark Road","suburb":"Smithfield","state":"NSW","postal_code":"2164","phone":"02 9757 0555","fax":"02 9604 9440","email":"nsw.enquiries","type":"hoffice","longitude":"150.939451","latitude":"-33.8384563"},
{"id":15,"name":"Nowra","street":"14 Bellevue Street ","suburb":"South Nowra","state":"NSW","postal_code":"2540","phone":"02 4421 7277","fax":"02 4421 7329","email":"nsw.enquiries","type":"noffice","longitude":"150.5973148","latitude":"-34.9116242"},
{"id":16,"name":"Beresfield (Newcastle)","street":"Unit 2, 4 Birraba Avenue","suburb":"Beresfield","state":"NSW","postal_code":"2322","phone":"03 5342 9586","fax":"03 5342 9612","email":"nsw.enquiries","type":"noffice","longitude":"151.6307344","latitude":"-32.8103779"},
],
sa:[
{"id":17,"name":"Head Office (Adelaide)","street":"17-21 Woomera Avenue","suburb":"Edinburgh Parks","state":"SA","postal_code":"5111","phone":"08 8282 4200","fax":"08 8287 6056","email":"sa.enquiries","type":"hoffice","longitude":"138.6447862","latitude":"-34.7412899"},
{"id":18,"name":"Lonsdale","street":"Unit 10/4 Aldenhoven Road","suburb":"Lonsdale","state":"SA","postal_code":"5160","phone":"08 8326 6781","fax":"08 8384 6271","email":"sa.enquiries","type":"noffice","longitude":"138.4915246","latitude":"-35.1115657"},
],
act:[
{"id":19,"name":"Queanbeyan ","street":"16 Barber Street","suburb":"Queanbeyan ","state":"TAS","postal_code":"7009","phone":"03 9721 0700","fax":"03 6228 2980","email":"act.enquiries","type":"hoffice","longitude":"149.2421935","latitude":"-35.3362651"},
]

        }
    }
}
</script>

<style scoped>
.email {   
    color:#0060af;
    font-size: 14px;
}
.email:hover {
color: rgb(124, 124, 196);
 text-decoration: underline;
}
.state{ color:#0060af;}

.table-borderless{
    font-size:15px;
        border-collapse: separate;
    margin-bottom: 25px;
    width: 100%;
}
.table-borderless{
    font-size:15px;
        border-collapse: separate;
    margin-bottom: 25px;
    width: 100%;
}

</style>
