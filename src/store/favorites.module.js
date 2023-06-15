
const initialState = {

    favoritesState: []

}

export const favorites = {

    namespaced: true,
    state: initialState,
    actions: {
        addFavorite({ commit }, favorite) {
            commit('addFavorite',favorite)
        }
    },
    mutations: {
        addFavorite(state, favorite) {
            state.favoritesState.push(favorite)
        }
    }

}