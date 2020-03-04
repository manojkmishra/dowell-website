<template>
<div class="container">
    <div class="animated fadeInRight row mt-5">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo1.jpg" alt="Dowell Windows Range">
        </div>
    </div>

    <h1 class="blue animated fadeInLeft mt-5">Our Windows Product Range</h1>

    <hr>

    <h3 class="blue animated fadeInLeft mt-5">Dowell Standard Windows Range</h3>

    <p class="animated fadeInLeft">Dowell are able to manufacture a range of products to suit your requirements. Noted below is the standard range we manufacture.</p>

    <div class="animated fadeInRight row mt-3">
        <div class="col-xl-4 col-md-12">
            <router-link to="/slidingwindow">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo2.jpg" alt="Dowell Windows Range">
                        <div class="caption">
                            <h4>Sliding</h4>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-xl-4 col-md-12">
            <router-link to="/awningwindow">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo3.jpg" alt="Dowell Windows Range">
                        <div class="caption">
                            <h4>Awning</h4>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="col-xl-4 col-md-12">
            <router-link to="/casementwindow">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo4.jpg" alt="Dowell Windows Range">
                        <div class="caption">
                            <h4>Casement</h4>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="col-xl-4 col-md-12">
            <router-link to="/doublehungwindow">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo5.jpg" alt="Dowell Windows Range">
                        <div class="caption">
                            <h4>Double Hung</h4>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="col-xl-4 col-md-12">
            <div class="card mt-3 border-0">
                <div id="window-container" class="view overlay">
                    <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo6.jpg" alt="Dowell Windows Range">
                    <div class="caption">
                        <h4>Fixed</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-4 col-md-12">
            <div class="card mt-3 border-0">
                <div id="window-container" class="view overlay">
                    <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo7.jpg" alt="Dowell Windows Range">
                    <div class="caption">
                        <h4>Fixed with Mullion</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-4 col-md-12">
            <div class="card mt-3 border-0">
                <div id="window-container" class="view overlay">
                    <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo8.jpg" alt="Dowell Windows Range">
                    <div class="caption">
                        <h4>Permavent</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-4 col-md-12">
            <div class="card mt-3 border-0">
                <div id="window-container" class="view overlay">
                    <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo9.jpg" alt="Dowell Windows Range">
                    <div class="caption">
                        <h4>Louvre</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <h3 class="blue animated fadeInLeft mt-5">Custom Windows</h3>

    <hr>

    <div class="animated fadeInRight row mt-3">
        <div class="col-xl-4 col-md-12">
            <div class="card mt-3 border-0">
                <div id="window-container" class="view overlay">
                    <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo10.jpg" alt="Dowell Windows Range">
                    <div class="caption">
                        <h4>Circle</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-12">
            <div class="card mt-3 border-0">
                <div id="window-container" class="view overlay">
                    <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo11.jpg" alt="Dowell Windows Range">
                    <div class="caption">
                        <h4>Arch</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-4 col-md-12">
            <div class="card mt-3 border-0">
                <div id="window-container" class="view overlay">
                    <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Windows/photo12.jpg" alt="Dowell Windows Range">
                    <div class="caption">
                        <h4>Rake</h4>
                    </div>
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
                title: 'Windows'
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
            c: 'Dowell Windows Product Rage',
            id: 'desc'
        }],
    }
}
</script>
