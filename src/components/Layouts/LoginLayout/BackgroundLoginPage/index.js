import backgroundImage from '~/assets/images/Login_background.jpg'
function BackgroundLoginPage() {
      return (   
            <div
                  className="top-0 left-0 bottom-0 absolute leading-5 h-screen w-screen overflow-hidden"
                  style={{
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundImage: `url(${backgroundImage})`
                  }}>

            </div>

      )
}

export default BackgroundLoginPage;