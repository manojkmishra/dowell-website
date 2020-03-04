<template>
<div class="about container" id="door">
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Door/photo1.jpg" alt="Dowell Windows and Doors Thermaline">
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-xl-4 col-md-4 col-s-12">
            <h4 class="italic">Dowell ThermaLine™ sliding doors meet the highest requirements in terms of thermal insulation and structural construction</h4>
        </div>

        <div class="col-xl-4 col-md-4 col-s-12">
            <h1 class="blue h1-therma">Dowell ThermaLine™</h1>

            <h2 class="blue thick">SLIDING DOOR</h2>

            <p class="p-therma">Dowell ThermaLine™ sliding doors offer a high level of comfort in your home by maintaining a constant, agreeable room climate, saving
                valuable energy and reducing high energy costs. Regardless of your climate zone, Dowell ThermaLine™ sliding doors, not only provide
                optimal energy efficiency on cold days, but also in summer by keeping the heat outside and reducing the need for air-conditioning.Now,
                your energy consumption does not need to increase exponentially - either in summer or winter.</p>

            <p class="p-therma">Dowell ThermaLine™ sliding door are ideal for large-scale openings - demanding maximum transparency. Our 2400 mm (h) aluminium sliding
                doors, create rooms flooded with light and</p>
        </div>

        <div class="col-xl-4 col-md-4 col-s-12">
            <p class="p-therma">invite attractive views as well as giving design emphases to your home. Quiet and robust rollers provide years of trouble free smooth
                and easy operation. Optimum sound insulation can also be achieved, with selective glazing over 30db of outside noise can be eliminated.</p>

            <p class="p-therma">What makes the Dowell ThermaLine™ sliding door stand out is its wide profile face widths and in-line construction. The elegant design
                allows new room concepts with an improved standard of living to be created. Dowell ThermaLine™ range is compatible with one another,
                resulting in an harmonious overall appearance of all your windows, and sliding door.</p>

            <p class="mini-heading">Dowell ThermaLine™ sliding doors have excellent insulation, offer high level of comfort, maintain low energy
                costs and emphasise a modern look.</p>
        </div>
    </div>

    <hr>

    <div class="row mt-3">
        <div class="col-xl-12 col-md-12">
            <h3 class="blue">Dowell ThermaLine™ - Sliding Door</h3>
            <img class="card-img-top rounded-0" src="../../assets/images/Thermaline/Door/photo2.jpg" alt="Dowell Windows and Doors Thermaline">
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
                title: 'ThermaLine™ Doors'
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
            c: 'Dowell Windows and Doors Doors Thermaline ThermaLine™',
            id: 'desc'
        }],
    }
}
</script>
