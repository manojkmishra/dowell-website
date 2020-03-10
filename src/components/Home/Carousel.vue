<template>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li> 
        <li data-target="#myCarousel" data-slide-to="4"></li>
     <li data-target="#myCarousel" data-slide-to="5"></li>
      <li data-target="#myCarousel" data-slide-to="6"></li>
     <!--     <li data-target="#myCarousel" data-slide-to="7"></li>
        <li data-target="#myCarousel" data-slide-to="8"></li>
        <li data-target="#myCarousel" data-slide-to="9"></li> -->
    </ol>
    <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
            <img class="third-slide" src="../../assets/images/Carousel/160yrbanner.jpg" alt="Dowell Windows and Doors">
        </div>
        <div class="carousel-item ">
            <img class="third-slide" src="../../assets/images/Carousel/slide1.jpg" alt="Dowell Windows and Doors">
            <div class="container">
                <div class="carousel-caption text-left">
                    <div class="animated fadeInRight slow therma col-xl-4 col-md-4">
                        <h2>Beautifully designed</h2>
                        <h3>Windows & Doors</h3>
                        <p>
                            <router-link class="more btn btn-lg btn-primary border-0 rounded-0" to="/products" role="button">View</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <img class="third-slide" src="../../assets/images/Carousel/slide2.jpg" alt="Dowell Windows and Doors">
            <div class="container">
                <div class="carousel-caption text-left">
                    <div class="animated fadeInRight slow therma col-xl-4 col-md-4">
                        <h2>Our Builders Know Best</h2>
                        <p>You'll be happy to know that when it comes to the recommendation and installation of your windows and doors in your
                            new home, our builders know best.</p>
                    </div>
                </div>
            </div>
        </div>
     <!--   <div class="carousel-item">
            <img class="third-slide" src="../../assets/images/Carousel/slide3.jpg" alt="Dowell Windows and Doors">
            <div class="container">
                <div class="carousel-caption text-left">
                    <div class="animated fadeInRight slow therma col-xl-4 col-md-4">
                        <h2>ThermaLine™</h2>
                        <h3>Product of the Year</h3>
                        <p>The 2012 HIA GreenSmart Product of the Year has been awarded to Dowell Windows for their ThermaLine Windows range.</p>
                        <p>
                            <router-link class="more btn btn-lg btn-primary border-0 rounded-0" to="/dowell-thermaline" role="button">More</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="carousel-item">
            <img class="third-slide" src="../../assets/images/Carousel/slide4.jpg" alt="Dowell Windows and Doors">
            <div class="container">
                <div class="carousel-caption text-left">
                    <div class="animated fadeInRight slow therma col-xl-4 col-md-4">
                        <h2>ThermaLine™</h2>
                        <h3>Sliding Door</h3>
                        <p>Yes, we're taking the lead with our Dowell ThermaLine™ range of energy efficient, award winning and Asthma friendly
                            aluminium windows and doors.</p>
                        <p>
                            <router-link class="more btn btn-lg btn-primary border-0 rounded-0" to="/dowell-thermaline" role="button">More</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      <!--  <div class="carousel-item">
            <img class="third-slide" src="../../assets/images/Carousel/slide5.jpg" alt="Dowell Windows and Doors">
            <div class="container">
                <div class="carousel-caption text-left">
                    <div class="animated fadeInRight slow therma col-xl-4 col-md-4">
                        <h2>As Seen On Healthy Homes</h2>
                        <p>This season final of Healthy Homes, Dani and Walt feature the award winning and National Asthma Council approved
                            Dowell ThermaLine™ range of windows and doors</p>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="carousel-item">
            <img class="third-slide" src="../../assets/images/Carousel/slide6.jpg" alt="Dowell Windows and Doors">
        </div>

        <div class="carousel-item">
            <img class="third-slide" src="../../assets/images/Carousel/beresfield.jpg" alt="Dowell Windows and Doors">
        </div>

        <div class="carousel-item">
            <img class="third-slide" src="../../assets/images/Carousel/geebung.jpg" alt="Dowell Windows and Doors">
        </div>



     <!--   <div class="carousel-item">
            <img class="third-slide" src="../../assets/images/Carousel/slickers.jpg" alt="Dowell Windows and Doors">
            <div class="container">
                <div class="carousel-caption text-left">
                    <div class="animated fadeInRight slow therma col-xl-4 col-md-4">
                        <h2>CITY SLICKERS APPEAL</h2>
                        <p>Dowell ‘chips-in’ to support our farmers in times of need.</p>
                        <p>
                            <router-link class="more btn btn-lg btn-primary border-0 rounded-0" to="/news" role="button">More</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="carousel-item">
            <img class="third-slide" src="../../assets/images/Carousel/slide10.jpg" alt="Dowell Windows and Doors">
        </div> -->
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
</template>

<script>
export default {
    name: "carousel",
}
</script>
<style scoped>
@media(min-width:768px) {
    .third-slide{
    margin: 0 auto;   
    padding-top:50px;
    }
}
</style>

