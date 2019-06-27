new Vue({
    el: '#app',
    data : {
        currencies: {},
        amount: 0,
        from: '',
        to: '',
    },
    mounted()  {
        //  as soon as Vue is created , it is called 
        // this.getCurrencies();
        
        },
    
    computed: {
        formattedCurrencies(){
            console.log(currencies)
            return Object.values(this.currencies)
            
        }

    } ,   
    // methods: {
    //     getCurrencies(){
    //         const currencies = localStorage.getItem('currencies')
    //         if (currencies){
    //             this.currencies = JSON.parse(currencies);
    //             return ;
    //         }
    //         axios.get("https://free.currconv.com/api/v7/currencies?apiKey=do-not-use")
    //         .then(response => {
    //          console.log(response);
    //         this.currencies=response.data.results;
    //         localStorage.setItem('currencies' , JSON.stringify(response.data.results))
    //         });
    //     }
    // },
    

})