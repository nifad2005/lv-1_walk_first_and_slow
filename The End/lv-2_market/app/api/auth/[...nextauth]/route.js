

import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'


const nextAuthOptions ={
  providers:[
    CredentialsProvider({
      name:"Credentials",
      credentials:[],
      async authorize(credentials){
        const user = {id:1, name:"admin", email:"nifad", password:"1234"}
        console.log(" credentials ",credentials.email , credentials.password)
        return user 
      }
    })
  ],
  pages:{
    signIn:"/login"
  },
  session:{
    strategy:'jwt'
  },
  secret:"3f71f95b9c914c2d9d38a89c37a8c6b8302f4f9ad530f8c94c8e2c4d99e7b4f5"

}

const handler = NextAuth(nextAuthOptions)
export {handler as GET , handler as POST}