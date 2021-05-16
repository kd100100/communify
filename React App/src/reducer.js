export const initialState = {
    user: null,
    email: null,
    canteen: {
        idlyqty: 0,
        dosaqty: 0,
        samosaqty: 0,
        cutletqty: 0,
        vadapavqty: 0,
        pongalqty: 0,
        vegbiryaniqty: 0,
        curdriceqty: 0,
        bisbelebathqty: 0,
        vegmealsqty: 0
    }
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
            
        case "ADD_ITEM_CANTEEN_IDLY":
            var can = state.canteen
            can['idlyqty'] = can['idlyqty']+1
            return{
                ...state,
                canteen: can
            }
        case "REMOVE_ITEM_CANTEEN_IDLY":
            var can = state.canteen
            can['idlyqty'] = can['idlyqty']-1
            return{
                ...state,
                canteen: can
            }
        case "ADD_ITEM_CANTEEN_DOSA":
            var can = state.canteen
            can['dosaqty'] = can['dosaqty']+1
            return{
                ...state,
                canteen: can
            }
        case "REMOVE_ITEM_CANTEEN_DOSA":
            var can = state.canteen
            can['dosaqty'] = can['dosaqty']-1
            return{
                ...state,
                canteen: can
            }
        case "ADD_ITEM_CANTEEN_SAMOSA":
            var can = state.canteen
            can['samosaqty'] = can['samosaqty']+1
            return{
                ...state,
                canteen: can
            }
        case "REMOVE_ITEM_CANTEEN_SAMOSA":
            var can = state.canteen
            can['samosaqty'] = can['samosaqty']-1
            return{
                ...state,
                canteen: can
            }
        case "ADD_ITEM_CANTEEN_CUTLET":
            var can = state.canteen
            can['cutletqty'] = can['cutletqty']+1
            return{
                ...state,
                canteen: can
            }
        case "REMOVE_ITEM_CANTEEN_CUTLET":
            var can = state.canteen
            can['cutletqty'] = can['cutletqty']-1
            return{
                ...state,
                canteen: can
            }
        case "ADD_ITEM_CANTEEN_VADAPAV":
            var can = state.canteen
            can['vadapavqty'] = can['vadapavqty']+1
            return{
                ...state,
                canteen: can
            }
        case "REMOVE_ITEM_CANTEEN_VADAPAV":
            var can = state.canteen
            can['vadapavqty'] = can['vadapavqty']-1
            return{
                ...state,
                canteen: can
            }
        case "ADD_ITEM_CANTEEN_PONGAL":
            var can = state.canteen
            can['pongalqty'] = can['pongalqty']+1
            return{
                ...state,
                canteen: can
            }
        case "REMOVE_ITEM_CANTEEN_PONGAL":
            var can = state.canteen
            can['pongalqty'] = can['pongalqty']-1
            return{
                ...state,
                canteen: can
            }
        case "ADD_ITEM_CANTEEN_VEGBIRYANI":
            var can = state.canteen
            can['vegbiryaniqty'] = can['vegbiryaniqty']+1
            return{
                ...state,
                canteen: can
            }
        case "REMOVE_ITEM_CANTEEN_VEGBIRYANI":
            var can = state.canteen
            can['vegbiryaniqty'] = can['vegbiryaniqty']-1
            return{
                ...state,
                canteen: can
            }
        case "ADD_ITEM_CANTEEN_CURDRICE":
            var can = state.canteen
            can['curdriceqty'] = can['curdriceqty']+1
            return{
                ...state,
                canteen: can
            }
        case "REMOVE_ITEM_CANTEEN_CURDRICE":
            var can = state.canteen
            can['curdriceqty'] = can['curdriceqty']-1
            return{
                ...state,
                canteen: can
            }
        case "ADD_ITEM_CANTEEN_BISBELEBATH":
            var can = state.canteen
            can['bisbelebathqty'] = can['bisbelebathqty']+1
            return{
                ...state,
                canteen: can
            }
        case "REMOVE_ITEM_CANTEEN_BISBELEBATH":
            var can = state.canteen
            can['bisbelebathqty'] = can['bisbelebathqty']-1
            return{
                ...state,
                canteen: can
            }
        case "ADD_ITEM_CANTEEN_VEGMEALS":
            var can = state.canteen
            can['vegmealsqty'] = can['vegmealsqty']+1
            return{
                ...state,
                canteen: can
            }
        case "REMOVE_ITEM_CANTEEN_VEGMEALS":
            var can = state.canteen
            can['vegmealsqty'] = can['vegmealsqty']-1
            return{
                ...state,
                canteen: can
            }
        default:
            return state;
    }
};

export default reducer;