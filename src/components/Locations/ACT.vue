<template>
<div class="tab-pane" id="act">
    <div class="row">

        <div class="col-xl-4 col-md-6 col-s-12">
            <div class="table-responsive">
                <table class="table-borderless mt-3">
                    <thead>
                        <tr>
                            <th>Queanbeyan </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>16 Barber Street </td>
                        </tr>
                        <tr>
                            <td>Queanbeyan NSW 2620 </td>
                        </tr>
                        <tr>
                            <td>Phone: 02 6297 1711 </td>
                        </tr>
                        <tr>
                            <td>Fax: 02 6297 1112 </td>
                        </tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">act.enquiries<code>@</code>dowell.com.au</a></td>
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
            email: "mailto:act.enquiries@dowell.com.au"
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

