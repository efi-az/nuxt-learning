<template>
    <div>
        <b-coin :data="coins" @response="isRes" />
    </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        let res = await $axios.get('coins?skip=0&limit=5')
        
        return { coins: res.data.coins }
    },
    methods: {
        isRes(val) {
            console.log('sdfd')
            this.$getMessage(val, 'success response')
        }
    }
}
</script>