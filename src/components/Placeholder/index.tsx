import React from 'react';

import './style.scss';

const Placeholder: React.FC = () => {
    return (
        <div className="placeholder">
            <div className="placeholder__icon-box">
                <div className="placeholder__icon"></div>
            </div>
            <div className="placeholder__content-box">
                <div className="placeholder__name"></div>
                <div className="placeholder__description"></div>
                <div className="placeholder__related-info">
                    <div className="placeholder__item"></div>
                    <div className="placeholder__item"></div>
                    <div className="placeholder__item"></div>
                    <div className="placeholder__item"></div>
                </div>
            </div>
        </div>
    );
};

export default Placeholder;
