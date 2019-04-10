<template>
    <section class="steps-wrap">
            <div class="ui grid steps">
                <div class="sixteen wide computer  column center aligned">
                    <div class="row">
                        <div class="ui large header title-white fix-auto"> {{$t('steps.how_it_works')}}</div>
                    </div>
                    <p class="using-2-tor-is-easy">{{$t('steps.using_lorem')}}</p>
                </div>
                <StepsItemsComputer></StepsItemsComputer>
                <StepsItemsTablet></StepsItemsTablet>
                <StepsItemsMobile></StepsItemsMobile>
            </div>
            <div class="odd-end"></div>
</section>
</template>

<script>
    import StepsItemsComputer from '@/components/Steps/components/StepsItemsComputer'
    import StepsItemsTablet from '@/components/Steps/components/StepsItemsTablet'
    import StepsItemsMobile from '@/components/Steps/components/StepsItemsMobile'

    export default {
        name: "Steps",
        components: {
            StepsItemsComputer,
            StepsItemsTablet,
            StepsItemsMobile,
        },
    }
</script>

<style>

</style>