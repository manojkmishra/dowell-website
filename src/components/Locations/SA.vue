<template>
<div class="tab-pane" id="sa">
    <div class="row">

        <div class="col-xl-4 col-md-6 col-s-12">
            <div class="table-responsive">
                <table class="table-borderless mt-3">
                    <thead>
                        <tr>
                            <th>Head Office (Adelaide) Edinburgh Parks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>17-21 Woomera Avenue </td>
                        </tr>
                        <tr>
                            <td>Edinburgh Parks SA 5111</td>
                        </tr>
                        <tr>
                            <td>Phone: 08 8282 4200</td>
                        </tr>
                        <tr>
                            <td>Fax: 08 8287 6056 </td>
                        </tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">sa.enquiries<code>@</code>dowell.com.au</a></td>
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
                            <th>Lonsdale </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Unit 10/4 Aldenhoven Road </td>
                        </tr>
                        <tr>
                            <td>Lonsdale SA 5160 </td>
                        </tr>
                        <tr>
                            <td>Phone: 08 8326 6781 </td>
                        </tr>
                        <tr>
                            <td>Fax: 08 8384 6271</td>
                        </tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">sa.enquiries<code>@</code>dowell.com.au</a></td>
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
            email: "mailto:sa.enquiries@dowell.com.au"
        }
    }
}
</script>

<style scoped>
.email {   
    color:#0060af;
    font-size: 14px;
}
.email:hover {
color: rgb(124, 124, 196);
 text-decoration: underline;
}
.table-borderless{
    font-size:15px;
        border-collapse: separate;
    margin-bottom: 25px;
    width: 100%;
}
</style>
