global class LoginUser {
	@AuraEnabled
    global static String login(string userName, string password){
        String homeURL='https://thesmartbridge54-dev-ed.develop.my.site.com/s/';
        ApexPages.PageReference pageRef=Site.login(username,password,homeURL);
        return pageRef.getUrl();
    }
}