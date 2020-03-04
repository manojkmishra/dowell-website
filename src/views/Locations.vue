<template>
<div class="about container animated fadeIn">

    <div class="row">
        <div class="col-xl-12 col-md-12">
            <img class="card-img-top rounded-0" src="../assets/images/Locations/photo1.jpg" alt="Dowell Windows and Doors Locations">
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-md-12">
            <div class="card border-0">
                <div class="grey card-header p-2 border-0 rounded-0 ">
                    <ul class="nav nav-pills">
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0 active " href="#vic" data-toggle="tab">VIC</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#tas" data-toggle="tab">TAS</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#wa" data-toggle="tab">WA</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#nsw" data-toggle="tab">NSW</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#act" data-toggle="tab">ACT</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#qld" data-toggle="tab">QLD</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#sa" data-toggle="tab">SA</a></li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="tab-content">
                        <VIC />
                        <TAS />
                        <WA />
                        <NSW />
                        <ACT />
                        <QLD />
                        <SA />
                        <TAS />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VIC from '../components/Locations/VIC'
import TAS from '../components/Locations/TAS'
import WA from '../components/Locations/WA'
import NSW from '../components/Locations/NSW'
import ACT from '../components/Locations/ACT'
import QLD from '../components/Locations/QLD'
import SA from '../components/Locations/SA'

export default {
    name: "home",
    components: {
        VIC,
        TAS,
        WA,
        NSW,
        ACT,
        QLD,
        SA
    },
    data: function () {
        return {
            infoPage: {
                title: 'Locations'
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
            c: 'Dowell Windows and Doors Office and Factory Locations and Contact Information',
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
