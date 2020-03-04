<template>
<div class="about container">
    <div class="animated fadeInRight row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../../assets/images/Products/Doors/Bi-Fold/photo1.jpg" alt="Dowell Windows and Doors BiFold Door">
        </div>
    </div>

    <h1 class="animated fadeInLeft mt-5">Bi-Fold Doors</h1>

    <hr>

    <p class="animated fadeInLeft">Bring the outdoors in - Indoor/Outdoor entertaining made easy by maximising living space.</p>

    <div class="animated fadeInLeft col-xl-3 col-md-6 col-xs-12">
        <a target="_blank" href="https://drive.google.com/file/d/1CpB6kF4l3SJoTbp7mAaUnz77EF3yspU-/view?usp=sharing" download> 
            <img class="card-img-top rounded-0" src="../../../assets/images/Icons/pdf.png" alt="Dowell Double Hung Window Brochure" style="height:50%; width:50%;">
        </a>
    </div>

    <h4 class="blue animated fadeInLeft mt-3">Features</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>100mm perimeter frame.</li>
            <li>Centor eclipse hardware for ease of operation.</li>
            <li>High performance seals for exposed locations.</li>
            <li>Jamb Pivots designed for easy adjustment of doors without having to remove the door panels.</li>
            <li>A wide variety of panel configuration to suit most floor plan layouts.</li>
            <li>Options available subject to weather exposure limitations.</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Hardware Options</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Standard hardware in satin chrome or powder coated finish.</li>
            <li>Optional in stainless steel or powder coated to match frames.</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Size Range (N1-N5)</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Doors/Bi-Fold/photo2.jpg" alt="Dowell Windows and Doors BiFold Door">
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
                title: 'BiFold Door'
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
            c: 'Dowell Windows and Doors BiFold Door',
            id: 'desc'
        }],
    }
}
</script>

