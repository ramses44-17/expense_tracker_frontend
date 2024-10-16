"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function BetaForm() {
  const [email,setEmail] = useState('')
  const [isValidEmail,setIsValidEmail] = useState(false)
  const [message,setMessage] = useState('')
  const validateEmail = (email:string)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  const handleEmailChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value
    setEmail(value)
    if (validateEmail(value)) {
      setIsValidEmail(true)
      setMessage('')
    }else{
      setIsValidEmail(false)
      setMessage('email invalide. reesayez')
    }
  }
  const handleSubmit=async(e:FormEvent)=>{
    e.preventDefault()
    if(!isValidEmail){
      setMessage('veuiller entrez une adresse email valide')
      return
    }
    try {
      const response = await fetch("https://expense-tracker-pro-test.onrender.com/api/users/register",{
        method:"POST",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify({name:"amos",email,password:"ABCDEF",confirm_password:"ABCDEF"})
      })
      console.log(response.status);
      
      if(response.status === 201){
        setMessage('Email envoyez avec succes')
        setEmail('')
      }else{
        setMessage("erreur lors de l'envoi de l'email. ressayez")
        setIsValidEmail(false)
      }
    } catch (e) {
      setMessage('erreur de connexion')
    }
  }
  return (
    <div className='w-full'>
    <form className='flex justify-center items-center'onSubmit={handleSubmit} >
      <Input type="email" 
      id='email' name='email' value={email} onChange={handleEmailChange} placeholder="Entrez votre email pour testez la beta"/>
      <Button>Testez</Button>
    </form>
    {message && <div className={`text-sm ${isValidEmail ? "text-green-500" :"text-red-500"}`}>{message}</div>}
    </div>
  )
}
