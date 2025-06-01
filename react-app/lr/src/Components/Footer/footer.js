import footer1 from "../../images/footer1.png";
import footer2 from "../../images/footer2.png";
import footer3 from "../../images/footer3.png";
import footer4 from "../../images/footer4.png";
import footer5 from "../../images/footer5.png";
import '../Footer/footer.css';
const Footer =()=>{
    
    return(
        <>
        <section className='footer-section'>
            <div className='footer-container'>
                <div className='footer-content'>
                    <div className='footer-logo-name'>
                        <h1>CareerSync <span>AI</span></h1>
                        <p>powered by ChatGpt</p>
                    </div>
                    <div className='made-with'>
                        <h1>Made withloveby CareerSync <span>AI</span> ©</h1>
                    </div>
                    <br/>
                    <div className='footer-images'>
                        <div className='footer-images-content'>
                            <img src={footer1} alt=''/>
                            <img src={footer2} alt=''/>
                            <img src={footer3} alt=''/>
                            <img src={footer4} alt=''/>
                            <img src={footer5} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Footer;