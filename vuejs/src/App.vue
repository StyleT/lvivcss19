<template>
    <div id="app">

        <vaadin-accordion>

            <vaadin-accordion-panel>
                <div slot="summary">Tabs</div>

                <button v-on:click="addTab">Add tab</button>
                <p>
                    Selected tab: {{selected + 1}}
                </p>

                <vaadin-tabs v-bind:selected="selected" v-on:selected-changed="tabChanged">
                    <vaadin-tab v-bind:key="v.name" v-for="v in tabs">{{v.name}}</vaadin-tab>
                </vaadin-tabs>

            </vaadin-accordion-panel>

            <vaadin-accordion-panel>
                <div slot="summary">Vue starter</div>

                <img alt="Vue logo" src="./assets/logo.png">
                <HelloWorld msg="Welcome to Your Vue.js App"/>

            </vaadin-accordion-panel>
        </vaadin-accordion>




    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    import '@vaadin/vaadin-accordion';
    import '@vaadin/vaadin-tabs';

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        data: function () {
            return {
                selected: 1,
                tabs: [
                    {name: 'Tab one'},
                    {name: 'Tab two'},
                    {name: 'Tab three'},
                ],
            };
        },
        methods: {
            tabChanged: function (e) {
                this.selected = e.detail.value;
            },
            addTab(e) {
                e.preventDefault();

                this.tabs = this.tabs.concat([{name: `Tab ${this.tabs.length + 1}`}]);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        padding: 50px 20px;
    }
</style>
