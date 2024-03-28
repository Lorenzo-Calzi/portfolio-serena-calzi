import React from 'react';
import "./reviewsPage.scss"
import Header from "../reusable/Header/Header";
import Breadcrumb from "../reusable/Breadcrumb/Breadcrumb";
import Footer from "../reusable/Footer/Footer";
import ReviewsSTUB from "../../stub/ReviewsSTUB";
import Review from "../Homepage/Main/Reviews/Review/Review";

const ReviewsPage = () => {
    return (
        <div id="reviews-page">
            <Header components={<Breadcrumb title={"Recensioni"}/>}/>

            <div className="page-container">
                <div className="reviews">
                    {
                        ReviewsSTUB.map((review, index) => (
                            <Review title={review.title}
                                    description={review.description}
                                    name={review.name}
                                    gender={review.gender}
                                    key={index}
                            />
                        ))
                    }
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default ReviewsPage