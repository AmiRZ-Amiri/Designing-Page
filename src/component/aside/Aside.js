import React from 'react'
import './aside.css'
import sideimg from '../IMAGE/1351078415595.png'

function Aside (){
    return(
        <div className='Aside'>

            <div className='side-img'>
                <img src={sideimg} alt='sideimg'/>
            </div>

            <div className='school-number'>
                <div className='school-number1'>
                    <p>شماره تماس:</p>
                    <p>برای مشاهده شماره تماس کلیک کنید</p>
                </div>
                <div className='school-number2'>
                    <p>ادرس:</p>
                    <p>معلم ۵۷ .چهارراه صدف .صدف ۲۳ </p>    
                </div>
                <button className='school-btn'>درخواست مشاوره</button>
            </div>
        </div>

    )
}

export default Aside