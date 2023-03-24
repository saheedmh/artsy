import './styles/header.css'
const Header = () => {
    return ( 
        <div className="container">
        <div className="header">
            <h1>artsy</h1>
            <div className="navbar">
                <ul>
                    <li>home</li>
                    <li>marketplace</li>
                    <li>auction</li>
                    <li>drop</li>
                </ul>
            </div>
          <div className="header-icon">
            <img src="./images/vector.png" alt="" />
            <img src="images/wheel.png" alt="" />
            <img src="images/bells.png" alt="" />
          </div>
        </div>
        <h1>Photography is poetry & beautiful untold stories</h1>
        <h2>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</h2>
        </div>
     );
}
 
export default Header;