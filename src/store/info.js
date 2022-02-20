import axios from 'axios'
import { writable, get } from 'svelte/store'

export const storeInfo = writable([])
export const loading = writable(false)
export const theInfo = writable({})

export async function loadInfo(payload) {
  if(get(loading)) return
  loading.set(true)

  const res = await _fetchInfo({
    ...payload
  })
  storeInfo.set(res.data)

  loading.set(false)

}

export async function addInfo(payload) {
  if(get(loading)) return
  loading.set(true)

  const res = await _fetchInfo({
    ...payload
  })
  const resData = res.data
  
  storeInfo.update($storeInfo => {
    $storeInfo.push(...resData)
    return $storeInfo
  })

  loading.set(false)
}

export async function searchInfoWidthId(id) {
  if(get(loading)) return
  loading.set(true)

  const res = await _fetchInfo({
    id
  })

  theInfo.set(res.data)

  loading.set(false)
}

function _fetchInfo(payload) {
  const { page, number, id } = payload

  const url = id 
    ? `https://picsum.photos/id/${id}/info` 
    : `https://picsum.photos/v2/list?page=${page}&limit=${number}`

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(url)
      console.log(res.data)
      resolve(res)
    }catch (error) {
      reject(error.message)
    }
  })
}