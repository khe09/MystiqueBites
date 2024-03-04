// RecommendationPopup.js

import React from 'react';
import { recommendations } from '../../../../prisma/recommendations';
import './recommendation-style.css'; // Import the CSS for styling

const RecommendationPopup = ({ recommendedDishes, onTryAgain }) => {
    return (
        <div className="popup-container">
            <div className="popup">
                {recommendedDishes.length === 0 ? (
                    <div className="no-recommendations-message">
                        No recommendations available for this selection. 
                         <button className="TryAgain" onClick={onTryAgain}>Try Again</button>
                    </div>
                ) : (
                    <>
                        <h2>Recommended Dishes</h2>
                        <ul>
                            {recommendedDishes.map((recommendation) => (
                                <li key={recommendation.id}>
                                    <div>
                                        <strong>Name:</strong> {recommendation.name}
                                    </div>
                                    <div>
                                        <strong>Origin:</strong> {recommendation.origin}
                                    </div>
                                    <div>
                                        <strong>Description:</strong> {recommendation.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className="TryAgain" onClick={onTryAgain}>Try Again</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default RecommendationPopup;
