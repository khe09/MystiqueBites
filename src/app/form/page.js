
'use client'

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NumberInput from './numberInput';
import RecommendationPopup from '../components/recommendationPopUp/popUp';
import './formStyles.css';

export default function FindRecommendedDish() {
    const [spiceLevel, setSpiceLevel] = useState('');
    const [curiosityLevel, setCuriosityLevel] = useState('');
    const [uniquenessLevel, setUniquenessLevel] = useState('');
    const [recommendedDishes, setRecommendedDishes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);


    const fetchRecommendedDishes = async () => {
        setIsLoading(true);
        setError(null);
        
        const queryParams = new URLSearchParams({
            spiceLevel: spiceLevel.toString(),
            curiosityLevel: curiosityLevel.toString(),
            uniquenessLevel: uniquenessLevel.toString()
        });

        const url = `/api/recs?${queryParams.toString()}`;;
        console.log("Request URL:", url);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch recommended dishes');
            }
            const data = await response.json();
            setRecommendedDishes(data);
            setIsLoading(false);
            setShowPopup(true);
        } catch (error) {
            console.error('Error fetching recommended dishes:', error);
            setError(error.message || 'Error fetching recommended dishes');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = () => {
        fetchRecommendedDishes();
    };
    const handleTryAgain = () => {
        setShowPopup(false); // Hide the popup when trying again
        setRecommendedDishes([]); // Reset recommended dishes
    }
    const generateRandomPosition = () => {
        const maxX = 2000; // Max width in percentage
        const maxY = 750; // Max height in percentage
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        return { top: `${randomY}px`, left: `${randomX}px` };
      };
      
      const sparkles = Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="sparkle"
          style={{ ...generateRandomPosition(), transitionDelay: `${index * 100}ms` }}
        ></div>
      ));
    

    return (
        <div className="form-container">
            <h1>Choose your preferences</h1>
            <p>Discover fun Chinese dishes with recommendations just for you</p>
            <div className="levels">
            <h2>Spice Level</h2>
            <NumberInput value={spiceLevel} onChange={setSpiceLevel} />
            
            <h2>Curiosity Level</h2>
            <NumberInput value={curiosityLevel} onChange={setCuriosityLevel} />
            
            <h2>Uniqueness Level</h2>
            <NumberInput value={uniquenessLevel} onChange={setUniquenessLevel} />
            </div>
            
            <button className="search-button" onClick={handleSearch} disabled={isLoading}>
                {isLoading ? <CircularProgress size={24} /> : 'SEARCH'}
            </button>
            {error && <div>Error: {error}</div>}
            <List sx={{ width: '100%', maxWidth: 1500 }}>
                {recommendedDishes.map((recommendation) => (
                    <ListItem key={recommendation.id}>
                        <ListItemButton>
                            <ListItemText primary={recommendation.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {showPopup && (
                <RecommendationPopup
                    recommendedDishes={recommendedDishes}
                    onTryAgain={handleTryAgain}
                />
            )}
            
            {sparkles}
            {sparkles}
            {sparkles}
            {sparkles}
            {sparkles}
            {sparkles}
            {sparkles}
            {sparkles}
            {sparkles}
        </div>
        
    );
}
