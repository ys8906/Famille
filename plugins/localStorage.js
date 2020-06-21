import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'Café de Famille',
    paths: ['MenuList'],
  })(store);
};