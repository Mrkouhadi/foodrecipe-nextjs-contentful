import React from 'react'

const loading = () => {
    return (
        <div className="loading">
            <div className="s-banner"></div>
            <div className="s-header"></div>
            <div className="s-content"></div>
            <div className="s-content"></div>
            <div className="s-content"></div>

            <style jsx>{`
            .loading{
                max-width:1200px; margin:20px auto;
            }

            .loading > div {
            background: #dbcc1a;
            border-radius: 4px;
            margin: 20px 0;
            }
            .s-banner {
            padding: 12% 0;
            }
            .s-header {
            padding: 15px 0;
            max-width: 500px;
            }
            .s-content {
            padding: 8px 0;
            max-width: 1000px;
            }
        `}</style>
        </div>
    )
}

export default loading
