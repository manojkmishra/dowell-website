<template>
<div class="about container">
    <div class="animated fadeInRight row mt-5">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Sliding/photo1.jpg" alt="Dowell Aluminium Sliding Window">
        </div>
    </div>

    <h1 class="blue animated fadeInLeft mt-5">Aluminium Sliding Windows</h1>

    <hr>

    <p class="animated fadeInLeft">The Dowell aluminium sliding window has a perfect combination of design and function that offers excellent ventilation and an elegant appearance.</p>

    <div class="animated fadeInLeft col-xl-3 col-md-6 col-xs-12">
        <a target="_blank" href="https://drive.google.com/file/d/1uk65_cgMt5LZTCmTqLP6ZjzjoYUSv2ke/view?usp=sharing" download>        
            <img class="card-img-top rounded-0" src="../../../assets/images/Icons/pdf.png" alt="Dowell Aluminium Sliding Window Brochure" style="height:50%; width:50%;">
        </a>
    </div>

    <h4 class="blue animated fadeInLeft mt-3">Features</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Durable low maintenance, easy-clean aluminium profiles.</li>
            <li>Self lubricating Stainless Steel ball bearing roller system for smooth sash operation.</li>
            <li>Sill draining system designed for optimum performance.</li>
            <li>Slimline profiles for wide uninterrupted views.</li>
            <li>Anti-lift sash for added security.</li>
            <li>Full length under-sill flap for neat finish and allowance for building settlement.</li>
            <li>Easy coupling to the Dowell range of windows and doors.</li>
            <li>Fully integrated flyscreen support (screens offered as an option)</li>
            <li>Optional fly doors and barrier grilles available.</li>
            <li>Products available in Double Glazed configurations in some.</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Hardware Options</h4>

    <p class="animated fadeInLeft">
        <ul>
            <li>Non-keyed mullion latch available on request.</li>
            <li>Keyed mullion latch fitted as standard.</li>
        </ul>
    </p>

    <h4 class="blue animated fadeInLeft mt-3">Size Range (N1-N5)</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Sliding/photo2.jpg" alt="Dowell Aluminium Sliding Window Sizes">
    </div>

    <p class="mt-3">Note: Cam handles required to all 2057 high FH sashes Key: *= NOT FOR N5 # = NOT FOR N4 and N5 M = Midrail 4 = 4mm thick glass
        5 = 5mm thick glass † = Not available in Double Glazing ◊ = Not Available in Full Height</p>

    <h4 class="blue mt-3">Optional Alternatives</h4>

    <div class="col-xl-12 col-md-12">
        <img class="card-img-top rounded-0" src="../../../assets/images/Products/Windows/Sliding/photo3.jpg" alt="Dowell Aluminium Sliding Window">
    </div>

    <p class="mt-3">Note: For higher wind ratings, wind load graphs must be consulted. Other options include double glazed windows for enhanced thermal
        performance. *Some features and options may vary from state to state, please check with your local Dowell representative.</p>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            infoPage: {
                title: 'Sliding Window'
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
            c: 'Dowell Windows and Doors Sliding Window',
            id: 'desc'
        }],
    }
}
</script>