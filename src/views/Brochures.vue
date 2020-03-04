<template>
<div class="about container">
     <h1 class="blue animated fadeIn">Dowell Brochures</h1>
    <div class="row mt-3">
        <div class="col-md-12">
            <div class="card border-0">
                <div class="grey card-header p-2 border-0 rounded-0 ">
                    <ul class="nav nav-pills">
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0 active " href="#vic" data-toggle="tab">VIC & ACT</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#tas" data-toggle="tab">TAS</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#wa" data-toggle="tab">WA</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#nsw" data-toggle="tab">NSW</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#qld" data-toggle="tab">QLD</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#sa" data-toggle="tab">SA</a></li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="tab-content">
                        <VIC/>
                        <TAS/>
                        <WA />
                        <NSW />
                        <QLD />
                        <SA />
                        <TAS/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VIC from '../components/Brochures/VIC'
import TAS from '../components/Brochures/TAS'
import WA from '../components/Brochures/WA'
import NSW from '../components/Brochures/NSW'
import QLD from '../components/Brochures/QLD'
import SA from '../components/Brochures/SA'

export default {
    name: "home",
    components: {
        VIC,
        TAS,
        WA,
        NSW,
        QLD,
        SA
    },
    data: function () {
        return {
            infoPage: {
                title: 'Brochures'
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
            c: 'Dowell Windows and Doors Brochures',
            id: 'desc'
        }],
    }
};
</script>

<style scoped>
.nav-text {
    font-size: 14px;
}

.grey {
    background-color: #EBEBEB;
}

.black {
    color: black;
}

.tab-pane.active {
    animation: fadeIn ease 3s;
    -webkit-animation: fadeIn ease 3s;
    -moz-animation: fadeIn ease 3s;
    -o-animation: fadeIn ease 3s;
    -ms-animation: fadeIn ease 3s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-moz-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-o-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-ms-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
