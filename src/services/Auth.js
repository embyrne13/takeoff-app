import Client from './api'

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('/api/user/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data
  } catch (error) {
    throw error
  }
}

export const SignUpUser = async (data) => {
  try {
    const res = await Client.post('/api/user/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckLogin = async () => {
  try {
    const res = await Client.get('/api/user/loggedin')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getFlight = async ({ destination, origin }) => {
  try {
    const res = await Client.get(
      `/api/flight?destination=${destination}&origin=${origin}`
    )
    return res.data
  } catch (error) {
    throw error
  }
}
