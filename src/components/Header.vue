<template>
    <div class="header">
        <!-- <img src="" alt=""> -->
        <mt-search v-model="searchWord" cancel-text="取消" placeholder="搜索"></mt-search>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchWord: ''
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>