import React from "react"
import ReactDOM from "react-dom/client"


const Header = () =>{
  return (
    <header className="header">
      <div className="logo">
        <img className="ImgLogo" src="https://template.canva.com/EAGRMiB2YSc/1/0/1600w-4zJcdIcOrCQ.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH7DHWAQDT%2F20260228%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260228T055130Z&X-Amz-Expires=22254&X-Amz-Signature=d01adb1a9d033a9a8f4a914c9be4ccfc2bfd91b4d6930c56b81737cdd62ef212&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Sat%2C%2028%20Feb%202026%2012%3A02%3A24%20GMT"/>
       
      
       <ul className="menu">
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
          <li>Join us</li>
        </ul>

      </div>
    </header>
  )
}

const Body = () =>{
  return (
  <div className="body">


  </div>
  )
}

const AppLayout = () =>{
  return (
    <>
    <Header/>
    <Body/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
  <AppLayout/>
  </>
)









