<template>
    <main>
        <Header></Header>
        <section class="intro first-fold">
            <div class="container">
                <div class="content">
                    <div class="ui grid">
                        <div class="six wide computer six wide tablet sixteen wide mobile column">
                            <div class="ui sizer vertical segment">
                                <div class="logo"></div>
                                <div class="ui large header title-white">{{$t('first_fold.the_online_lorem')}}</div>
                                <p class="description-white">{{$t('first_fold.the_online_lorem_text')}}</p>
                                <button class="skew-button longtail-button"><span>{{$t('general.buttons.become_a_lorem')}}</span></button>
                            </div>
                        </div>
                        <div class="ten wide computer ten wide tablet sixteen wide mobile column">
                            <div class="masterhead"></div>
                        </div>
                    </div>
                </div>
                <div class="rotated-block"></div>
            </div>
        </section>
        <Features></Features>
        <Steps></Steps>
        <Video></Video>
        <section class="static-block"></section>
        <section class="second-container">
            <div class="static-block2"></div>
        </section>
        <Footer></Footer>
    </main>

</template>

<script>
    import Header from '@/components/Header/Header'
    import Features from '@/components/Features/Features'
    import Steps from '@/components/Steps/Steps'
    import Video from '@/components/Video/Video'
    import Footer from '@/components/Footer/Footer'

    export default {
        name: "Longtail",
        components: {
            Header,
            Features,
            Steps,
            Video,
            Footer,
        },
    }
</script>

<style>

</style>