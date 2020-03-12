<template>
<div>
    <footer class="footer mt-5">
        <div class="container bottom_border">
            <div class="row">

                <div class="col-sm-4 col-md  col-6 col">
                    <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
                    <!--headin5_amrc-->
                    <ul class="footer_ul_amrc">
                        <li>
                            <router-link to="/dowell-thermaline">Thermaline</router-link>
                        </li>
                        <li>
                            <router-link to="/windows">Windows</router-link>
                        </li>
                        <li>
                            <router-link to="/doors">Doors</router-link>
                        </li>
                        <li >
                         
                           <!-- <router-link to="/locations"> -->
                            <a href="#" data-toggle="modal" data-target=".bannerformmodal">Contact Us</a>
                           <!-- </router-link> -->
                                
                               
                        </li>
                    </ul>
                    <!--footer_ul_amrc ends here-->
                </div>

                <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                    <h5 class="headin5_amrc col_white_amrc pt2">About Dowell</h5>
                    <!--headin5_amrc-->
                    <p class="mb10">For generations, the Dowell name has been synonymous with creating innovative
                        window and door solutions in Australia. We manufacture to your specification and
                        configuration, for fast delivery to most states throughout Australia.
                    </p>
                </div>

                <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                    <h5 class="headin5_amrc col_white_amrc pt2">Timber Windows and Doors</h5>
                    <!--headin5_amrc-->
                    <p class="mb10">Dowell Timber Windows and Doors have a natural elegance and thermal insulation 
                        capability.For more information on product details and pricing, contact us today.
                    </p>
                </div>

            </div>
        </div>

        <div class="container">
            <p class="text-center">&copy; Copyright 2020 Dowell Windows Pty Ltd</p>
        </div>
       
    </footer>
    <contactus/>
</div>
</template>
<script>
import contactus from './Locations/ContactUsold'
export default {
    components:{contactus}
    
}
</script>
