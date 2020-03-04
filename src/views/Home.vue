<template>
<div class="animated fadeIn slow home">
    <Carousel />
    <Summary />
    <Products />
</div>
</template>

<script>
import Carousel from '../components/Home/Carousel'
import Products from '../components/Home/Products'
import Summary from '../components/Home/Summary'

export default {
    name: "home",
    components: {
        Carousel,
        Products,
        Summary
    },
    head: {
        // To use "this" in the component, it is necessary to return the object through a function
        meta: [{
            name: 'description',
            c: 'Dowell Windows and Doors - supplying energy efficient aluminium and timber framed glass windows and doors in a variety of styles including sliding glass doors, sash ...',
            id: 'desc'
        }],
    }
};
</script>
