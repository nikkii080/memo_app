<template>
    <section class="container">
        <h1>Memo</h1>
        <table>
        <tr>
            <th>Title</th>
            <td><input type="text" name="title" 
                class="title" size="40"
                v-model="title">
            </td>
        </tr>
        <tr>
            <th>Memo</th>
            <td><textarea name="content" class="content"
                cols="50" rows="5" 
                v-model="content"></textarea></td>
        </tr>
        <tr>
            <th></th>
            <td><button @click="insert">save</button>
            <transition name="del">
                <button v-if="sel_flg != false" 
                    @click="remove">delete</button>
            </transition>
            </td>
        </tr>
        </table>
        <hr>
        <ul class="list">
            <li v-for="item in page_items">
            <span @click="select(item)">{{ item.title }} {{item.created}}</span>
            </li>
        </ul>
    </section>
</template>


<script>
export default {
    data: function(){
        return {
            title:'',
            content:'',
            sel_flg: false,
        };
    },
    computed: {
        // memo: function(){ return this.$store.state.memo.memo; },
        page_items: function(){
            return this.$store.state.memo.memo;
        },
    },
    methods: {
        set_flg: function(){
            if (this.find_flg || this.sel_flg != false){
                this.find_flg = false;
                this.sel_flg = false;
                this.title = '';
                this.content = '';
            }
        },
        insert: function(){
            // this.$store.commit('モジュール名/mutation名', 渡す値);
            this.$store.commit('memo/insert', 
                {title:this.title, content:this.content}); 
            this.title = '';
            this.content = '';
        },
        select: function(item) {
            // console.log(item)
            this.sel_flg = item,
            this.title = item.title
            this.content = item.content
        },
        remove: function() {
            //mutationsでmemo内のオブジェクトを削除する処理を実行
            // this.$store.commit('memo/remove',該当のオブジェクトの配列番号)
            if (this.sel_flg == false){
                return;
            } else {
                console.log(this.sel_flg);
                this.$store.commit('memo/remove', this.sel_flg);
                this.set_flg();
            }
        }
    }
}
</script>


<style>
.container {
  padding:5px 10px;
}
h1 {
  font-size: 60pt;
  color: #345980;
}
p {
  padding-top:5px;
  font-size: 20pt;
}
div {
    font-size:14pt;
}
pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
}
input {
    font-size:14pt;
    margin:5px;
}
textarea {
    font-size:14pt;
    margin:5px;
}
button {
    font-size: 14pt;
    padding:1px 10px;
    margin:5px;
}
hr {
    border-style: none;
    border-top: solid;
    border-width: 5px;
    border-color:#def;
    margin:20px 0px 10px 0px;
}
li {
  font-size:14pt;
  height: 32px;
}
th {
    background-color: #345980;
    color: white;
}
td {
    background-color:aliceblue;
    color:#345980;
    padding:5px;
}
.nav {
  padding:0px 10px;


  cursor : pointer;
}
.list {
    cursor : pointer;
}
.del-enter-active, .del-leave-active {
  transition: opacity .5s;
}
.del-enter, .del-leave-to {
  opacity: 0;
}
</style>