<template>
<div class="about container" id="climate">
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Climate/photo1.jpg" alt="Dowell Windows and Doors Thermaline">
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-xl-4 col-md-12">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Climate/ccm_qld.jpg" alt="Dowell Windows and Doors Thermaline">
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Queensland</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Climate/ccm_nsw.jpg" alt="Dowell Windows and Doors Thermaline">
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">New South Wales</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Climate/ccm_vic.jpg" alt="Dowell Windows and Doors Thermaline">
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Victoria</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Climate/ccm_tas.jpg" alt="Dowell Windows and Doors Thermaline">
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Tasmania</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Climate/ccm_sa.jpg" alt="Dowell Windows and Doors Thermaline">
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">South Australia</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Climate/ccm_wa.jpg" alt="Dowell Windows and Doors Thermaline">
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Western Australia</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-xl-4 col-md-4 col-s-12">
            <h4 class="italic">Australia has a varied climate, leading to different locations around the country having different heating and cooling requirements.</h4>
        </div>

        <div class="col-xl-4 col-md-4 col-s-12">
            <h1 class="blue h1-therma">Dowell ThermaLine™</h1>

            <h2 class="blue thick">CLIMATE ZONE MAPS</h2>

            <p class="p-therma">Energy efficiency Deemed-to-Satisfy (DtS) provisions vary from location to location and for simplicity, locations with approximately
                similar climates have been combined into eight climate zones.</p>

            <p class="p-therma">The following provides a brief description of each National Construction Code (NCC) climate zone:</p>

            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Climate/climate_zone_2.jpg" alt="Dowell Windows and Doors Thermaline">

            <p class="p-therma mt-3">These eight climate zones are illustrated in the form of a climate zone map which was created using Bureau of Meteorology climatic data,
                with two supplementary zones added to accommodate an additional temperate zone and alpine area.</p>
        </div>

        <div class="col-xl-4 col-md-4 col-s-12">
            <p class="p-therma thick">Hot climate zones 1, 2 & 3</p>

            <p class="p-therma">Areas included in these climate zones are Northern Australia, Brisbane, Darwin</p>

            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Climate/climate_zone_3.jpg" alt="Dowell Windows and Doors Thermaline">

            <p class="p-therma thick mt-4">Mixed climate zones 4 & 5</p>

            <p class="p-therma">Areas included in these climate zones are Sydney, Perth and Adelaide</p>

            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Climate/climate_zone_4.jpg" alt="Dowell Windows and Doors Thermaline">

            <p class="p-therma thick mt-4">Cold climate zones 6, 7 & 8</p>

            <p class="p-therma">Areas included in these climate zones cover most of Victoria, Australian Capital Territory, Tasmania, and some Southern parts of New
                South Wales and Western Australia</p>

            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Climate/climate_zone_5.jpg" alt="Dowell Windows and Doors Thermaline">

            <p class="mt-3" style="font-size:13px;">Reference source:Maps have been developed from maps produced by the Australian Building Codes Board and the
                Bureau of Meteorology.</p>
        </div>
    </div>

    <div class="col-xl-4 col-md-4 col-s-12 mt-3" style="text-align: center;">
        <h5 class="blue">Download brochure:</h5>
        <a target="_blank" href="https://drive.google.com/file/d/1v743h2lJwXProAs_SakOv7oR4-QEkoOe/view?usp=sharing" download>
            <img class="dl-brochure card-img-top rounded-0" src="../../assets/images/Icons/pdf.png" alt="Dowell Awning Window Brochure" style="width: 40%; height: 30%;">
        </a>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            infoPage: {
                title: 'Climate Zone Maps'
            }
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
            c: 'Dowell Windows and Doors Climate Zone Maps Thermaline ThermaLine™',
            id: 'desc'
        }],
    }
}
</script>
