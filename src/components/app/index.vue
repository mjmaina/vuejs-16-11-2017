<script>
    export default {
        data() {

            return {
                name: '',
            }

        },
        computed: {
            finalName() {
                return (this.name).toLowerCase();
            }
        },

        watch: {
            name: {
                handler: function ()
                {
                    alert("Name has changed");
                }
            },
            finalName: {
                handler: function ()
                {
                    alert(this.finalName);
                }
            }
        },

        methods: {
            setName: function ()
            {
                this.name = "John Maina";
            },
            changeName: function ()
            {
                this.name = "Terry Nyambu";
            }

        },
        mounted() {
            setTimeout(()=>
            {
                this.setName();
            }, 4000);
        }
    }
</script>


<template>
    <div>

        <h3>My name is {{ finalName }}</h3>
        <button @click="changeName">Change name</button>&nbsp;<br/><br/>



    </div>
</template>


<style>
    h3 {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: lighter;
        font-size: 16ox;
    }
</style>