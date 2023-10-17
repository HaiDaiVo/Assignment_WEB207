import React, { useEffect, useState } from "react"
import { FaArrowCircleUp } from 'react-icons/fa';

function ButtonGoTop(props) {
      const [isVisible, setIsVisible] = useState(false)
      const goTop = () => {
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            })
      }
      useEffect(() => {
            window.addEventListener('scroll', () => {
                  if (window.scrollY > 100) {
                        setIsVisible(true);
                  } else {
                        setIsVisible(false);
                  }
            });
      }, []);
      return (
            <button type="button" className="btn-scrollTop"
                  onClick={goTop}
                  style={{ display: isVisible ? 'block' : 'none' }}
            >
                  <FaArrowCircleUp />
            </button >

      );
}

export default ButtonGoTop;