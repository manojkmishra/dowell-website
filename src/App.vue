<template>
<div id="app">
    <Navbar />
    <router-view />
    <go-top :size="70" :right="120" :bottom="80" bg-color="#0060AF" box-shadow="0 0 0 transparent" outline="none">
    </go-top>
    <Footer />
</div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GoTop from '@inotom/vue-go-top'

export default {
    components: {
        Navbar,
        Footer,
        GoTop
    }
}
</script>


