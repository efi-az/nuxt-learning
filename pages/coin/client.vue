<template>
    <div>
        <b-coin :data="coins" @response="isRes" />
    </div>
</template>

<script>
export default {
    data: () => ({
        coins: []
    }),
    mounted() {
        this.getCoin();
    },
    methods: {
        async getCoin() {
            try {
                let res = await this.$axios.get('coins?skip=0&limit=5')
                this.coins = res.data.coins
            } catch(e) {
                console.log(e)
            }
        },
        isRes(val) {
            this.$getMessage(val, 'success response')
        }
    }
}
</script>