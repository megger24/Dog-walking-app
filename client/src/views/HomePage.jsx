import { useNavigate } from 'react-router-dom'
import HomePage2 from '../assets/images/HomePage2.png'


import Heart from '../assets/images/Heart.PNG'
import Diamond from '../assets/images/Diamond.PNG'
import Wheel from '../assets/images/Wheel.PNG'


import ParkingLot from '../assets/images/ParkingLot.PNG'




const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div className='content' style={{ margin: "20px" }}>
            <h1 className="title">Welcome to PetSteP<br /> your number one dog walking services</h1>
            <img style={{ boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src={HomePage2} alt="dog" className='image' />

            <div className='animate' style={{ width: '270px', height: '250px', position: 'absolute', top: '25%', right: '8%', fontSize: '30px', border: '10px solid black' }}></div><p style={{ position: 'absolute', top: '35%', right: '10%', fontSize: '25px', fontWeight: "200px", textAlign: 'center' }}>Now on Facebook</p>


            <div style={{ margin: '50px', padding: "120px 10px", backgroundColor: 'white', marginTop: "10px", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>

                <div className="rowContainer">

                    <h3 style={{ textAlign: 'center' }}>ABOUT THE COMPANY</h3>
                    <p style={{ textAlign: 'center' }}>Key features of our company</p>

                    <div style={{ marginTop: "70px", display: "flex", padding: "10px", marginLeft: '200px', gap: '60px' }}>

                        <br />
                        <div className="PassionCard">
                            <img src={Heart} ></img>
                            <p >Passion</p>
                            <p className='textLorem' >Our passion is supporting dog and their parents.</p>
                        </div>
                        <br />
                        <div className="DesignCard">
                            <img src={Diamond} ></img>
                            <p className="w3-large">Design</p>
                            <p className='textLorem' >Designed to assist with your dog walking needs .</p>
                        </div>
                        <br />
                        <br />
                        <div className="SupportCard">
                            <img src={Wheel} ></img>
                            <p className="w3-large">Support</p>
                            <p className='textLorem' >WE support all pounds to help keep all dogs in a forever homes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div className="content" style={{ backgroundColor: 'white', margin: '50px', boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <div style={{ margin: "10px" }}>
                    <span style={{ fontSize: '45px', alignContent: 'center' }}>Contact Us</span>
                </div>
                <div>
                    <p style={{ margin: '10px' }}>Lets Get in Touch. Send us a message</p>
                    <p style={{ float: 'right', fontSize: "30px", marginRight: "30%" }}>Email:PestStep@gmail.com <br /> Pheonix,AZ 85050<br />555-256-333</p>
                    <img src={ParkingLot} style={{ margin: '10px' }} />
                </div>
                <form style={{ margin: '10px' }} className="formContainer" action="/action_page.php" target="_blank">
                    <div className="w3-section">
                        <label>Name</label>
                        <input className="nameInput" style={{ width: "100%" }} type="text" name="Name" required />
                    </div>
                    <div className="w3-section">
                        <label>Email</label>
                        <input className="w3-input w3-border w3-hover-border-black" style={{ width: "100%" }} type="text" name="Email" required />
                    </div>
                    <div className="w3-section">
                        <label>Subject</label>
                        <input className="w3-input w3-border w3-hover-border-black" style={{ width: "100%" }} name="Subject" required />
                    </div>
                    <div className="w3-section">
                        <label>Message</label>
                        <input className="w3-input w3-border w3-hover-border-black" style={{ width: "100%" }} name="Message" required />
                    </div>
                    <button onClick={()=> {navigate('/ThankYou')}} className="card-button" style={{ border: " 4px solid black", margin: '10px' }}>Send</button>
                </form>
            </div>

           
        </div>
    )
}
export default HomePage