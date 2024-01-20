import api from "~/services/api"

export const state = () => ({
    token: null,
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
}

export const actions = {
    async login({ commit }, credentials) {
        try {
            const response = await api.post("login/", credentials)
            const token = response.data.doken
            commit("setToken", token)
        } catch (error) {
            console.error("Login error: ", error)
        }
    },

    async refresh({ commit, state }) {
        try {
          const response = await api.post('refresh-token/', { token: state.token })
          const newToken = response.data.token
          commit('setToken', newToken)
        } catch (error) {
          console.error('Refresh token error:', error)
        }
      },
}