<template>
    <div ref="language" class="SelectLanguage ui dropdown item">
        <!-- <i :class="$store.state.currentLanguage +' flag'"></i>{{$store.state.currentLanguage}}
        <i class="icon material-icons">arrow_drop_down</i> -->
        <span class="hidden-islabeled"><i :class="$store.state.currentLanguage +' flag'"></i>{{$store.state.currentLanguage}}</span>
        <i class="icon material-icons fix-icon">public</i>
        <div class="menu">
            <template v-for="(lang, index) in $store.state.languages">
                <div class="item" :key="index" :selected="$store.state.currentLanguage === lang" @click="chooseLanguage(lang)">
                    <i :class="lang +' flag'"></i>
                    {{lang}}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    /**
     * Dropbox to select language,
     * default language **us**
     * @version 1.0.0
     */
    export default {
        name: 'SelectLanguage',
        methods: {
            /**
             * Change current language
             * @public
             */
            chooseLanguage(lang){
                var vm = this
                // this.$ga.event('Select Language', 'Update Language', `From: ${localStorage.currentLanguage} To: ${lang}`)
                localStorage.currentLanguage = lang
                vm.$store.state.currentLanguage = lang
                vm.$store.dispatch("UPDATE_CURRENT_LANGUAGE", lang)
                vm.$i18n.locale = lang
                vm.$bus.$emit("select-language")
                if( $(".ui.dropdown select").length ){
                    setTimeout(() => {
                        vm.updateDropdown()
                    }, 50)
                }
            },

            updateDropdown(){
                $(".ui.dropdown select").each((idx, select) => {
                    var select_value = []

                    var selected = $(select).find(":selected").val()
                    var options = select.options
                    for(var opt of options){
                        select_value.push({
                            text: $(opt).text(),
                            name: $(opt).text(),
                            value: $(opt).val()
                        })
                    }

                    $(select)
                        .dropdown('setup menu', {
                            values: select_value
                        })
                        .dropdown('set selected', selected)
                })
            }
        },
        created() {
            if (!localStorage.currentLanguage) {
                localStorage.currentLanguage = this.$store.state.currentLanguage
            }
        },
        mounted() {
            $( this.$refs.language ).dropdown()
        }
    }
</script>

<style lang="less" scoped>
    //Top Menu
    .ui.secondary.menu {
        .item.item-language > .SelectLanguage.ui.dropdown.item {
            margin: 0;
            color: white;
            .hidden-islabeled {
                margin-left: 4px;
                display: initial;
            }
        }
    }

    .item.item-language {
        > .SelectLanguage.ui.dropdown.item .hidden-islabeled {
            display: none;
        }
        &.show > .SelectLanguage.ui.dropdown.item .hidden-islabeled {
            display: inline-block;
            margin-top: 6px;
        }
        &.show > .SelectLanguage.ui.dropdown.item .hidden-islabeled {
            display: inline-block;
            margin-top: 6px;
        }
    }
    .item-language.show >.SelectLanguage.ui.dropdown.item {
        padding: 1.6rem;
    }
    .ui.vertical.menu .dropdown.item:not(.upward) .menu {
        top: -10%;
        width: 230px;
        border-radius: 5px;
        position: absolute;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
        &:before {
            width: 0;
            top: 33%;
            height: 0;
            content:"";
            right: 100%;
            position: absolute;
            border-top: 10px solid transparent;
            border-right: 10px solid white;
            border-bottom: 10px solid transparent;
        }
    }
    .ui.menu .ui.dropdown .menu>.item {
        padding: .6em !important;
    }
    a.item.item-language.show{
        height: 60px !important;
        max-height: 60px !important;
    }

    i.icon.material-icons{
        float: right !important;
        margin-top: 6px !important;
    }

    i.fix-icon{
        margin-top: 6px !important;
    }

    .ui.left.vertical.inverted.visible.js-side-menu.labeled.icon.sidebar.menu{
        .SelectLanguage.ui.dropdown.item{
            padding-top: 22px;
        }
    }

    .ui.left.vertical.inverted.visible.js-side-menu.sidebar.menu{
        .SelectLanguage.ui.dropdown.item{
            padding-top: 22px;
        }
        span.hidden-islabeled{
            opacity: 0 !important;
            display: none;
            margin: 0px !important;
        }
        .fix-icon{
            margin: 0px !important;
        }
        a.after-display span.hidden-islabeled{
            transition: opacity 1000ms;
            display: inline-block;
        }
        a.after-fade.after-display span.hidden-islabeled{
            opacity: 1 !important;
            transition: opacity 1000ms;
        }
    }

    .right.menu{
        .fix-icon{
            float: none !important;
            margin: 0px !important;
            margin-left: 6px !important;
            margin-top: -2px !important;
        }
    }
</style>
