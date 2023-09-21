import { Button, Blur } from ".."
import links from "./links"
import { menu, cancel, Cancel } from "../../assets"
import { useState } from "react"




export default function index() {
  const [mobile, setMobile] = useState(false)

  function onMenuClickHandler() {
    setMobile(prevMobile => !prevMobile)
  }

  return (
    <nav className="flex flex-row mt-10 md:flex md:flex-row md:items-center md:mt-10 lg:mt-20">
      <div className="text-xl text-white mr-auto
           md:mr-32 font-clash font-bold 
           lg:text-4xl lg:mr-auto"
        >
        get<span className="text-[#D434FE]">linked</span>
      </div>

      <ul className="hidden md:flex md:flex-row text-white md:gap-10 lg:gap-20 mr-32">
        { links.map((link) => (
          <li key={link.id} className="font-montserrat font-medium text-base leading-[19.5px] cursor-pointer">
            { link.title }
          </li>)
        )}
      </ul>

      <Button
        className="hidden md:hidden lg:block button py-[15px] px-[50px] font-medium rounded
        text-white font-montserrat text-base leading-[19.5px]"
      >Register</Button>

      <Blur
        className="absolute top-[220px] right-[130px]
        lg:absolute 
        lg:top-[180px] lg:left-[320px]"
      />

      <div className="md:hidden mt-2">
          { !mobile && (<img src={menu} alt="menu" onClick={onMenuClickHandler} /> )}
      </div>

      { mobile && (
        <ul className="flex flex-col md:hidden
          absolute top-0 left-0 w-full h-[50%]
          z-[10] bg-[#150E28] gap-5
          pt-[100px] pl-[50px] animate-slideRight
        ">
          <img src={cancel} alt="cross"
            className="absolute top-11 right-[33px] w-[13px]"
            onClick={onMenuClickHandler}
          />
          <img src={Cancel} alt="cross"
            className="absolute top-10 right-[30px] w-[20px]"
            onClick={onMenuClickHandler}

          />

          { links.map((link) => (
            <li key={link.id} className="text-white font-inter font-medium text-lg leading-[21.78px] cursor-pointer">
              { link.title }
            </li>)
          )}
          <Button
            className="md:block button py-[15px] px-[50px] font-medium rounded
            text-white font-montserrat text-base leading-[19.5px] w-[200px]"
          >Register</Button>
        </ul>
      )}
    </nav>
  )
}