import {mapState} from 'vuex';

export default {
    computed: {
        ...mapState({
            isLogin: state => state.user.user_is_login,
            user: state => state.user.user_details,
        })
    }
};