"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { useState ,useRef ,useEffect} from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/src/hooks/use-on-click-outside"

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)

    useEffect(()=>{
      const handler = (e:KeyboardEvent)=>{
        if(e.key === "Escape"){
          setActiveIndex(null)
        }
      }

      document.addEventListener("keydown", handler)
      return ()=>{
        document.removeEventListener("keydown", handler)
      }
    },[])
    const navRef = useRef<HTMLDivElement |null>(null)
    useOnClickOutside(navRef, () => setActiveIndex(null))
    const isAnyOpen = activeIndex !== null
  return (
    <div className="flex h-full gap-4" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category , i)=>{

        const handleOpen = ()=>{
            if(activeIndex === i){
                setActiveIndex(null)
            }else{
                setActiveIndex(i)
            }
        }

        const isOpen = i === activeIndex
        return(
            <NavItem category={category} handleOpen={handleOpen} isOpen= {isOpen} key={category.value} isAnyOpen={isAnyOpen}/>
        )
      })}
    </div>
  )
}

export default NavItems
