<template>
<div class="about container">
    <div class="animated fadeInRight row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Casement/photo1.jpg" alt="Dowell Casement Window">
        </div>
    </div>

    <h1 class="blue animated fadeInLeft mt-5">Casement Windows</h1>

    <hr>

    <p class="animated fadeInLeft">A beautiful design that compliments both traditional and modern décor and designed to maximise the opening window area.</p>

    <div class="animated fadeInLeft col-xl-3 col-md-6 col-xs-12">
        <a target="_blank" href="https://drive.google.com/file/d/1cUs6I-na9fpYy2m1q3_zL86AYJsoVyUl/view?usp=sharing" download>
            <img class="card-img-top rounded-0" src="../../../assets/images/Icons/pdf.png" alt="Dowell Casement Window Brochure" style="height:50%; width:50%;">
        </a>
    </div>

    <h4 class="blue animated fadeInLeft mt-3">Features</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Durable low maintenance, easy-clean aluminium profiles.</li>
            <li>Integrated tubular mullions and transoms with concealed fixings for superior strength.</li>
            <li>Full width winder support for improved aesthetics.</li>
            <li>Solid extruded aluminium sash corner stakes.</li>
            <li>Low E glazing optional for increased energy efficiency.</li>
            <li>Sealed casement stays for improved durability and smooth operation.</li>
            <li>Full perimeter sash seals for positive sealing.</li>
            <li>Fully open sash position allows external glass cleaning from inside.</li>
            <li>Moulded end gaskets at all frame joints.</li>
            <li>Full length under-sill flap for neat finish and allowance for building settlement (optional).</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Hardware Options</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Cam locks fitted as standard.</li>
            <li>Optional Key lock available.</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Size Range (N1-N5)</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Casement/photo2.jpg" alt="Dowell Casement Window Sizes">
    </div>

    <h4 class="blue mt-3">Optional Alternatives</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Casement/photo3.jpg" alt="Dowell Casement Window">
    </div>

    <p class="mt-3">Note: For higher wind ratings, wind load graphs must be consulted. Not suitable for double glazing.</p>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            infoPage: {
                title: 'Casement Window'
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
            c: 'Dowell Windows and Doors Casement Window',
            id: 'desc'
        }],
    }
}
</script>