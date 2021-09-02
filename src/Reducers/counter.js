
const counter =
    (state = { value:10 } , action) => {
        switch (action.type) {
            case 'reset' :
                
                return {value: 0}
           
            case 'plus' :
                
                return {value: ++state.value}
            case 'minus' :
                    
                    return {value: --state.value}   
            default:
                return state         
        }
    }
    export default counter;