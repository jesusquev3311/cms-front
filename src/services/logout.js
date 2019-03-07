import Api from '@/services/Api'

export default {
    Login (url = 'logout') {
        return {
            logout: () => Api().post(url)
        }
    }
}
