import React, { useState, useEffect, useRef  } from 'react';
import './reco.css';
import ved from "./vedio/bgved.mp4";

const SmartAgriculture = () => {
  const [region, setRegion] = useState('Ariyalur');
  const [season, setSeason] = useState('winter');
  const [temperature, setTemperature] = useState('15');
  const [rainfall, setRainfall] = useState('200');
  const [selectedCrops, setSelectedCrops] = useState([]);
  const [language, setLanguage] = useState('en');
  const videoRef = useRef(null);

   useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.6;
      }
    }, []);

  const cropsData = {
    Ariyalur: {
      winter: {
        "200": ["Paddy", "Sugarcane", "Cotton", "Groundnuts"],
        "400": ["Paddy", "Cotton"],
        "600": ["Groundnuts", "Sugarcane"],
      },
      summer: {
        "200": ["Tapioca", "Tea"],
        "400": ["Rubber", "Coffee"],
        "600": ["Tapioca"],
      },
      monsoon: {
        "200": ["Paddy", "Sugarcane", "Cotton"],
        "400": ["Groundnuts", "Cotton"],
        "600": ["Sugarcane"],
      },
      autumn: {
        "200": ["Millets", "Maize"],
        "400": ["Maize", "Tapioca"],
        "600": ["Groundnuts", "Cotton"],
      },
    },
    Chengalpattu: {
      winter: {
        "200": ["Vegetables", "Millets"],
        "400": ["Mangoes", "Ragi"],
      },
      summer: {
        "200": ["Poultry", "Spices"],
        "400": ["Spices"],
      },
      monsoon: {
        "200": ["Rice", "Millets"],
        "400": ["Rice", "Tomatoes"],
      },
      autumn: {
        "200": ["Cabbage", "Cauliflower"],
        "400": ["Brinjal", "Chillies"],
      },
    },
    Chennai: {
      winter: {
        "200": ["Paddy", "Sugarcane", "Groundnuts"],
        "400": ["Cotton", "Pulses"],
      },
      summer: {
        "200": ["Tapioca", "Chilli"],
        "400": ["Groundnuts", "Tobacco"],
      },
      monsoon: {
        "200": ["Rice", "Cotton"],
        "400": ["Groundnuts", "Millets"],
      },
      autumn: {
        "200": ["Beans", "Vegetables"],
        "400": ["Cucumber", "Pumpkin"],
      },
    },
    Coimbatore: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Cotton", "Groundnuts"],
          "400": ["Cotton", "Groundnuts"],
          "600": ["Rice", "Chili"],
        },
        summer: {
          "200": ["Pulses", "Groundnuts"],
          "400": ["Cucumber", "Tobacco"],
        },
        monsoon: {
          "200": ["Tomato", "Brinjal"],
          "400": ["Cotton", "Groundnuts"],
        },
        autumn: {
          "200": ["Maize", "Rice"],
          "400": ["Sugarcane", "Tapioca"],
        },
      },
      Cuddalore: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Cotton", "Vegetables"],
          "600": ["Tapioca", "Rice"],
          "800": ["Cotton", "Tapioca"],
        },
        summer: {
          "200": ["Poultry", "Spices"],
          "400": ["Chili", "Tomatoes"],
          "600": ["Pulses", "Rice"],
          "800": ["Pulses", "Tobacco"],
        },
        monsoon: {
          "200": ["Rice", "Tomatoes"],
          "400": ["Rice", "Groundnuts"],
          "600": ["Groundnuts", "Sugarcane"],
          "800": ["Paddy", "Rice"],
        },
        autumn: {
          "200": ["Carrot", "Brinjal"],
          "400": ["Chillies", "Cauliflower"],
          "600": ["Brinjal", "Cabbage"],
          "800": ["Beans", "Vegetables"],
        },
      },
      Dharmapuri: {
        winter: {
          "200": ["Paddy", "Groundnuts", "Sugarcane"],
          "400": ["Cotton", "Rice"],
          "600": ["Maize", "Chili"],
          "800": ["Chili", "Groundnuts"],
        },
        summer: {
          "200": ["Tapioca", "Groundnuts"],
          "400": ["Pulses", "Tobacco"],
          "600": ["Pulses", "Sugarcane"],
          "800": ["Groundnuts", "Chili"],
        },
        monsoon: {
          "200": ["Rice", "Millets"],
          "400": ["Rice", "Maize"],
          "600": ["Rice", "Sugarcane"],
          "800": ["Groundnuts", "Cotton"],
        },
        autumn: {
          "200": ["Beans", "Maize"],
          "400": ["Cotton", "Rice"],
          "600": ["Sugarcane", "Tapioca"],
          "800": ["Maize", "Tapioca"],
        },
      },
      Kanchipuram: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Cotton", "Rice"],
          "600": ["Rice", "Maize"],
          "800": ["Maize", "Groundnuts"],
        },
        summer: {
          "200": ["Tapioca", "Chili"],
          "400": ["Groundnuts", "Tobacco"],
          "600": ["Tapioca", "Tomatoes"],
          "800": ["Tapioca", "Chili"],
        },
        monsoon: {
          "200": ["Rice", "Millets"],
          "400": ["Rice", "Tomatoes"],
          "600": ["Rice", "Groundnuts"],
          "800": ["Rice", "Pulses"],
        },
        autumn: {
          "200": ["Beans", "Pumpkin"],
          "400": ["Cucumber", "Cauliflower"],
          "600": ["Beans", "Carrot"],
          "800": ["Brinjal", "Chili"],
        },
      },
      Karur: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Rice", "Cotton"],
          "600": ["Cotton", "Chili"],
          "800": ["Groundnuts", "Sugarcane"],
        },
        summer: {
          "200": ["Tapioca", "Pulses"],
          "400": ["Tobacco", "Cucumber"],
          "600": ["Chili", "Rice"],
          "800": ["Pulses", "Chili"],
        },
        monsoon: {
          "200": ["Rice", "Groundnuts"],
          "400": ["Rice", "Tomatoes"],
          "600": ["Cotton", "Pulses"],
          "800": ["Rice", "Sugarcane"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Cotton", "Rice"],
          "600": ["Sugarcane", "Groundnuts"],
          "800": ["Maize", "Cotton"],
        },
      },
      Madurai: {
        winter: {
          "200": ["Paddy", "Groundnuts", "Sugarcane"],
          "400": ["Cotton", "Rice"],
          "600": ["Chili", "Maize"],
          "800": ["Chili", "Rice"],
        },
        summer: {
          "200": ["Tapioca", "Groundnuts"],
          "400": ["Pulses", "Tomatoes"],
          "600": ["Tapioca", "Chili"],
          "800": ["Pulses", "Rice"],
        },
        monsoon: {
          "200": ["Rice", "Millets"],
          "400": ["Rice", "Cotton"],
          "600": ["Groundnuts", "Sugarcane"],
          "800": ["Rice", "Tobacco"],
        },
        autumn: {
          "200": ["Beans", "Pumpkin"],
          "400": ["Cabbage", "Chillies"],
          "600": ["Cucumber", "Cauliflower"],
          "800": ["Beans", "Pumpkin"],
        },
      },
      Mayiladuthurai: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Cotton", "Rice"],
          "600": ["Rice", "Chili"],
        },
        summer: {
          "200": ["Tapioca", "Pulses"],
          "400": ["Tobacco", "Maize"],
          "600": ["Chili", "Groundnuts"],
        },
        monsoon: {
          "200": ["Rice", "Millets"],
          "400": ["Rice", "Sugarcane"],
          "600": ["Pulses", "Groundnuts"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Rice", "Tapioca"],
          "600": ["Cotton", "Sugarcane"],
        },
      },
      Nagapattinam: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Cotton", "Tapioca"],
          "600": ["Rice", "Chili"],
        },
        summer: {
          "200": ["Pulses", "Groundnuts"],
          "400": ["Tobacco", "Maize"],
          "600": ["Pulses", "Tapioca"],
        },
        monsoon: {
          "200": ["Rice", "Cotton"],
          "400": ["Rice", "Tomatoes"],
          "600": ["Cotton", "Groundnuts"],
        },
        autumn: {
          "200": ["Cucumber", "Beans"],
          "400": ["Brinjal", "Pumpkin"],
          "600": ["Carrot", "Cauliflower"],
        },
      },
      Namakkal: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Cotton", "Rice"],
          "600": ["Maize", "Chili"],
        },
        summer: {
          "200": ["Tapioca", "Groundnuts"],
          "400": ["Tobacco", "Tomatoes"],
          "600": ["Tapioca", "Rice"],
        },
        monsoon: {
          "200": ["Rice", "Cotton"],
          "400": ["Rice", "Groundnuts"],
          "600": ["Sugarcane", "Tobacco"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Tapioca", "Pumpkin"],
          "600": ["Cucumber", "Brinjal"],
        },
      },
      Nilgiris: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Tea"],
          "400": ["Tea", "Coffee"],
          "600": ["Tea", "Pulses"],
        },
        summer: {
          "200": ["Tapioca", "Spices"],
          "400": ["Pulses", "Cabbage"],
          "600": ["Tapioca", "Chili"],
        },
        monsoon: {
          "200": ["Rice", "Tea"],
          "400": ["Tea", "Tomatoes"],
          "600": ["Coffee", "Cotton"],
        },
        autumn: {
          "200": ["Pumpkin", "Beans"],
          "400": ["Chillies", "Carrot"],
          "600": ["Cauliflower", "Cabbage"],
        },
      },
      Perambalur: {
        winter: {
          "200": ["Paddy", "Groundnuts", "Sugarcane"],
          "400": ["Cotton", "Rice"],
          "600": ["Chili", "Pulses"],
        },
        summer: {
          "200": ["Tapioca", "Tomatoes"],
          "400": ["Tobacco", "Cucumber"],
          "600": ["Tapioca", "Sugarcane"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Tomatoes"],
          "600": ["Rice", "Chili"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Pumpkin", "Cucumber"],
          "600": ["Tapioca", "Cotton"],
        },
      },
      Pudukkottai: {
        winter: {
          "200": ["Paddy", "Groundnuts", "Sugarcane"],
          "400": ["Rice", "Cotton"],
          "600": ["Chili", "Pulses"],
        },
        summer: {
          "200": ["Tapioca", "Groundnuts"],
          "400": ["Tobacco", "Maize"],
          "600": ["Sugarcane", "Tapioca"],
        },
        monsoon: {
          "200": ["Rice", "Cotton"],
          "400": ["Rice", "Tomatoes"],
          "600": ["Groundnuts", "Sugarcane"],
        },
        autumn: {
          "200": ["Beans", "Maize"],
          "400": ["Tapioca", "Pumpkin"],
          "600": ["Rice", "Sugarcane"],
        },
      },
      Ramanathapuram: {
        winter: {
          "200": ["Paddy", "Groundnuts", "Sugarcane"],
          "400": ["Rice", "Cotton"],
          "600": ["Maize", "Chili"],
        },
        summer: {
          "200": ["Tapioca", "Groundnuts"],
          "400": ["Tobacco", "Cucumber"],
          "600": ["Tapioca", "Tomatoes"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Chili"],
          "600": ["Rice", "Groundnuts"],
        },
        autumn: {
          "200": ["Beans", "Cucumber"],
          "400": ["Pumpkin", "Maize"],
          "600": ["Sugarcane", "Rice"],
        },
      },
      Ranipet: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Cotton"],
          "400": ["Rice", "Chili"],
          "600": ["Cotton", "Groundnuts"],
        },
        summer: {
          "200": ["Tapioca", "Chili"],
          "400": ["Groundnuts", "Maize"],
          "600": ["Tapioca", "Rice"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Cotton"],
          "600": ["Groundnuts", "Tobacco"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Tapioca", "Sugarcane"],
          "600": ["Pumpkin", "Rice"],
        },
      },
      Salem: {
        winter: {
          "200": ["Paddy", "Groundnuts", "Sugarcane"],
          "400": ["Rice", "Cotton"],
          "600": ["Chili", "Sugarcane"],
        },
        summer: {
          "200": ["Tapioca", "Tomatoes"],
          "400": ["Pulses", "Cucumber"],
          "600": ["Tapioca", "Chili"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Millets"],
          "600": ["Groundnuts", "Chili"],
        },
        autumn: {
          "200": ["Beans", "Carrot"],
          "400": ["Pumpkin", "Maize"],
          "600": ["Tapioca", "Rice"],
        },
      },
      Sivaganga: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Cotton", "Rice"],
          "600": ["Rice", "Chili"],
        },
        summer: {
          "200": ["Tapioca", "Maize"],
          "400": ["Tomatoes", "Tobacco"],
          "600": ["Chili", "Groundnuts"],
        },
        monsoon: {
          "200": ["Rice", "Cotton"],
          "400": ["Groundnuts", "Sugarcane"],
          "600": ["Cotton", "Rice"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Cucumber", "Pumpkin"],
          "600": ["Rice", "Tapioca"],
        },
      },
      Tenkasi: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Rice", "Chili"],
          "600": ["Maize", "Tomatoes"],
        },
        summer: {
          "200": ["Tapioca", "Tobacco"],
          "400": ["Tomatoes", "Maize"],
          "600": ["Tapioca", "Chili"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Cotton"],
          "600": ["Groundnuts", "Chili"],
        },
        autumn: {
          "200": ["Beans", "Cucumber"],
          "400": ["Tapioca", "Pumpkin"],
          "600": ["Rice", "Maize"],
        },
      },
      Thanjavur: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Cotton"],
          "400": ["Rice", "Groundnuts"],
          "600": ["Chili", "Pulses"],
        },
        summer: {
          "200": ["Tapioca", "Maize"],
          "400": ["Tomatoes", "Cucumber"],
          "600": ["Chili", "Tobacco"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Cotton", "Rice"],
          "600": ["Pulses", "Groundnuts"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Tapioca", "Rice"],
          "600": ["Pumpkin", "Sugarcane"],
        },
      },
      Theni: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Rice", "Cotton"],
          "600": ["Tomatoes", "Chili"],
        },
        summer: {
          "200": ["Tapioca", "Tobacco"],
          "400": ["Maize", "Chili"],
          "600": ["Rice", "Cotton"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Groundnuts"],
          "600": ["Chili", "Tapioca"],
        },
        autumn: {
          "200": ["Maize", "Pumpkin"],
          "400": ["Cucumber", "Tapioca"],
          "600": ["Rice", "Groundnuts"],
        },
      },
      Thoothukudi: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Cotton", "Rice"],
          "600": ["Chili", "Tapioca"],
        },
        summer: {
          "200": ["Tapioca", "Tomatoes"],
          "400": ["Maize", "Tobacco"],
          "600": ["Groundnuts", "Chili"],
        },
        monsoon: {
          "200": ["Rice", "Cotton"],
          "400": ["Rice", "Sugarcane"],
          "600": ["Groundnuts", "Tapioca"],
        },
        autumn: {
          "200": ["Beans", "Cucumber"],
          "400": ["Pumpkin", "Maize"],
          "600": ["Sugarcane", "Rice"],
        },
      },
      Tiruchirappalli: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Rice", "Cotton"],
          "600": ["Chili", "Maize"],
        },
        summer: {
          "200": ["Tapioca", "Tomatoes"],
          "400": ["Tobacco", "Cucumber"],
          "600": ["Rice", "Tapioca"],
        },
        monsoon: {
          "200": ["Rice", "Cotton"],
          "400": ["Rice", "Sugarcane"],
          "600": ["Groundnuts", "Chili"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Tapioca", "Pumpkin"],
          "600": ["Rice", "Sugarcane"],
        },
      },
      Tirunelveli: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Cotton", "Rice"],
          "600": ["Maize", "Chili"],
        },
        summer: {
          "200": ["Tapioca", "Maize"],
          "400": ["Tomatoes", "Chili"],
          "600": ["Tobacco", "Groundnuts"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Groundnuts"],
          "600": ["Chili", "Sugarcane"],
        },
        autumn: {
          "200": ["Beans", "Pumpkin"],
          "400": ["Cucumber", "Rice"],
          "600": ["Tapioca", "Maize"],
        },
      },
      Tirupattur: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Rice", "Cotton"],
          "600": ["Chili", "Maize"],
        },
        summer: {
          "200": ["Tapioca", "Tomatoes"],
          "400": ["Tobacco", "Tapioca"],
          "600": ["Rice", "Sugarcane"],
        },
        monsoon: {
          "200": ["Rice", "Cotton"],
          "400": ["Rice", "Groundnuts"],
          "600": ["Chili", "Tapioca"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Pumpkin", "Rice"],
          "600": ["Sugarcane", "Tapioca"],
        },
      },
      Tiruppur: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Rice", "Cotton"],
          "600": ["Tomatoes", "Chili"],
        },
        summer: {
          "200": ["Tapioca", "Maize"],
          "400": ["Tobacco", "Tomatoes"],
          "600": ["Chili", "Rice"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Chili"],
          "600": ["Groundnuts", "Rice"],
        },
        autumn: {
          "200": ["Beans", "Pumpkin"],
          "400": ["Tapioca", "Cucumber"],
          "600": ["Sugarcane", "Rice"],
        },
      },
      Tiruvallur: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Rice", "Chili"],
          "600": ["Maize", "Cotton"],
        },
        summer: {
          "200": ["Tapioca", "Maize"],
          "400": ["Tomatoes", "Tobacco"],
          "600": ["Rice", "Cotton"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Groundnuts"],
          "600": ["Tapioca", "Chili"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Tapioca", "Cucumber"],
          "600": ["Rice", "Pumpkin"],
        },
      },
      Tiruvannamalai: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Cotton", "Rice"],
          "600": ["Chili", "Maize"],
        },
        summer: {
          "200": ["Tapioca", "Maize"],
          "400": ["Tomatoes", "Tobacco"],
          "600": ["Rice", "Sugarcane"],
        },
        monsoon: {
          "200": ["Rice", "Cotton"],
          "400": ["Rice", "Sugarcane"],
          "600": ["Chili", "Groundnuts"],
        },
        autumn: {
          "200": ["Maize", "Pumpkin"],
          "400": ["Tapioca", "Rice"],
          "600": ["Sugarcane", "Beans"],
        },
      },
      Tiruvarur: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Rice", "Cotton"],
          "600": ["Chili", "Maize"],
        },
        summer: {
          "200": ["Tapioca", "Tomatoes"],
          "400": ["Tobacco", "Rice"],
          "600": ["Tapioca", "Chili"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Cotton"],
          "600": ["Groundnuts", "Chili"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Tapioca", "Rice"],
          "600": ["Pumpkin", "Sugarcane"],
        },
      },
      Vellore: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Rice", "Cotton"],
          "600": ["Chili", "Tomatoes"],
        },
        summer: {
          "200": ["Tapioca", "Maize"],
          "400": ["Tobacco", "Rice"],
          "600": ["Groundnuts", "Tapioca"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Groundnuts"],
          "600": ["Chili", "Tapioca"],
        },
        autumn: {
          "200": ["Maize", "Beans"],
          "400": ["Pumpkin", "Tapioca"],
          "600": ["Sugarcane", "Rice"],
        },
      },
      Viluppuram: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Rice", "Cotton"],
          "600": ["Maize", "Chili"],
        },
        summer: {
          "200": ["Tapioca", "Maize"],
          "400": ["Tobacco", "Rice"],
          "600": ["Tapioca", "Chili"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Groundnuts"],
          "600": ["Cotton", "Chili"],
        },
        autumn: {
          "200": ["Beans", "Maize"],
          "400": ["Tapioca", "Pumpkin"],
          "600": ["Sugarcane", "Rice"],
        },
      },
      Virudhunagar: {
        winter: {
          "200": ["Paddy", "Sugarcane", "Groundnuts"],
          "400": ["Rice", "Cotton"],
          "600": ["Maize", "Chili"],
        },
        summer: {
          "200": ["Tapioca", "Maize"],
          "400": ["Tomatoes", "Chili"],
          "600": ["Groundnuts", "Tapioca"],
        },
        monsoon: {
          "200": ["Rice", "Sugarcane"],
          "400": ["Rice", "Cotton"],
          "600": ["Groundnuts", "Rice"],
        },
        autumn: {
          "200": ["Beans", "Cucumber"],
          "400": ["Tapioca", "Maize"],
          "600": ["Sugarcane", "Pumpkin"],
        },
      },
  };
  const tamilCropsData = {
    Ariyalur: {
      winter: {
        "200": ["பாசிப்பருப்பு", "சர்க்கரைக்கனி", "பொட்டுக் கதிரா", "குதிரைபூண்டு"],
        "400": ["பாசிப்பருப்பு", "பொட்டுக் கதிரா"],
        "600": ["குதிரைபூண்டு", "சர்க்கரைக்கனி"],
      },
      summer: {
        "200": ["இனிப்பு", "சக்கரா"],
        "400": ["ரப்பர்", "காப்பி"],
        "600": ["இனிப்பு"],
      },
      monsoon: {
        "200": ["பாசிப்பருப்பு", "சர்க்கரைக்கனி", "பொட்டுக் கதிரா"],
        "400": ["குதிரைபூண்டு", "பொட்டுக் கதிரா"],
        "600": ["சர்க்கரைக்கனி"],
      },
      autumn: {
        "200": ["கீரை", "சாகுபடி"],
        "400": ["சாகுபடி", "இனிப்பு"],
        "600": ["குதிரைபூண்டு", "பொட்டுக் கதிரா"],
      },
    },
  };

  
  

  const districtTranslations = {
    Ariyalur: 'அரியலூர்',
    Chengalpattu: 'செங்கல்பட்டு',
    Chennai: 'சென்னை',
    Coimbatore: 'கோயம்புத்தூர்',
    Cuddalore: 'கடலூர்',
    Dharmapuri: 'தர்மபுரி',
    Dindigul: 'திண்டுக்கல்',
    Erode: 'ஈரோடு',
    Kallakurichi: 'கள்ளக்குறிச்சி',
    Kancheepuram: 'காஞ்சிபுரம்',
    Karur: 'கரூர்',
    Krishnagiri: 'கிருஷ்ணகிரி',
    Madurai: 'மதுரை',
    Mayiladuthurai: 'மயிலாடுதுறை',
    Nagapattinam: 'நாகப்பட்டினம்',
    Namakkal: 'நாமக்கல்',
    Nilgiris: 'நீலகிரி',
    Perambalur: 'பெரம்பலூர்',
    Pudukkottai: 'புதுக்கோட்டை',
    Ramanathapuram: 'இராமநாதபுரம்',
    Ranipet: 'ராணிப்பேட்டை',
    Salem: 'சேலம்',
    Sivaganga: 'சிவகங்கை',
    Tenkasi: 'தேன்காசி',
    Thanjavur: 'தஞ்சாவூர்',
    Theni: 'தேனி',
    Thoothukudi: 'தூத்துக்குடி',
    Tiruchirappalli: 'திருச்சிராப்பள்ளி',
    Tirunelveli: 'திருநெல்வேலி',
    Tirupattur: 'திருப்பத்தூர்',
    Tiruppur: 'திருப்பூர்',
    Tiruvallur: 'திருவள்ளூர்',
    Tiruvannamalai: 'திருவண்ணாமலை',
    Tiruvarur: 'திருவாரூர்',
    Vellore: 'வேலூர்',
    Viluppuram: 'விழுப்புரம்',
    Virudhunagar: 'விருதுநகர்',
  };

  const seasonTranslations = {
    en: {
      winter: 'Winter',
      summer: 'Summer',
      monsoon: 'Monsoon',
      autumn: 'Autumn',
    },
    ta: {
      winter: 'சமயம்',
      summer: 'கோடை',
      monsoon: 'மழை பருவம்',
      autumn: 'பிறந்த பருவம்',
    },
  };

  const updateCrops = () => {
    return cropsData[region] && cropsData[region][season]
      ? cropsData[region][season][rainfall] || []
      : [];
  };

  const handleCropChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCrops((prevState) =>
      checked ? [...prevState, value] : prevState.filter((crop) => crop !== value)
    );
  };

  const getRecommendations = () => {
    const crops =
      selectedCrops.length > 0
        ? selectedCrops.join(', ')
        : 'Please select at least one crop for recommendations.';
    return {
      cropSuggestion: `Suggested crops for ${region} during ${season} season with ${temperature}°C temperature and ${rainfall} mm rainfall: ${crops}`,
      fertilizerSuggestion: `Recommended fertilizers: Urea, DAP`,
      timingSuggestion: `Best planting time: ${
        season === 'winter' ? 'November - December' : 'May - June'
      }`,
    };
  };

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    updateCrops();
  }, [region, season, temperature, rainfall]);

  const cropOptions = updateCrops().map((crop) => (
    <div key={crop}>
      <input
        type="checkbox"
        id={crop}
        value={crop}
        onChange={handleCropChange}
      />
      <label htmlFor={crop}>{crop}</label>
    </div>
  ));

  const recommendations = getRecommendations();

  return (
    <div className="container">
         <video 
                autoPlay 
                muted 
                loop 
                className="homepage-video" 
                ref={videoRef}
              >
                <source src={ved} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
      <div className="language-toggle">
        <button type="button" onClick={() => switchLanguage('en')}>
          English
        </button>
        <button type="button" onClick={() => switchLanguage('ta')}>
          தமிழ்
        </button>
      </div>

      <h2>
        {language === 'en'
          ? 'Smart Agriculture Recommendation'
          : 'ஸ்மார்ட் வேளாண்மை பரிந்துரைகள்'}
      </h2>
      <form id="recommendationForm">
        <label htmlFor="region">
          {language === 'en' ? 'Region:' : 'பகுதி:'}
        </label>
        <select
          id="region"
          required
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          {Object.keys(districtTranslations).map((district) => (
            <option key={district} value={district}>
              {language === 'en' ? district : districtTranslations[district]}
            </option>
          ))}
        </select>

        <label htmlFor="season">
          {language === 'en' ? 'Season:' : 'வானிலை பருவம்:'}
        </label>
        <select
          id="season"
          required
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        >
          <option value="winter">{seasonTranslations[language].winter}</option>
          <option value="summer">{seasonTranslations[language].summer}</option>
          <option value="monsoon">{seasonTranslations[language].monsoon}</option>
          <option value="autumn">{seasonTranslations[language].autumn}</option>
        </select>

        <label htmlFor="temperature">
          {language === 'en'
            ? 'Current Temperature (°C):'
            : 'தற்போதைய வெப்பநிலை (°C):'}
        </label>
        <select
          id="temperature"
          required
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        >
          <option value="15">15°C</option>
          <option value="20">20°C</option>
          <option value="25">25°C</option>
          <option value="30">30°C</option>
          <option value="35">35°C</option>
        </select>

        <label htmlFor="rainfall">
          {language === 'en' ? 'Rainfall (mm):' : 'மழை வீழ்ச்சி (மிமீ):'}
        </label>
        <select
          id="rainfall"
          required
          value={rainfall}
          onChange={(e) => setRainfall(e.target.value)}
        >
          <option value="200">200 mm</option>
          <option value="400">400 mm</option>
          <option value="600">600 mm</option>
          <option value="800">800 mm</option>
        </select>

        <label>
          {language === 'en' ? 'Preferred Crop:' : 'தாங்கள் விரும்பும் பயிர்:'}
        </label>
        <div className="crop-checkboxes">{cropOptions}</div>

        <button
          type="button"
          onClick={() => getRecommendations()}
        >
          {language === 'en' ? 'Get Recommendations' : 'பரிந்துரைகள் பெறுக'}
        </button>
      </form>

      <div id="output" style={{ marginTop: '20px' }}>
        <h3>{language === 'en' ? 'Recommendations:' : 'பரிந்துரைகள்:'}</h3>
        <p>{recommendations.cropSuggestion}</p>
        <p>{recommendations.fertilizerSuggestion}</p>
        <p>{recommendations.timingSuggestion}</p>
      </div>
    </div>
  );
};

export default SmartAgriculture;
