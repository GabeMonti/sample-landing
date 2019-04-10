<template>
    <section class="features">
            <div class="ui two column centered grid">
                <div class="sixteen wide mobile sixteen wide computer column center aligned">
                    <div class="ui large header title-copy">
                        {{$t('features.the_dynamics')}}
                        <span class="highlight">{{$t('features.the_dynamics_highlight')}}</span>
                    </div>
                </div>
                <div class="sixteen wide mobile sixteen wide computer column center aligned">
                    <p class="tor-comes-with-a-co ">{{$t('features.the_dynamics_text')}}</p>
                </div>
                <div class="four column computer one column computer centered row">
                    <div class=" four wide computer sixteen wide mobile four wide tablet column center aligned">
                        <div class="feature-1"></div>
                        <div class="ui medium header">{{$t('features.a_poweful_online')}}</div>
                        <p class="accept-sessions-when">{{$t('features.a_poweful_online_text')}}</p>
                        <div class="hr"></div>
                    </div>
                    <div class=" four wide computer  sixteen wide mobile four wide tablet column center aligned">
                        <div class="feature-2"></div>
                        <div class="ui medium header">{{$t('features.set_your_own')}}</div>
                        <p class="accept-sessions-when">{{$t('features.set_your_own_text')}}</p>
                        <div class="hr"></div>
                    </div>
                    <div class=" four wide computer sixteen wide mobile four wide tablet column center aligned">
                        <div class="feature-3"></div>
                        <div class="ui medium header">{{$t('features.be_your_own')}}</div>
                        <p class="accept-sessions-when">{{$t('features.be_your_own_text')}}</p>
                        <div class="hr"></div>
                    </div>
                </div>
                <div class="four column computer one column computer centered row">
                    <div class="  four wide computer sixteen wide mobile four wide tablet column center aligned">
                        <div class="feature-4"></div>
                        <div class="ui medium header">{{$t('features.get_paid_weekly')}}</div>
                        <p class="accept-sessions-when">{{$t('features.get_paid_weekly_text')}}</p>
                        <div class="hr"></div>
                    </div>
                    <div class=" four wide computer sixteen wide mobile four wide tablet column center aligned">
                        <div class="feature-5"></div>
                        <div class="ui medium header">{{$t('features.customize_your_own')}}</div>
                        <p class="accept-sessions-when">{{$t('features.customize_your_own_text')}} </p>
                        <div class="hr"></div>
                    </div>
                    <div class=" four wide computer sixteen wide mobile four wide tablet column center aligned">
                        <div class="feature-6"></div>
                        <div class="ui medium header">{{$t('features.menage_and_monitor')}}</div>
                        <p class="accept-sessions-when">{{$t('features.menage_and_monitor_text')}}</p>
                        <div class="hr"></div>
                    </div>
                </div>
            </div>
</section>
</template>

<script>
    export default {
        name: "Features",
    }
</script>

<style>

</style>