import React from "react";
import {MapPin ,Eye } from "phosphor-react";
import myimg from '../IMAGE/p.jpeg'
import './Content.css'
function Content() {
    return(
        <div className="main">

            <div className="nav-main">

                <div className="nav-main-titel">
                    <img src={myimg} alt="myimg" />
                    <h2>آموزشگاه خوشنویسی چلیپا نگار</h2>
                </div>
                
                <div className="nav-main-titel-icon">       

                    <div className="shool-course">
                        <div></div>
                        <p>مشاهده دوره ها</p>
                    </div>
        
                    <div className="icon">
                        <div>
                            <Eye size={32} />
                            <p><b>150بازدید</b></p><br/>
                        </div>
                        <div>
                            <MapPin size={32} />
                            <p>معلم</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="info-school">

                <h2>درباره آموزشگاه:</h2>
                <p>
                    <p>مدیریت: زهره مومن زاده</p>
                    <p>در آموزشگاه چلیپا نگار</p>
                    <p>  خطوط فارسی شامل :خط تحریری با خودکار ( ضخامت نویسی و روان نویسی) . خط نستعلیق و شکسته نستعلیق با قلم نی از مقدماتی تا پیشرفته برای تمامی گروه‌های سنی تدریس می‌شود. </p>
                    <p>  تدریس کالیگرافی( خوشنویسی مدرن ) برای کسانی که علاقه ای به سبک‌های خوشنویسی سنتی ندارند با مجرب ترین اساتید .</p>
                    <p>   خوشنویسی انگلیسی به سبک (کاپرپلیت )با قلم فلزی و( هندرایتینگ ) با خودکار .</p>
                    <p>دریافت گواهینامه ی معتبر از اموزشگاه</p>
                    <p>  آموزش طراحی و نقاشی برای تمامی سطوح از مقدماتی تا پیشرفته</p>
                    <p>  تکنیک مداد رنگی . سیاه قلم . طراحی چهره و اجسام . و همچنین نقاشی کودکان بر پایه خلاقیت های ذهنی ...</p>
                </p>

            </div>

        </div>
    )
}

export default Content