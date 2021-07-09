export const state = () => ({
    active: false,
    menus: [
        {
            id: 1,
            name: 'Blog',
            icon: 'mdi-blogger',
            link: '#blog'
        },
        {
            id: 2,
            name: 'Teams',
            icon: 'mdi-account-group',
            link: '#teams'
        },
        {
            id: 3,
            name: 'Skills',
            icon: 'mdi-school-outline',
            link: '#skills'
        },
        {
            id: 4,
            name: 'Partenaires',
            icon: 'mdi-face-agent',
            link: '#partners'
        },
        {
            id: 5,
            name: 'Contacts',
            icon: 'mdi-face-agent',
            link: '#contacts'
        }
    ],
})

export const mutations = {
    SET_DIALOG(state, dialog) {
        state.active = dialog
    }
}