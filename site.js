Vue.component('jokes', {
    data: function(){
        return{
            user_chosen: '',
            reveal: []
        }
    },
    template: `
        <form>
            <h3>Select a genre for a random Chuck Norris joke, quote, or fact.</h3>
            <select v-model="user_chosen">
                <option>animal</option>
                <option>career</option>
                <option>celebrity</option>
                <option>dev</option>
                <option>explicit</option>
                <option>fashion</option>
                <option>food</option>
                <option>history</option>
                <option>money</option>
                <option>movie</option>
                <option>music</option>
                <option>political</option>
                <option>religion</option>
                <option>science</option>
                <option>sport</option>
                <option>travel</option>
            </select>
            <button @click.prevent="quote_btn">reveal jokes!</button><br><br>
        </form>
    `,
    methods:{
        quote_btn: function() {
            axios({
                method: 'get',
                url:"https://api.chucknorris.io/jokes/random",
                // headers:{
                //     Authorization: 'Token token="b4e307531c2619699ea3df9c3f0ced40"'
                // },
                params: {
                    filter: this.user_chosen,
                    type: this.user_chosen,
                }
            })
            .then(response => {(this.reveal = response.data);
            this.$emit('output', this.reveal)
            // console.log(rev.value)
            })
        }
    }
});
let vm = new Vue ({
    el:'#app',
    data: {
        reveal:[],

    },
    // mounted() {
    //     axios({
    //         url:'https://favqs.com/api/qotd',
    //         method: 'get',
    //     }).then(response => {(this.qotd = response.data.quote.body)})
    // }
});