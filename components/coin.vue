<template>
    <div>
        <div class="row w-100">
            <div class="col-md-3 d-flex flex-column align-items-center justify-content-center p-5" v-for="(coin, index) in data" :key="index">
                <img :src="coin.icon" :alt="coin.name" width="60" height="60">
                <div>{{ coin.name }}</div>
                <div>{{ coin.symbol }}</div>
                <div>{{ $vCurrency(coin.price, { symbol: '$', thousandsSeparator: ',', symbolPosition: 'before', symbolSpacing: false, numberDecimal: 2 }) }}</div>
                <div v-currency="coin.price"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true,
            default: []
        }
    },
    watch: {
        data(val) {
            if (val.length) this.$emit('response', 'success')
        }
    }
}
</script>