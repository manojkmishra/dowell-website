<template>
<div class="about container" id="spec">
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Specs/photo1.jpg" alt="Dowell Windows and Doors Thermaline">
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-xl-4 col-md-4 col-s-12">
            <h4 class="italic">Dowell ThermaLine™ awning window Energy Performance data comparison chart</h4>
        </div>

        <div class="col-xl-4 col-md-4 col-s-12">
            <h1 class="blue h1-therma">Dowell ThermaLine™</h1>

            <h2 class="blue thick">PRODUCT SPECIFICATIONS</h2>

            <p class="p-therma">Selecting the right energy efficient windows and doors for your home can be a daunting task. To assist you in your decision
                making process, our energy performance comparison chart, clearly shows the products performance properties, based on Dowells
                awning window product range.</p>
        </div>

        <div class="col-xl-4 col-md-4 col-s-12">
            <p class="p-therma">The glass fiber compound makes the thermal barrier strip durable, but most of all it matches the thermal barrier strip’s
                Linear Thermal Expansion Co-Efficient (LTEC) with that of the aluminum’s</p>

            <p style="font-size:13px;">Please note; There have been instances where window companies quote just the glass U value. This does-not
                represent the true performance of the window which must include the frame in the calculation of the window U-value. Dowell uses the
                ‘Uw’ in describing the performance of its windows in-line with the Australian Standard to assist specifiers and consumers to make
                informed factually based decisions. Reference source; Window Energy Rating Scheme, 2014 WERS Certified Products Directory - AFRC
                (Manufacturer Dowell), [online] Available: http://www.wers.net/werscontent/certified-products-residential (13 November 2014)</p>
        </div>
    </div>

    <hr>

    <div class="row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Specs/photo2.jpg" alt="Dowell Windows and Doors Thermaline">
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-xl-4 col-md-4 col-s-12">
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Specs/rating.jpg" alt="Dowell Windows and Doors Thermaline">
            <h4 class="italic">Dowell ThermaLine™ Thermally Broken Aluminium windows and doors Energy performance product data as rated by WERS.</h4>
        </div>

        <div class="col-xl-4 col-md-4 col-s-12">
            <h3 class="blue">Dowell ThermaLine™</h3>

            <h2 class="blue thick">ENERGY PERFORMANCE PRODUCT</h2>

            <p class="p-therma">The Window Energy Rating Scheme (WERS) rates whole of window product energy efficiency performance and is managed by the Australian
                Window Association (AWA).</p>

            <p class="p-therma">WERS is independent of any one manufacturer and acts as a fair, rigorous and credible system for testing performance claims. WERS-rated
                windows must meet all relevant Australian standards. The scheme forms part of the quality assurance that smart manufacturers offer their customers.
                It is all about certified performance.</p>
        </div>

        <div class="col-xl-4 col-md-4 col-s-12">
            <p class="p-therma">WERS enables windows to be rated and labeled for their annual energy impact on a whole house, in any climate of Australia. A New Zealand
                variant of WERS, the ‘Window Efficiency Rating Scheme’, is also available. To participate in WERS, window makers must obtain energy ratings
                for their products from a rating organisation that is accredited by the Australian Fenestration Rating Council (AFRC).</p>

            <p style="font-size:13px;">Reference source; Window Energy Rating Scheme, 2014 WERS Certified Products Directory - AFRC (Manufacturer Dowell),
                [online] Available: http://www.wers.net/werscontent/certified-products-residential (13 November 2014)</p>
        </div>
    </div>

    <hr>
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Specs/photo3.jpg" alt="Dowell Windows and Doors Thermaline">
        </div>

        <p class="mt-2">Key to ratings table: Glazing ID = Glass Type & Thickness / Space & Gas Fill: UW = Whole-window U-value (Uw): SHGC = Whole-window solar
            heat gain coefficient (SHGCw): TVW = Whole-window visible transmittance (Tvis): AI = Air infiltration rate (L/s.m2) at positive (inward)
            pressure difference of 75 Pa.</p>
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
                title: 'ThermaLine™ Specs'
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
            c: 'Dowell Windows and Doors Specs Specifications Thermaline ThermaLine™',
            id: 'desc'
        }],
    }
}
</script>

