import React from 'react'
import "./InternStyle.css"
import SliderCom from '../Slider/SliderCom'
const Intern = () => {
    return (
        <div className='intern' id='inter'>
            <div className="internTextS">
                <h1 className='internH'>X Internship</h1>
                <p className='InternPA'>In focal X agency We belive that every human need second chance,
                    thats why, every season, our team holds an Intrenship camp all over the Arab world and the Middle East
                    under the supervision of many specialists in several fields such as:</p>
                <p className='typIn'>Graphic Design, Branding, Marketing, Web/App Development, and enterprenurship.</p>
                <p className='InternPA'>
                    At the end of each internship camp, the intern receives an experience certificate with an ID number,
                    in addition to a recommendation to enable him to work in other companies.
                    If the trainee passes all the tests, this qualifies him to work as an employee in our agency
                </p>
                <p className='InternPA internW'>
                    Today We Are so proud of All Interns in our agency and what they become. </p>
            </div>
            <h2 className="text-my-black mt-10 text-center font-my-font text-3xl not-italic font-bold leading-normal mx-auto w-[20.7rem]">Inters Feedback</h2>
            <SliderCom />
        </div>
    )
}

export default Intern
