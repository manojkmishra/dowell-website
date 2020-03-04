<template>
<div class="about container">
    <div class="animated fadeInRight row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../../assets/images/Products/Doors/French/photo1.jpg" alt="Dowell Windows French Door">
        </div>
    </div>

    <h1 class="blue animated fadeInLeft mt-5">French Doors</h1>

    <hr>

    <p class="animated fadeInLeft">Elegant and versatile, which allows you to extend your entertainment area even further.</p>

    <div class="animated fadeInLeft col-xl-3 col-md-6 col-xs-12">
        <a target="_blank" href="https://drive.google.com/file/d/1tlIeznZ6h4NSD1JQboEsSWQlrh3bpbYU/view?usp=sharing" download> 
            <img class="card-img-top rounded-0" src="../../../assets/images/Icons/pdf.png" alt="Dowell Double Hung Window Brochure" style="height:50%; width:50%;">
        </a>
    </div>

    <h4 class="blue animated fadeInLeft mt-3">Features</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Durable low maintenance, easy-clean aluminium profiles.</li>
            <li>Glass jacking screws to prevent door sag.</li>
            <li>Exclusive heavy duty hinges.</li>
            <li>Concealed door bolts for improved security and aesthetics.</li>
            <li>Products available in Double Glazed configurations in some states.*</li>
            <li>Available as opening in or opening out. Open in sill, not water rated.</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Hardware Options</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Keyed Handle Set fitted as standard.</li>
            <li>Satin Chrome.</li>
        </ul>
    </p>    

    <h4 class="blue animated fadeInLeft mt-3">Size Range (N1-N5)</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Doors/French/photo2.jpg" alt="Dowell Windows French Door">
    </div>

    <h4 class="blue mt-3">Optional Alternatives</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Doors/French/photo3.jpg" alt="Dowell Windows French Door">
    </div>

    <p class="mt-3">Note: Single active leaf option is available in certain configurations please consult your nearest sales office 
    for further information. Bi-Folds open out only. Even numbered door opening one way will not have a lead door. Cannot be accessed 
    from the outside. * Some features and options may vary from state to state, please check with your local Dowell representative.</p>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            infoPage: {
                title: 'French Door'
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
            c: 'Dowell Windows and Doors French Door',
            id: 'desc'
        }],
    }
}
</script>

