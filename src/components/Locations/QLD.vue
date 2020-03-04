<template>
<div class="tab-pane" id="qld">
    <div class="row">

        <div class="col-xl-4 col-md-6 col-s-12">
            <div class="table-responsive">
                <table class="table-borderless mt-3">
                    <thead>
                        <tr>
                            <th>Head Office (Brisbane) Geebung </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>67 Robinson Road </td>
                        </tr>
                        <tr>
                            <td>Geebung QLD 4034 </td>
                        </tr>
                        <tr>
                            <td>Phone: 1300 882 188</td>
                        </tr>
                        <tr>
                            <td>Fax: 07 3265 2657</td>
                        </tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">qld.enquiries<code>@</code>dowell.com.au</a></td>
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
                            <th>Sunshine Coast </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3/33 Premier Circuit</td>
                        </tr>
                        <tr>
                            <td>Warana QLD 4575</td>
                        </tr>
                        <tr>
                            <td>Phone: 1300 882 188 </td>
                        </tr>
                        <tr>
                            <td>Fax: 07 3265 2657 </td>
                        </tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">qld.enquiries<code>@</code>dowell.com.au</a></td>
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
            email: "mailto:qld.enquiries@dowell.com.au"
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



