<template>
<div class="about animated fadeIn container">
    <div class="animated fadeInLeft row">
        <div class="col-xl-12 col-md-12 col-s-12">
            <h1 class="blue thick h1-warr">DOWELL WARRANTY AND CARE</h1>
            <h4 class="blue">Download our Warranty and Care Instructions</h4>
            <hr>
        </div>

        <div class="col-xl-12 col-md-12 col-s-12">
            <h4 class="blue">Dowell seven year manufacturers limited warranty.</h4>
            <p class="p-alfresco">At Dowell we warrant our windows and doors against defects arising from faulty
                workmanship for a period of seven years from the date of delivery to site. Please
                download and read our manufacturers limited warranty for terms and conditions.</p>
            <h4 class="blue">Dowell care and maintenance.</h4>
            <p class="p-alfresco">To maintain the integrity and smooth operation of your Dowell windows and doors,
                it is important to conduct regular care and maintenance on your windows and doors,
                please download the Care Instructions for more information.</p>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-xl-4 col-md-12 animated fadeInRight">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <a target="_blank" href="https://drive.google.com/file/d/1J7uFSH1CeiV7F1hidqY0EVcBZY8xYPGI/view?usp=sharing" download>
                        <img class="card-img-top rounded-0" src="../../assets/images/Products/Warranty/warranty_card_h.jpg" alt="Dowell Windows and Doors Warranty">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Dowell Seven Year Warranty</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12 animated fadeInRight">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <a target="_blank" href="https://drive.google.com/file/d/1yGzaWKCddqRzlGUrirksMucNAMLFMwG4/view?usp=sharing" download>
                        <img class="card-img-top rounded-0" src="../../assets/images/Products/Warranty/alum_care_instruc_h.jpg" alt="Dowell Windows and Doors Warranty">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Aluminium Care Instructions</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            infoPage: {
                title: 'Warranty'
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
            c: 'Dowell Windows and Doors Warranty',
            id: 'desc'
        }],
    }
}
</script>



