<template>
    <section class="ui grid">
        <!--step #1-->
        <div class="computer only row">
            <div class="seven wide computer column right aligned">
                <div class="rough-ball-1"></div>
            </div>
            <div class="two wide computer column center aligned">
                <div class="rectangle">
                    <div class="time-marker"></div>
                </div>
                <div class="time-marker-filled"></div>
            </div>
            <div class="seven wide computer column left aligned">
                <div class="bubble arrow-right">
                    <div class="ui large header my-purple">{{$t('steps.register_as_a_lorem')}}</div>
                    <p>{{$t('steps.register_as_a_lorem_text')}}</p>
                </div>
            </div>
        </div>
        <!--step #2-->
        <div class="computer only row">
            <div class="seven wide computer column right aligned">
                <div class="bubble arrow-left">
                    <div class="ui large header my-purple left aligned">{{$t('steps.add_your_school')}}</div>
                    <p class="ui left aligned">{{$t('steps.add_your_school_text')}}</p>
                </div>
            </div>
            <div class="two wide computer column center aligned">
                <div class="rectangle">
                    <div class="time-marker"></div>
                </div>
                <div class="time-marker-filled"></div>
            </div>
            <div class="seven wide computer column left aligned">
                <div class="rough-ball-2"></div>
            </div>
        </div>
        <!--step #3-->
        <div class="computer only row">
            <div class="seven wide computer column right aligned">
                <div class="rough-ball-3"></div>
            </div>
            <div class="two wide computer column center aligned">
                <div class="rectangle">
                    <div class="time-marker"></div>
                </div>
                <div class="time-marker-filled"></div>
            </div>
            <div class="seven wide computer column left aligned">
                <div class="bubble arrow-right">
                    <div class="ui large header my-purple">{{$t('steps.set_your_schedule')}}</div>
                    <p>{{$t('steps.set_your_schedule_text')}}</p>
                </div>
            </div>
        </div>
        <!--step #4-->
        <div class="computer only row">
            <div class="seven wide computer column right aligned">
                <div class="bubble arrow-left">
                    <div class="ui large header my-purple left aligned">{{$t('steps.start_lorem')}}</div>
                    <p class="ui left aligned">{{$t('steps.start_lorem_text')}}</p>
                </div>
            </div>
            <div class="two wide computer column center aligned">
                <div class="rectangle">
                    <div class="time-marker"></div>
                </div>
                <div class="time-marker-filled"></div>
            </div>
            <div class="seven wide computer column left aligned">
                <div class="rough-ball-4"></div>
            </div>
        </div>
        <!--step #5-->
        <div class="computer only row">
            <div class="seven wide computer column right aligned">
                <div class="rough-ball-5"></div>
            </div>
            <div class="two wide computer column center aligned">
                <div class="rectangle">
                    <div class="time-marker"></div>
                </div>
                <div class="time-marker-filled"></div>
            </div>
            <div class="seven wide computer column left aligned">
                <div class="bubble arrow-right">
                    <div class="ui large header my-purple">{{$t('steps.get_schedule_payments')}}</div>
                    <p>{{$t('steps.get_schedule_payments_text')}}</p>
                </div>
            </div>
        </div>
        <!--step #6-->
        <div class="computer only row">
            <div class="seven wide computer column right aligned">
            </div>
            <div class="two wide computer column center aligned">
                <div class="arrow-down"></div>
            </div>
            <div class="seven wide computer column left aligned">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "StepsItemsComputer",
    }
</script>

<style>

</style>