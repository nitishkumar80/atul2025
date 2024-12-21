import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import "./TypingEffect.css";
import { Link } from "react-router-dom";

const TypingEffect = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [texts] = useTypewriter({
        words: ['Football', 'Cricket', 'Badminton', 'Swimming', 'Volleyball'],
        loop: {},
        typeSpeed: 300,
        delaySpeed: 80
    });

    const shortContent = `
        Imagine unlocking your athletic potential with the power of technology! At Ars Kreedashala, we're transforming how athletes train and perform. Our platform equips you with groundbreaking tools to analyze, improve, and excel in your game.
    `;

    const fullContent = `
        Imagine unlocking your athletic potential with the power of technology! At Ars Kreedashala, we're transforming how athletes train and perform. Our platform equips you with groundbreaking tools to analyze, improve, and excel in your game—every detail and moment counts in your journey to greatness.
        Coaches, ever wished for a way to pinpoint every move in the game? Our video analysis tools provide the clarity you need. Break down techniques, scrutinize gameplay, and offer your athletes laser-focused feedback to refine their skills. Step into a smarter, sharper era of training.
        Athletes, tracking your progress has never been this accurate! Our wearable devices monitor critical metrics like speed, heart rate, and oxygen levels in real time. These insights help you adapt your training, improve endurance, and push your limits to achieve new heights of performance.
        At Ars Kreedashala, we bridge the gap between strategy and execution. With data-driven solutions, coaches and players align seamlessly, fine-tuning strategies and techniques for peak performance. It's teamwork powered by technology, designed to deliver winning results.
        Ready to take your training to the next level? Partner with Ars Kreedashala and invest in tools that redefine excellence. Subscribe now, and let’s revolutionize your performance journey. Elevate your game, sharpen your skills, and become the athlete you were born to be. The future of sports starts here!
    `;

    return (
        <div className="text-white">
            <h2 className="md:text-6xl text-4xl font-bold" id="ars-text">
                Ars <span>Kreedashala</span>
            </h2>
            <h4 className="md:text-4xl text-3xl my-5 font-semibold bg-red-500 md:w-4/6 w-11/12 rounded mx-auto py-2.5 px-1">
                <Link to={"/comePlay"}>
                    Come & Play
                </Link>
            </h4>
            <div className="md:text-3xl text-2xl font-semibold">
                <span>{texts}</span>
                <Cursor cursorStyle="." cursorColor="white" />
            </div>
            <p className="my-3 text-justify">
                {isExpanded ? fullContent : shortContent}
            </p>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="btn bg-transparent border-2 border-[#68A9D3] text-white px-5 transition-all hover:scale-95 hover:bg-[#68A9D3] hover:border-[#68A9D3]"
            >
                {isExpanded ? "Read Less" : "Read More"}
            </button>
            
        </div>
    );
};

export default TypingEffect;
