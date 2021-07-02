
const profile_data = function(user_details, form){

    return {
        first_name: form.first_name ? form.first_name : user_details.first_name, 
        last_name: form.last_name ? form.last_name : user_details.last_name,
        notify_pushover_token: user_details.notify_pushover_token,
        notify_slack_incoming_webhook: user_details.notify_slack_incoming_webhook,
        notify_global_account_notification_status: user_details.notify_global_account_notification_status,
        notify_slack_incoming_webhook_option: user_details.notify_slack_incoming_webhook_option,
        notify_pushover_token_option: user_details.notify_pushover_token_option,
        reporting_email_daily: user_details.reporting_email_daily,
        reporting_email_weekly: user_details.reporting_email_weekly,
        fullhunt_api_key: form.fullhunt_api_key ? form.fullhunt_api_key : user_details.fullhunt_api_key
    }
}

const update_email_data = function(user_details, form){

    return {
        new_email_address: form.email ? form.email : user_details.email, 
    }
}

const update_api_key_data = function(user_details, form){

    return {
        fullhunt_api_key: form.fullhunt_api_key ? form.fullhunt_api_key : user_details.fullhunt_api_key, 
    }
}

const update_password_data = function(user_details, form){

    return {
        new_password: form.new_password ? form.new_password : user_details.new_password, 
        current_password: form.current_password ? form.current_password : user_details.current_password, 
    }
}

export {
    profile_data,
    update_email_data,
    update_api_key_data,
    update_password_data
};