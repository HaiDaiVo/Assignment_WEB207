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

function LoadingPageIcon() {
      return (
            <React.Fragment>
                  <div className="m-auto relative">
                        <div
                              class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                              role="status">
                        </div>

                  </div>
            </React.Fragment>
      )
}

export { LoadingPageIcon }
export default ButtonGoTop;