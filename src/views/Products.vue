<template>
<div class="about container">

    <div class="row">
        <div class="animated fadeInRight col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../assets/images/Products/photo1.jpg" alt="Dowell Windows and Doors Product Range">
        </div>
    </div>

    <h1 class="blue animated fadeInLeft mt-5">Our Product Range</h1>
    <hr>
    <p class="animated fadeInLeft">We are able to manufacture a range of products to suit your requirements.</p>
    <div class="animated fadeInUp row mt-3">
        <div class="col-xl-4 col-md-12">
            <router-link to="/windows">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../assets/images/Products/window.png" alt="Dowell Windows and Doors Product Range">
                        <div class="caption">
                            <h3 class="white">Windows</h3>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-xl-4 col-md-12">
            <router-link to="/doors">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../assets/images/Products/door.jpg" alt="Dowell Windows and Doors Product Range">
                        <div class="caption">
                            <h3 class="white">Doors</h3>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="col-xl-4 col-md-12">
            <router-link to="/dowell-thermaline">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../assets/images/Products/thermaline.png" alt="Dowell Windows and Doors Product Range">
                        <div class="caption">
                            <h3 class="white">ThermaLine™</h3>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>

    <h2 class="blue animated fadeInLeft mt-5">More</h2>
    <hr>
    <div class="animated fadeInUp row mt-3">
        <div class="col-xl-6 col-md-12">
            <router-link to="/warranty">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../assets/images/Products/warranty.png" alt="Dowell Windows and Doors Product Range">
                        <div class="caption">
                            <h3 class="white">Warranty & Care</h3>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-xl-6 col-md-12">
            <router-link to="/wers">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../assets/images/Products/WERS.png" alt="Dowell Windows and Doors Product Range">
                        <div class="caption">
                            <h3 class="white">WERS</h3>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            infoPage: {
                title: 'Products'
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
            c: 'Dowell Windows and Doors Product Range',
            id: 'desc'
        }],
    }
}
</script>
