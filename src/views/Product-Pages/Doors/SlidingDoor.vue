<template>
<div class="about container">
    <div class="animated fadeInRight row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../../assets/images/Products/Doors/Sliding/photo1.jpg" alt="Dowell Windows and Doors Sliding Door">
        </div>
    </div>

    <h1 class="blue animated fadeInLeft mt-5">Sliding Doors</h1>

    <hr>

    <p class="animated fadeInLeft">The Dowell Sliding Door is as attractive as it is sturdy, making it a versatile solution.</p>

    <div class="animated fadeInLeft col-xl-3 col-md-6 col-xs-12">
        <a target="_blank" href="https://drive.google.com/file/d/1AQalveSWSVKqezA45_Wd3pinZ6y61X0d/view?usp=sharing" download> 
            <img class="card-img-top rounded-0" src="../../../assets/images/Icons/pdf.png" alt="Dowell Double Hung Window Brochure" style="height:50%; width:50%;">
        </a>
    </div>

    <h4 class="blue animated fadeInLeft mt-3">Features</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Durable low maintenance, easy-clean aluminium profiles.</li>
            <li>Reveal flashing fins on jambs and head for weather protection.</li>
            <li>Patented sill valve draining system for excellent performance.</li>
            <li>Optional Sump Sill for demanding exposure conditions.</li>
            <li>Fully adjustable, noncorrosive ball bearing roller system for smooth panel operation.</li>
            <li>Available in 2 panel sliding (X0), 3 panel (X00, 0X0 or 00X) and bi-parting sliding (0XX0) combinations.</li>
            <li>Reversal of sliding panel configuration on all 2 panel sliding combinations possible after installation.</li>
            <li>High quality corner gaskets at frame joints for superior sealing.</li>
            <li>Optional fly doors and barrier grilles available.</li>
            <li>Easy coupling to the Dowell range of windows.</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Hardware Options</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Keyed deadlock fitted as standard.</li>
            <li>Snib Latch available on request.</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Size Range (N1-N5)</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Doors/Sliding/photo2.jpg" alt="Dowell Windows and Doors Sliding Door">
    </div>

    <h4 class="blue mt-3">Optional Alternatives</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Doors/Sliding/photo3.jpg" alt="Dowell Windows and Doors Sliding Door">
    </div>

    <p class="mt-3">Note: An option for double glazed doors for enhanced thermal performance is available. Standard handling may vary from state
        to state. Please consult your nearest sales office for clarification. * Some features and options may vary from state to state,
        please check with your local Dowell representative.</p>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            infoPage: {
                title: 'Sliding Door'
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
            c: 'Dowell Windows and Doors Sliding Door',
            id: 'desc'
        }],
    }
}
</script>

