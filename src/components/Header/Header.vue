<template>
    <section class="header">
        <a class="item item-language">
            <SelectLanguage></SelectLanguage>
        </a>
    </section>
</template>

<script>
    import SelectLanguage from '@/components/SelectLanguage/SelectLanguage'

    export default {
        name: "Header",
        components: {
            SelectLanguage
        },
    }
</script>

<style scoped lang="less">
    section.header{
        position: fixed;
        z-index: 10;
        width: 100vw;
    }
</style>