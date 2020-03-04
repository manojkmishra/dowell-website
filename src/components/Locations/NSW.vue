<template>
<div class="tab-pane" id="nsw">
    <div class="row">

        <div class="col-xl-4 col-md-6 col-s-12">
            <div class="table-responsive">
                <table class="table-borderless mt-3">
                    <thead>
                        <tr>
                            <th>Head Office (Sydney) Smithfield</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>312 Woodpark Road </td>
                        </tr>
                        <tr>
                            <td>Smithfield NSW 2164  </td>
                        </tr>
                        <tr>
                            <td>Phone: 02 9757 0555 </td>
                        </tr>
                        <tr>
                            <td>Fax: 02 9604 9440  </td>
                        </tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">nsw.enquiries<code>@</code>dowell.com.au</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="col-xl-4 col-md-6 col-s-12">
            <div class="table-responsive">
                <table class="table-borderless mt-3">
                    <thead>
                        <tr>
                            <th>Nowra </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>14 Bellevue Street</td>
                        </tr>
                        <tr>
                            <td>South Nowra NSW 2540 </td>
                        </tr>
                        <tr>
                            <td>Phone: 02 4421 7277 </td>
                        </tr>
                        <tr>
                            <td>Fax: 02 4421 7329 </td>
                        </tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">nsw.enquiries<code>@</code>dowell.com.au</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="col-xl-4 col-md-6 col-s-12">
            <div class="table-responsive">
                <table class="table-borderless mt-3">
                    <thead>
                        <tr>
                            <th>Beresfield (Newcastle) </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Unit 2, 4 Birraba Avenue</td>
                        </tr>
                        <tr>
                            <td>Beresfield NSW 2322 </td>
                        </tr>
                        <tr>
                            <td>Phone: 02 4047 9953 </td>
                        </tr>
                        <tr>
                            <td>Phone: 1300 882 188 </td>
                        </tr>
                        <tr>
                            <td>Fax: 02 4047 9950</td>
                        </tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">nsw.enquiries<code>@</code>dowell.com.au</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            email: "mailto:nsw.enquiries@dowell.com.au"
        }
    }
}
</script>

<style scoped>
.email {
    text-decoration: none;
    color: black;
}
</style>



