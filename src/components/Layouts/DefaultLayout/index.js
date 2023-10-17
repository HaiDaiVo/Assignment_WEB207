import React, { useEffect, useState } from "react"
import Header from '~/components/Layouts/components/Header'
import Sidebar from "./Sidebar"
import Content from "./Content"
import Footer from "~/components/Layouts/components/Footer";
import ButtonGoTop from "~/components/Common";

function DefaultLayout({ children }) {


      return (
            <React.Fragment>
                  <Header />
                  <div className="flex lg:mt-14 w-full">
                        <Sidebar />
                        <Content>
                              {children}
                        </Content>
                  </div>
                  <ButtonGoTop />
                  <Footer />
            </React.Fragment>
      )
}

export default DefaultLayout