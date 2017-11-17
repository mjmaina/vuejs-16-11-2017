<script>
export default {
    data (){
        return{
            tasks: [],

        }
    },
    methods: {
        addTask() {
            if (this.message != "") {
                //alert message
                this.tasks.unshift({
                    title: this.message,
                    status: false
                });
                this.message = '';
            }

        },


    }



    }
</script>

<template>
    <div id="app">
     Add Tasks: <br /><textarea type="text" v-model="message" @keyup.enter="addTask"></textarea>

        <br><br>
        <div class="tasks" v-for="(task, index) in tasks">
            <input type="checkbox" v-model="task.status">
            &nbsp; &nbsp;<span v-text="task.title"></span>
        </div>



    </div>


</template>