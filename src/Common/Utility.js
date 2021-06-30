export const clearSession = () => {
    localStorage.clear();
}

export const createAuthIdentity = (userInfo) => {
    clearSession();
    localStorage.setItem('token', userInfo.sessionToken);
    localStorage.setItem('email', userInfo.user.email);
    localStorage.setItem('isAdmin', userInfo.user.isAdmin);
    localStorage.setItem('userId', userInfo.user.id)

};

export const getIsAdmin = () => {
    const adminStatus = localStorage.getItem('isAdmin');
    return adminStatus;
}

export const defaultHomePage = `/pollingQuestions`;
export const adminHomePage = `/createPoll`;

export const getHomePage = () => 
getIsAdmin() ? adminHomePage : defaultHomePage;