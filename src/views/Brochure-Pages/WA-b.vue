<template>
<div class="about container">

    <h1 class="blue animated fadeIn">WA Brochures</h1>
    <hr>

    <div class="row mt-3">
        <div class="col-xl-4 col-md-12 animated fadeInRight">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <a target="_blank" href="https://drive.google.com/file/d/1v743h2lJwXProAs_SakOv7oR4-QEkoOe/view?usp=sharing" download>
                        <img class="card-img-top rounded-0" src="../../assets/images/Brochures/therma_prod_guide.jpg" alt="Dowell Windows and Doors Brochures">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Dowell ThermaLine Product Guide</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12 animated fadeInRight">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <a target="_blank" href="https://drive.google.com/file/d/10zH9lGl54aPJooMF_S_kme1HWN9Zu9Vq/view?usp=sharing" download>
                        <img class="card-img-top rounded-0" src="../../assets/images/Brochures/alum_windows_doors.jpg" alt="Dowell Windows and Doors Brochures">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Aluminium Product Guide 2016 </p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12 animated fadeInRight">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <a target="_blank" href="https://drive.google.com/file/d/174kSc32ZDQ5kR062bjINdXrdeuCl8mwG/view?usp=sharing" download>
                        <img class="card-img-top rounded-0" src="../../assets/images/Brochures/alum_tech_spec_wa.jpg" alt="Dowell Windows and Doors Brochures">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Aluminium Technical Specs.</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12 animated fadeInRight">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <a target="_blank" href="https://drive.google.com/file/d/1v3ebFQFMWOgvs4k-6r-PYFkyE3QQSSiB/view?usp=sharing" download>
                        <img class="card-img-top rounded-0" src="../../assets/images/Brochures/dowell_screens.jpg" alt="Dowell Windows and Doors Brochures">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Dowell Screens</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12 animated fadeInRight">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <a target="_blank" href="https://drive.google.com/file/d/1yGzaWKCddqRzlGUrirksMucNAMLFMwG4/view?usp=sharing" download>
                        <img class="card-img-top rounded-0" src="../../assets/images/Brochures/alum_care_instruc.jpg" alt="Dowell Windows and Doors Brochures">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Aluminium Care Instructions</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12 animated fadeInRight">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <a target="_blank" href="https://drive.google.com/file/d/1sIZy3ui05rv3jTfzfGmRWjxtF2OWNBt-/view?usp=sharing" download>
                        <img class="card-img-top rounded-0" src="../../assets/images/Brochures/customer_infosheet.jpg" alt="Dowell Windows and Doors Brochures">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Customer Information</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12 animated fadeInRight">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <a target="_blank" href="https://drive.google.com/file/d/16tw7nWBcwAAY1YPhZ5SlB2F-0IPZNjjF/view?usp=sharing" download>
                        <img class="card-img-top rounded-0" src="../../assets/images/Brochures/bushfire_code.jpg" alt="Dowell Windows and Doors Brochures">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Bush Fire Code</p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12 animated fadeInRight">
            <div class="card mt-1 border-0">
                <div class="view overlay">
                    <a target="_blank" href="https://drive.google.com/file/d/1njWEljqb9KsJiJ-phLRGbNrwHV1whBJG/view?usp=sharing" download>
                        <img class="card-img-top rounded-0" src="../../assets/images/Brochures/alum_colourchart_wa.jpg" alt="Dowell Windows and Doors Brochures">
                    </a>
                </div>
                <div class="card-body">
                    <p class="card-text" style="text-align: center;">Aluminium Colour Chart WA</p>
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
                title: 'WA Brochures'
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
            c: 'Dowell Windows and Doors WA Western Australia Brochures',
            id: 'desc'
        }],
    }
}
</script>