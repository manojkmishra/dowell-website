<template>
<div class="about container">
    <div class="animated fadeInRight row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Double-Hung/photo1.jpg" alt="Dowell Double Hung Window">
        </div>
    </div>

    <h1 class="animated fadeInLeft mt-5">Double Hung Windows</h1>

    <hr>

    <p class="animated fadeInLeft">A classic appearance that captures the spirit of the old, while introducing the convenience of the new.</p>

    <div class="animated fadeInLeft col-xl-3 col-md-6 col-xs-12">
        <a target="_blank" href="https://drive.google.com/file/d/1_cZ4nF7cMlrfwsIjaH-Jio0r4K3LR2Rc/view?usp=sharing" download>
            <img class="card-img-top rounded-0" src="../../../assets/images/Icons/pdf.png" alt="Dowell Double Hung Window Brochure" style="height:50%; width:50%;">
        </a>
    </div>

    <h4 class="blue animated fadeInLeft mt-3">Features</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Durable low maintenance, easy-clean aluminium profiles.</li>
            <li>High quality sash suspension systems for smooth operation.</li>
            <li>Frame corner gaskets for superior sealing.</li>
            <li>Full length under-sill flap for neat finish and allowance for building settlement.</li>
            <li>Easy coupling to the Dowell range of windows and doors.</li>
            <li>Fully integrated flyscreen support (screens offered as an option)</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Hardware Options</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Cam locks fitted as standard.</li>
            <li>Keyed cam locks fitted as standard.</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Size Range (N1-N5)</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Double-Hung/photo2.jpg" alt="Dowell Double Hung Window Sizes">
    </div>

    <h4 class="blue mt-3">Optional Alternatives</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Double-Hung/photo3.jpg" alt="Dowell Double Hung Window">
    </div>

    <p class="mt-3">Note: Other midrail options may be available please consult your nearest sales office for further details. Optional
        single hung configuration bottom opening available at some locations please consult your nearest sales office for further clarification.
        * Some features and options may vary from state to state, please check with your local Dowell representative. Not suitable for double glazing.</p>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            infoPage: {
                title: 'Double Hung Window'
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
            c: 'Dowell Windows and Doors Double Hung Window',
            id: 'desc'
        }],
    }
}
</script>