<template>
<div class="tab-pane" id="wa">
    <div class="row">
        <div class="col-xl-4 col-md-6 col-s-12">
            <div class="table-responsive">
                <table class="table-borderless mt-3">
                    <thead>
                        <tr>
                            <th>Head Office (Perth) Bassendean </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10 Jackson Street </td>
                        </tr>
                        <tr>
                            <td>Bassendean WA 6054 </td>
                        </tr>
                        <tr>
                            <td>Phone: 08 9476 8100 </td>
                        </tr>
                        <tr>
                            <td><a class="email" v-bind:href="email">wa.enquiries<code>@</code>dowell.com.au</a></td>
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
            email: "mailto:wa.enquiries@dowell.com.au"
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

