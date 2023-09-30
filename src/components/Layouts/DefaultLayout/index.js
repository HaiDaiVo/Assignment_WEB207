import React, { useState } from "react"
import Header from '~/components/Layouts/components/Header'
import Sidebar from "./Sidebar"
import Content from "./Content"
import HomeContent from "./Content/HomeContent"

function DefaultLayout({ children }) {
      return (
            <React.Fragment>
                  <Header />
                  <div className="flex xl:mt-14 w-full">
                        <Sidebar />
                        <Content>
                              {children}
                        </Content>
                  </div>
            </React.Fragment>
      )
}

export default DefaultLayout