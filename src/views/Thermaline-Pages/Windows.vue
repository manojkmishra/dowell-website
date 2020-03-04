<template>
<div class="about container">
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Window/photo1.jpg" alt="Dowell Windows and Doors Thermaline">
        </div>
    </div>

    <hr>

    <div class="row mt-3">
        <div class="col-xl-12 col-md-12">
            <h1 class="blue h1-therma">Dowell ThermaLine™ - Awning Window</h1>
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Window/photo2.jpg" alt="Dowell Windows and Doors Thermaline">
        </div>
    </div>

    <hr>

    <div class="row mt-3">
        <div class="col-xl-12 col-md-12">
            <h3 class="blue">Dowell ThermaLine™ - Fixed Window</h3>
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Window/photo3.jpg" alt="Dowell Windows and Doors Thermaline">
        </div>
    </div>

    <hr>

    <div class="row mt-3">
        <div class="col-xl-12 col-md-12">
            <h3 class="blue">Dowell ThermaLine™ - Sliding Window</h3>
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Window/photo4.jpg" alt="Dowell Windows and Doors Thermaline">
        </div>
    </div>

    <hr>

    <div class="row mt-3">
        <div class="col-xl-12 col-md-12">
            <h3 class="blue">Dowell ThermaLine™ - Multi-Transom Window</h3>
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Window/photo3.jpg" alt="Dowell Windows and Doors Thermaline">
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
                title: 'ThermaLine™ Windows'
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
            c: 'Dowell Windows and Doors Windows Thermaline ThermaLine™',
            id: 'desc'
        }],
    }
}
</script>