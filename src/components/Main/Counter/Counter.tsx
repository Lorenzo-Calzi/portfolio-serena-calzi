import React from "react";
import './counter.scss'
import CountUp from "react-countup";
import Text from "../../reusable/Text/Text"
import BasketBall from '../../../assets/images/basket-ball.png'

const Counter = () => {

    return (
        <section id="counter">
            <div className="page-container">
                <div className="content">
                    <div className="count">
                        <CountUp start={0} end={45} duration={3} enableScrollSpy={true}/>
                        <Text type={"h4"} textAlign={"center"}>Qualified Teachers</Text>
                    </div>

                    <div className="count">
                        <CountUp start={0} end={20} duration={3} enableScrollSpy={true}/>
                        <Text type={"h4"} textAlign={"center"}>Years Of Experience</Text>
                    </div>

                    <div className="count">
                        <CountUp start={0} end={565} duration={3} enableScrollSpy={true}/>
                        <Text type={"h4"} textAlign={"center"}>Students Enrolled</Text>
                    </div>

                    <div className="count">
                        <CountUp start={0} end={15} duration={3} enableScrollSpy={true}/>
                        <Text type={"h4"} textAlign={"center"}>Total Groups</Text>
                    </div>
                </div>
                <img src={BasketBall} alt="Immagine di una palla da basket"/>
            </div>
        </section>
    )
}

export default Counter