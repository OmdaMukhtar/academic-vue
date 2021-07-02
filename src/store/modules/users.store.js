import {
    login,
    account_is_login,
    update_email,
    update_api_key,
    update_password,
    account_details,
    update_profile, logout } from '@/services/users.service.js';

import { TokenService } from "@/services/storage.service";

import router from '@/router/index';
import {
    profile_data} from '@/helper/user.helper';

export default {
    state:{
        user_is_login: false,
        user_details: {
            company_names: [],
            csrf_token: ``,
            email: ``,
            first_name: ``,
            fullhunt_api_key: ``,
            is_email_verified: false,
            last_name: ``,
            notify_global_account_notification_status: false,
            notify_pushover_token: ``,
            notify_pushover_token_option: false,
            notify_slack_incoming_webhook: ``,
            notify_slack_incoming_webhook_option: false,
            reporting_email_daily: false,
            reporting_email_weekly: false
        },

    },

    getters: {
        auth(state) {
            return state.user_is_login;
        },
        getDetials: function(state){
            return state.user_details;
        }
    },

    mutations: {
        FETCH_USER(state, payload){
            state.user_details = payload;
        },

        IS_LOGIN(state, payload){
            state.user_is_login = payload;
        },

        SET_FIRST_NAME(state, payload){
            state.user_details.first_name = payload;
        },

        SET_LAST_NAME(state, payload){
            state.user_details.last_name = payload;
        },

        SET_USER_EMAIL(state, payload){
            state.user_details.email = payload;
        },

        SET_API_KEY(state, payload){
            state.user_details.fullhunt_api_key = payload;
        },

        SET_USER_API_KEY(state, payload){
            state.user_details.fullhunt_api_key = payload;
        },

        SET_SLACK_INCOMING(state, payload){
            state.user_details.notify_slack_incoming_webhook_option = payload;
        },

        SET_REPORT_EMAIL_WEEKLY(state, payload){
            state.user_details.reporting_email_weekly = payload;
        },

        SET_REPORT_EMAIL_Daily(state, payload){
            state.user_details.reporting_email_daily = payload;
        },

        SET_NOTIFICATION_PUSH(state, payload){
            state.user_details.notify_pushover_token_option = payload;
        },

        SET_NOTIFICATION_PUSH_OVER(state, payload){
            state.user_details.notify_pushover_token = payload;
        },

        SET_SLACK_INCOMING_WEB_HOOK(state, payload){
            state.user_details.notify_slack_incoming_webhook = payload;
        },


    },

    actions: {

        async getLogin({
                state,
                commit
            }, password) {
            try {

                // login to system to get session
                let res = await login(state.user_details.email, password).then(response=>{
                    console.log(response);
                    if(response.status == 200){
                        // dispatch('getUserDetails');
                        commit('IS_LOGIN', true);
                        return response;
                    }else{
                        commit('IS_LOGIN', false);
                    }

                    // Redirect the user to the page he first tried to visit or to the home view
                    return response;
                });

                return res;
            } catch (error) {
                console.error(error);
            }

        },

        async isLogin({
                commit,
                getters
            }) {
            try {

                // login to system to get session
                if (!getters.auth){
                    await account_is_login().then((response)=>{
                        if(response.status == 200){
                            if(TokenService.getToken() != "undefined"){
                                commit('IS_LOGIN', true);
                                // dispatch('getAlerts');
    
                            }
                        }
    
                        return response;
                    });
                }

            } catch (error) {
                console.error(error);
            }

        },


        async getUserDetails({ commit }){
             // fetch account details to take csrf_token of user
            let response = await account_details().then(response=>{
                if(response.status == 200){
                    // set user to store
                    commit('FETCH_USER', response.data);

                    // commit('IS_LOGIN', true);

                    // set token
                    TokenService.saveToken(response.data.csrf_token);


                    return response;
                }
            });

            // await dispatch('getDashboardStat')
            // await dispatch('getAlerts');


            return response;
        },

        async updateWeekly({state}, param){
            let otherData = {
                    first_name: state.user_details.first_name,
                    last_name: state.user_details.last_name,
                    notify_pushover_token: state.user_details.notify_pushover_token,
                    notify_global_account_notification_status: state.user_details.notify_global_account_notification_status,
                    notify_pushover_token_option: state.user_details.notify_pushover_token_option,
                    notify_slack_incoming_webhook: state.user_details.notify_slack_incoming_webhook,
                    notify_slack_incoming_webhook_option: state.user_details.notify_slack_incoming_webhook_option,
                    reporting_email_daily: state.user_details.reporting_email_daily,
                    reporting_email_weekly: !state.user_details.reporting_email_weekly,
                    fullhunt_api_key: state.user_details.fullhunt_api_key
            };
            await update_profile(otherData);
            console.log(" weekly : ", otherData, "param = ", param);
        },

        async updateDaily({state}, param){
            let otherData = {
                    first_name: state.user_details.first_name,
                    last_name: state.user_details.last_name,
                    notify_pushover_token: state.user_details.notify_pushover_token,
                    notify_global_account_notification_status: state.user_details.notify_global_account_notification_status,
                    notify_pushover_token_option: state.user_details.notify_pushover_token_option,
                    notify_slack_incoming_webhook: state.user_details.notify_slack_incoming_webhook,
                    notify_slack_incoming_webhook_option: state.user_details.notify_slack_incoming_webhook_option,
                    reporting_email_daily: !state.user_details.reporting_email_daily,
                    reporting_email_weekly: state.user_details.reporting_email_weekly,
                    fullhunt_api_key: state.user_details.fullhunt_api_key
            };

            await update_profile(otherData);


            console.log(" weekly : ", otherData, "param = ", param);
        },

        async updateSlack({state}, param){
            let otherData = {
                    first_name: state.user_details.first_name,
                    last_name: state.user_details.last_name,
                    notify_pushover_token: state.user_details.notify_pushover_token,
                    notify_global_account_notification_status: state.user_details.notify_global_account_notification_status,
                    notify_pushover_token_option: state.user_details.notify_pushover_token_option,
                    notify_slack_incoming_webhook: state.user_details.notify_slack_incoming_webhook,
                    notify_slack_incoming_webhook_option: !state.user_details.notify_slack_incoming_webhook_option,
                    reporting_email_daily: state.user_details.reporting_email_daily,
                    reporting_email_weekly: state.user_details.reporting_email_weekly,
                    fullhunt_api_key: state.user_details.fullhunt_api_key
            };

            await update_profile(otherData);

            console.log(" slack : ", otherData, "param = ", param);
        },

        async updateNotificationPush({state}, param){
            let otherData = {
                    first_name: state.user_details.first_name,
                    last_name: state.user_details.last_name,
                    notify_pushover_token: state.user_details.notify_pushover_token,
                    notify_global_account_notification_status: state.user_details.notify_global_account_notification_status,
                    notify_pushover_token_option: !state.user_details.notify_pushover_token_option,
                    notify_slack_incoming_webhook: state.user_details.notify_slack_incoming_webhook,
                    notify_slack_incoming_webhook_option: !state.user_details.notify_slack_incoming_webhook_option,
                    reporting_email_daily: state.user_details.reporting_email_daily,
                    reporting_email_weekly: state.user_details.reporting_email_weekly,
                    fullhunt_api_key: state.user_details.fullhunt_api_key
            };
            await update_profile(otherData);
            console.log(" updateNotificationPush : ", otherData, "param = ", param);
        },

        async updateSlackIncoming({state}, param){
            let otherData = {
                    first_name: state.user_details.first_name,
                    last_name: state.user_details.last_name,
                    notify_pushover_token: state.user_details.notify_pushover_token,
                    notify_global_account_notification_status: state.user_details.notify_global_account_notification_status,
                    notify_pushover_token_option: state.user_details.notify_pushover_token_option,
                    notify_slack_incoming_webhook: state.user_details.notify_slack_incoming_webhook,
                    notify_slack_incoming_webhook_option: state.user_details.notify_slack_incoming_webhook_option,
                    reporting_email_daily: state.user_details.reporting_email_daily,
                    reporting_email_weekly: state.user_details.reporting_email_weekly,
                    fullhunt_api_key: state.user_details.fullhunt_api_key
            };


            console.log(" slackincoming : ", otherData, "param = ", param);
            return await update_profile(otherData);
        },

        async updateUserProfile({state, dispatch}){

            try {
                    let otherData = profile_data(state.user_details, state);

                    let response = await update_profile(otherData);

                    if(response.status == 200){
                        dispatch('getUserDetails');
                    }

                    return response;

            } catch (error) {
                console.error(error);
            }
        },

        async updateEmail({state, dispatch}){
            try {
                let response = await update_email(state.user_details.email);

                if(response.status == 200){
                    dispatch('getUserDetails');
                }

                return response;
            } catch (error) {
                console.log(error);
            }
        },

        async updateApiKey({dispatch}){
            try {
                // let data = update_api_key_data(state.user_details, state.user_details);
                let response = await update_api_key();
                console.log(response);
                if(response.status == 200){
                    dispatch('getUserDetails');
                }

                return response;
            } catch (error) {
                console.log(error);
            }
        },

        async updatePassword({dispatch}, {current_password, new_password}){
            try {
                console.log("this data = ",current_password, new_password);
                console.log(dispatch);

                return await update_password(current_password, new_password);

            } catch (error) {
                console.log(error);
            }
        },

        async logoutUser({ commit }){

            // logout
            await logout(TokenService.getToken());

            commit('IS_LOGIN', false);

            await TokenService.removeToken();

            // remove state from vuex
            localStorage.removeItem('vuex');

            // redirect to login page
            router.push('/login');

        }

    },

}
