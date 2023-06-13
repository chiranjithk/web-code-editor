import React, { useEffect, useState } from 'react'

const PREFIX = 'codepen=clone'
export default function useLocalStorage(key,initialValue){

    const prefixedKey= PREFIX + key

    const[value,setValue]=useState(()=>{
        const jsonvalue=localStorage.getItem(prefixedKey)
        if(jsonvalue!=null) return JSON.parse(jsonvalue)
        if(typeof jsonvalue==='function')
        return initialValue()
        else
          return initialValue
    })

    useEffect(()=>{
        localStorage.setItem(prefixedKey,JSON.stringify(value))
    },[prefixedKey,value])

    return [value,setValue]
}