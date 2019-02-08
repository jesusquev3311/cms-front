import Api from '@/services/Api'

export default {
  Dishes (url = 'leads') {
    return {
      getAll: () => Api().get(url),
      createOne: (lead) => Api().post(url, lead),
      deleteOne: (id) => Api().delete(`${url}/${id}`)
    }
  }
}
