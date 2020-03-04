<template>
<div>
    <!-- Navigation -->
    <nav id="nav" class="navbar fixed-top navbar-expand-lg fixed-top">
        <div class="container px-1">
            <router-link class="animated fadeInDown" to="/"><img src="../assets/images/Icons/dowell.png" alt="Dowell Windows and Doors"></router-link>
            <button class="navbar-light navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="animated fadeInDown navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="change nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link to="/products" class="nav-link change dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</router-link>
                        <ul class="animated fadeIn dropdown-menu multi-column columns-3 rounded-0">
                            <div class="row">
                                <div class="col-sm-4">
                                    <ul class="multi-column-dropdown">
                                        <li>
                                            <router-link class="change nav-link" to="/windows">Windows</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/slidingwindow">Sliding Windows</router-link>
                                        </li>
                                        <li>
                                            <router-link class="change nav-link" to="/awningwindow">Awning Windows</router-link>
                                        </li>
                                        <li>
                                            <router-link class="change nav-link" to="/casementwindow">Casement Windows</router-link>
                                        </li>
                                        <li>
                                            <router-link class="change nav-link" to="/doublehungwindow">Double Hung Windows</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-4">
                                    <ul class="multi-column-dropdown">
                                        <li>
                                            <router-link class="change nav-link" to="/doors">Doors</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/slidingdoor">Sliding Doors</router-link>
                                        </li>
                                        <li>
                                            <router-link class="change nav-link" to="/alfrescoslidingdoor">Alfresco Sliding Door</router-link>
                                        </li>
                                        <li>
                                            <router-link class="change nav-link" to="/bifolddoor">Bi-Fold Doors</router-link>
                                        </li>
                                        <li>
                                            <router-link class="change nav-link" to="/frenchdoor">French Doors</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-4">
                                    <ul class="multi-column-dropdown">
                                        <li>
                                            <router-link class="change nav-link" to="/warranty">Warranty & Care</router-link>
                                        </li>
                                        <li>
                                            <router-link class="change nav-link" to="/wers">WERS</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link to="/brochures" class="nav-link change dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Brochures</router-link>
                        <ul class="animated fadeIn dropdown-menu multi-column columns-2 rounded-0">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="multi-column-dropdown">
                                        <li>
                                            <router-link class="change nav-link" to="/nsw-brochures">NSW</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/sa-brochures">SA</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/qld-brochures">QLD</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="multi-column-dropdown">
                                        <li>
                                            <router-link class="change nav-link" to="/vic-act-brochures">VIC</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/wa-brochures">WA</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/tas-brochures">TAS</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="change nav-link" to="/alfrescoliving">Alfresco Living</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link to="/dowell-thermaline" class="nav-link change dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ThermaLine™</router-link>
                        <ul class="animated fadeIn dropdown-menu multi-column columns-2 rounded-0">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="multi-column-dropdown">
                                        <li>
                                            <router-link class="change nav-link" to="/thermaline-awards">Award Winning & Asthma Friendly</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/thermaline-tech">Technology & Thermal Performance</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/thermaline-window">ThermaLine™ Windows</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/thermaline-design">Understanding Energy in Home Design</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="multi-column-dropdown">
                                        <li>
                                            <router-link class="change nav-link" to="/thermaline-energy">Energy Efficient Home Design</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/thermaline-climate">Climate Zone Maps</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/thermaline-door">ThermaLine™ Doors</router-link>
                                        </li>
                                        <div class="dropdown-divider"></div>
                                        <li>
                                            <router-link class="change nav-link" to="/thermaline-specs">Specifications</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="change nav-link" to="/about">About Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="change nav-link" to="/locations">Locations</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="change nav-link" to="/dowell-latest-news">News</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>


