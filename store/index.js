export const state = () => ({
    cart: [],
    products: [],
    test: 'hi'
})

export const getters = {
    getTest(state) {
        return state.test
    }
}

export const mutations = {
    increment(state) {
        state.counter++
    }
}

export const actions = {
    async fetchCounter({ state }) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    }
}