<template>
<div class="container">
    <div class="row">
        <div class="animated fadeInRight col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../../assets/images/Products/Doors/photo1.jpg" alt="Dowell Windows and Doors">
        </div>
    </div>

    <h1 class="blue animated fadeInLeft mt-5">Our Doors Product Range</h1>

    <hr>

    <h3 class="blue animated fadeInLeft mt-5">Dowell Standard Doors Range</h3>

    <p class="animated fadeInLeft">Dowell are able to manufacture a range of products to suit your requirements. Noted below is the standard range we manufacture.</p>

    <div class="animated fadeInRight row mt-3">
        <div class="col-xl-4 col-md-12">
            <router-link to="/slidingdoor">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Doors/photo2.jpg" alt="Dowell Sliding Door">
                        <div class="caption">
                            <h4>Sliding</h4>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="col-xl-4 col-md-12">
            <router-link to="/alfrescoslidingdoor">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Doors/photo3.jpg" alt="Dowell Alfresco Sliding Door">
                        <div class="caption">
                            <h4>Alfresco Sliding</h4>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="col-xl-4 col-md-12">
            <router-link to="/bifolddoor">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Doors/photo4.jpg" alt="Dowell Bi-Fold Door">
                        <div class="caption">
                            <h4>Bi-Fold</h4>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="col-xl-4 col-md-12">
            <router-link to="/frenchdoor">
                <div class="card mt-3 border-0">
                    <div id="window-container" class="view overlay">
                        <img id="window-image" class="card-img-top rounded-0" src="../../assets/images/Products/Doors/photo5.jpg" alt="Dowell French Door">
                        <div class="caption">
                            <h4>French</h4>
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
                title: 'Doors'
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
            c: 'Dowell Doors Product Range',
            id: 'desc'
        }],
    }
}
</script>
