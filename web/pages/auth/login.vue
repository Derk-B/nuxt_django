<template>
    <div>
      <form @submit.prevent="userLogin">
        <div>
          <label>Username</label>
          <input type="text" v-model="login.username" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" v-model="login.password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>

  <script setup lang="ts">
    const authStore = useAuthStore()
    const router = useRouter()

    let login = {
        username: '',
        password: '',
    }

    const userLogin = async () => {
        try {
            let data = new URLSearchParams(Object.entries(login)).toString();
            await authStore.authenticateUser(data)

            if (authStore.authenticated) {
                router.push("/")
            }
            
        } catch (err) {
            console.log(err)
        }
    }
    
  
  </script>