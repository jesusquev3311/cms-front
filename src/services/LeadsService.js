import Api from '@/services/Api'

export default {
  Leads (url = 'leads') {
    return {
      getAll: () => Api().get(url),
      getOne: (id) => Api().get(`${url}/${id}`),
      createOne: (lead) => Api().post(url, lead),
      deleteOne: (id) => Api().delete(`${url}/${id}`)
    }
  }
}
