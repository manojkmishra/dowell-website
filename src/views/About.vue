<template>
<div class="about container">
    <h1 class="blue animated fadeInLeft">About Dowell</h1>
    <div class="row">
        <div class="animated fadeInLeft col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <img id="window-image" class="card-img-top" src="../assets/images/News/about.jpg" alt="Dowell Windows and Doors">
        </div>
        <div class="animated fadeInRight col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div class="text-justify">
                <span>Dowell has been involved in the fabrication and supply of windows and doors to the Australian residential
                    housing market since 1860 and is now a leading supplier of aluminium windows and doors to the Australian
                    housing market. Dowell is proud to be a privately owned Australian company with 9 manufacturing locations
                    across Australia, employing over 600 people. Dowell has a strong reputation for product quality and service
                    and strives to continually evolve and innovate our product range to meet our customer needs, designing
                    products to suit Australian lifestyles and climatic conditions.
                </span>
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
                title: 'About Us'
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
            c: 'Dowell Windows and Doors History and About Page',
            id: 'desc'
        }],
    }
}
</script>


