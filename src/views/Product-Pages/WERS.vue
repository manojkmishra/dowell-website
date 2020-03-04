<template>
<div class="about animated fadeIn container">
    <div class="animated fadeInLeft row">
        <div class="col-xl-12 col-md-12 col-s-12">
            <h1 class="blue thick h1-warr">About WERS</h1>
            <h4 class="blue">Introduction</h4>
            <hr>
        </div>

        <div class="col-xl-12 col-md-12 col-s-12">
            <p style="color:red; font-weight: 700;">The Window Energy Rating Scheme rates whole of window product energy efficiency performance.</p>
            <P class="p-alfresco">The Window Energy Rating Scheme enables windows to be rated and labeled for their annual energy impact on a whole house, in any climate of Australia. A New Zealand variant of WERS, the 'Window Efficiency Rating Scheme', is also available. To participate in WERS, window makers must obtain energy ratings for their products from a rating organisation that is accredited by the AFRC (Australian Fenestration Rating Council)</P>
            <P class="p-alfresco">The Window Energy Rating Scheme is managed by the Australian Window Association (AWA). WERS is independent of any one manufacturer and acts as a fair, rigorous and credible system for testing performance claims. WERS-rated windows must meet all relevant Australian standards. The scheme forms part of the quality assurance that smart manufacturers offer their customers. It is all about certified performance.</P>
            <P class="p-alfresco">To realise their full potential, WERS ratings are designed to 'plug in' to NatHERS, Australia's Nationwide House Energy Rating Scheme accredited software. Similarly, the FirstRate house energy rating software from the Sustainable Energy Authority of Victoria will accept data for 'real' windows. This enables designers to 'kick the tyres' of different windows during a rating before final selection is made.</P>
            <h4 class="blue">Why You Should Choose Energy Rated Windows</h4>
            <P class="p-alfresco">Energy Rating for windows is here to stay. The federal government's Australian Greenhouse Office helped to underwrite WERS as part of its commitment to improving energy efficiency and reducing greenhouse gas emissions from the built environment. Home resale value, comfort and amenity are improved by the use of high-performance windows. We have moved from an industry traditionally considered as providing a commodity building material to be sold on price alone into offering true consumer goods viewed as performance appliances for energy, noise and security. WERS conforms to the alternative solution path for energy efficiency within the Building Code of Australia.</P>
            <h4 class="blue">How Custom Energy Ratings Are Produced</h4>
            <P class="p-alfresco">The information needed to generate a WERS rating is furnished on a commercial-in-confidence basis to the rating agency by the manufacturer. This takes the form of drawings, computer CAD files and material specifications for the window components.</P>
            <P class="p-alfresco">Most windows can be rated entirely by a two-stage process of computer simulation. This is the preferred and most economical option. The computer modelling software is the same as that used by the U.S. National Fenestration Rating Council (NFRC). It has been thoroughly validated against laboratory tests in all climates, hot and cold. WERS is truly international in its heritage and draws on over 100 person-years of research and development in 15 countries over the last decade. Occasionally, unusual or complex products may need to be measured by physical testing to establish their basic thermal behaviour. After initial modelling or testing, a second stage of computer simulation follows using NatHERS, from which the final WERS rating is generated.</P>
            <h4 class="blue">History</h4>
            <P class="p-alfresco">The technical basis of the Window Energy Rating Scheme was established in 1995 under contract by Unisearch Ltd at the University of New South Wales. The foundation work was carried out by Dr. Peter Lyons and PC Thomas in the Solarch group of the UNSW Faculty of the Built Environment. Software assistance and the interface to the Nationwide House Energy Rating Scheme (NatHERS) was provided by CSIRO Division of Building Construction and Engineering. Funding was provided by the then Residential Window Association, the then Flat Glass Association of Australia and the research arm of Pacific Power.</P>
            <P style="color:red; font-weight: 700;"><a href="http://werscpd.net.barberry.arvixe.com/table.aspx?Manufacturer=DOWELL">Dowell WERS Rating Link</a></P>
            <p class="p-alfresco">(reference http://www.wers.net/werscontent/about-wers)</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            infoPage: {
                title: 'WERS'
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
            c: 'Dowell Windows and Doors WERS',
            id: 'desc'
        }],
    }
}
</script>


