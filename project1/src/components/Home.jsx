import AOS from "aos"
import Card from "./Card"
import img1 from "./avatarDuck.png"
import img2 from "./AvatarMuts.jpg"
import img3 from "./AvatarStekelhaar.png"
import { useEffect } from "react"

export default function Home() {
    useEffect(()=>{
        AOS.init()
    },[])
  return (
    <section className="py-4 py-lg-5 container">
<div className="row">


<Card    
 image = {img1}
 aos="flip-left"
 offset= "300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  <Card    
 image = {img2}
 aos="fade-up"
 offset="300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  <Card    
 image = {img3}
 aos="zoom-out-down"
 offset="300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  
<Card    
 image = {img1}
 aos="flip-left"
 offset= "300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  <Card    
 image = {img2}
 aos="fade-up"
 offset="300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  <Card    
 image = {img3}
 aos="zoom-out-down"
 offset="300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  
<Card    
 image = {img1}
 aos="flip-right"
 offset= "500"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  <Card    
 image = {img2}
 aos="fade-down"
 offset="300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  <Card    
 image = {img3}
 aos="zoom-in-down"
 offset="300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  
<Card    
 image = {img1}
 aos="flip-left"
 offset= "300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  <Card    
 image = {img2}
 aos="fade-up"
 offset="300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  <Card    
 image = {img3}
 aos="zoom-out-down"
 offset="300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  
<Card    
 image = {img1}
 aos="flip-up"
 offset= "300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  <Card    
 image = {img2}
 aos="slide-up"
 offset="200"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
  <Card    
 image = {img3}
 aos="zoom-in-right"
 offset="300"
    title = "What the world needs..."
  text = "Don't look so sad, laugh and play. Enjoy it here and now, something else doesn't exist"/>
</div>






    </section>
  )
}
