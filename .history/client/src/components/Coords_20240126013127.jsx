import React from 'react'
import msg from "../assets/icons/contact/msg.svg";
import phone from "../assets/icons/contact/phone.svg";

const Coords = () => {
    return (
      <div className="flex  items-center">
        <div className=" basis-[70%] flex flex-col gap-4 ">
          <div className="flex flex-col gap-2">
            {" "}
            <h2>William King</h2>
            <h4>Region, Ville, 11000</h4>
          </div>
          <div className="flex gap-8 ">
            <div className=" bg-gray-300 h-64 w-56"></div>
            <div className="flex flex-col gap-3">
              Rating here
              <p>
                <span className=" font-semibold">Spécialité:</span>{" "}
                <span className=" font-light">Droits administratifs </span>
                <a href="" className=" text-primary underline">
                  Voir plus
                </a>
              </p>
            </div>
          </div>
        </div>
  
        
      </div>
    );
  }

export default Coords