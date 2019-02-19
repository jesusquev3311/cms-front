import Api from '@/services/Api'

export default {
    Login (url = 'login') {
        return {
            loginUser: (user) => Api().post(url, user)
        }
    }
}
