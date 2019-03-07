import Api from '@/services/Api'

export default {
    Logout (url = 'logout') {
        return {
            start: () => Api().get(url)
        }
    }
}
