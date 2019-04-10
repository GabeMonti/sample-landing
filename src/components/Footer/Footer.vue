<template>
    <section class="footer-wrapper">
        <section class="pre-footer">
            <div class="ui centered grid">
                <div class=" centered row">
                    <div class="seven wide computer sixteen wide mobile column right aligned">
                        <div class="lets-chat">
                            <div class="ui large header title-white height-auto fix-index blocked">
                                {{$t('pre_footer.lets_chat')}}
                            </div>
                            <p class="interested-in-how-2-t inline">
                                {{$t('pre_footer.lets_chat_text')}}

                            </p>
                        </div>
                        <div class="row">
                            <img src="../../../public/assets/Images/email_airplane.png" alt="" class="airplane">
                        </div>
                    </div>
                    <div class="nine wide computer sixteen wide mobile column left aligned fix-no-padding">
                        <div class="rectangle-contact-us">
                            <form action="">
                                <div class="row">
                                    <label for="name" class="name-label">{{$t('general.form.first_name')}}</label>
                                    <input type="text" name="name" id="name" :placeholder="$t('general.form.first_name')">
                                </div>
                                <div class="row">
                                    <label for="email" class="email-label">{{$t('general.form.email')}}</label>
                                    <input type="text" name="email" id="email" :placeholder=" $t('general.form.email_placeholder') ">
                                </div>
                                <div class="row relative">
                                    <button class="skew-button"><span>{{$t('general.buttons.send')}}</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="footer">
            <div class="ui grid">
                <!--first row-->
                <div class="row margin-bottom">
                    <div class="two wide computer column"></div>
                    <div class="six wide computer column">
                        <div class="ui grid">
                            <div class="three wide computer column">
                                <ul class="no-points">
                                    <li class="link-header">{{$t('general.company_name')}}</li>
                                    <li class="link">{{$t('footer.about')}}</li>
                                    <li class="link">{{$t('footer.partnerships')}}</li>
                                    <li class="link">{{$t('footer.we_are_hiring')}}</li>
                                </ul>
                            </div>
                            <div class="three wide computer column">
                                <ul class="no-points">
                                    <li class="link-header">{{$t('footer.learning')}}</li>
                                    <li class="link">{{$t('footer.catalog')}}</li>
                                    <li class="link">{{$t('footer.events')}}</li>
                                    <li class="link">{{$t('footer.talks')}}</li>
                                </ul>
                            </div>
                            <div class="three wide computer column">
                                <ul class="no-points">
                                    <li class="link-header">{{$t('footer.resources')}}</li>
                                    <li class="link">{{$t('footer.forums')}}</li>
                                    <li class="link">{{$t('footer.help')}}</li>
                                    <li class="link">{{$t('footer.blog')}}</li>
                                </ul>
                            </div>
                            <div class="three wide computer column">
                                <ul class="no-points">
                                    <li class="link-header">{{$t('footer.privacy')}}</li>
                                    <li class="link">{{$t('footer.legal_notice')}}</li>
                                    <li class="link">{{$t('footer.terms')}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="six wide computer column right aligned">
                        <form action="" class="newletter">
                            <label for="mail-newsletter" class="mail-newsletter-label">{{$t('footer.subscribe')}}</label>
                            <input type="text" name="mail-newsletter" id="mail-newsletter" :placeholder="$t('general.form.email')">
                            <button class="surface skew-button">
                                <span class="button-text"> {{$t('general.buttons.send')}} </span>
                            </button>
                        </form>
                    </div>
                    <div class="two wide computer column"></div>
                </div>
                <!--second row-->
                <div class="row fix-row-table">
                    <div class="two wide computer only column"></div>
                    <div class="twelve wide computer  column">
                        <p class="small-text left">{{$t('footer.made_with_love')}}</p>
                        <p class="small-text right">{{$t('general.company_name')}} {{$t('footer.rights_reserved')}} 2018</p>
                    </div>
                    <div class="two wide computer only column"></div>
                </div>
                <img src="../../../public/assets/Images/lorem_teacher.png" alt="lorem_teacher" class="img-footer-2">
                <div class="lorem-teacher"></div>

            </div>
        </section>
    </section>
</template>

<script>
    export default {
        name: "Footer",
    }
</script>

<style>

</style>