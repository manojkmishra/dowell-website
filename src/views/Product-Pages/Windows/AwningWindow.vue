<template>
<div class="about container">
    <div class="animated fadeInRight row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Awning/photo1.jpg" alt="Dowell Awning Window">
        </div>
    </div>

    <h1 class="blue animated fadeInLeft mt-5">Awning Windows</h1>

    <hr>

    <p class="animated fadeInLeft">The Dowell Awning window has a perfect combination of design and function that offers excellent ventilation and an elegant appearance.</p>

    <div class="animated fadeInLeft col-xl-3 col-md-6 col-xs-12">
        <a target="_blank" href="https://drive.google.com/file/d/1Xtnd81W3b-5ZXaU4wl5LHGAAO5uDlcU0/view?usp=sharing" download>
            <img class="card-img-top rounded-0" src="../../../assets/images/Icons/pdf.png" alt="Dowell Awning Window Brochure" style="height:50%; width:50%;">
        </a>
    </div>

    <h4 class="blue animated fadeInLeft mt-3">Features</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Durable low maintenance, easy-clean aluminium profiles.</li>
            <li>Integrated tubular mullions and transoms with concealed fixings for superior strength.</li>
            <li>Full width winder support for improved aesthetics.</li>
            <li>Solid extruded aluminium sash corner stakes.</li>
            <li>Patented continuous anti-rattle hook hinge system.</li>
            <li>Full perimeter sash seals for positive sealing.</li>
            <li>Moulded end gaskets at frame joints.</li>
            <li>Full length under-sill flap for neat finish and allowance for building settlement.</li>
            <li>Easy coupling to the Dowell range of windows and doors.</li>
            <li>Products available in Double Glazed configurations in some states.*</li>
            <li>Fully integrated flyscreen support.</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Hardware Options</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Optional Key Lockable Winder available.</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Size Range (N1-N5)</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Awning/photo2.jpg" alt="Dowell Awning Window Sizes">
    </div>

    <p class="mt-3">Note: Cam handles required to all 2057 high FH sashes Key: *= NOT FOR N5 # = NOT FOR N4 and N5 M = Midrail 4 = 4mm thick
        glass 5 = 5mm thick glass † = Not available in Double Glazing ◊ = Not Available in Full Height</p>

    <h4 class="blue mt-3">Optional Alternatives</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Awning/photo3.jpg" alt="Dowell Awning Window">
    </div>

    <p class="mt-3">
        <ul>
            <li>Other options include double glazed windows for enhanced thermal performance.</li>
            <li>In some locations alternative awning window frames are also available please consult your nearest sales office for further information.</li>
        </ul>
    </p>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            infoPage: {
                title: 'Awning Window'
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
            c: 'Dowell Windows and Doors Awning Window',
            id: 'desc'
        }],
    }
}
</script>
