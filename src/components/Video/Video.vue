<template>
    <section class="video">
            <div class="ui two column centered grid">
                <div class="row z-fix">
                    <div class="column center aligned">,,
                        <div class="ui large header title-white height-auto fix-index">
                            {{$t('video.the_lorem_classroom')}}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="four wide computer only column right aligned">
                    </div>
                    <div class="eight wide computer fifteen wide mobile eight wide tablet column left aligned">
                        <img class="video-helper-left" src="../../../public/assets/Images/video_person_left.png" alt="video-helper-left">
                        <div class="video-box"></div>
                        <img class="video-person-right" src="../../../public/assets/Images/video_person_right.png" alt="video-person-right">
                    </div>
                    <div class="four wide computer only column center aligned">
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
    export default {
        name: "Video",
    }
</script>

<style>

</style>